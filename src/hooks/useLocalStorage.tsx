'use client'
import {useEffect} from 'react'

const useLocalStorage = () => {

  // Función para obtener datos del localStorage
  const getLocalStorage = (key: string) => {
    try {
      const item = localStorage.getItem(key);

      if (item && item !== undefined) return JSON.parse(item)

    } catch (error) {
      if (error instanceof Error) console.error(`Error al obtener datos del localStorage: ${error.message}`);
      return null;
    }
  };

  // Función para establecer datos en el localStorage
  const setLocalStorage = (key: string, value: any) => {
    try {
      // Convierte 'value' a cadena JSON antes de almacenarlo
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      if (error instanceof Error) console.error(`Error al obtener datos del localStorage: ${error.message}`);

    }
  };

  // Función para eliminar datos del localStorage
  const deleteLocalStorage = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      if (error instanceof Error) console.error(`Error al obtener datos del localStorage: ${error.message}`);
    }
  };

  return { getLocalStorage, setLocalStorage, deleteLocalStorage };
};

export default useLocalStorage;