"use client";
import Image from "next/image";

import placaImg from "@/assets/icons/PlacaVehiculo.svg";
import { useEffect, useState } from "react";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";

function InputPlacaVehiculo() {
  const [placa, setPlaca] = useState("");
const {state,dispatch} = useDatosSalidaReducer()
  const handleInputPlaca = (event) => {
    const valor = event.target.value;
    // const nuevoValor = formatearMatriculaMexicana(valor);
    setPlaca(valor);
  };
  
  useEffect(()=>{
    dispatch( {type: 'SET_PLACA', payload : placa})
  },[placa])

  function formatearMatriculaMexicana(inputValue) {
    // Eliminar cualquier carácter que no sea una letra o un dígito
    const caracteresValidos = inputValue
      .replace(/[^A-Z0-9]/gi, "")
      .toUpperCase();

    // Verificar la longitud y formatear según corresponda
    if (caracteresValidos.length >= 3) {
      const letras = caracteresValidos.substring(0, 3);
      const numeros = caracteresValidos.substring(3);

      if (numeros.length === 3) {
        return `${letras}-${numeros}`;
      } else if (numeros.length === 4) {
        const numerosParte1 = numeros.substring(0, 2);
        const numerosParte2 = numeros.substring(2);
        return `${letras}-${numerosParte1}-${numerosParte2}`;
      }
    }

    return caracteresValidos;
  }

  return (
    <div className="relative">
      <div className="flex flex-row justify-start  ">
        <div className="w-48 ">
          <label className="block text-gray-500 font-semibold mb-2">
            Placa Vehiculo:
          </label>
          <input
            className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase
                shadow-md shadow-gray-300
                "
            type="text"
            maxLength={9}
            id=""
            onChange={handleInputPlaca}
            value={placa}
          />
        </div>

        <div
          className="relative top-5 sm:top-10  md:top-10 lg:top-6  
        ml-3 lg:ml-8
        z-0 
        "
        >
          {placa && (
            <>
              <Image
                className="w-28 sm:w-28 md:w-22 lg:w-36 "
                src={placaImg}
                alt="placa"
              ></Image>
              <div
                className=" absolute 
              text-sm sm:text-sm md:text-sm lg:text-xl
              top-6 left-4 sm:top-4 lg:top-7  sm:left-3 lg:left-4   
              uppercase 
              flex text-center font-sans 
              font-bold lg:"
              >
                {placa}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default InputPlacaVehiculo;
