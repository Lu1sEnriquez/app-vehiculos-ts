"use client";
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

import { FaRegUserCircle } from "react-icons/fa";
function LogoutPage() {
  const { logout } = useAuthContext();
  const router = useRouter();
  // useEffect(()=>{
  //   logout()
  //   router.push('/login')
  // },[logout,router])

  function handle() {
    logout();
    // router.push('/auth/login')
  }
  return (
    <section className="w-full h-screen flex items-center justify-center gap-5 flex-col bg-slate-800 bg-opacity-30">
      <div className="bg-white w-72 h-80 flex flex-col items-center justify-center rounded-xl shadow gap-2">
        <FaRegUserCircle size={60} color={"orange"}/>
        <h1 className="text-black text-3xl font-roboto font-semibold flex flex-col items-center">
          <span>Quieres cerrar</span> <span>Session?</span>
        </h1>

        <ButtonAzul onClick={handle}>Cerrar </ButtonAzul>
      </div>
    </section>
  );
}

export default LogoutPage;
