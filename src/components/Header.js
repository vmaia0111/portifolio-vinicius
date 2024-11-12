// src/components/Header.js
import React, { useState } from "react";

function Header({ toggleTheme, darkMode, activeSection }) {
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
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "🌞" : "🌜"}
      </button>
      <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li className={activeSection === "home" ? "active" : ""}><a href="#home">Home</a></li>
          <li className={activeSection === "about" ? "active" : ""}><a href="#about">Sobre Mim</a></li>
          <li className={activeSection === "experience" ? "active" : ""}><a href="#experience">Experiência</a></li>
          <li className={activeSection === "projects" ? "active" : ""}><a href="#projects">Projetos</a></li>
          <li className={activeSection === "skills" ? "active" : ""}><a href="#skills">Habilidades</a></li>
          <li className={activeSection === "contact" ? "active" : ""}><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
