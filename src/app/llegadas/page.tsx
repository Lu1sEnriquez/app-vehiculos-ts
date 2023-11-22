import ItemsLlegadas from "@/components/compLlegada/ItemsLlegadas";
import MostrarAlert from "@/components/error/MostrarAlert";
import React from "react";

function page() {
  return (
    <main className=" flex flex-col gap-10 w-full mt-10  lg:pl-20   items-center justify-center ">
      <MostrarAlert></MostrarAlert>
      <ItemsLlegadas></ItemsLlegadas>
    </main>
  );
}

export default page;
