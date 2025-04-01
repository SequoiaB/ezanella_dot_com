import React, { useState, useEffect, useRef } from 'react';
import billyImage from '../assets/images/billy.png';
import '../styles/BillyAnimation.css';
import SecondaryButton from './SecondaryButton';

/**
 * BillyAnimation component for the Bitcoin cat memecoin (BILLION•DOLLAR•CAT / $BDC)
 * Features an animation that shows Billy growing with a spin effect,
 * smoothly rotating from horizontal to vertical and back, then spinning while shrinking.
 */
const BillyAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationTimeoutRef = useRef(null);

  // Trigger the animation to appear
  const handleShowBilly = () => {
    setShowAnimation(true);
    setAnimationComplete(false);
    
    // Set a timeout to hide the animation after it completes one cycle
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    // Total animation time: 
    // 1.2s for fade-in + 6s for rotation + 1.2s for fade-out = 8.4s
    // Add a small buffer to ensure animations complete
    animationTimeoutRef.current = setTimeout(() => {
      setAnimationComplete(true);
      
      // After fade out completes, completely hide the element
      setTimeout(() => {
        setShowAnimation(false);
      }, 1300); // slightly longer than shrink-spin-out animation duration
    }, 7200); // 1.2s + 6s = 7.2s for both appear and rotate
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="billy-animation-container">
      {!showAnimation && (
        <div className="billy-button-container">
          <SecondaryButton text="Meet Billy" onClick={handleShowBilly} />
        </div>
      )}
      
      {showAnimation && (
        <div className={`billy-animation ${animationComplete ? 'fade-out' : 'fade-in'}`}>
          <img 
            src={billyImage} 
            alt="BILLION•DOLLAR•CAT ($BDC) - Bitcoin cat memecoin" 
            className="billy-image"
          />
        </div>
      )}
    </div>
  );
};

export default BillyAnimation; 