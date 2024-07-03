'use client'
import { MdOutlinePhone } from "react-icons/md";
import carosoul1 from '../../../../public/assets/images/carosoul1.png'
import profilePic from "../../../../public/assets/images/Profilepic.png"

import Image from 'next/image';
export default function Tempelate() {
 
  return (
    <>

    <div className='grid lg:grid-cols-3 grid-cols-1 items-center  justify-center md:px-5  gap-5 overflow-hidden'>
    <section className=' my-2  mx-auto border-stone-400 bg-white max-w-[14rem] min-h-[19.5rem] min-w-[14rem] max-h-[19.5rem]    border-2  rounded-lg   pt-5'>
        <div>
        <Image
            src={carosoul1}
            alt='img'
            className='mb-5  mx-2 min-w-[30px] max-h-[40px] max-w-[30px] min-h-[40px]' />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={profilePic}
            alt='img'
            className='mb-5 min-w-[70px] max-h-[70px] max-w-[70px] min-h-[70px]' />
          <h3 className='font-semibold text-xl'>
            KAJA SKERLJ
          </h3>
          <p className='text-xs mb-3'>UI/UX Designer</p>
          <hr className='w-[60%] border-stone-400  my-2' />
        </div>
        <div className="px-5 flex flex-col text-[0.8rem] text-center mb-2 items-center">
        <div>kaja.skerlj@gmail.com</div>
            <div>www.kajaSkerlj.com</div>
            <div >+1(484)456-0074</div>
         </div>
      </section>

      <section className='mb-5 mx-auto border-primaryBlue bg-white max-w-[14rem] min-h-[20.5rem] min-w-[14rem] max-h-[20.5rem]  border-2  rounded-lg  py-5'>
        <div className="flex flex-col items-center">
          <Image
            src={carosoul1}
            alt='img'
            className='mb-5' />
          <h3 className='font-semibold text-xl'>
            KAJA SKERLJ
          </h3>
          <p className='text-xs mb-3'>UI/UX Designer</p>
          <hr className='w-[60%]  my-2' />
        </div>
        <div className="px-5 py-2">
          <div className="flex items-center text-sm gap-2 my-2">
            <div className='w-[25px] h-[25px]  border  flex items-center justify-center  text-sm rounded-full'>
              <svg width="15" height="15" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3637 1.88891L2.2073 0.55415C2.07398 0.400337 1.82958 0.40102 1.67473 0.556201L0.723766 1.50882C0.440734 1.79218 0.35972 2.21295 0.523456 2.55031C1.50163 4.57552 3.13503 6.21111 5.15897 7.19207C5.49601 7.3558 5.91646 7.27479 6.19949 6.99143L7.15935 6.02992C7.31488 5.8744 7.31522 5.62864 7.16003 5.49533L5.82007 4.34515C5.67992 4.22483 5.46217 4.24055 5.32168 4.38138L4.85543 4.84829C4.83156 4.87331 4.80014 4.8898 4.76599 4.89523C4.73184 4.90066 4.69686 4.89474 4.6664 4.87837C3.90428 4.43952 3.27208 3.80654 2.83421 3.04388C2.81781 3.01338 2.81187 2.97833 2.8173 2.94413C2.82274 2.90992 2.83924 2.87845 2.86429 2.85452L3.32917 2.38932C3.47001 2.24781 3.48539 2.02905 3.3637 1.88857V1.88891Z" stroke="black" stroke-width="0.365984" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='text-[0.8rem]'>+1(484)456-0074</div>
          </div>
          <div className="flex items-center gap-2 my-2 text-sm ">
            <div className='w-[25px] h-[25px] p-1   border text-sm flex justify-center items-center rounded-full'>
              <svg width="15" height="15" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45829 0.642151H1.25319C1.07352 0.642151 0.927872 0.76715 0.927872 0.921344V4.27167C0.927872 4.42586 1.07352 4.55086 1.25319 4.55086H6.45829C6.63796 4.55086 6.78361 4.42586 6.78361 4.27167V0.921344C6.78361 0.76715 6.63796 0.642151 6.45829 0.642151Z" stroke="black" stroke-width="0.365984" stroke-linecap="round" />
                <path d="M0.927887 1.06091L3.85576 2.59648L6.78363 1.06091" stroke="black" stroke-width="0.365984" stroke-linecap="round" />
              </svg>
            </div>
            <div className='text-[0.8rem]'>kaja.skerlj@gmail.com</div>
          </div>
          <div className="flex items-center  gap-2 text-sm my-2 max-[25px]">
            <div className='w-[25px] h-[25px] p-2 border text-sm flex items-center justify-center rounded-full'>
              <svg width="15" height="15" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85465 6.35136L3.05249 6.08467C3.27697 5.7771 3.47888 5.48528 3.65853 5.20772L3.80683 4.97366C4.42605 3.97556 4.73581 3.18337 4.73581 2.59786C4.73581 1.34807 3.89368 0.334961 2.85465 0.334961C1.81563 0.334961 0.973495 1.34807 0.973495 2.59786C0.973495 3.18337 1.28326 3.97556 1.90247 4.97366L2.05077 5.20772C2.30706 5.60058 2.5752 5.98217 2.85465 6.35174V6.35136Z" stroke="black" stroke-width="0.365984" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.85466 3.5232C3.28755 3.5232 3.63848 3.10337 3.63848 2.58548C3.63848 2.0676 3.28755 1.64777 2.85466 1.64777C2.42177 1.64777 2.07085 2.0676 2.07085 2.58548C2.07085 3.10337 2.42177 3.5232 2.85466 3.5232Z" stroke="black" stroke-width="0.365984" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='text-[0.8rem]'>456 West 23rd Street, Apt 2C, New York</div>
          </div>
        </div>
      </section>

      <section className=' mx-auto my-2  border-stone-400 bg-white max-w-[14rem] min-h-[19.5rem] min-w-[14rem] max-h-[19.5rem]    border-2  rounded-lg   pt-5'>
        <div>
        <Image
            src={carosoul1}
            alt='img'
            className='mb-5  mx-2 min-w-[30px] max-h-[40px] max-w-[30px] min-h-[40px]' />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={profilePic}
            alt='img'
            className='mb-5 min-w-[70px] max-h-[70px] max-w-[70px] min-h-[70px]' />
          <h3 className='font-semibold text-xl'>
            KAJA SKERLJ
          </h3>
          <p className='text-xs mb-3'>UI/UX Designer</p>
          <hr className='w-[60%] border-stone-400 my-2' />
        </div>
        <div className="px-5 flex flex-col text-[0.8rem] text-center mb-2 items-center">
        <div>kaja.skerlj@gmail.com</div>
            <div>www.kajaSkerlj.com</div>
            <div >+1(484)456-0074</div>
         </div>
      </section>

    
      </div>
      
      
   
    </>
  );
}