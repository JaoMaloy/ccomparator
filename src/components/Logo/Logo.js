import React from 'react';
import './Logo.css';
import comparator from './ccomparator-logo.png';

const Logo = () => {
  return (
    <div>
      <img className="img" alt="logo" src={comparator} />
    </div>
  );
};

export default Logo;
