import React from 'react';
import { ComputerData } from '../Data/ComputerData';
import { Link } from 'react-router-dom';

const Computers = () => {
  return (
    <div className='proSection'>
      {ComputerData.map((computer) => (
        <div key={computer.id} className='productCard'>
          <Link to={`/computers/${computer.id}`}>
            <img className='proImg' src={computer.image} alt={computer.model} />
          </Link>
          <h2>{computer.brand} {computer.model}</h2>
          <p>{computer.description}</p>
          <p>Price: ₹{computer.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Computers;
