"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import InputMask from 'react-input-mask';
import { Calendar, Clock, User, Phone, Send } from 'lucide-react';

const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  let currentTime = new Date('2025-07-19T11:00:00');
  const endTime = new Date('2025-07-19T16:00:00');
  while (currentTime <= endTime) {
    slots.push(currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }
  return slots;
};

export function AppointmentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = generateTimeSlots();
  const appointmentDate = "19/07/2025";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!selectedTime) {
      alert('Por favor, selecione um horário.');
      setIsLoading(false);
      return;
    }

    const appointmentData = {
      firstName, lastName, phone, date: '2025-07-19', time: selectedTime,
    };
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}/agendamentos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao agendar. Por favor, tente novamente.');
      }

      alert('Agendamento realizado com sucesso!');
      setFirstName(''); setLastName(''); setPhone(''); setSelectedTime('');

    } catch (error: any) {
      console.error("Erro ao conectar com o backend:", error);
      alert(error.message || 'Ocorreu um erro inesperado. Verifique se o servidor backend está rodando.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium text-gray-700"><User size={16} />Nome</label>
            <input
              type="text" id="firstName" value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Sobrenome</label>
            <input
              type="text" id="lastName" value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700"><Phone size={16} />Telefone / WhatsApp</label>
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                type="tel"
                id="phone"
                placeholder="(11) 99999-8888"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            )}
          </InputMask>
        </div>
        <div>
          <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium text-gray-700"><Calendar size={16} />Data do Exame</label>
          <input
            type="text" id="date" value={appointmentDate}
            className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-sm text-gray-500 cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Clock size={16} />Escolha um Horário</label>
          <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time} type="button" onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                  selectedTime === time 
                  ? 'bg-yellow-400 text-gray-900 ring-2 ring-yellow-500' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit" disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-yellow-500 text-gray-900 font-bold rounded-md shadow-lg hover:bg-yellow-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-wait"
        >
          <Send size={20} />
          {isLoading ? 'Agendando...' : 'Confirmar Agendamento'}
        </button>
      </form>
    </motion.div>
  );
}