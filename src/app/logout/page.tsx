'use client'
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import { useAuthContext } from "@/context/authContext";
import { redirect } from "next/navigation";
import React from "react";

function LogoutPage() {
  const { isLoggedIn, logout } = useAuthContext();

  if (!isLoggedIn) {
    redirect("/login");
    return null;
  }

  function handle(){
    logout()
  } 
  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 flex-col">
      <h1 className="text-black text-5xl font-poppins font-bold">salir</h1>

      <ButtonAzul onClick={handle}>Cerrar Sesion</ButtonAzul>
    </div>
  );
}

export default LogoutPage;
