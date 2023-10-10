import CarroseriaUI from "@/components/Formularios/inputCarroceria/CarroseriaUI"
import InputCarroceria from "@/components/Formularios/inputCarroceria/InputCarroceria"
import ButtonFirmaModal from "@/components/modal/ButtonActiveModal"
import Modal from "@/components/modal/Modal"

function page() {
  return (
    <section>
     <ButtonFirmaModal textButton={'Agregar Daños'} titleModal={'Daños'}>
      <CarroseriaUI></CarroseriaUI>
     </ButtonFirmaModal>
    </section>
  )
}
export default page