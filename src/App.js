import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="absolute h-screen w-screen flex justify-evenly p-7 bg-transparent">
        <Link to="/about" className="text-3xl font-bold text-center">
          About
        </Link>
        <Link to="/work" className="text-3xl font-bold text-center h-10">
          Works
        </Link>
        <Link to="/5505" className="text-3xl font-bold text-center h-10">
          5505
        </Link>
        <Link to="/contact" className="text-3xl font-bold text-center h-10">
          Contact
        </Link>
        <Link to="/" className="text-3xl font-bold text-center h-10">
          <img className="absolute top-1/2 left-5 w-20" src={logo} alt="logo" />
        </Link>
        <div className="absolute top-1/2 right-10 ">{"hectxrlxpez®"}</div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/5505" element={<FiveFiveOFive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

function FiveFiveOFive() {
  return <div className="h-screen flex justify-center items-center">5505</div>;
}

function About() {
  return <div className="h-screen flex justify-center items-center">ABOUT</div>;
}

function Work() {
  return <div className="h-screen flex justify-center items-center">WORK</div>;
}

function Contact() {
  return (
    <div className="h-screen flex justify-center items-center">CONTACT</div>
  );
}

function Home() {
  return <div className="h-screen bg-gray-800" />;
}
