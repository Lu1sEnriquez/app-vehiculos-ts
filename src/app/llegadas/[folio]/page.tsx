// @ts-nocheck
import FormularioLlegada from "@/components/complejos/FormularioLlegada";
import React from "react";

interface Props {
  params: { folio?: string };
}

function FormLlegadasPage({  }: Props) {
  const params = useParams();
  if (!params.folio) {
    return (
      <div>
        <h1>No se encontró el Folio</h1>
      </div>
    );
  }

  return (
    <div className="container bg-[#f2f2f2] text-black w-full h-full">
      <FormularioLlegada folio={parseInt(params.folio)}></FormularioLlegada>
    </div>
  );
}

export default FormLlegadasPage;