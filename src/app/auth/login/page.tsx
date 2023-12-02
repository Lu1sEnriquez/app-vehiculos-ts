"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoItson from "@/assets/icons/LogoItson.png";
import axios from "axios";
import { POST_LOGIN_URL } from "@/router/rutas";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import Swal from "sweetalert2";

export interface CredentialsType {
  usuario: string;
  password: string;
}

function LoginPage() {
  const { login } = useAuthContext();
  const router = useRouter();

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

      const data = response.data.data;
      console.log(data);
      const token = data.token;
      console.log(token);
      login(token);
      //router.push("/lobby");
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "Error",
          text: "credenciales Incorrectas",
          icon: "error",
          confirmButtonText: "Corregir",
        });
      }
    }
  };

  return (
    <main className="text-slate-800 h-screen  flex  items-center justify-center w-full">
      <section className="flex flex-col items-center gap-10">
        <div className="w-5/6">
          <Image priority width={400} src={logoItson} alt="ITSON"></Image>
        </div>
        <form
          action=""
          className="flex flex-col gap-5  items-center bg-white shadow-xl h-96 justify-center px-5 rounded w-10/12 "
        >
          <h1 className="font-roboto text-3xl text-azulNormal font-bold ">LOGIN</h1>
          <label htmlFor="usuario" className="font-poppins flex flex-col gap-1 text-2xl ">
            Usuario:{" "}
            <input
              id="usuario"
              name="usuario"
              onChange={handleChange}
              type="text"
              className="border-slate-300 shadow bg-slate-50 border-2 rounded-sm w-full text-base"
            />
          </label>

          <label htmlFor="password" className="font-poppins flex flex-col gap-1 text-2xl ">
            Contraseña:{" "}
            <input
              id="password"
              name="password"
              onChange={handleChange}
              type="password"
              className="border-slate-300 shadow bg-slate-50 border-2 rounded-sm w-full text-base "
            />
          </label>

        <div className="w-full flex  justify-center">
        <button
            type="submit"
            onClick={handleSumit}
            className="bg-azulNormal text-slate-50 px-4 w-40 py-1 rounded shadow"
          >
            Entrar
          </button>
        </div>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
