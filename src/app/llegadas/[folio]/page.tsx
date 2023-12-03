'use client'
import FormularioLlegada from "@/components/complejos/FormularioLlegada";
import React from "react";

import { useParams } from "next/navigation";
interface Props {}

function FormLlegadasPage({}: Props) {
  const { folio } = useParams();
  if (!folio) {
    return (
      <div>
        <h1>No se encontró el Folio</h1>
      </div>
    );
  }

  return (
    <>
      {typeof folio == "string" && (
        <div className="container bg-[#f2f2f2] text-black w-full h-full">
          <FormularioLlegada
            folio={parseInt(folio)}
          ></FormularioLlegada>
        </div>
      )}
    </>
  );
}

export default FormLlegadasPage;
