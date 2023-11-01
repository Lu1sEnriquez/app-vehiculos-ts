"use client"
import { AiFillCar } from "react-icons/ai";
import { useState, useEffect } from "react";

function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos <= 0 || currentScrollPos < lastScrollPos);
      lastScrollPos = currentScrollPos;
    };

    let lastScrollPos = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-20 top-0   bg-AzulOscuro w-full h-12 text-center flex flex-row gap-5 items-center justify-center transition-all ${
          isVisible ? "opacity-100" : "opacity-0 -translate-y-14"
        }`}
      >
        <h1 className=" z-30 font-semibold md:z-0">Formulario Salida</h1>
        <AiFillCar size={30} className="md:z-0" />
      </div>
      <main className="mt-12">
      {children}
      </main>
    </>
  );
}

export default Layout;