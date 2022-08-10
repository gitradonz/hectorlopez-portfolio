import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

export default function AbsoluteMenu() {
  return (
    <>
      <div className="absolute z-10 h-screen w-screen">
        <div className="flex justify-evenly pt-7">
          <Link to="/about" className="text-3xl text-center h-10 text-white">
            About
          </Link>
          <Link to="/work" className="text-3xl text-center h-10 text-white">
            Work
          </Link>
          <Link to="/5505" className="text-3xl text-center h-10 text-white">
            5505
          </Link>
          <Link to="/contact" className="text-3xl text-center h-10 text-white">
            Contact
          </Link>
        </div>
        <Link to="/" className="text-3xl text-center h-10">
          <img
            className="absolute top-1/2 left-5 w-24 -translate-y-6"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="absolute top-1/2 right-7 text-white text-lg -translate-y-3.5 italic">
          {"hectxrlxpez®"}
        </div>
        <div className="flex justify-evenly pb-7 absolute bottom-0 items-center w-screen">
          <a
            href="http://www.instagra.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-3xl text-center h-10 text-white"
          >
            ig
          </a>
          <a
            href="http://www.instagra.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-3xl  text-center h-10 text-white"
          >
            in
          </a>{" "}
          <a
            href="http://www.instagra.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-3xl  text-center h-10 text-white"
          >
            be
          </a>{" "}
          <a
            href="http://www.instagra.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-3xl  text-center h-10 text-white"
          >
            fb
          </a>
        </div>
      </div>
    </>
  );
}