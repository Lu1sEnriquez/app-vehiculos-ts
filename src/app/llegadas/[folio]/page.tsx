
import FormularioLlegada from "@/components/complejos/FormularioLlegada";
import { ReactNode } from "react";

interface Props{
  children:ReactNode
  params: { folio: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
function page({children, params}:Props) {

  const folio = parseInt(params.folio)
  console.log(folio);
  
  return (
    <div className="container bg-[#f2f2f2] text-black  w-full  h-full  " >
      <FormularioLlegada folio={folio}></FormularioLlegada>
      
    </div>
  );
}
export default page;
