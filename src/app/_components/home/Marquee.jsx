import React from 'react'
import Image from 'next/image'
import network from '../../../../public/assets/images/networking.png'
import alert from '../../../../public/assets/images/Alert.png'
import event from '../../../../public/assets/images/Events.png'
import meeting from '../../../../public/assets/images/meeting.png'
import calender from '../../../../public/assets/images/calender.png'
import remainder from '../../../../public/assets/images/Remainder.png'
import appointment from '../../../../public/assets/images/Appointment.png'
export default function Marquee() {
    const items = [
        {
            src: network,
            alt: 'network',
            text: 'Networking',
          },
          {
            src: meeting,
            alt: 'meeting',
            text: 'Meetings',
          },
          {
            src: event,
            alt: 'event',
            text: 'Events',
          },
          {
            src: calender,
            alt: 'calender',
            text: 'Calender',
          },
          {
            src: remainder,
            alt: 'remainder',
            text: 'Reminder',
          },
          {
            src: appointment,
            alt: 'appointment',
            text: 'Appointments',
          },
          {
            src: alert,
            alt: 'alert',
            text: 'Alerts',
          },
        ];

        const item2=[
            {
              src: alert,
              alt: 'alert',
              text: 'Alerts',
            },
            {
              src: appointment,
              alt: 'appointment',
              text: 'Appointments',
            },
            {
              src: remainder,
              alt: 'remainder',
              text: 'Reminder',
            },
            {
              src: calender,
              alt: 'calender',
              text: 'Calender',
            },
            {
              src: event,
              alt: 'event',
              text: 'Events',
            },
            {
              src: meeting,
              alt: 'meeting',
              text: 'Meetings',
            },
            {
              src: network,
              alt: 'network',
              text: 'Networking',
            },
          ];
    return (
        <>
            <section className="overflow-hidden relative mt-10">
    <div className="flex animate-marquee whitespace-nowrap">
      <div className="flex items-center gap-4">
        {items.map((item, index) => (
        <span key={index} className="flex items-center gap-3 border border-marque rounded-full w-fit px-5 py-3 bg-marque mx-4 overflow-hidden">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-marqueBg">
              <Image 
                src={item.src}
                alt={item.alt}
                className='max-w-[40px] max-h-[40px]'
              />
            </span>
            <span className="text-marqueText font-bold">{item.text}</span>
          </span>
        ))}

{items.map((item, index) => (
          <span key={index} className="flex items-center gap-3 border border-marque rounded-full w-fit px-5 py-3 bg-marque mx-4 overflow-hidden">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-marqueBg">
              <Image 
                src={item.src}
                alt={item.alt}
                className='max-w-[40px] max-h-[40px]'
              />
            </span>
            <span className="text-marqueText font-bold">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  </section>


  <section className="overflow-hidden relative my-5">
    <div className="flex animate-marquee whitespace-nowrap">
      <div className="flex items-center gap-4">
        {item2.map((item, index) => (
        <span key={index} className="flex items-center gap-3 border border-marque rounded-full w-fit px-5 py-3 bg-marque mx-4 overflow-hidden">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-marqueBg">
              <Image 
                src={item.src}
                alt={item.alt}
                className='max-w-[40px] max-h-[40px]'
              />
            </span>
            <span className="text-marqueText font-bold">{item.text}</span>
          </span>
        ))}

{item2.map((item, index) => (
          <span key={index} className="flex items-center gap-3 border border-marque rounded-full w-fit px-5 py-3 bg-marque mx-4 overflow-hidden">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-marqueBg">
              <Image 
                src={item.src}
                alt={item.alt}
                className='max-w-[40px] max-h-[40px]'
              />
            </span>
            <span className="text-marqueText font-bold">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
        </>
    )
}
