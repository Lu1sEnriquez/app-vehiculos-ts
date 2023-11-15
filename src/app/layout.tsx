
import NavbarPrincipal from "@/components/nav/NavbarPrincipal";
import "./globals.css";
import React from "react";
import { ErrorProvider } from "@/reducer/errorReducer";
import MostrarAlert from "@/components/error/MostrarAlert";
export const metadata = {
  title: "Sistema Vehicular Itson",
  description: "Sistema para Gestionar Vehiculos en Itson",
 
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className="relative">
       <ErrorProvider>
      <body className="absolute  md:text-2xl sm:text-xl  h-screen ">
     <MostrarAlert></MostrarAlert>
      <NavbarPrincipal></NavbarPrincipal>
        <main
          className="  sm:w-full  md:mx-auto 
        mt-0    flex justify-center items-center flex-col"
        >
          {children}
        </main>
        
      </body>
      </ErrorProvider>
    </html>
  );
}
