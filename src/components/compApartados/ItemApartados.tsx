
function ItemApartados({}) {
  return (
    <div
              key={valor}
              className="w-full flex flex-col border-2 border-azulOscuro text-black h-40 rounded-xl"
            >
              <div
                id="row1"
                className="border-2 border-blue-500 w-full h-full flex justify-between "
              >
                <div className="bg-slate-400 w-full">Folio : {}</div>
                <div className="bg-slate-400 w-full">Fecha Salida : {}</div>
                <div className="bg-slate-400 w-full">Fecha Llegada : {}</div>
              </div>
              <div
                id="row2"
                className="border-2 border-blue-500 w-full h-full flex justify-between"
              >
                <div className="bg-slate-400 w-full">Solicitante : {}</div>
                <div className="bg-slate-400 w-full">Vehiculo : {}</div>
                <div className="bg-slate-400 w-full">Chofer : {}</div>
              </div>
              <div
                id="row3"
                className="border-2 border-blue-500 w-full h-full flex justify-between"
              >
                <div className="bg-slate-400 w-full">Destino : {}</div>
                <div className="bg-slate-400 w-full"> {}</div>
                <div className="bg-slate-400 w-full">Estatus : {}</div>
              </div>
            </div>
  )
}
export default ItemApartados