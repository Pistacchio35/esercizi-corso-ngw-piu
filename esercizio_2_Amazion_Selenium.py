from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
from selenium.common.exceptions import (
    NoSuchElementException,
    ElementClickInterceptedException,
    TimeoutException,
)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging
import time

# Configurazione del logger
logging.basicConfig(level=logging.INFO)

# Percorso del driver di Chrome specifico
chrome_driver_path = r"C:\Users\Simone\Desktop\Corso Selenium\chromedriver-win64\chromedriver-win64\chromedriver.exe"

# Inizializzo il servizio con il percorso specifico del driver di Chrome
service = Service(chrome_driver_path)

# Inizializzo le opzioni del browser Chrome
options = Options()

# Avvio del driver di Chrome
driver = Chrome(service=service, options=options)

try:
    driver.get("https://www.amazon.it")

    try:
        accept_cookies_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "sp-cc-accept"))
        )
        accept_cookies_button.click()
        logging.info("Cookies accettati")
    except (NoSuchElementException, TimeoutException):
        logging.warning("Pulsante per i cookies non trovato o non cliccabile.")

    barra_ricerca = driver.find_element(By.ID, "twotabsearchtextbox")
    testo_ricerca = "laptop"
    barra_ricerca.send_keys(testo_ricerca)
    barra_ricerca.send_keys(Keys.RETURN)
    logging.info(f"Ricerca per '{testo_ricerca}' avviata")

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".s-main-slot .s-result-item"))
    )

    prodotti = driver.find_elements(By.CSS_SELECTOR, ".s-main-slot .s-result-item")
    for prodotto in prodotti:
        try:
            descrizione = prodotto.find_element(By.CSS_SELECTOR, "h2 a span").text
            prezzo_intero = prodotto.find_element(By.CSS_SELECTOR, ".a-prezzo-whole").text
            prezzo_decimale = prodotto.find_element(
                By.CSS_SELECTOR, ".a-prezzo-fraction"
            ).text
            prezzo = f"{prezzo_intero},{prezzo_decimale} €"
            logging.info(f"Prodotto: {descrizione} | Prezzo: {prezzo}")
        except NoSuchElementException:
            logging.warning("Informazioni sul prodotto non trovate")

finally:
    driver.quit()