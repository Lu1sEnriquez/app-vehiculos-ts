"use client";
import Link from "next/link";
import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

import menuItems from "@/router/menuItems"; // aqui estan los apartados del nav y sus iconos
import { ButtonAzul } from "../basicos/ButtonAzul";
import { FaUserCircle } from "react-icons/fa";
import { LogoutModal } from "@/hooks/LogoutModal";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

function NavbarMovil({ open, setOpen }) {
  const handleClick = () => setOpen(!open);
  const { logout } = useAuthContext();
  const router = useRouter();
  return (
    <nav
      className={` bg-azulOscuro text-blanco  font-medium
     flex  flex-col  
     top-0 mb-4 
     md:px-10  
     items-center   
     fixed  
     w-full 
     z-30
     shadow-xl
     
     ${open ? "h-96" : "h-14"}  max-h-96 duration-200
    `}
    >
      <div className="flex flex-row justify-between w-full  items-center">
        <Link href={"/"} className="w-28 ml-5">
          {/* <Image src={logoItson}> */}
          <AiOutlineHome size={32} className="cursor-pointer" />
        </Link>
        <div className=" py-3 flex justify-end pr-5 md:pr-0">
          <HiMenuAlt3
            size={32}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <div
        className={`flex  flex-col  gap-2 whitespace-pre duration-500 ${
          !open && " opacity-0 translate-x-28  -translate-y-10 overflow-hidden"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            className={`${item.margin && "md:mt-6 "}
            flex items-center 
            text-lg gap-3.5 font-medium p-2 
            hover:bg-azulNormal rounded-md`}
            href={item?.link}
            key={item?.name}
            onClick={handleClick}
          >
            <div>{React.createElement(item?.icon, { size: "20" })}</div>
            <h1
              className={`
                `}
            >
              {item?.name}
            </h1>
          </Link>
        ))}
        <button
          className={`${"md:mt-6 "}
        flex items-center 
        text-lg gap-3.5 font-medium p-2 
        hover:bg-azulNormal rounded-md`}
          onClick={() => {
            handleClick()
            LogoutModal(logout, router);
          }}
        >
          <FaUserCircle size={20} />
          {`Cerrar Sesion`}
        </button>
      </div>
    </nav>
  );
}
export default NavbarMovil;
