import React, { ReactNode } from "react";
import { AiFillCar } from "react-icons/ai";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="  bg-azulOscuro w-full  h-14 text-center flex flex-row gap-5 items-center justify-center ">
        <div className="fixed md:sticky w-fit z-30 flex flex-row items-center gap-2">
        <h1 className="font-semibold md:z-0">Apartados</h1>
        <AiFillCar size={30} className={" md:z-0"} />
        </div>
      </div>
      <main >{children}</main>
    </>
  );
}

export default layout;
