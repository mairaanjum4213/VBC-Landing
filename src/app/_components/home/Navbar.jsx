'use client'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Object containing navigation links and their data
  const navLinks = [
    { id: 1, title: 'Features', url: '#' },
    { id: 2, title: 'Review', url: '#' },
    { id: 3, title: 'About VBC', url: '#' },
  ];

  return (
    <>
      <nav className={`fixed w-full ${scrolling ? 'bg-primaryBlue' : 'md:bg-transparent bg-primaryBlue'} border-b border-stone-400 border-opacity-25 z-40 p-5`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">VBC</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center gap-1 md:w-auto">
            {navLinks.map((link) => (
              <a key={link.id} href={link.url} className="block mt-4 md:inline-block md:mt-0 font-semibold text-white mr-4">{link.title}</a>
            ))}

<div className='border-l border-white px-5  '>
  <button className='text-white border-white border px-5 py-2 rounded-full'>
    Contact Support
  </button>
</div>
          </div>
         
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-primaryBlue p-5">
            {navLinks.map((link) => (
              <a key={link.id} href={link.url} className="block mt-4 text-white font-semibold mr-4">{link.title}</a>
            ))}

<button className='text-white border-white border px-5 py-2 my-5 rounded-lg'>
    Contact Support
  </button>
          </div>
          
        )}
      </nav>
    </>
  );
};

export default Navbar;
