import React from "react";
import Image from "next/image";
import CardExchange from "../../../../public/assets/images/CardExchange.png";


export default function Header() {

  
  
  return (
    <>

    <div className="container mx-auto p-5">
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

        <div className="md:w-[60%] w-full text-center rounded-lg bg-white shadow-md lg:text-left BG-WHITE">

<p className="text-center text-xl font-bold my-2"> 
 1.  Select Your Tempelate
</p>

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
