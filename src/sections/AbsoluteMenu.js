import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import mas from '../Images/mas.svg';

export default function AbsoluteMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-evenly pt-20 lg:pt-7 fixed top-0 items-center w-screen z-50 lg:flex-row">
        <button
          className={`${
            isOpen && 'rotate-45'
          } lg:hidden text-white transition-all duration-500 noSelectable mt-8 mb-4`}
          onClick={() => setIsOpen((p) => !p)}
        >
          <img src={mas} alt="mas" className="w-10 h-10" />
        </button>
        <Link
          to="/about"
          className={`${
            isOpen ? 'visible' : 'invisible'
          } text-7xl lg:text-2xl text-center h-[95px] lg:h-10 text-white z-50 hover:text-yellow transition-all duration-[300ms] noSelectable font-medium lg:visible`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/work"
          className={`${
            isOpen ? 'visible' : 'invisible'
          } text-7xl lg:text-2xl text-center h-[95px] lg:h-10 text-white z-50 hover:text-yellow transition-all duration-[225ms] noSelectable font-medium lg:visible`}
          onClick={() => setIsOpen(false)}
        >
          Work
        </Link>
        <Link
          to="/5505"
          className={`${
            isOpen ? 'visible' : 'invisible'
          } text-7xl lg:text-2xl text-center h-[95px] lg:h-10 text-white z-50 hover:text-yellow transition-all duration-[150ms] noSelectable font-medium lg:visible`}
          onClick={() => setIsOpen(false)}
        >
          5505
        </Link>
        <Link
          to="/contact"
          className={`${
            isOpen ? 'visible' : 'invisible'
          } text-7xl lg:text-2xl text-center h-[95px] lg:h-10 text-white z-50 hover:text-yellow transition-all duration-[75ms] noSelectable font-medium lg:visible`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <Link to="/">
        <img
          className="fixed top-8 right-1/2 w-18 translate-x-1/2 z-50 lg:w-28 lg:-translate-y-1/2 lg:left-0 lg:top-1/2"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="fixed top-1/2 right-7 text-white text-lg -translate-y-3.5 italic z-50 hover:text-yellow transition-all duration-300 noSelectable lg:visible invisible">
        {'hectxrlxpez??'}
      </div>
      <div className="fixed flex justify-evenly bottom-0 lg:pb-7 lg:bottom-0 lg:items-center w-screen z-50">
        <a
          href="https://www.instagram.com/hectxrlxpez/"
          target={'_blank'}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white z-50  hover:text-yellow hover:scale-150 transition-all duration-300 noSelectable"
        >
          ig
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%A9ctor-l%C3%B3pez-mart%C3%ADnez-b68496198/"
          target={'_blank'}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white z-50  hover:text-yellow hover:scale-150 transition-all duration-300 noSelectable"
        >
          in
        </a>{' '}
        <a
          href="https://www.behance.net/hectxr"
          target={'_blank'}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white z-50  hover:text-yellow hover:scale-150 transition-all duration-300 noSelectable"
        >
          be
        </a>{' '}
        <a
          href="https://www.facebook.com/hectxrlxpez"
          target={'_blank'}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white z-50 hover:text-yellow hover:scale-150 transition-all duration-300 noSelectable"
        >
          fb
        </a>
      </div>
    </div>
  );
}
