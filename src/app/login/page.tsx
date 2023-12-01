"use client";
import { MouseEvent, useState } from "react";
import axios from 'axios'
import { POST_LOGIN_URL } from "@/router/rutas";
function LoginPage() {
  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

 async  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    const result = await axios.post(POST_LOGIN_URL, formData)
    console.log(result);
    
  }
  return (
    <section className="text-slate-800 shadow-xl font-nunito font-semibold flex w-full h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 flex flex-col p-10 items-center gap-2"
      >
        <label htmlFor="usuario" className="flex flex-col">
          Usuario:
          <input
            type="text"
            id="usuario"
            className="border-2 border-slate-800 w-60 "
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password" className="flex flex-col">
          Password:
          <input
            type="password"
            id="password"
            className="border-2 border-slate-800 w-60 "
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="bg-azulNormal p-2 rounded shadow-xl">
          Sing In
        </button>
      </form>
    </section>
  );
}
export default LoginPage;
