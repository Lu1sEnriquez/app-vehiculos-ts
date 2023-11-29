"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoItson from "@/assets/icons/LogoItson.png";

import axios from "axios";
import { POST_LOGIN_URL } from "@/services/rutas";

function LoginPage() {
  interface CredentialsType {
    usuario: string;
    password: string;
  }
  const [credentials, setCredentials] = useState<CredentialsType>({
    usuario: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post(POST_LOGIN_URL,credentials);
  
    //   const response =await fetch(POST_LOGIN_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(credentials),
    //   credentials:'include'
    // })
   console.log(response);
   
    
   };

  return (
    <main className="text-slate-800 h-screen  flex  items-center justify-center w-full">
      <section className="flex flex-col items-center gap-10">
        <div>
          <Image priority width={400} src={logoItson} alt="ITSON"></Image>
        </div>
        <form
          action=""
          className="flex flex-col gap-2 items-center bg-slate-50 shadow-xl w-fit h-96 justify-center px-5 "
        >
          <h1 className="">LOGIN</h1>
          <label htmlFor="usuario" className="text-2xl font-semibold font-poppins">
            Usuario:
          </label>
          <input
          id="usuario"
            name="usuario"
            onChange={handleChange}
            type="text"
            className="border-slate-800 border-2 rounded-sm "
          />

          <label htmlFor="password" className="text-2xl font-semibold font-poppins">
            Contraseña:{" "}
          </label>
          <input
          id="password"
            name="password"
            onChange={handleChange}
            type="password"
            className="border-slate-800 border-2 rounded-sm "
          />
          <button
            type="submit"
            onClick={handleSumit}
            className="bg-azulNormal text-slate-50 px-4 py-1 rounded shadow"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
