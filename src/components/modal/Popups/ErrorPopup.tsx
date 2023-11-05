'use client'
import React, { useState, useEffect } from 'react';

const ErrorPopup = ({ errorText }:{ errorText:string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (errorText) {
      console.log('popup');
      
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Oculta la ventana emergente después de 3 segundos
    }
  }, [errorText]);

  return (
    <div className={`fixed z-50 w-full max-w-sm  top-5 right-3  p-4 ${isVisible ? 'block' : 'hidden'}`}>
      <div className="bg-red-500 text-white p-2 rounded-md shadow-lg">
        {errorText}
      </div>
    </div>
  );
};

export default ErrorPopup;