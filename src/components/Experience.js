// src/components/Experience.js
import React from "react";

function Experience() {
  return (
    <section id="experience" className="fade-in">
      <h2>Experiência Profissional</h2>
      <div className="experience-item">
        <h3>Venttos Eletronics</h3>
        <h4>Analista de TI</h4>
        <p>Abril de 2024 - Presente</p>
        <ul>
          <li>Desenvolvimento de soluções full stack usando Java e JavaScript.</li>
          <li>Integração com Node.js e manutenção de bancos de dados MySQL e Oracle.</li>
          <li>Criação de relatórios com JasperSoft.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Venttos Eletronics</h3>
        <h4>Estagiário de TI</h4>
        <p>Fevereiro de 2024 - Abril de 2024</p>
        <ul>
          <li>Suporte no desenvolvimento de sistemas de controle e automação utilizando Arduino.</li>
          <li>Auxílio na implementação de banco de dados MySQL e na manutenção de servidores locais.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
