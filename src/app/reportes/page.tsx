
import ButtonGenerarPDF from "@/components/basicos/ButtonGenerarPDF";
import ItemsReportes from "@/components/compReportes/ItemsReportes";
import ReportesDataTable from "@/components/materialMui/ReportesDataTable";
import ReportesTable from "@/components/materialMui/ReportesTable";
import { Suspense } from "react";

function page() {
  return (
    <main className=" bg-[#f2f2f2] text-black  w-full   h-full  ">
      {/* <ReportesTable></ReportesTable> */}
     <section className="md:mr-6" >
     <Suspense fallback={
      <div>
        <h1>cargando</h1>
      </div>
     }>
     <ReportesDataTable></ReportesDataTable>
     </Suspense>
     </section>
    </main>
  );
}
export default page;
