import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React, { ReactNode } from 'react'

interface layoutProps{
    children: ReactNode
}

export default function Layout({children}:layoutProps) {
  return (
    <div className='w-full overflow-hidden'>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}
