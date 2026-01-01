import React from 'react';
import logo from '../assets/logo.png';
import estrategia from '../assets/estrategia.png';
import desenvolvimento from '../assets/desenvolvimento.png';
import inovacao from '../assets/inovacao.png'
import desenvolver from '../assets/desenvolver.png'
import implantacao from '../assets/implantacao.png'
import cloud from '../assets/cloud.png'
import suporte from '../assets/suporte.png'
import moniotramento from '../assets/monitoramento.png'
import consultoria from '../assets/consultoria.png'


const Hero = () => {
  // Seu número no formato: 55 + DDD + Numero (sem espaços ou traços)
  const whatsappNumber = "5581985639579"; 
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria da HasteraTech.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  return (
    <main className="hero">
      <section className="hero-content">
        <img src={logo} alt="HasteraTech Logo" className="hero-logo" />
        <div>
          <h1>Inove. Escale. Lidere.</h1>
          <p>Transforme suas rotinas manuais em digitais, sem complicação, escale seu negócio para outro nível com a ajuda da tecnologia.</p>
          
          <div className="hero-cards">
            <div className="card">
              <img src={estrategia} alt="Estratégia" />
              <h3>Estratégia</h3>
              <p>Planejamento digital focado em resultados reais.</p>
            </div>
            <div className="card">
              <img src={desenvolvimento} alt="Desenvolvimento" />
              <h3>Desenvolvimento</h3>
              <p>Soluções robustas e escaláveis sob medida.</p>
            </div>
            <div className="card">
              <img src={inovacao} alt="Inovação" />
              <h3>Inovação</h3>
              <p>Tecnologia de ponta para o seu negócio.</p>
            </div>
          </div>
        </div>
        <h2>Tecnologia move o mundo, e para impulsionar o seu negócio temos os seguintes serviços</h2>
        <div className="animated-divider"></div>
        <div className="hero-cards">
          <div className="card">
            <img src={implantacao} alt="Implantação" />
            <h3>Implantação de Sistemas</h3>
            <p>Implantação e sustentação de sistemas ERP, CRM , WMS dentre outros, com hospedagem e alta disponibilidade</p>
          </div>
          <div className="card">
            <img src={cloud} alt="Cloud" />
            <h3>Deploy de Aplicações</h3>
            <p>Hospedagem de serviços e aplicações, utilizando as principais Clouds do mercado.</p>
          </div>
          <div className="card">
            <img src={suporte} alt="Suporte" />
            <h3>Manutenção e Suporte</h3>
            <p>Atualizações de ambiente tecnolgógico, tanto interno quando externo, garantindo as melhores práticas e segurança da informação.</p>
          </div>
          <div className="card">
            <img src={desenvolver} alt="Desenvolver" />
            <h3>Desenvolvimento de Aplicações Web</h3>
            <p>Levantamento de requisitos e desenvolvimento de aplicações e serviços web, transformando rotinas manuias em digitais.</p>
          </div>
          <div className="card">
            <img src={moniotramento} alt="Monitoramento" />
            <h3>Monitoramento de Serviços</h3>
            <p>Monitore em tempo real suas aplicações e conexões, recebendo alertas de falhas, para não perder desempenho.</p>
          </div>
          <div className="card">
            <img src={consultoria} alt="Consultoria" />
            <h3>Consultoria de Tecnologia</h3>
            <p>Realizamos consultoria especializada em serviços digitais, com foco em continuidade de negócio e escalabilidade.</p>
          </div>
        </div>
        <h2>Entre em contato e agende uma análise de requisitos gratuitamente</h2>
        {/* Link para o WhatsApp */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp"
        >
          Falar com Consultor no WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Hero;