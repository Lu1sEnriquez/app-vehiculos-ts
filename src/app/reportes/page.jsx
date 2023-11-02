
import ButtonGenerarPDF from "@/components/basicos/ButtonGenerarPDF";
import ItemsReportes from "@/components/compReportes/ItemsReportes";
import { DatosSalidaEntradaProvider } from "@/reducer/salidaEntradaReducer";

function page() {
  return (
    <section className=" p-2 w-full h-screen flex items-center  justify-center">
      <DatosSalidaEntradaProvider>
        <ItemsReportes></ItemsReportes>
        {/* <ButtonGenerarPDF></ButtonGenerarPDF> */}
      </DatosSalidaEntradaProvider>
    </section>
  );
}
export default page;
