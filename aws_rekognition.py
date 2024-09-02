import boto3
import os
import requests
from io import BytesIO

class AWSRekognition:
    def __init__(self):
        self.rekognition = boto3.client('rekognition')
        self.s3 = boto3.client('s3')
        self.bucket_name = os.environ.get('S3_BUCKET_NAME')

    def upload_image(self, image_data, image_name):
        try:
            self.s3.put_object(Bucket=self.bucket_name, Key=image_name, Body=image_data)
            return image_name
        except Exception as e:
            print(f"Error uploading image to S3: {str(e)}")
            return None

    def compare_images(self, source_image, target_image):
        try:
            response = self.rekognition.compare_faces(
                SourceImage={'S3Object': {'Bucket': self.bucket_name, 'Name': source_image}},
                TargetImage={'S3Object': {'Bucket': self.bucket_name, 'Name': target_image}},
                SimilarityThreshold=70
            )
            if response['FaceMatches']:
                return response['FaceMatches'][0]['Similarity']
            return 0
        except Exception as e:
            print(f"Error comparing images: {str(e)}")
            return 0

def find_similar_products(rekognition, source_image, products):
    similar_products = []
    for product in products:
        try:
            # Download the product image
            response = requests.get(product[2])  # Assuming index 2 is the image_url
            if response.status_code == 200:
                image_data = BytesIO(response.content)
                product_image_name = f"product_{product[0]}.jpg"  # Assuming index 0 is product_id
                
                # Upload the product image to S3
                uploaded_image = rekognition.upload_image(image_data.getvalue(), product_image_name)
                
                if uploaded_image:
                    # Compare the uploaded product image with the source image
                    similarity = rekognition.compare_images(source_image, uploaded_image)
                    
                    if similarity > 70:  # 70% similarity threshold
                        similar_products.append({
                            'product_id': product[0],
                            'title': product[1],
                            'image_url': product[2],
                            'price': product[3],
                            'similarity': similarity
                        })
        except Exception as e:
            print(f"Error processing product {product[0]}: {str(e)}")
            continue

    return sorted(similar_products, key=lambda x: x['similarity'], reverse=True)