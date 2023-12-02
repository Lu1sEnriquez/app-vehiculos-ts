'use client'
import { useAuthContext } from '@/context/authContext'
import { redirect } from 'next/navigation'
import React,{ReactNode} from 'react'

function Layout({children}:{children: ReactNode}){

  
    return (
    <>{children}</>
  )
}

export default Layout