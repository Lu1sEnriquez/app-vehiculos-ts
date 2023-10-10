"use client";

import React, { useState,useEffect } from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarMovil from "./NavbarMovil";
import useDeviceSizeWindow from "@/app/utils/useDeviseSizeWindow";


function NavbarPrincipal() {
  
  const {width, height}= useDeviceSizeWindow();
  return (
    <div className="w-auto">
      <>
      {
      width > 768
      ?<NavbarDesktop></NavbarDesktop>
      :<NavbarMovil></NavbarMovil>

      }
      </>
    </div>
  );
}
export default NavbarPrincipal;
