import ButtonLobby from "./buttonLobby";

/* importaciones de img que necesitamos */
import check from "@/assets/icons/icons8-check-50.png";
import { FaChevronLeft } from "react-icons/fa";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function ButtonsLobby() {
  return (
    <div className=" w-3/5 flex  mt-20 h-72 flex-col  gap-y-8  justify-center items-center  ">
      <Link className=" w-60 h-20" href={`/apartados`}>
        <ButtonLobby icon={check}>{"APARTADOS"}</ButtonLobby>
      </Link>

      <Link className="w-60 h-20" href={`/salidas`}>
        <ButtonLobby>
          {"REGISTRAR SALIDA"}
          <div className="w-8 -mx-2 ">
            <FaChevronRight size={25} strokeWidth={25} />
          </div>
        </ButtonLobby>
      </Link>

      <Link className="w-60 h-20" href={`/llegadas`}>
        <ButtonLobby>
          {"REGISTRAR LLEGADA"}
          <div className="w-8 -ml-3 ">
            <FaChevronLeft size={25} strokeWidth={25} />
          </div>
        </ButtonLobby>
      </Link>
    </div>
  );
}
export default ButtonsLobby;
