import Image from 'next/image'
import React from 'react'
import { youtube } from '../../../public/assets'

export default function Contact() {
  return (
    <div className='px-24 my-20'>
        <div className='w-full flex justify-between items-center'>
        <div className='w-[48%] p-12 rounded-[14px] bg-[#19161C]'>
            <h2 className='text-[2.25rem] leading-[27px] text-white'>Solana Developer Update</h2>
            <p className='text-md leading-[2.4rem] text-[#C4C4C4] mt-8'>Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</p>
            <div className='w-[25rem] mt-20 bg-black h-[4rem] flex p-2 rounded-[800px] '>
                <input type="text" className='bg-transparent w-[19rem] p-2 placeholder:text-md placeholder:leading-5' placeholder="Email" />
                <button className='w-[6rem] bg-[#14F195] rounded-[800px]'>SIGN UP</button>
            </div>
        </div>
        <div className='w-[48%] p-8 rounded-[14px] bg-[#19161C]'>
        <h2 className='text-[2.25rem] leading-[27px] text-white'>Even more resources</h2>
            <p className='text-md leading-[2.4rem] text-[#C4C4C4] mt-8'>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</p>
            <div className='w-[27rem] mt-20 bg-transparent h-[4rem] flex !justify-between mx-auto'>
                <button className='w-[12rem] uppercase bg-transparent border-2 rounded-[800px] text-white flex justify-center gap-5 items-center'> <p>YouTube</p> <Image src={youtube} alt=""/></button>
                <button className='w-[12rem] bg-transparent rounded-[800px] border-2 text-white uppercase flex justify-center gap-5 items-center'> <p>Podcast</p> <Image src={youtube} alt=""/></button>
            </div>
        </div>
        </div>
    </div>
  )
}
