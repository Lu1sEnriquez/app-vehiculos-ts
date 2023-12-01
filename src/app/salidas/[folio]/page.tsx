// @ts-nocheck
import FormularioSalida from "@/components/complejos/FormularioSalida";
import React from "react";

interface Props {
  params: { folio?: string };
}

function FormSalidasPage({ params }: Props) {
  if (!params.folio) {
    return (
      <div>
        <h1>No se encontró el Folio</h1>
      </div>
    );
  }

  return (
    <div className="container bg-[#f2f2f2] text-black w-full h-full">
      <FormularioSalida folio={parseInt(params.folio)}></FormularioSalida>
    </div>
  );
}

export default FormSalidasPage;