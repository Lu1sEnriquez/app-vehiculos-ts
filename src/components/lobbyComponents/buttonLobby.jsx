import { createRequire } from "module";
import Image from "next/image";
import React from "react";

export default function ButtonLobby({ children, icon }) {
  return (
    <button
      className="w-full h-full   bg-blue-900 rounded-2xl flex items-center gap-4 text-white justify-center 
    text-xl xl:h-24 shadow-xl hover:bg-azulNormal hover:scale-105 duration-100"
    >
      {children}
      {icon && <Image src={icon} alt="" className="w-8 -m-3 " />}
    </button>
  );
}
