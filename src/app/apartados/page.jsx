"use client";
let arr = [1, 2, 3, 4, 5];

function Page() {
  return (
    <main className="container flex flex-col gap-10 items-center justify-center">
      <section
        id="contenedorApartados"
        className="w-full h-screen flex flex-col gap-5 mt-5 pl-14"
      >
        {arr.map((valor) => {
          return (
            <div
              key={valor}
              className="w-full border-2 border-azulOscuro h-40 rounded-xl"
            >
              <div id="fila1" className="border-2 border-green-500 w-full h-1/3 flex ">
                <div className="flex flex-row gap-2 border-red-500 border-2">
                  <h1 className="text-black">ID: </h1>
                  <p className="text-black">112</p>
                </div>

                <div className="flex flex-row gap-2 border-red-500 border-2">

                </div>
              </div>
              <div id="fila2" className=""></div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
export default Page;
