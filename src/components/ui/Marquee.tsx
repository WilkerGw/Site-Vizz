import Link from 'next/link';
import Image from 'next/image';

/**
 * Componente Marquee
 * Cria uma faixa de rolagem infinita com texto e imagens.
 * Ideal para anúncios e avisos importantes.
 */
export function Marquee() {
  // O conteúdo a ser repetido na faixa
  const marqueeContent = (
    <>
      <p className="flex-shrink-0 px-4 font-semibold">
        Exame de vista gratuito{' '}
        <span className="font-extrabold">SÁBADO 19/07 - Das 11:00 Às 16:00</span>
      </p>
      <Image
        src="/images/logo-cinza.png"
        alt="Logo Vizz"
        width={48}
        height={48}
        className="mx-4 h-12 w-12 flex-shrink-0"
      />
    </>
  );

  return (
    <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-r from-yellow-400 to-yellow-300 py-2 text-gray-800 uppercase overflow-hidden">
      <Link href="/agendamento" className="text-gray-800 no-underline">
        <div className="flex whitespace-nowrap">
          {/* O conteúdo é duplicado para criar o efeito de loop infinito */}
          <div className="flex items-center animate-marquee">
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
          </div>
          <div className="flex items-center animate-marquee" aria-hidden="true">
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </Link>
    </div>
  );
}