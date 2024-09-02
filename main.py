from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from app.database import SupplierDatabase
from app.image_processor import ImageProcessor, find_similar_products
from app.web_scraper import WebScraper
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

db = SupplierDatabase()
image_processor = ImageProcessor()
scraper = WebScraper()

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return jsonify({"message": "File uploaded successfully", "filepath": filepath}), 200

@app.route('/search', methods=['POST'])
def search_products():
    data = request.json
    image_path = data.get('image_path')
    if not image_path:
        return jsonify({"error": "No image path provided"}), 400

    try:
        product_features = image_processor.extract_features(image_path)
        suppliers = db.get_all_suppliers()
        all_products = []
        for supplier_name, supplier_url in suppliers:
            products = scraper.scrape_products(supplier_url)
            all_products.extend(products)
        similar_products = find_similar_products(image_processor, product_features, all_products)
        return jsonify({"similar_products": similar_products[:5]}), 200
    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(debug=True)