'use client'
import React from 'react'
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import googlePlay from "../../../../public/assets/images/Google Play.png";
import appStore from "../../../../public/assets/images/AppStore.png";
import mobileScreen from "../../../../public/assets/images/MobileScreen.png"
export default function HeroSection() {
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      };
  return (
    <>
    <div className='flex flex-col md:flex-row items-end overflow-hidden justify-center bg-primaryBlue pt-20 gap-5 md:px-10 px-5 relative'>
        <div className='bg-secondaryBlue w-[30rem] h-[30rem] absolute rounded-full -left-20 -top-24 z-[1]'>
        </div>
        <div className='bg-secondaryBlue w-[30rem] h-[30rem] absolute hidden md:block rounded-full -right-20 -bottom-24 z-[1]'>
</div>
<div className="lg:w-[50%] w-full z-10">
<h1 className='md:text-4xl text-xl text-white font-bold md:mt-0 mt-5'>Revolutionize your Networking Experience!</h1>
<p className='text-lightGrey'>Seamlessly Share, Schedule, and Connect with Our All-in-One Virtual Business Card App!</p>
<div className="md:w-[50%] w-full mt-10"></div>
<p className='text-lightGrey'>Download App:</p>
          <div className="flex  flex-col md:flex-row gap-5 md:gap-3 mt-5 items-center md:items-start pb-20 md:pb-10">
            <button className="border border-white rounded-lg p-2 flex items-center">
              <div className="flex justify-start px-1">
                <div>
                  <Image
                    className="w-[2rem] h-[2.4rem]"
                    height={500}
                    width={100}
                    src={googlePlay}
                    alt="Google Play"
                  />
                </div>
                <div className="flex flex-col items-start pl-2 text-white">
                  <p className="text-[0.7rem]">GET IT ON</p>
                  <p className="font-bold text-[0.9rem]">Google Play</p>
                </div>
              </div>
            </button>
            <button className="border border-white rounded-lg p-2 flex items-center">
              <div className="flex justify-start px-1  text-white">
                <div>
                  <Image
                    className="w-[2rem] h-[2.4rem]"
                    height={500}
                    width={100}
                    src={appStore}
                    alt="App Store"
                  />
                </div>
                <div className="flex flex-col items-start pl-2">
                  <p className="text-[0.7rem]">Download on the</p>
                  <p className="font-bold text-[0.9rem]">APP STORE</p>
                </div>
              </div>
            </button>
          </div>
<div>
</div>
</div>
<div className="lg:w-[50%]  ml-48 lg:block hidden z-10">
<Image
                    className=" w-[18rem] mt-20 h-[20rem]"
                    height={500}
                    width={100}
                    src={mobileScreen}
                    alt="Mobile Screen"
                  />
</div>
    </div>
{/* <div className='relative xl:block hidden'>
<p>  [20px] w-[20px] left-[44.3rem] -top-[0.8447rem]</p>
 <div className='absolute bg-primaryBlue rounded-bl-lg h-[20px] w-[20px] left-[52.14%] -top-[1.22rem] ' style={{zIndex:"100"}}>
 </div>
 <div className='absolute bg-primaryBlue rounded-full h-[14px] w-[20px] left-[37.67rem] -top-[0.8447rem] ' style={{zIndex:"100"}}>
</div>
</div> */}
    <div onClick={scrollToBottom} className='relative lg:block hidden'>
<div className='absolute left-[46%] bg-white p-2 -top-10 rounded-full h-[90px] w-[90px]'>
<div  className='bg-primaryBlue flex justify-center items-center cursor-pointer rounded-full w-full h-full'>
<FaArrowDownLong className='text-white text-4xl'/>
</div>
</div>
    </div>
    </>
  )
}
