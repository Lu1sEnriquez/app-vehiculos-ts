import React, { ReactNode } from "react";
import { AiFillCar } from "react-icons/ai";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" bg-azulOscuro w-full  h-14 text-center flex flex-row gap-5 items-center justify-center ">
        <h1 className="font-semibold z-30 md:z-0">Formulario Llegada</h1>
        <AiFillCar size={30} className={"z-30 md:z-0"} />
      </div>
      {children}
    </>
  );
}

export default layout;
