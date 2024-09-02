import logging
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

class WebScraper:
    def __init__(self):
        self.driver = None
        self.logger = logging.getLogger(__name__)

    def setup_driver(self):
        try:
            service = Service(ChromeDriverManager().install())
            options = webdriver.ChromeOptions()
            options.add_argument('--headless')
            options.add_argument('--no-sandbox')
            options.add_argument('--disable-dev-shm-usage')
            self.driver = webdriver.Chrome(service=service, options=options)
        except Exception as e:
            self.logger.error(f"Error setting up WebDriver: {str(e)}")
            raise

    def search_product(self, url, product_name):
        if not self.driver:
            self.setup_driver()

        try:
            self.driver.get(url)
            
            search_box = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.NAME, "q"))
            )
            search_box.send_keys(product_name)
            search_box.submit()

            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "product-item"))
            )

            products = self.driver.find_elements(By.CLASS_NAME, "product-item")
            results = []
            for product in products[:5]:
                try:
                    name = product.find_element(By.CLASS_NAME, "product-name").text
                    price = product.find_element(By.CLASS_NAME, "product-price").text
                    image_url = product.find_element(By.TAG_NAME, "img").get_attribute("src")
                    product_url = product.find_element(By.CLASS_NAME, "product-link").get_attribute("href")
                    
                    results.append({
                        "name": name,
                        "price": price,
                        "image_url": image_url,
                        "product_url": product_url
                    })
                except NoSuchElementException as e:
                    self.logger.warning(f"Error extracting product details: {str(e)}")

            return results
        except TimeoutException:
            self.logger.error(f"Timeout while searching product on {url}")
        except Exception as e:
            self.logger.error(f"Error searching product on {url}: {str(e)}")
        
        return []

    def close(self):
        if self.driver:
            self.driver.quit()