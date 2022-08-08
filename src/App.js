import logo from "./logo.svg";

function App() {
  return (
    <div>
      <header>
        <nav className="h-32 flex justify-evenly items-center ">
          <img src={logo} className="w-10 h-10" alt="logo" />
          <p className="text-3xl font-bold text-center">About</p>
          <p className="text-3xl font-bold text-center">Works</p>
          <p className="text-3xl font-bold text-center">5505</p>
          <p className="text-3xl font-bold text-center">Contact</p>
        </nav>
      </header>
      <body className="h-screen bg-neutral-800"></body>
    </div>
  );
}

export default App;
