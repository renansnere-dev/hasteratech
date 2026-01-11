import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import logo from "./assets/logo.png";
import logofooter from "./assets/logo-footer.png";
import "./App.css"; 
import ServicosInterativos from "./components/ServicosInterativos";

function App() {
  const [init, setInit] = useState(false);
  const words = ["INOVE", "ESCALE", "LIDERE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Muda a palavra a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#00f2fe" },
      move: {
        direction: "right",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 120, 
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
        animation: { enable: true, speed: 1, sync: false }
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: false, // Desativado para parecer microbolinhas soltas
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
      },
      modes: {
        bubble: { size: 6, distance: 100, duration: 2, opacity: 0.8 },
      },
    },
    detectRetina: true,
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio-interativo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Camada das Partículas */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      )}
      
      {/* Camada do Conteúdo do Site */}
      <Router>
        <div className="app-wrapper">
          <header className="header">
            <div className="header-content">
              <div className="logo-area">
                <img src={logo} alt="Logo" className="logo-img" />
                <span className="brand-name">HASTERA<span>TECH</span></span>
              </div>
              <nav className="nav-menu">
                <a href="/">Início</a>
                <a href="#servicos">Serviços</a>
              </nav>
            </div>
          </header>

          <main className="hero-section">
            <div className="hero-text">
              <span className="badge">Nova Era Digital</span>
              <h1>Transformando ideias em <span>experiências</span> digitais.</h1>
              <p>Criamos soluções de alto impacto com a tecnologia mais moderna do mercado.</p>
              <div className="cta-group">
                <button onClick={scrollToPortfolio} className="btn-primary">
                  Conhecer Serviços
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="futuristic-text-container">
                <div className="glitch-wrapper">
                  {/* A 'key' é essencial para o React reiniciar a animação CSS quando a palavra mudar */}
                  <h2 className="pulsing-text" key={words[index]}>
                    {words[index]}
                  </h2>
                </div>
                <div className="status-indicator">
                  <span className="blink-dot"></span>
                  <span className="status-label">SYSTEM_EVOLVING</span>
                </div>
              </div>
            </div>
          </main>

          <section className="services" id="servicos">
            <div className="services-header">
              <span className="badge">Nossas Especialidades</span>
              <h2>Soluções inteligentes para o seu <span>negócio</span></h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h3>Desenvolvimento Web</h3>
                <p>Sistemas robustos e sites de alta performance utilizando as tecnologias mais recentes.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Consultoria de TI</h3>
                <p>Planejamento estratégico e otimização de processos para acelerar a transformação digital da sua empresa.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Cloud & DevOps</h3>
                <p>Infraestrutura escalável e segura para garantir que seu serviço nunca pare.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">🛠️</div>
                <h3>Suporte Especializado</h3>
                <p>Assistência técnica ágil e monitoramento contínuo para garantir a estabilidade total da sua operação.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>Identidade Visual</h3>
                <p>Criação de marcas memoráveis e interfaces intuitivas que conectam sua empresa ao público certo.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">📈</div>
                <h3>Análise de Dados</h3>
                <p>Transformamos dados brutos em insights estratégicos para apoiar suas decisões e maximizar lucros.</p>
              </div>
            </div>
          </section>

          <section id="portfolio-interativo" className="interactive-section">
            <ServicosInterativos />
          </section>

          {/* Botão flutuante do WhatsApp */}
          <a 
            href="https://wa.me/5581985639579?text=Olá! Gostaria de falar com um consultor." 
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="whatsapp-content">
              <span className="whatsapp-text">Falar com Consultor</span>
              <div className="whatsapp-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </div>
          </a>

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-brand">
                <img src={logofooter} alt="Logo-Footer" className="logo-footer" />
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Navegação</h4>
                  <a href="/">Início</a>
                  <a href="#servicos">Serviços</a>
                </div>
                <div className="footer-column">
                  <h4>Contato</h4>
                  <p>E-mail: hastera.tech@gmail.com</p>
                  <p>Telefone: +55 (81) 98563-9579</p>
                  <p>CNPJ: 63.836.230/0001-05</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Hastera Tech. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;