
import React from 'react'
import Image from 'next/image'

export default function header() {
  return (
    <>
  
    <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-0 gap-5 bg-bgGray p-5'>
      <div className='md:w-[50%] w-full'>
        <div className='font-bold text-xl md:text-2xl text-primaryBlue'>Create Business Cards Instantly and Seamlessly</div>
        <div className='text-gray mt-5'>Create your virtual business cards instantly by selecting our built-in templates, adding a logo, profile image, and your contact information. You can also link your socials and you’re good to go!</div>
      </div>

      <div className='md:w-[50%] w-full'>
        SASA
      </div>
    </div>

    <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-0 gap-5 bg-bgGray p-5'>
     <div className='md:w-[50%] w-full'>
        <Image src="" width={600} height={600} />
      </div>
      <div className='md:w-[50%] w-full '>
        <div className='font-bold text-xl md:text-2xl  text-primaryBlue'>Instant Card Exchange via QR Codes</div>
        <div className='text-gray mt-5'>Create your virtual business cards instantly by selecting our built-in templates, adding a logo, profile image, and your contact information. You can also link your socials and you’re good to go!</div>
      </div>
    </div>

    </>
  )
}
