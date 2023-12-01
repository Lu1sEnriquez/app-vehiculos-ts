'use client'

import {useEffect} from "react";
import {  useRouter} from "next/navigation";
function PagePrincipal() {
  const router = useRouter()
  
  useEffect(() => {
  router.push("/lobby")
  }, [router])
  
  
  return (
    <main className="flex justify-center items-center h-screen  w-full ">    
    </main>
    
  );
}

export default PagePrincipal;
