"use client";
import React, { useState, useEffect, useRef } from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarMovil from "./NavbarMovil";
import useDeviceSizeWindow from "@/utils/custom/useDeviseSizeWindow";

function NavbarPrincipal() {
  const [open, setOpen] = useState(false);
  const { width, height } = useDeviceSizeWindow();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Comprueba si el clic ocurrió fuera del componente NavbarPrincipal
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Agrega un evento de clic al documento
    document.addEventListener("click", handleOutsideClick);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-auto" ref={navbarRef}>
      {width < 768 ? (
        <NavbarMovil open={open} setOpen={setOpen} />
      ) : (
        <NavbarDesktop open={open} setOpen={setOpen} height={height} />
      )}
    </div>
  );
}

export default NavbarPrincipal;
