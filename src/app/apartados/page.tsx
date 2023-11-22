import ItemsApartados from "@/components/compApartados/ItemsApartados";
import ApartadosType, { solicitudes } from "@/models/ReporteGeneralType";
import { AiFillCar } from "react-icons/ai";

function Page() {
  const data: ApartadosType[] = solicitudes;
  return (
    <>
    <main className=" flex flex-col gap-10 w-full mt-10  lg:pl-20   items-center justify-center ">
      <ItemsApartados></ItemsApartados>
    </main>
    </>
    
  );
}
export default Page;
