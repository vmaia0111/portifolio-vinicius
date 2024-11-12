// src/components/Projects.js
import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Sistema de Controle e Automação com Arduino",
      description: "Sistema completo de controle e automação industrial, integrando sensores e atuadores via Arduino.",
      link: "#"
    },
    {
      title: "Integração de Relatórios Customizados com JasperSoft",
      description: "Implementação de relatórios personalizados para insights sobre KPIs da empresa.",
      link: "#"
    },
    {
      title: "Sistema de Gerenciamento de Estoque com MySQL",
      description: "Sistema de controle de estoque com banco de dados MySQL e interface em JavaFX.",
      link: "#"
    },
    {
      title: "Aplicação Web para Gestão de Projetos Internos",
      description: "Aplicação web com Node.js e JavaScript para acompanhamento de projetos e alocação de recursos.",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
