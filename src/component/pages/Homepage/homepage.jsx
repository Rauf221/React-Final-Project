import React from "react";

import Navbar from "../../feature/Header/navbar.component";
import Footerr from "../../feature/Footer/footer";

import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footerr />
      </footer>
    </>
  );
};

export default Homepage;
