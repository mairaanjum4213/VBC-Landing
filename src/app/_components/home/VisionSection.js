import React from "react";
import Image from "next/image";
import BackgroundVision from "../../../../public/assets/images/BackgorundVision.png";
import HeroBackground from "../../../../public/assets/images/HeroBackground.png";
import googlePlay from "../../../../public/assets/images/Google Play.png";
import appStore from "../../../../public/assets/images/AppStore.png";
import Contact from "../../_components/home/Contact"
import Marquee from "./Marquee";
export default function VisionSection() {


  return (
    <>
    <div className="relative h-[70vh] mt-10">
      <Image 
        src={BackgroundVision} 
        alt="Background" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="flex flex-col  gap-5 md:flex-row items-center md:items-start text-white px-5 md:px-10">
            <div className="w-full lg:w-[50%] text-xl lg:text-4xl font-bold text-center md:text-left">
              Our Vision: Revolutionizing Professional Networking
            </div>
            <div className="w-full lg:w-[40%]  md:mt-0 text-center md:text-left">
              Our vision is to revolutionize professional networking by
              providing a seamless, efficient, and innovative platform for
              creating, sharing, and managing virtual business cards.
              <br />
              <br />
           <p className="md-block hidden">   Through integrated scheduling, real-time updates, and offline
              connectivity, we aim to enhance the way professionals connect,
              collaborate, and grow their networks, anytime and anywhere. We
              strive to empower users with intuitive tools that foster
              meaningful connections and drive professional success.</p>
            </div>
          </div>
      </div>
    </div>

    
    </>
  );
}
