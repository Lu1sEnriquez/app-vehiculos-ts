import InputDate from "../Formularios/inputs/InputDate";
import InputPlacaVehiculo from "../Formularios/inputs/InputPlacaVehiculo";
import InputName from "../Formularios/inputs/InputName";
import InputHora from "../Formularios/inputs/InputHora";
import InputKilometraje from "../Formularios/inputs/InputKilometraje";
import InputCarroceria from "../Formularios/inputCarroceria/InputCarroceria";
import ButtonFirmaModal from "../modal/ButtonActiveModal";
import InputFirma from "../Formularios/inputs/InputFirma";
import InputGasolina from "../Formularios/inputGasolina/InputGasolina";
import { DatosSalidaLlegadaProvider } from "../../reducer/salidaLlegadaReducer";
import InputDestino from "../Formularios/inputs/inputDestino";
import InputAccesorios from "../Formularios/inputs/InputAccesorios";
import InputObservaciones from "../Formularios/inputs/InputObservaciones";
import InputChofer from "../Formularios/inputs/InputChofer";
import InputLicencia from "../Formularios/inputs/InputLicencia";
import ButtonPostSalidaLlegada from "../buttonServices/ButtonPostSalidaLlegada";
import InputDepartamento from "../Formularios/inputs/InputDepartamento";
import InputFolio from "../Formularios/inputs/InputFolio";
import IsSalida from "../Formularios/inputs/IsSalida";
import React from 'react'
import MostrarFolio from "../Formularios/inputs/MostrarFolio";

interface Props{
  children?:React.ReactNode
  folio?: number
}
function FormularioSalida({folio}:Props) {




  return (
    <DatosSalidaLlegadaProvider>
      <IsSalida isSalida={true} estado="Circulacion"/>


      <section
        className=" flex flex-wrap sm:justify-around  animate-fade
    py-5 md:px-5 
    gap-y-5 mr-5 md:gap-0 w-full mb-10"
      >
        <div
          className="  columna2 lg:w-1/3 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full h-full mx-5 
      flex flex-col gap-y-5"
        >
          {!folio &&<InputFolio/>
          }
          {folio && <MostrarFolio folio={folio}/>}
          <InputDate />
          <InputHora />
          <InputDestino />
          <InputPlacaVehiculo />
          <InputLicencia/>
          <InputAccesorios />
          <InputCarroceria />
        </div>

        <div
          className="columna2 lg:w-1/3 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-4"
        >
          
          <InputGasolina></InputGasolina>
          <InputKilometraje />
          <InputDepartamento/>
          <InputName text={"Nombre Solicitante:"} />

          <ButtonFirmaModal type={"Solicitante"}>
            <InputFirma />
          </ButtonFirmaModal>
          <InputName text={"Nombre Vigilante:"} />

          <ButtonFirmaModal type={"Vigilante"}>
            <InputFirma />
          </ButtonFirmaModal>
          <InputChofer />
          
          <InputObservaciones />
          <ButtonPostSalidaLlegada></ButtonPostSalidaLlegada>
        </div>
      </section>
    </DatosSalidaLlegadaProvider>
  );
}
export default FormularioSalida;


