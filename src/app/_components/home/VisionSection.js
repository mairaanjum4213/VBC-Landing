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
      <Marquee />
      <Contact />
      <div className="container mx-auto relative mt-5">
        {/* Background Image */}
        <Image
          src={HeroBackground}
          className="w-full h-[300px] md:h-auto object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white p-6 lg:p-10">
          <div className="text-base md:text-4xl font-bold w-full lg:w-[40rem] text-center md:text-left">
            Connect, Share and Grow effortlessly!
          </div>
          <div className="text-gray mt-5 lg:mt-20 text-center md:text-left">
            What are you waiting for? Download the App now!
          </div>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-2 mt-5 items-center md:items-start">
            {/* Google Play Button */}
            <button className="border border-white rounded-lg p-2 flex items-center">
              <div className="flex justify-start px-1">
                <div>
                  <Image
                    className="w-[2rem] h-[2.4rem]"
                    height={24}
                    width={24}
                    src={googlePlay}
                    alt="Google Play"
                  />
                </div>
                <div className="flex flex-col items-start pl-2">
                  <p className="text-[0.7rem]">GET IT ON</p>
                  <p className="font-bold text-[0.9rem]">Google Play</p>
                </div>
              </div>
            </button>
            {/* App Store Button */}
            <button className="border border-white rounded-lg p-2 flex items-center">
              <div className="flex justify-start px-1">
                <div>
                  <Image
                    className="w-[2rem] h-[2.4rem]"
                    height={24}
                    width={24}
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
        </div>
      </div>
    </>
  );
}
