
import FormularioSalida from "@/components/complejos/FormularioSalida";
import { ReactNode } from "react";

interface Props{
  children:ReactNode
}
function page({children}:Props) {
  return (
    <div className="container bg-[#f2f2f2] text-black  w-full  h-full  " >
      <FormularioSalida></FormularioSalida>
      
    </div>
  );
}
export default page;
