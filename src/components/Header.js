// src/components/Header.js
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>Vinicius Maia da Silva</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
