// src/components/Home.js
import React from "react";

function Home() {
  return (
    <section id="home" className="intro fade-in">
      <h2>Desenvolvedor Full Stack Jr.</h2>
      <p>Com experiência em criação de soluções completas e integração de sistemas.</p>
      <a 
        href="/Curriculo_Vinicius_Maia_da_Silva.pdf" 
        className="btn" 
        download 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Baixar Currículo
      </a>
    </section>
  );
}

export default Home;
