"use client";


import MostrarDatosSalida from "@/components/mostrarProvider/MostrarDatosSalida";
import { DatosSalidasProvider } from "../context/salidasReducer";
import InputGasolina from "@/components/Formularios/inputGasolina/InputGasolina";

function Page() {
  return (
    <main className="container flex flex-col gap-10 items-center justify-center">
      <DatosSalidasProvider>
        <div className="App">
        <div className="w-52"> <InputGasolina></InputGasolina></div>
        </div>
      </DatosSalidasProvider>
    </main>
  );
}
export default Page;
