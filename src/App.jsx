import React from "react"; // Import useState from 'react'
import { useState } from "react";

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import Technology from "./components/Technology";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Use useState here

  // Function to toggle the navigation menu state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Sidenav isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Main />
      <About />
      <Work />
      <Technology />
      <Contact />
    </>
  );
}

export default App;
