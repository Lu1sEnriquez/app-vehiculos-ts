import ButtonLobby from "./buttonLobby";

/* importaciones de img que necesitamos */
import check from "@/assets/icons/icons8-check-50.png";
import chevron from "@/assets/icons/icons8-chevron-right-64.png";
import Link from "next/link";

function ButtonsLobby() {
  return (
    <div className=" w-3/5 flex  mt-20 h-72 flex-col  gap-y-8  justify-center items-center  ">

      <Link className=" w-60 h-20" href={`/apartados`}>
        <ButtonLobby icon={check}>{"APARTADOS"}</ButtonLobby>
      </Link>

      <Link className="w-60 h-20" href={`/salidas`}>
        <ButtonLobby icon={chevron}>{"REGISTRAR SALIDA"}</ButtonLobby>
      </Link>

      <Link className="w-60 h-20" href={`/llegadas`}>
        <ButtonLobby icon={chevron}>{"REGISTRAR LLEGADA"}</ButtonLobby>
      </Link>
    </div>
  );
}
export default ButtonsLobby;
