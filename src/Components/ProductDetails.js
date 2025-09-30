import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { AcData } from '../Data/AcData';
import { BookData } from '../Data/BookData';
import { ComputerData } from '../Data/ComputerData';
import { FurnitureData } from '../Data/FurnitureData';
import { MenswearData } from '../Data/MenswearData';
import { WomanData } from '../Data/WomanData';
const ProductDetail = () => {
  const { category, id } = useParams();
const allProducts = {
    ac: AcData,
    book: BookData,
    computer: ComputerData,
    furniture: FurnitureData,
    menswear: MenswearData,
    'woman wear': WomanData,
  };

  const productList = allProducts[category];
  const product = productList ? productList.find((item) => String(item.id) === id) : null;

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="productDetail">
      <img src={product.image} alt={product.model || product.title} />
      <h2>{product.model || product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <Link to="/shop">
        <button>Back to Shop</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
