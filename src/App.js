import logo from "./Images/logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Fivefiveofive from "./sections/Fivefiveofive";
import Home from "./sections/Home";

function App() {
  return (
    <Router>
      <AbsoluteMenu />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

function AbsoluteMenu() {
  return (
    <div className="absolute z-10">
      <div className=" h-screen w-screen flex justify-evenly p-7">
        <Link
          to="/about"
          className="text-3xl font-bold text-center text-gray-300"
        >
          About
        </Link>
        <Link
          to="/work"
          className="text-3xl font-bold text-center h-10 text-gray-300"
        >
          Work
        </Link>
        <Link
          to="/5505"
          className="text-3xl font-bold text-center h-10 text-gray-300"
        >
          5505
        </Link>
        <Link
          to="/contact"
          className="text-3xl font-bold text-center h-10 text-gray-300"
        >
          Contact
        </Link>
      </div>
      <Link to="/" className="text-3xl font-bold text-center h-10">
        <img
          className="absolute top-1/2 left-5 w-24 -translate-y-6"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="absolute top-1/2 right-7 text-gray-300 text-lg -translate-y-3.5">
        {"hectxrlxpez®"}
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/5505" element={<Fivefiveofive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
