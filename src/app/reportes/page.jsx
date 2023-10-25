import ButtonGenerarPDF from "@/components/basicos/ButtonGenerarPDF";
import { DatosSalidaEntradaProvider } from "@/reducer/salidaEntradaReducer";

function page() {
  return (
    <section className="w-full h-screen flex items-center  justify-center">
      <DatosSalidaEntradaProvider>
        <ButtonGenerarPDF></ButtonGenerarPDF>
      </DatosSalidaEntradaProvider>
    </section>
  );
}
export default page;
