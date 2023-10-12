import Image from "next/image";
import InputDate from "../Formularios/inputs/InputDate";

import InputPlacaVehiculo from "../Formularios/inputs/InputPlacaVehiculo";
import InputName from "../Formularios/inputs/InputName";
import InputHora from "../Formularios/inputs/InputHora";
import InputKilometraje from "../Formularios/inputs/InputKilometraje";
import InputCarroceria from "../Formularios/inputCarroceria/InputCarroceria";
import ButtonFirmaModal from "../modal/ButtonActiveModal";
import InputFirma from "../Formularios/inputs/InputFirma";
import InputGasolina from "../Formularios/inputGasolina/InputGasolina";
import { DatosSalidasProvider } from "@/app/context/salidasReducer";
import MostrarDatosSalida from "../mostrarProvider/MostrarDatosSalida";
import InputDestino from "../Formularios/inputs/inputDestino";

function FormularioSalida() {
  return (
    <DatosSalidasProvider>
      <section
        className=" flex flex-wrap sm:justify-around 
    py-5 md:px-5 
    gap-y-5 mr-5 md:gap-0 w-full"
      >
        <div
          className="  columna2 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-5"
        >
          <InputDate />
          <InputName text={"Nombre Solicitante:"} />
          <ButtonFirmaModal
            id={"solicitante"}
            textButton={"agregar Firma Usuario"}
          >
            <InputFirma></InputFirma>
          </ButtonFirmaModal>
          <InputPlacaVehiculo />
          <InputCarroceria></InputCarroceria>
        </div>

        <div
          className="columna2 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-5"
        >
          <InputHora />
          <InputKilometraje />
          <InputName text={"Nombre Vigilante:"} />

          <ButtonFirmaModal
            textButton={"agregar Firma Vigilante"}
            id={'vigilante'}
          >
            <InputFirma ></InputFirma>
          </ButtonFirmaModal>
          
          <InputGasolina></InputGasolina>
         <InputDestino></InputDestino>
        </div>
      </section>
      <MostrarDatosSalida></MostrarDatosSalida>
    </DatosSalidasProvider>
  );
}
export default FormularioSalida;
