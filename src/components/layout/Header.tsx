"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Ícones consistentes com o projeto

// Links de navegação para fácil manutenção
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#destaques", label: "Destaques" },
  { href: "#contato", label: "Contato" },
  { href: "/agendamento", label: "Agendamento", isFeatured: true }, // Destaque
  { href: "https://oticasvizz.lojavirtualnuvem.com.br/", label: "Comprar", target: "_blank" },
  { href: "/politicas", label: "Políticas" },
];

/**
 * Componente de Cabeçalho Fixo
 * Um cabeçalho transparente que fica fixo no topo da página, com menu responsivo.
 * Convertido para TypeScript e Tailwind CSS.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Tipagem do Ref para o menu

  // Efeito para fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef} // Ref anexada ao cabeçalho para detectar cliques externos
      className="fixed top-0 left-0 w-full z-50 shadow-md"
    >
      {/* Filtro escuro para legibilidade */}
      <div className="absolute inset-0 w-full h-full bg-black/70 -z-10"></div>

      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="#home" className="h-10 w-10">
          <Image src="/images/logo.png" alt="Logo Óticas Vizz" width={40} height={40} />
        </Link>

        {/* Links de Navegação para Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label, target, isFeatured }) => (
            <Link
              key={label}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              className={`
                text-sm font-light text-gray-200 transition-all duration-300
                hover:text-yellow-400 hover:font-semibold
                ${isFeatured ? 'font-bold text-yellow-400' : ''}
              `}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Botão Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Menu de Navegação Mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col items-center p-4 gap-4"
          >
            {navLinks.map(({ href, label, target, isFeatured }) => (
              <Link
                key={label}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                className={`
                  text-lg text-gray-100 transition-colors duration-300
                  hover:text-yellow-400
                  ${isFeatured ? 'font-bold text-yellow-400' : ''}
                `}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}