import { ReactNode } from "react"

function LabelFormulario({children}:{children:ReactNode}) {
  return (
    <label className="block text-gray-500 font-semibold mb-3">
              {children}
            </label>
  )
}
export default LabelFormulario