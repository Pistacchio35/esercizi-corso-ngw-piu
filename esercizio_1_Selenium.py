from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException, TimeoutException 
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
import logging
import os
import time

# Configurazione del logger
logging.basicConfig(level=logging.INFO)

# Percorso del driver di Chrome specifico
chrome_driver_path = r"C:\Users\Simone\Desktop\Corso Selenium\chromedriver-win64\chromedriver-win64\chromedriver.exe"

# Inizializzo il servizio con il percorso specifico del driver di Chrome
service = Service(chrome_driver_path)

# Inizializzo le opzioni del browser Chrome
options = Options()

# DIRECTORY DI DESTINAZIONE DEI FILE
PATH = r"C:\Users\Simone\Desktop\Corso Selenium"

# Configurazione del download
options.add_experimental_option("prefs", {
    "download.default_directory": PATH,
    "directory_upgrade": True,
    "profile.default_content_settings.popups": 0,
    "plugins.always_open_pdf_externally": True,
    "safebrowsing.enabled": True  # Abilita il safe browsing per evitare problemi con i download
})

# Avvio del driver di Chrome
driver = Chrome(service=service, options=options)

driver.get("https://www.arpalazio.it/")

# Impostazione di un tempo di attesa per il caricamento della pagina
driver.implicitly_wait(10)

# Lista per salvare i nomi dei documenti scaricati
documenti_scaricati = []

def accetta_cookie(driver):
    try:
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button.acceptcookies"))
        ).click()
        logging.info("Cookie accettati")
        logging.info(f"URL corrente: {driver.current_url}")
    except NoSuchElementException:
        logging.error("Il bottone per accettare i cookie non è stato trovato.")
    except ElementClickInterceptedException:
        logging.error("Il click sul bottone dei cookie è stato bloccato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

def clicca_bottone_servizi(driver):
    try:
        # Trova il bottone "servizi"
        button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'button#Servizi'))
        )
        driver.execute_script("arguments[0].click();", button)
        logging.info("Bottone 'Servizi' cliccato con successo")
        logging.info(f"URL corrente: {driver.current_url}")
    except NoSuchElementException:
        logging.error("Il bottone 'Servizi' non è stato trovato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

def clicca_link_tariffario(driver):
    try:
        link = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'a[aria-label="Tariffario"]'))
        )
        # Clicca sul link
        link.click()
        logging.info("Il link 'Tariffario' è stato cliccato con successo.")
        logging.info(f"URL corrente: {driver.current_url}")
    except NoSuchElementException:
        logging.error("Il link 'Tariffario' non è stato trovato.")
    except ElementClickInterceptedException:
        logging.error("Il click sul link 'Tariffario' è stato bloccato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

def scarica_documenti_tariffario(driver):
    try:
        document_links = WebDriverWait(driver, 60).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "a[href$='.pdf']"))
        )
        
        # scarica tutti i documenti
        for link in document_links:
            doc_url = link.get_attribute('href')
            doc_name = os.path.basename(doc_url)
            documenti_scaricati.append(doc_name)
            logging.info(f"Documento trovato: {doc_name}, avvio del download.")
            driver.get(doc_url)
            time.sleep(5)

        logging.info(f"{len(document_links)} documenti trovati e scaricati.")
    
    except NoSuchElementException:
        logging.error("Nessun documento trovato nella pagina 'Tariffario'.")
    except Exception as e:
        logging.error(f"Errore durante il download dei documenti: {str(e)}")

accetta_cookie(driver)
clicca_bottone_servizi(driver)
clicca_link_tariffario(driver)
scarica_documenti_tariffario(driver)

logging.info(f"Documenti scaricati: {documenti_scaricati}")