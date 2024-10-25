from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
from selenium.common.exceptions import (
    NoSuchElementException,
    TimeoutException
)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import telebot
import threading
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

API_TOKEN = "7892293344:AAEzB-5fuL6OWE6ol0SB9RK0FObchR4z8yM"
bot = telebot.TeleBot(API_TOKEN)
chrome_driver_path = r"C:\Users\Simone\Desktop\Corso Selenium\chromedriver-win64\chromedriver-win64\chromedriver.exe"

def init_driver():
    service = Service(chrome_driver_path)
    options = Options()
    options.add_argument("--headless")  # Disabilita l'interfaccia grafica
    options.add_argument("--enable-unsafe-swiftshader")
    options.add_argument("--disable-webgl")
    driver = Chrome(service=service, options=options)
    return driver

def ricerca_su_amazon(nome_prodotto):
    driver = init_driver()
    driver.get("https://www.amazon.it")

    try:
        try:
            accetta_cookies = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.ID, "sp-cc-accept"))
            )
            accetta_cookies.click()
            logging.info("Cookies accettati")
        except (NoSuchElementException, TimeoutException):
            logging.warning("Pulsante per i cookies non trovato o non cliccabile.")

        barra_ricerca = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "twotabsearchtextbox"))
        )
        barra_ricerca.send_keys(nome_prodotto)
        barra_ricerca.send_keys(Keys.RETURN)
        logging.info(f"Ricerca per '{nome_prodotto}' avviata")

        WebDriverWait(driver, 20).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".s-main-slot .s-result-item"))
        )

        ricerca_prodotti = []
        prodotti = driver.find_elements(By.CSS_SELECTOR, ".s-main-slot .s-result-item")
        for prodotto in prodotti[:10]:
            try:
                descrizione = prodotto.find_element(By.CSS_SELECTOR, "h2 a span")
                titolo = descrizione.text if descrizione else "Titolo inesistente"

                prezzo_intero = prodotto.find_element(By.CSS_SELECTOR, ".a-price-whole").text if prodotto.find_elements(By.CSS_SELECTOR, ".a-price-whole") else None
                prezzo_decimale = prodotto.find_element(By.CSS_SELECTOR, ".a-price-fraction").text if prodotto.find_elements(By.CSS_SELECTOR, ".a-price-fraction") else "00"

                if prezzo_intero:
                    prezzo = f"{prezzo_intero},{prezzo_decimale} €"
                else:
                    prezzo = "Prezzo non disponibile"

                immagine = prodotto.find_element(By.CSS_SELECTOR, ".s-image")
                link_immagine = immagine.get_attribute("src") if immagine else "Immagine non disponibile"

                if titolo != "Titolo inesistente":
                    ricerca_prodotti.append({
                        "titolo": titolo,
                        "prezzo": prezzo,
                        "immagine": link_immagine
                    })
            except NoSuchElementException:
                logging.warning("Nessuna informazione sul prodotto trovata")
    except Exception as e:
        logging.error(f"Errore durante la ricerca del prodotto su Amazon: {e}")
    finally:
        driver.quit()
    return ricerca_prodotti

@bot.message_handler(commands=["start", "help"])
def messaggio_benvenuto(message):
    bot.reply_to(message, "Quale prodotto vuoi cercare su Amazon? ")

@bot.message_handler(func=lambda message: True)
def messaggio_ricerca(message):
    nome_prodotto = message.text
    bot.reply_to(message, f"Sto cercando '{nome_prodotto}'.\n attendi...")
    try:
        ricerca_prodotti = ricerca_su_amazon(nome_prodotto)
        if ricerca_prodotti:
            for prodotto in ricerca_prodotti:
                bot.send_photo(
                    message.chat.id,
                    prodotto["immagine"],
                    caption=f"Prodotto: {prodotto['titolo']}\nPrezzo: {prodotto['prezzo']}"
                )
        else:
            bot.send_message(message.chat.id, "Nessun prodotto trovato.")
    except Exception as e:
        logging.error(f"Errore durante la ricerca: {e}")
        bot.send_message(message.chat.id, "Si è verificato un errore durante la ricerca. Riprovare più tardi.")

def run_bot():
    bot.infinity_polling()

threading.Thread(target=run_bot).start()