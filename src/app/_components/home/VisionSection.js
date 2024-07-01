import React from "react";
import Image from "next/image";
import BackgroundVision from "../../../../public/assets/images/BackgorundVision.png";
import HeroBackground from "../../../../public/assets/images/HeroBackground.png";
import googlePlay from "../../../../public/assets/images/Google Play.png";
import appStore from "../../../../public/assets/images/AppStore.png";
import Contact from "../../_components/home/Contact"

export default function VisionSection() {
  return (
    <>
      <div style={{ position: "relative" }} className="mt-10">
        <div className="p-5 md:p-10 absolute inset-0 md:top-[30%] text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-[50%] text-lg md:text-4xl font-bold text-center md:text-left">
              Our Vision: Revolutionizing Professional Networking
            </div>
            <div className="w-full md:w-[40%] mt-3 md:mt-0 text-center md:text-left">
              Our vision is to revolutionize professional networking by
              providing a seamless, efficient, and innovative platform for
              creating, sharing, and managing virtual business cards.
              <br />
              <br />
              Through integrated scheduling, real-time updates, and offline
              connectivity, we aim to enhance the way professionals connect,
              collaborate, and grow their networks, anytime and anywhere. We
              strive to empower users with intuitive tools that foster
              meaningful connections and drive professional success.
            </div>
          </div>
        </div>
        <Image
          src={BackgroundVision}
          style={{ objectFit: "cover" }}
          className="w-full h-[450px] md:h-auto"
        />
      </div>

      <Contact/>

      <div className="container mx-auto relative mt-5">
        <div className="p-6 md:p-10 absolute top-[0] md:top-[20%] text-white">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-base md:text-4xl font-bold w-full md:w-[40rem] text-center md:text-left">
              Connect, Share and Grow effortlessly!
            </div>
            <div className="text-gray mt-5 md:mt-20 text-center md:text-left">
              What are you waiting for? Download the App now!
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 md:gap-2 mt-5 items-center md:items-start">
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
                <div className="flex flex-col items-start pl-2">
                  <p className="text-[0.7rem]">GET IT ON</p>
                  <p className="font-bold text-[0.9rem]">Google Play</p>
                </div>
              </div>
            </button>
            <button className="border border-white rounded-lg p-2 flex items-center">
              <div className="flex justify-start px-1">
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
        </div>
        <Image
          src={HeroBackground}
          className="w-full h-[300px] md:h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
