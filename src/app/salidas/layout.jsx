"use client";
import { redirect } from "next/navigation";
import { AiFillCar } from "react-icons/ai";
import { useAuthContext } from "@/context/authContext";

function Layout({ children }) {
  const {isLoggedIn} = useAuthContext()
  if(!isLoggedIn){
      redirect('/login')
  }

  return (
    <>
      <div className="  bg-azulOscuro w-full  h-14 text-center flex flex-row gap-5 items-center justify-center ">
        <div className="fixed md:sticky w-fit z-30 flex flex-row items-center gap-2">
        <h1 className="font-semibold md:z-0">Registrar Salida</h1>
        <AiFillCar size={30} className={" md:z-0"} />
        </div>
      </div>
      <main >{children}</main>
    </>
  );
}

export default Layout;
