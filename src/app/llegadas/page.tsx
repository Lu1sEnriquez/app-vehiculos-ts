import ItemsLlegadas from '@/components/compLlegada/ItemsLlegadas'
import MostrarAlert from '@/components/error/MostrarAlert'
import React from 'react'

function page() {
  return (
    <main>
      <MostrarAlert></MostrarAlert>
      <ItemsLlegadas></ItemsLlegadas>
    </main>
  )
}

export default page