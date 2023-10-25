import InputDate from "../Formularios/inputs/InputDate";

import InputPlacaVehiculo from "../Formularios/inputs/InputPlacaVehiculo";
import InputName from "../Formularios/inputs/InputName";
import InputHora from "../Formularios/inputs/InputHora";
import InputKilometraje from "../Formularios/inputs/InputKilometraje";
import InputCarroceria from "../Formularios/inputCarroceria/InputCarroceria";
import ButtonFirmaModal from "../modal/ButtonActiveModal";
import InputFirma from "../Formularios/inputs/InputFirma";
import InputGasolina from "../Formularios/inputGasolina/InputGasolina";
import { DatosSalidasProvider } from "@/reducer/salidasReducer";
import MostrarDatosSalida from "../mostrarProvider/MostrarDatosSalida";
import InputDestino from "../Formularios/inputs/inputDestino";
import InputAccesorios from "../Formularios/inputs/InputAccesorios";
import InputObservaciones from "../Formularios/inputs/InputObservaciones";

function FormularioSalida() {


  return (
    <DatosSalidasProvider>
      <section
        className=" flex flex-wrap sm:justify-around 
    py-5 md:px-5 
    gap-y-5 mr-5 md:gap-0 w-full mb-10"
      >
        <div
          className="  columna2 lg:w-1/3 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full h-full mx-5 
      flex flex-col gap-y-5"
        >
          <InputDate />
          <InputHora />
          <InputDestino></InputDestino>
          <InputPlacaVehiculo />
          <InputCarroceria></InputCarroceria>
          <InputAccesorios></InputAccesorios>
        </div>

        <div
          className="columna2 lg:w-1/3 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-5"
        >
          
          <InputKilometraje />
          <InputGasolina></InputGasolina>

          <InputName text={"Nombre Solicitante:"} />
          <ButtonFirmaModal
            type={"Solicitante"}
            
          >
            <InputFirma></InputFirma>
          </ButtonFirmaModal>
          <InputName text={"Nombre Vigilante:"} />

          <ButtonFirmaModal
            type={'Vigilante'}
          >
            <InputFirma ></InputFirma>
          </ButtonFirmaModal>
          
         
         <InputObservaciones></InputObservaciones>
        </div>
      </section>
    <MostrarDatosSalida></MostrarDatosSalida>
    </DatosSalidasProvider>
    
  );
}
export default FormularioSalida;