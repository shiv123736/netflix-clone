import React, { useEffect, useState } from "react";
import "./style/nav.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log(window.screenY);
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <div className="nav_logo">
        <img
          className=""
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix logo"
          width="100%"
        ></img>
      </div>
    </nav>
  );
};

export default Navbar;
