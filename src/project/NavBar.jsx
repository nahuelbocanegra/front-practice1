import React, { useState } from "react";

export default function NavBar() {
  const [visi, setVisi] = useState(false);
  return (
    <nav>
      
        <div className={`cont-logo ${
              visi ? "" : "visi-cont-logo"
            }`}>
          <div
            className={`cont-it-a-nav ${
              visi ? "mn-visi-span" : "mn-no-visi-span"
            }`}
          >
            <span className="it-a"></span>
            <span className="it-a"></span>
            <span className="it-a"></span>
            <span className="it-a"></span>
          </div>
          <div
            className={`cont-it-b-nav ${
              visi ? " " : "mn-no-visi-span"
            }`}
          >
            <span className="it-b"></span>
            <span className="it-b"></span>
            <span className="it-b"></span>
            <span className="it-b"></span>
          </div>
        </div>
       
          <h3
            className={`menu-mobile ${visi ? "mn-visi" : "mn-no-visi"}`}
            onClick={() => setVisi(!visi)}
          >
            Menu<i className="bx bx-chevron-down"></i>
          </h3>
        
        <ul className={`menu ${visi ? "visi" : " "}`}>
          <li>Live</li>
          <li>Push</li>
          <li>Note</li>
          <li>Link</li>
          <li>Shop</li>
          <li>Packs</li>
          <li>Help</li>
          <li className="more">More +</li>
          <li className="login">
            <h3 className="text-color-nav">Try Live for free</h3>
            <p>Login or register</p>
          </li>
        </ul>
      
    </nav>
  );

  {
    /*
    <nav>
        </nav>
      */
  }
}
