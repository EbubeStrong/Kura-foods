import React from 'react';

const MobileContainer = ({ children, className = "" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`mobile-container shadow-lg ${className}`}>
        <div className="mobile-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;