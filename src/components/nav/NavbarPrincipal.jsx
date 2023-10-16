"use client";

import React, { useState,useEffect } from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarMovil from "./NavbarMovil";
import useDeviceSizeWindow from "@/utils/custom/useDeviseSizeWindow";


function NavbarPrincipal() {
  
  const { width, height } = useDeviceSizeWindow();
  return (
    <div className="w-auto ">
      {width > 768 | width == 0 ? <NavbarDesktop /> : <NavbarMovil />}
    </div>
  );
  
}
export default NavbarPrincipal;
