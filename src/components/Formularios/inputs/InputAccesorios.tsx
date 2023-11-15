"use client";
import React, { useEffect, useState } from "react";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { FcCheckmark } from "react-icons/fc";
import LabelFormulario from "./LabelFormulario";

interface AccesoriosState {
  gato: boolean;
  extra: boolean;
  cables: boolean;
  luzMuerta: boolean;
  extintor: boolean;
  documentos: boolean;
}

export function InputAccesorios() {
  const [accesorios, setAccesorios] = useState<AccesoriosState>({
    gato: false,
    extra: false,
    cables: false,
    luzMuerta: false,
    extintor: false,
    documentos: false,
  });

  const handleCheckboxChange = (accesorio: keyof AccesoriosState) => {
    const newAccesorios = {
      ...accesorios,
      [accesorio]: !accesorios[accesorio],
    };
    setAccesorios(newAccesorios);
    dispatch({ type: "SET_ACCESORIOS", payload: newAccesorios });
  };

  const { dispatch } = useDatosSalidaLlegadaReducer();

  const classNameLabel = "flex flex-row  ";
  const claseCheck =
    "w-8 h-8 border-black border-2 rounded flex items-center justify-center";
  return (
    <section className="border-2  flex flex-col font-bold ">
      <LabelFormulario>{"Seleccione los Accesorios: "}</LabelFormulario>
      <div className="container-cheks flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("gato");
            }}
          >
            {accesorios.gato && <FcCheckmark size={50} />}
          </div>
          <h1>Gato</h1>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("cables");
            }}
          >
            {accesorios.cables && <FcCheckmark size={50} />}
          </div>
          <h1>Cables</h1>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("extra");
            }}
          >
            {accesorios.extra && <FcCheckmark size={50} />}
          </div>
          <h1>Extra</h1>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("documentos");
            }}
          >
            {accesorios.documentos && <FcCheckmark size={50} />}
          </div>
          <h1>Documentos</h1>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("extintor");
            }}
          >
            {accesorios.extintor && <FcCheckmark size={50} />}
          </div>
          <h1>Extintor</h1>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={claseCheck}
            onClick={() => {
              handleCheckboxChange("luzMuerta");
            }}
          >
            {accesorios.luzMuerta && <FcCheckmark size={50} />}
          </div>
          <h1>Luz Muerta</h1>
        </div>
      </div>
    </section>
  );
}

export default InputAccesorios;
