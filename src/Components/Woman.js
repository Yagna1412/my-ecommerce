import React from 'react';
import { WomanData } from '../Data/WomanData';
import { Link } from 'react-router-dom';

const Woman = () => {
  return (
    <div className='proSection'>
      {WomanData.map((woman) => (
        <div key={woman.id} className='productCard'>
          <Link to={`/woman/${woman.id}`}>
            <img className='proImg' src={woman.image} alt={woman.model} />
          </Link>
          <h2>{woman.brand} {woman.model}</h2>
          <p>{woman.description}</p>
          <p>Price: ₹{woman.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Woman;
