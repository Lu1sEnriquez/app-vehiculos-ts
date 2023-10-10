"use client";
import Link from "next/link";
import React, { Suspense, useState, useEffect } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import menuItems from "@/app/utils/menuItems";

function NavbarDesktop() {
  
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <section className=" fixed z-50 flex   gap-6 overflow-hidden ">
      <div
        className={` bg-azulOscuro w-screen flex flex-col md:min-h-screen h-14    text-gray-100 md:px-4 
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

        <div className="md:mt-4 flex  md:flex-col  gap-4   relative">
          {menuItems.map((item) => (
            <Link
              className={`${item.margin && "md:mt-6"}
            flex items-center 
            text-sm gap-3.5 font-medium p-2 
            hover:bg-azulNormal rounded-md`}
              href={item?.link}
              key={item?.name}
              onClick={handleClick}
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
        </div>
      </div>
    </section>
  );
}
export default NavbarDesktop;
