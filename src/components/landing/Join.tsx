import React from 'react'

export default function Join() {
  return (
    <div className='w-full mt-32'>
        {/* first section */}
        <div className='flex justify-center items-start'>
            <p className='text-white w-[50%] text-3xl leading-[46px] pt-6'>Join a community <br />of millions</p>

            <div className='w-[50%]'>
                <div className=''>
                    <p className='text-8xl leading-[132px] bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] text-transparent bg-clip-text'>11.5M+</p>
                    <small className='text-[#C4C4C4] text-[1rem] leading-[27px] uppercase'>Active accounts</small>
                </div>

                <div className=' mt-12'>
                    <p className='text-8xl leading-[132px] bg-gradient-to-r from-[#0047FF] to-[#00BCD4] text-transparent bg-clip-text'>21.9M</p>
                    <small className='text-[#C4C4C4] text-[1rem] leading-[27px] uppercase'>NFTs minted</small>
                </div>

                <div className=' mt-12'>
                    <p className='text-8xl leading-[132px] bg-gradient-to-r from-[#00FFBD] to-[#025B8C] text-transparent bg-clip-text'>$0.00025</p>
                    <small className='text-[#C4C4C4] text-[1rem] leading-[27px] uppercase'>Average cost per transaction</small>
                </div>
            </div>

        </div>
        
    </div>
  )
}
