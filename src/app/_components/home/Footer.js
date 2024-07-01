import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto">
        <div className=" border-stone-400 border-b border-t my-5 px-5 pt-5 pb-10">
          <p className="text-primaryBlue text-4xl font-bold my-5">VBC</p>
          <div className="flex md:flex-row gap-5 flex-col text-footerGrey font-semibold">
            <div className="md:w-[60%] w-full md:pr-20 font-normal">
              <p>
                Empower professionals to effortlessly connect, collaborate, and
                grow their networks.
              </p>

              <div className="flex items-center mt-4 ">
                <MdOutlineMail className="text-xl" />
                <p>support@vbc.com</p>
              </div>

              <div className="flex items-center mt-4 md:mb-10 ">
                <BsTelephone className="text-xl" />
                <p>+92-331-7289717</p>
              </div>
            </div>
            <div className="md:w-[20%] w-full">Features</div>
            <div className="md:w-[20%] w-full">Reviews</div>
            <di className="md:w-[20%] w-full">About VBC</di>
            <div className="md:w-[20%] w-full">Contact Support</div>
          </div>
        </div>
        <div className="px-5 flex md:justify-between mb-5  md:flex-row flex-col gap-5 text-footerGrey">
          <p>© 2024 Virtual Business Card. All rights reserved.</p>
          <div className="flex gap-4 px-4">
            <FaFacebookSquare className="text-2xl hover:text-mediumBlue text-primaryLightBlue duration-500" />
            <FaInstagramSquare className="text-2xl hover:text-mediumBlue text-primaryLightBlue duration-500" />
            <FaLinkedin className="text-2xl hover:text-mediumBlue text-primaryLightBlue duration-500" />
          </div>
        </div>
      </footer>
    </>
  );
}
