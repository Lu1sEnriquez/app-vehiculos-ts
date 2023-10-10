import ButtonAzul from "@/components/Formularios/ButtonAzul";
import { ButtonAzulLink } from "@/components/basicos/ButtonAzul";
import Link from "next/link";
import React from "react";

function PagePrincipal() {
  return (
    <div>
      PagePrincipal
      
        <ButtonAzulLink text={"lobby"} href="/lobby" ></ButtonAzulLink>
      
    </div>
    
  );
}

export default PagePrincipal;
