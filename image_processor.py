import torch
from torchvision import models, transforms
from PIL import Image
import numpy as np
import requests

class ImageProcessor:
    def __init__(self):
        # Load pre-trained ResNet152 model
        self.model = models.resnet152(pretrained=True)
        self.model.eval()  # Set to evaluation mode
        # Remove the last fully-connected layer
        self.model = torch.nn.Sequential(*list(self.model.children())[:-1])
        # Define image transformations
        self.transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
        ])

    def extract_features(self, image_path):
        # Load and preprocess the image
        image = Image.open(image_path).convert('RGB')
        image = self.transform(image).unsqueeze(0)  # Add batch dimension
        # Extract features
        with torch.no_grad():
            features = self.model(image)
        # Reshape and convert to numpy array
        features = features.squeeze().numpy()
        return features

    def compute_similarity(self, features1, features2):
        # Compute cosine similarity between two feature vectors
        return np.dot(features1, features2) / (np.linalg.norm(features1) * np.linalg.norm(features2))

def find_similar_products(image_processor, product_features, scraped_products):
    similar_products = []
    for product in scraped_products:
        # Download and process the product image
        response = requests.get(product['image_url'])
        with open('temp_image.jpg', 'wb') as f:
            f.write(response.content)
        product_image_features = image_processor.extract_features('temp_image.jpg')
        similarity = image_processor.compute_similarity(product_features, product_image_features)
        if similarity > 0.7:  # Adjust this threshold as needed
            similar_products.append({
                **product,
                'similarity': similarity
            })
    return sorted(similar_products, key=lambda x: x['similarity'], reverse=True)