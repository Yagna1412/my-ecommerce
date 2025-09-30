import React from 'react';
import { AcData } from '../Data/AcData';
import { Link } from 'react-router-dom';

const Ac = () => {
  return (
    <div className='proSection'>
      {AcData.map((ac) => (
        <div key={ac.id} className='productCard'>
          <Link to={`/ac/${ac.id}`}>
            <img className='proImg' src={ac.image} alt={ac.model} />
          </Link>
          <h2>{ac.company} {ac.model}</h2>
          <p>{ac.description}</p>
          <p>Price: ₹{ac.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Ac;
