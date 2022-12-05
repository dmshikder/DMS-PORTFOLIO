import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>DMS</h2>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


      <div >
        <button className="app__resume"><a target='_blank' href="https://drive.google.com/file/d/18pVUdOmM0Ig5kRIsS4ekn7NWTH-2RG7f/view?usp=share_link" rel="noreferrer">Resume</a></button>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
                 
        <button className="app__resume-mobileView"><a target='_blank' href="https://drive.google.com/file/d/1Z9GHKm2A2rfZducudGr3rs_Ro-R7VNBb/view?usp=sharing" rel="noreferrer">Resume</a></button>
    
            </ul>

         
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
