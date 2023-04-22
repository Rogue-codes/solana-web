import Image from 'next/image'
import React from 'react'
import { build } from '../../../public/assets'

export default function DevRes() {
  return (
    <div className='px-24 flex w-full justify-between items-center'>
        <div className='w-[50%] h-[40rem] mt-28'>
            <h2 className='text-8xl leading-[96px] tracking-[0.48px] font-normal text-white'>Developer Resources</h2>
            <p className='text-[#C4C4C4] text-lg leading-6 mt-4 w-[70%]'>A manual for joining the Solana ecosystem. By builders for builders.</p>
            <div className='w-full flex justify-start gap-5 mt-10 items-center'>
                <button className='w-32 h-[2.6rem] border border-black text-sm text-black rounded-3xl bg-[#14F195]'>Build Now</button>
                <button className='w-48 h-[2.6rem] border border-white text-white text-sm rounded-3xl bg-[#000]'>Stack Exchange</button>
            </div>
        </div>

        <div className='w-[50%] relative h-[40rem] -mt-28'>
            <div className='w-full h-[39rem] '>
                <Image src={build} alt=""/>

            </div>

            {/* blur background */}
            <div className='absolute h-full left-0 bg-[rgba(240,135,255,0.3)] blur-[250px] -z-30 top-0 w-[39rem]'>

            </div>
        </div>
    </div>
  )
}
