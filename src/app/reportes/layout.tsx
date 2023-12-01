"use client"
import { AiFillCar } from "react-icons/ai";
import { useState, useEffect, ReactNode } from "react";
import { useAuthContext } from "@/context/authContext";
import { redirect } from "next/navigation";

function Layout({ children }:{children:ReactNode}) {
 

  return (
    <>
      <div className="text-black w-full mt-10 lg:mt-0  text-center p-10">
        <h1 className="font-Poppins font-bold text-5xl text-azulNormal ">GENERAR REPORTES </h1>
        
      </div>
      <main className="  w-full">
      {children}
      </main>
    </>
  );
}

export default Layout;