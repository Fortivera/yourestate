import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-30 bg-white">
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Logo</div>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? '' : 'hidden'} lg:flex`}>
          <a href="#" className="mx-2 mt-2 text-gray-600 hover:underline lg:mx-4 lg:mt-0">
            Link 1
          </a>
          <a href="#" className="mx-2 mt-2 text-gray-600 hover:underline lg:mx-4 lg:mt-0">
            Link 2
          </a>
          <a href="#" className="mx-2 mt-2 text-gray-600 hover:underline lg:mx-4 lg:mt-0">
            Link 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
