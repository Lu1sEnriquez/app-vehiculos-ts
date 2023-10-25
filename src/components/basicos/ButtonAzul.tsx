'use client'
import Link from "next/link";
export interface ButtonAzulType {
  onClick?: () => void | undefined;
  text?: string;
}

export function ButtonAzul({ onClick, text }: ButtonAzulType) {
  onClick = onClick || (() => {});

  return (
    <button
      onClick={onClick}
      className="   
        bg-azulOscuro text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        
        duration-200
        hover:bg-azulNormal
        hover:scale-105
        "
    >
      {text || ""}
    </button>
  );
}

interface ButtonAzulLinkType {
  text?: string,
  href: string
}

export function ButtonAzulLink({ href, text }: ButtonAzulLinkType) {
  return (
    <Link href={href}>
      <button
        className="   
        bg-azulOscuro text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        
        duration-200
        hover:bg-azulNormal
        hover:scale-105
        "
      >
        {text || ""}
      </button>
    </Link>
  );
}
