// src/components/Skills.js
import React from "react";

function Skills() {
  const skills = [
    "JavaScript", "Python", "Java", "React", "Node.js",
    "MongoDB", "SQL", "Oracle", "Git", "APIs REST"
  ];

  return (
    <section id="skills" className="fade-in">
      <h2>Habilidades</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
