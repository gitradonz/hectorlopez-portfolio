import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

export default function AbsoluteMenu() {
  return (
    <div className="absolute h-screen w-screen z-50">
      <div className="flex justify-evenly pt-7 fixed top-0 items-center w-screen ">
        <Link to="/about" className="text-2xl text-center h-10 text-white z-50">
          About
        </Link>
        <Link to="/work" className="text-2xl text-center h-10 text-white z-50">
          Work
        </Link>
        <Link to="/5505" className="text-2xl text-center h-10 text-white z-50">
          5505
        </Link>
        <Link
          to="/contact"
          className="text-2xl text-center h-10 text-white z-50"
        >
          Contact
        </Link>
      </div>
      <Link to="/">
        <img
          className="pl-7 fixed top-1/2 items-center w-36 -translate-y-8"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="absolute top-1/2 right-7 text-white text-lg -translate-y-3.5 italic">
        {"hectxrlxpez®"}
      </div>
      <div className="flex justify-evenly pb-7 fixed bottom-0 items-center w-screen">
        <a
          href="https://www.instagram.com/hectxrlxpez/"
          target={"_blank"}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white"
        >
          ig
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%A9ctor-l%C3%B3pez-mart%C3%ADnez-b68496198/"
          target={"_blank"}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white"
        >
          in
        </a>{" "}
        <a
          href="https://www.behance.net/hectxr"
          target={"_blank"}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white"
        >
          be
        </a>{" "}
        <a
          href="https://www.facebook.com/hectxrlxpez"
          target={"_blank"}
          rel="noreferrer"
          className="text-2xl text-center h-10 text-white"
        >
          fb
        </a>
      </div>
    </div>
  );
}
