import React from 'react';
import { Link } from 'react-router-dom';
import homeButton from "../assets/hombutton-white-home-button-11563211148zdfdwfoi16.png";

export default function Header() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={homeButton} alt="home-button" width="5%" />
        </Link>
      </div>
    </nav>
  );
}
