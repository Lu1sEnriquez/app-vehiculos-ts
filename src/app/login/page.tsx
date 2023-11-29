"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoItson from "@/assets/icons/LogoItson.png";
import axios from "axios";
import { POST_LOGIN_URL } from "@/services/rutas";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import Swal from "sweetalert2";

export interface CredentialsType {
  usuario: string;
  password: string;
}

function LoginPage() {
  
  const { login, authTokens, logout, isLoggedIn } = useAuthContext();
  const router = useRouter()

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

    try {
      const response = await axios.post(POST_LOGIN_URL, credentials);
      console.log(response.data);

      const token = response.data.token;
      login(token);
      router.push('/lobby')
    } catch (error) {
      if(error instanceof Error){
        Swal.fire({
          title:'Error',
          text: "credenciales Incorrectas",
          icon: "error",
        confirmButtonText: "Corregir",
        })
      }
    }
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
          <label
            htmlFor="usuario"
            className="text-2xl font-semibold font-poppins"
          >
            Usuario:
          </label>
          <input
            id="usuario"
            name="usuario"
            onChange={handleChange}
            type="text"
            className="border-slate-800 border-2 rounded-sm "
          />

          <label
            htmlFor="password"
            className="text-2xl font-semibold font-poppins"
          >
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
