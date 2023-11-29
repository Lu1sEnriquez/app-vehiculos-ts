'use client'
import { useAuthContext } from '@/context/authContext'
import { redirect } from 'next/navigation'
import React,{ReactNode} from 'react'

function Layout({children}:{children: ReactNode}){

  const {isLoggedIn} = useAuthContext()
    if(!isLoggedIn){
        redirect('/login')
    }
    return (
    <>{children}</>
  )
}

export default Layout