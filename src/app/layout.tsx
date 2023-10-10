


import NavbarPrincipal from "@/components/nav/NavbarPrincipal";
import "./globals.css";
import React from "react";
export const metadata = {
  title: "Sistema Vehicular Itson",
  description: "Sistema para Gestionar Vehiculos en Itson",
 
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className="relative">
      

      <body className="absolute lg:text-3xl md:text-2xl sm:text-xl sm:bg-white h-screen ">
      <NavbarPrincipal></NavbarPrincipal>
        <main
          className="  sm:w-full  md:mx-auto 
        mt-16 md:mt-0    flex justify-center items-center flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
