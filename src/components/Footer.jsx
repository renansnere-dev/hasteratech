import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Adicionando a logomarca aqui */}
        <div className="footer-logo">
          <img src={logo} alt="HasteraTech Logo" />
        </div>

        <p>&copy; 2026 HasteraTech - Todos os direitos reservados.</p>
        <p>CNPJ MEI:63.836.230/0001-05 - Responsável Técnico: Renan Silva</p>
        <p>email: hastere.tech@gmail.com</p>
        <p>contato:(81)98563-9579</p>
      </div>
    </footer>
  );
};

export default Footer;