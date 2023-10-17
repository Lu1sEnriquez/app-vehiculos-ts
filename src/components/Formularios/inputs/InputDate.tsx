"use client";
import { useEffect, useState } from "react";
import LabelFormulario from "../LabelFormulario";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";

const InputDate = () => {
 // Obtiene la fecha actual en el formato deseado (por ejemplo, "YYYY-MM-DD")
  const currentDate = new Date().toLocaleDateString('en-CA'); // Puedes ajustar el formato según tus necesidades

  const [date, setDate] = useState<string>(currentDate);
  const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement> ) => {
    setDate(evt.target.value);
  };

  const { state, dispatch } = useDatosSalidaReducer();
  useEffect(() => {
   setDate((): string=>{
    try {
      let dateLS =localStorage.getItem("dateSalida") 
      if (dateLS !== null) {
        dateLS =JSON.parse(dateLS);
        if(dateLS != null){
          return dateLS
        }
      }
      
    } catch (error) {
      console.error("Error al cargar fecha desde localStorage:", error);
    }    
    return currentDate;
   })
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_FECHA_SALIDA", payload: date });
   if(date != ""){
    localStorage.setItem("dateSalida", JSON.stringify(date));
   }
  }, [date,dispatch]);

  
  
  


  return (
    <>
      <div className="w-full">
        <LabelFormulario>Fecha de Salida:</LabelFormulario>
        <input
          id="dia"
          type="date"
          className="border bg-white border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          shadow-md shadow-gray-300
          "
          onChange={handleDateChange}
          value={date}
        />
      </div>
    </>
  );
};

export default InputDate;
