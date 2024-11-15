// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
//import GitHubRepos from "./components/GitHubRepos";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Detecta a seção ativa na tela
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} activeSection={activeSection} />

      {/* Seção com efeito parallax para Home */}
      <motion.section id="home" className="parallax" style={{ backgroundImage: `url('/path/to/home-background.jpg')` }}>
        <Home />
      </motion.section>

      {/* Seção Sobre Mim com efeito parallax */}
      <motion.section id="about" className="parallax" style={{ backgroundImage: `url('/path/to/about-background.jpg')` }}>
        <About />
      </motion.section>

      <motion.section id="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <Experience />
      </motion.section>

      <motion.section id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <Projects />
      </motion.section>

      {/* Nova seção de Repositórios do GitHub 
      {/*<motion.section id="github-repos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }}>
        <GitHubRepos />
      </motion.section>*/}

      <motion.section id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
        <Skills />
      </motion.section>

      <motion.section id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
        <Contact />
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
