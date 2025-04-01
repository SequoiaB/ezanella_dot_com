import React, { useState } from 'react';
import '../styles/SecondaryButton.css';

const SecondaryButton = ({ text, onClick }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
    if (onClick) onClick();
  };

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <div className="secondary-button-wrapper">
      <button 
        className={`secondary-button ${isTouched ? 'touched' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => setIsTouched(false)}
        onClick={handleClick}
      >
        {text || 'Button'}
      </button>
    </div>
  );
}

export default SecondaryButton; 