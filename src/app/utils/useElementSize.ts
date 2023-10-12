'use client'

import { useState, useEffect, MutableRefObject } from 'react';

interface ElementSizeType {
  width: number ;
  height: number ;
  element: MutableRefObject<HTMLElement | null>;
}

function useElementSize(targetRef: MutableRefObject<HTMLElement | null>): ElementSizeType {
  const initialElementSize: ElementSizeType = {
    width: 0,
    height: 0,
    element: targetRef
  };

  const [elementSize, setElementSize] = useState<ElementSizeType | null>(initialElementSize);

  useEffect(() => {
    const handleResize = () => {
      if (targetRef.current) {
        const { width, height } = targetRef.current.getBoundingClientRect();
        setElementSize({ width, height, element: targetRef });
      }
    };

    handleResize(); // Obtén el tamaño inicial

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [targetRef]);
  if (elementSize) {

    return elementSize;

  }
  return initialElementSize
}

export default useElementSize;