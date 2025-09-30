import React from 'react';
import { MenswearData } from '../Data/MenswearData';
import { Link } from 'react-router-dom';

const Mens = () => {
  return (
    <div className='proSection'>
      {MenswearData.map((men) => (
        <div key={men.id} className='productCard'>
          <Link to={`/menswear/${men.id}`}>
            <img className='proImg' src={men.image} alt={men.model} />
          </Link>
          <h2>{men.brand} {men.model}</h2>
          <p>{men.description}</p>
          <p>Price: ₹{men.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Mens;

