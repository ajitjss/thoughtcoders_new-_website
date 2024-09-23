// components/CountUpSection.js
import React, { useState, useEffect } from 'react';

const CountUpSection = ({ targetNumber, imageSrc, text, borderRadius,countInitialState=80 }) => {
  const [count, setCount] = useState(countInitialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 5);
    return () => clearInterval(interval);
  }, [targetNumber]);

  // Here I have determine suffix and superscript based on the targetNumber
  const renderSuffix = () => {
    if (targetNumber === 90) {
      return <><sup>%</sup></>;
    } else if (targetNumber === 211 || 1357 || 67) {
      return <><sup>+</sup></>;
    }
    return null;
  };

  return (
    <div className="col-md-6 d-flex">
      <img 
        src={imageSrc} 
        alt="" 
        style={{
          height: '80px', 
          width: '80px', 
          ...borderRadius,
        }}
      />
      <div className="ms-3" style={{ marginTop: '30px' }}>
        <h2>{count}{renderSuffix()}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CountUpSection;
