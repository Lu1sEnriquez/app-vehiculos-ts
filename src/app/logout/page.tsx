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
    <div>
      <h1 className="text-black text-3xl">salir</h1>

      <ButtonAzul onClick={handle}>Salir de la Session</ButtonAzul>
    </div>
  );
}

export default LogoutPage;
