import React, { useEffect } from 'react';

import Alpaca from "../../images/alpaca.jpg";

import './alpaca.css';

const AlpacaFund = () => {

  useEffect(() => {
    document.body.style.background = `url(${Alpaca}) no-repeat center center fixed`;
    document.body.style.backdropFilter = 'blur(0)';
  }, [])
  
  return (
      <div className="alpaca">
          <div className="alpaca-text">SLACK'S ALPACA FUND</div>
      </div>
  );
};

export default AlpacaFund;