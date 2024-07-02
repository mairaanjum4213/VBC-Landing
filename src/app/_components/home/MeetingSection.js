import React from 'react'
import Image from 'next/image'
import Meeting1 from "../../../../public/assets/images/Meeting1.png"
import Meeting2 from "../../../../public/assets/images/Meeting2.png"
import Meeting3 from "../../../../public/assets/images/Meeting3.png"
export default function MeetingSection() {
  return (
    <>
    <div className="container mx-auto">
        <div>
            <div className="text-primaryBlue px-5  md:text-center text-xl md:text-4xl font-bold">Schedule Meetings and Events on the go!</div>
            <div className='text-gray text-center mx-auto w-[80%] text-md md:text-lg mt-5'>Schedule appointments, meetings, and events with participant invites via email or contacts list. Receive notifications for contact updates, card shares, event reminders, and instant alerts for networking opportunities.</div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center mt-5">
            <div><Image src={Meeting1} alt="Calender" width={380} height={380}/></div>
            <div><Image src={Meeting2} alt="Calender" width={400} height={400}/></div>
            <div><Image src={Meeting3} alt="Calender" width={400} height={400}/></div>
        </div>
      
    </div>
    </>
    
  )
}
