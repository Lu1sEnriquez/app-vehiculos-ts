import { AiFillCar } from "react-icons/ai"

function layout({children}) {
  return (
    <>
    <div className="bg-azulOscuro w-full h-14 text-center flex flex-row gap-10 items-center justify-center ">
        <h1 className="font-semibold">FORMULARIO SALIDA</h1>
        <AiFillCar size={40}/>
    </div>
    {children}
    </>
  )
}
export default layout