import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Body from "./components/Body";
import DropDown from "./components/DropDown";
import React, { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="flex flex-col h-screen">
      <Nav toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
