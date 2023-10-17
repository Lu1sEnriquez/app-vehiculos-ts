import { ButtonAzulLink } from "@/components/basicos/ButtonAzul";
import Link from "next/link";
import React from "react";

function PagePrincipal() {
  return (
    <main className="flex justify-center items-center h-screen  w-full ">
      
      
        <ButtonAzulLink text={"lobby"} href="/lobby" ></ButtonAzulLink>
      
    </main>
    
  );
}

export default PagePrincipal;
