
import ButtonGenerarPDF from "@/components/basicos/ButtonGenerarPDF";
import ItemsReportes from "@/components/compReportes/ItemsReportes";
import ReportesDataTable from "@/components/materialMui/ReportesDataTable";
import ReportesTable from "@/components/materialMui/ReportesTable";

function page() {
  return (
    <main className=" bg-[#f2f2f2] text-black  w-full md:w-11/12  h-full  ">
      {/* <ReportesTable></ReportesTable> */}
      <ReportesDataTable></ReportesDataTable>
    </main>
  );
}
export default page;