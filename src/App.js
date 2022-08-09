import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Router>
      <AbsoluteMenu />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

function FiveFiveOFive() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      5505
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      ABOUT
    </motion.div>
  );
}

function Work() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      WORK
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      CONTACT
    </motion.div>
  );
}

function Home() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      HOME
    </motion.div>
  );
}

function AbsoluteMenu() {
  return (
    <>
      <div className="absolute h-screen w-screen flex justify-evenly p-7 bg-transparent">
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
          Works
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
        <img className="absolute top-1/2 left-5 w-20" src={logo} alt="logo" />
      </Link>
      <div className="absolute top-1/2 right-10 text-gray-300">
        {"hectxrlxpez®"}
      </div>
    </>
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
        <Route path="/5505" element={<FiveFiveOFive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
