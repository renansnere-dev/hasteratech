import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const listaServicos = [
  { id: 1, nome: "Hospedagem de Aplicação", entrega: "Cloud & DevOps", icon: "☁️" },
  { id: 2, nome: "Novo Site/Loja", entrega: "Desenvolvimento Web", icon: "🌐" },
  { id: 3, nome: "Análise de Métricas", entrega: "Análise de Dados", icon: "📊" },
  { id: 4, nome: "Suporte Técnico", entrega: "Suporte Especializado", icon: "🛠️" },
  { id: 5, nome: "Desenvolvimento Sob Medida", entrega: "Desenvolvimento", icon: "💻" },
  { id: 6, nome: "Estratégia Tecnológica", entrega: "Consultoria em TI", icon: "🧠" },
  { id: 7, nome: "Manutenção de Sistemas", entrega: "Sustentação", icon: "🔋" },
];

export default function ServicosInterativos() {
  const [selecionados, setSelecionados] = useState([]);
  const [dragKey, setDragKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({ nome: "", contato: "", email: "" });

  const handleDragEnd = (event, info, servico) => {
    if (info.offset.x > 100) {
      if (!selecionados.find(s => s.id === servico.id)) {
        setSelecionados([...selecionados, servico]);
      }
    }
    setDragKey(prev => prev + 1);
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const numeroWhats = "5581985639579";
    const listaServicosTexto = selecionados.map(s => `• ${s.entrega}`).join("%0A");
    
    const mensagem = `*Novo Orçamento - Hastera Tech*%0A%0A` +
      `*Nome:* ${userData.nome}%0A` +
      `*Contato:* ${userData.contato}%0A` +
      `*E-mail:* ${userData.email}%0A%0A` +
      `*Serviços Selecionados:*%0A${listaServicosTexto}`;

    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
    setIsModalOpen(false);
  };

  const maskPhone = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Coloca parênteses no DDD
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca o hífen no número
    return value.substring(0, 15); // Limita o tamanho máximo
  };

const handlePhoneChange = (e) => {
  const formattedPhone = maskPhone(e.target.value);
  setUserData({ ...userData, contato: formattedPhone });
};

  return (
    <div className="portfolio-container">
      <div className="interactive-title">
        <span className="badge">Selecione os Serviços</span>
        <h2>Monte sua solução personalizada</h2>
        <p>Arraste os cards para a direita e faça seu orçamento</p>
      </div>

      <div className="drag-area-container">
        <div className="cards-to-drag">
          {listaServicos.map((s) => (
            <motion.div
              key={`${s.id}-${dragKey}`}
              drag="x"
              dragConstraints={{ left: 0, right: 300 }}
              onDragEnd={(e, info) => handleDragEnd(e, info, s)}
              whileDrag={{ scale: 1.05, zIndex: 10, boxShadow: "0px 10px 30px rgba(227, 181, 236, 0.5)" }}
              className="drag-card"
            >
              <div className="card-content">
                <span className="card-icon">{s.icon}</span>
                <div className="card-text">
                  <strong>{s.nome}</strong>
                  <small>Arraste para selecionar →</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="selection-zone">
          <div className="selection-header">
            <h3>Itens Selecionados</h3>
            <span className="count-badge">{selecionados.length}</span>
          </div>
          <div className="selected-list">
            <AnimatePresence>
              {selecionados.length === 0 && <p className="placeholder-text">Sua lista está vazia...</p>}
              {selecionados.map((s) => (
                <motion.div key={s.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="selected-item">
                  <span>{s.entrega}</span>
                  <button onClick={() => setSelecionados(selecionados.filter(item => item.id !== s.id))}>✕</button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {selecionados.length > 0 && (
            <button className="btn-contact-final" onClick={() => setIsModalOpen(true)}>Solicitar Orçamento</button>
          )}
        </div>
      </div>

      {/* MODAL INTERATIVO */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="modal-content"
            >
              <h3>Finalizar Solicitação</h3>
              <p>Preencha seus dados para enviarmos a proposta.</p>
              
              <form onSubmit={enviarWhatsApp}>
                <input 
                  type="text" placeholder="Seu Nome" required 
                  onChange={(e) => setUserData({...userData, nome: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="WhatsApp: (00) 00000-0000" 
                  required 
                  value={userData.contato}
                  onChange={handlePhoneChange}
                />
                <input 
                  type="email" placeholder="Seu E-mail" required 
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
                
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                  <button type="submit" className="btn-submit">Enviar para o WhatsApp</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}