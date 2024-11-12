// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <div className="contact-info">
        <p><strong>E-mail:</strong> <a href="mailto:vmaia0111@gmail.com">vmaia0111@gmail.com</a></p>
        <p><strong>Telefone:</strong> <a href="tel:+5592991445320">(92) 99144-5320</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/viniciusmaia001/" target="_blank" rel="noopener noreferrer">linkedin.com/in/viniciusmaia001</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/vmaia0111" target="_blank" rel="noopener noreferrer">github.com/vmaia0111</a></p>
      </div>
    </section>
  );
}

export default Contact;
