import Image from "next/image";
import InputDate from "./inputs/InputDate";

import InputPlacaVehiculo from "./inputs/InputPlacaVehiculo";
import InputName from "./inputs/InputName";
import InputHora from "./inputs/InputHora";
import InputKilometraje from "./inputs/InputKilometraje";
import InputCarroceria from "./inputCarroceria/InputCarroceria";
import ButtonFirmaModal from "../modal/ButtonActiveModal";
import InputFirma from "./inputs/InputFirma";

function FormularioSalida() {
  return (
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
          titleModal={"guardia"}
          textButton={"agregar Firma"}
        >
          <InputFirma />
        </ButtonFirmaModal>
      </div>
    </section>
  );
}
export default FormularioSalida;
