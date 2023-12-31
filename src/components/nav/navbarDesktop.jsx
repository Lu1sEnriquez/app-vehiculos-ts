"use client";
import Link from "next/link";
import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import menuItems from "@/router/menuItems"; // aqui estan los apartados del nav y sus iconos
import { FaUserCircle } from "react-icons/fa";
import { LogoutModal } from "@/hooks/LogoutModal";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";

function NavbarDesktop({ open, setOpen, height }) {
  const { logout } = useAuthContext();
  const router = useRouter();

  const handleClick = () => setOpen(!open);
  const handleClickItem = () => {
    if (!open) {
      setOpen(!open);
    }
  };
  return (
    <section
      className={`bg-azulOscuro fixed z-50 flex   gap-6 overflow-x-hidden h-screen   `}
    >
      <div
        className={`  w-screen flex flex-col min-h-screen h-screen pb-10  text-gray-100 md:px-4 
      ${open ? "md:w-72" : "md:w-16"} duration-300
      `}
      >
        {/* es un item menu */}
        <div className=" py-3 flex justify-end pr-5 md:pr-0">
          <HiMenuAlt3
            size={32}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>

        <div className="md:mt-4 flex  md:flex-col  gap-4   relative ">
          {menuItems.map((item) => (
            <Link
              className={`${item?.margin && "md:mt-0"}
            flex items-center 
            text-lg gap-3.5 font-medium p-2 
            hover:bg-azulNormal rounded-md`}
              href={item?.link}
              key={item?.name}
              onClick={handleClickItem}
            >
              <div>{React.createElement(item?.icon, { size: "20" })}</div>
              <h1
                className={`whitespace-pre duration-300 
                ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
              >
                {item?.name}
              </h1>
            </Link>
          ))}
          <button
            className={`"md:mt-6 
        flex items-center 
        text-lg gap-3.5 font-medium p-2 
        hover:bg-azulNormal rounded-md`}
            onClick={() => {
              handleClick();
              LogoutModal(logout, router);
            }}
          >
            <div>
              <FaUserCircle size={20} />
            </div>
            <h1
              className={`whitespace-pre duration-300 
                ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
            >
              {`Cerrar Sesion`}
            </h1>
          </button>
        </div>
      </div>
    </section>
  );
}
export default NavbarDesktop;
