import Swal from "sweetalert2";
import useToken from "./useToken";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const LogoutModal = (logout: ()=> void, router:AppRouterInstance) => {
  
  
  
  
  
  Swal.fire({
    title: "¿Quieres cerrar sesión?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Salir",
    cancelButtonText: "Cancelar",
    icon:"info"
  }).then((result) => {
    if (result.isConfirmed) {
      // Lógica para realizar el logout
      // Puedes llamar a tu función de logout aquí
      // Ejemplo: logout();
      logout()
    } else {
      // Lógica si el usuario cancela el logout
      console.log("Cancelar");
    }
  });
};