"use client"
import { AiFillCar } from "react-icons/ai";
import { useState, useEffect, ReactNode } from "react";

function Layout({ children }:{children:ReactNode}) {
  

  return (
    <>
      <div className="text-black w-full  text-center p-10">
        <h1 className="font-Poppins font-bold text-5xl text-azulNormal ">GENERAR REPORTES </h1>
        
      </div>
      <main className=" md:pl-12 w-full">
      {children}
      </main>
    </>
  );
}

export default Layout;