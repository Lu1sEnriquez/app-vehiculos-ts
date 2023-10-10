'use client'

import { useState, useEffect } from 'react';

function useElementSize(targetRef) {
  const [elementSize, setElementSize] = useState({ width: 0, height: 0, current:targetRef.current });

  useEffect(() => {
    const handleResize = () => {
      if (targetRef.current) {
        const { width, height } = targetRef.current.getBoundingClientRect();
        setElementSize({ width, height });
      }
    };

    handleResize(); // Obtén el tamaño inicial

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [targetRef]);

  return elementSize;
}

export default useElementSize;

