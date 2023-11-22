import ItemsApartados from '@/components/compApartados/ItemsApartados'
import ItemsSalida from '@/components/compSalidas/ItemsSalidas'
import React from 'react'

function page() {
  return (
    <main className=" flex flex-col gap-10 w-full mt-10  lg:pl-20   items-center justify-center ">
      
      <ItemsSalida></ItemsSalida>
    </main>
  )
}

export default page