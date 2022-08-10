import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AbsoluteMenu from "./sections/AbsoluteMenu";
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
