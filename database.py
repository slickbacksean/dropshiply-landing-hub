import os
import logging
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()

class Supplier(Base):
    __tablename__ = 'suppliers'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    url = Column(String, nullable=False)
    products = relationship("Product", back_populates="supplier")

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    product_id = Column(String, nullable=False)
    title = Column(String, nullable=False)
    image_url = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'))
    supplier = relationship("Supplier", back_populates="products")

class SupplierDatabase:
    def __init__(self):
        db_url = os.environ.get('DATABASE_URL', 'postgresql://slickbacksean:Otto1323006@dropshiply.cz4ca2kca1zj.us-east-2.rds.amazonaws.com')
        self.engine = create_engine(db_url)
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)
        self.logger = logging.getLogger(__name__)

    def add_supplier(self, name, url):
        session = self.Session()
        try:
            new_supplier = Supplier(name=name, url=url)
            session.add(new_supplier)
            session.commit()
            self.logger.info(f"Added new supplier: {name}")
        except Exception as e:
            self.logger.error(f"Error adding supplier: {str(e)}")
            session.rollback()
        finally:
            session.close()

    def get_all_suppliers(self):
        session = self.Session()
        try:
            suppliers = session.query(Supplier).all()
            return [(supplier.name, supplier.url) for supplier in suppliers]
        except Exception as e:
            self.logger.error(f"Error retrieving suppliers: {str(e)}")
            return []
        finally:
            session.close()

    def add_product(self, supplier_id, product_id, title, image_url, price):
        session = self.Session()
        try:
            new_product = Product(supplier_id=supplier_id, product_id=product_id, title=title, image_url=image_url, price=price)
            session.add(new_product)
            session.commit()
            self.logger.info(f"Added new product: {title}")
        except Exception as e:
            self.logger.error(f"Error adding product: {str(e)}")
            session.rollback()
        finally:
            session.close()

    def get_all_products(self):
        session = self.Session()
        try:
            products = session.query(Product).all()
            return [(product.product_id, product.title, product.image_url, product.price) for product in products]
        except Exception as e:
            self.logger.error(f"Error retrieving products: {str(e)}")
            return []
        finally:
            session.close()

    def close(self):
        self.engine.dispose()