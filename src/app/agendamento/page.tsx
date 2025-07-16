import { AppointmentForm } from "../../components/agendamento/AppointmentForm";

export default function AgendamentoPage() {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Agende seu Exame de Vista Gratuito
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          Aproveite nossa data especial para cuidar da sua saúde ocular! O exame é rápido, completo e realizado por profissionais qualificados. Preencha o formulário abaixo para garantir seu horário.
        </p>
        
        <div className="mt-8 mb-12 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded-r-lg inline-block">
          <p className="font-bold">Próxima data disponível: Sábado, 19 de Julho de 2025</p>
          <p className="text-sm">Horários de atendimento das 11:00 às 16:00.</p>
        </div>

        <div className="mt-12">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}