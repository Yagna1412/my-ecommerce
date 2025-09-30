import React from 'react';
import { FurnitureData } from '../Data/FurnitureData';
import { Link } from 'react-router-dom';

const Furnitures = () => {
  return (
    <div className='proSection'>
      {FurnitureData.map((furniture) => (
        <div key={furniture.id} className='productCard'>
          <Link to={`/furnitures/${furniture.id}`}>
            <img className='proImg' src={furniture.image} alt={furniture.model} />
          </Link>
          <h2>{furniture.brand} {furniture.model}</h2>
          <p>{furniture.description}</p>
          <p>Price: ₹{furniture.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Furnitures;
