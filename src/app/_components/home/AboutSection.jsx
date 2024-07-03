import React from "react";
import Image from "next/image";
import CardExchange from "../../../../public/assets/images/CardExchange.png";
import Tempelate from './Tempelate.jsx'
export default function Header() {
  return (
    <>
      <div className="container mx-auto p-5  lg:mt-20 lg:mb-5 my-3">
        <div className="flex lg:flex-row flex-col gap-5 justify-center items-center">
          <div className="md:w-[40%] w-full text-center lg:text-left">
            <div className="font-bold text-xl md:text-4xl text-primaryBlue">
              Create Business Cards Instantly and Seamlessly
            </div>
            <div className="text-gray mt-5 ">
              Create your virtual business cards instantly by selecting our
              built-in templates, adding a logo, profile image, and your contact
              information. You can also link your socials and you’re good to go!
            </div>
          </div>
          <div className="relative md:w-[60%] w-full  text-center rounded-lg bg-white shadow-md lg:text-left py-10">
            <p className="text-center text-xl font-bold mb-5">
              1.  Select Your Tempelate
            </p>
            <Tempelate/>
          <div className="lg:block hidden">  
            <div className=" absolute lg:flex flex-row gap-1 left-[45%] -bottom-[2rem] bg-orange">
<div className='border-primaryBlue border h-[10px] w-[10px] rounded-full'> </div>
<div className='bg-primaryBlue h-[10px] w-[10px] rounded-full'> </div>
<div className='bg-primaryBlue h-[10px] w-[10px] rounded-full'> </div>
<div className='bg-primaryBlue h-[10px] w-[10px] rounded-full'> </div>
<div className='bg-primaryBlue h-[10px] w-[10px] rounded-full'> </div>
            </div></div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center my-10">
          <div className="md:w-[55%] w-full">
            <Image
              src={CardExchange}
              width={500}
              height={500}
              alt="Card Exchange"
            />
          </div>
          <div className="md:w-[40%] w-full ">
            <div className="font-bold text-xl md:text-4xl text-primaryBlue mt-5">
              Instant Card Exchange via QR Codes
            </div>
            <div className="text-gray mt-5 ">
              Create your virtual business cards instantly by selecting our
              built-in templates, adding a logo, profile image, and your contact
              information. You can also link your socials and you’re good to go!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
