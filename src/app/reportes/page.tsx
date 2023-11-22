
import ReportesDataTable from "@/components/materialMui/ReportesDataTable";
import { Suspense } from "react";

function page() {
  return (
    <main className=" bg-[#f2f2f2] text-black  w-full   h-full  ">
      {/* <ReportesTable></ReportesTable> */}
     <section className="lg:ml-16 p-4" >
    
     <ReportesDataTable></ReportesDataTable>
     
     </section>
    </main>
  );
}
export default page;
