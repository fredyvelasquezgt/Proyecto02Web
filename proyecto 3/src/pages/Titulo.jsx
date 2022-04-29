import React from 'react';
import logo from '../image/logo.png';

function Titulo() {
  return (
    <header className="titulo">
      <img src={logo} alt="CNET" />
      <p>Your guide to a better future</p>

      <section>
        <span>Tech</span>
        <span>Money</span>
        <span>Home</span>
        <span>Wellness</span>
        <span>Cars</span>
        <span>Culture</span>
        <span>Science</span>
        <span>More</span>
      </section>
    </header>
  );
}

export default Titulo;
