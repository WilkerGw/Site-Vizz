"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

/**
 * Componente ContactSection
 * Exibe informações de contato, um mapa do Google e um formulário
 * que envia uma mensagem formatada para o WhatsApp.
 */
export function ContactSection() {
  // Estados para controlar os campos do formulário
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !message.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Número de telefone para onde a mensagem será enviada
    const phoneNumber = "551123628799"; 
    
    // Formata a mensagem para a URL do WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${fullName}.\n\nMensagem: ${message}`
    );

    // Cria e abre o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className=" overflow-x-hidden w-full bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative pb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Entre em Contato Conosco
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna da Esquerda: Informações e Formulário */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Loja</h3>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <MapPin className="text-yellow-500" size={20} />
                Av. Do Oratório, 4869 - Jd. Guairaca, São Paulo - SP
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-yellow-500" size={20} />
                (11) 2362-8799
              </p>
               <p className="flex items-center gap-3">
                <Mail className="text-yellow-500" size={20} />
                oticasvizz@gmail.com
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-green-500 text-white font-bold rounded-md shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Coluna da Direita: Mapa */}
          <motion.div
            className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.055898863266!2d-46.48839062378902!3d-23.53032746092042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66c3746e1135%3A0x633e8d97443a6773!2sAv.%20%C3%81guia%20de%20Haia%2C%202632%20-%20Jardim%20Soraia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003694-000!5e0!3m2!1spt-BR!2sbr!4v1721087857181!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}