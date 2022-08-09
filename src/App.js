import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="absolute h-screen w-screen flex justify-evenly p-7 bg-transparent">
        <Link to="/about" className="text-3xl font-bold text-center">
          About
        </Link>
        <Link to="/work" className="text-3xl font-bold text-center">
          Works
        </Link>
        <Link to="/5505" className="text-3xl font-bold text-center">
          5505
        </Link>
        <Link to="/contact" className="text-3xl font-bold text-center">
          Contact
        </Link>
        <img className="absolute top-1/2 left-5 w-20" src={logo} alt="logo" />
        <div className="absolute top-1/2 right-10 ">{"hectxrlxpez®"}</div>
      </nav>

      <Routes>
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
  return <h2>5505</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Work() {
  return <h2>Work</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
