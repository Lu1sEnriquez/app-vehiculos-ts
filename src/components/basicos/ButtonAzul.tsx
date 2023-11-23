"use client";
import ApartadosType from "@/models/ReporteGeneralType";
import Link from "next/link";
import { useRouter } from "next/navigation";
export interface ButtonAzulType {
  onClick?: () => void | undefined;
  text?: string;
  children?: React.ReactNode;
}

export function ButtonAzul({ onClick, text, children }: ButtonAzulType) {
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
      {children}
    </button>
  );
}

interface ButtonAzulLinkType {
  text?: string;
  href: string;
  children?: React.ReactNode;
}

export function ButtonAzulLink({ href, text, children }: ButtonAzulLinkType) {
  return (
    <Link href={href}>
      <button
        className="   
        bg-azulOscuro text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        flex flex-wrap justify-center items-center gap-2
        duration-200
        hover:bg-azulNormal
        hover:scale-105
        "
      >
        {text || ""}
        {children}
      </button>
    </Link>
  );
}

interface ButtonRedirectFormType {
  text?: string;
  href: string;
  children?: React.ReactNode;
  data: ApartadosType;
}

