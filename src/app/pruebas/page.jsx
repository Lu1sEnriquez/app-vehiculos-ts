'use client'
import InputFirma from "@/components/Formularios/inputs/InputFirma";
import ButtonAzul from "@/components/basicos/ButtonAzul";

function PagePruebas() {

  const folio = '121221321';
  const fechaSalida = '10/20/2023'
  const nombre = 'luis Arturo Enriquez Velazquez';
  const placas = 'WDF-29-10';
  const horaSalida = "10:30"
  const kilometraje = '209999';
  
 const data= {
  folio,
  fechaSalida,
  nombre,
  placas,
   horaSalida,
   kilometraje,
   
  }
  return (
    <div className=" w-3/4 h-full border-2 border-red-500 flex justify-center items-center flex-col ">
      <InputFirma></InputFirma>
      <ButtonAzul text={"Generar PDF"} onClick={() => {} } />
    
    </div>
  );
}
export default PagePruebas;
