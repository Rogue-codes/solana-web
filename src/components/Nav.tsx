import Image from 'next/image'
import React from 'react'
import { logo } from '../../public/assets'
import Link from 'next/link'

export default function Nav() {
    const data =[
        {
            label: 'Home',
            link:"/"
        },
        {
            label: 'Build',
            link:"/build"
        },
        {
            label: 'Network',
            link:"/"
        },
        {
            label: 'Community',
            link:"/"
        },
    ]
  return (
    <div className='text-white fixed px-5 lg:px-8 left-0 top-0 z-50 bg-black w-full justify-between items-center h-16 flex '>
        <div>
            <Image src={logo} alt=""/>
        </div>

        <ul className='hidden lg:flex w-[50%] justify-around items-center'>
            {
                data.map((item,index)=>(
                    <li key={index} className='text-md'>
                        <Link href={item.link}>{item.label}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
