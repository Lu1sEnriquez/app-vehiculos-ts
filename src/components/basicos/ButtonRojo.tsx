'use client'

import {useState} from 'react'
import Link from "next/link";
import { Children } from "react";
export interface ButtonRojoType {
  onClick?: () => void | undefined;
  text?: string;
  children?: React.ReactNode,
  type?:'toggle'
}

export function ButtonRojo({ onClick, text, children, type }: ButtonRojoType) {
  onClick = onClick || (() => {});

  const [active, setActive]= useState(false);




  return (
    <button
      onClick={()=>{
        if(onClick){
          onClick()
        }
        if(type){
          if(type == 'toggle'){
            setActive(!active)
          }
        }
      }}
      className={`
        ${active?"bg-red-600":"bg-red-400"} text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        
        duration-200
        ${active?"hover:bg-red-400":"hover:bg-red-600"}
        
        hover:scale-105
        `}
        
    >
      {text || ""}
      {children}
    </button>
  );
}

interface ButtonRojoLinkType {
  text?: string,
  href: string
}

export function ButtonRojoLink({ href, text }: ButtonRojoLinkType) {
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
