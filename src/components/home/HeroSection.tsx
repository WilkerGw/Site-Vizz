"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Calendar,
  ShoppingCart,
  Search,
} from "lucide-react";
import { OverlayFilter } from "../ui/OverlayFilter";
import { Marquee } from "../ui/Marquee";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/oticasvizz/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61565492837095",
      icon: Facebook,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/551123628799",
      icon: MessageCircle,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`Buscando por: ${searchQuery}`);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-4 text-gray-100 overflow-hidden">
      <Image
        src="/images/background.jpg"
        alt="Background de uma ótica"
        fill
        priority
        className="-z-10 object-cover brightness-50"
        sizes="100vw"
      />

      <OverlayFilter />

      <div className="absolute top-12 left-0 right-0 z-20 flex justify-center lg:justify-end p-4 mt-4">
        <form onSubmit={handleSearch} className="w-full max-w-md ">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Encontre sua armação ou óculos de sol..."
              className="w-full h-12 pl-12 pr-4 rounded-full text-white placeholder:text-gray-300 bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 lg:h-8"
            />
            <button
              type="submit"
              className="absolute inset-y-0 left-0 pl-4 flex items-center"
              aria-label="Procurar"
            >
              <Search className="h-5 w-5 text-gray-200" />
            </button>
          </div>
        </form>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8 animate-fade-in-up">
        <div className="w-36 mb-4">
          <Image
            src="/images/logo.png"
            alt="Logo Óticas Vizz"
            width={144}
            height={144}
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl text-shadow-md">
          PREÇO <span className="text-yellow-400">JUSTO</span> E QUALIDADE{" "}
          <span className="text-yellow-400">GARANTIDA</span>
        </h1>
        <div className="flex flex-col items-center gap-3">
          <p>Nos siga nas redes sociais:</p>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-100 transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-110"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 w-full">
          <Link
            href="/agendamento"
            className="group relative flex items-center gap-4 w-full max-w-sm md:w-auto justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-x-hidden"
          >
            <div className="absolute top-0 -left-full h-full w-3/4 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-full"></div>
            <Calendar size={24} />
            <div className="flex flex-col items-start text-left">
              <span className="text-base leading-tight">
                Agende seu exame gratuito
              </span>
              <small className="text-xs font-normal opacity-90">
                Vagas LIMITADAS!
              </small>
            </div>
          </Link>
          <a
            href="https://oticasvizz.lojavirtualnuvem.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full max-w-sm md:w-auto justify-center px-6 py-3 rounded-xl bg-black/20 border-2 border-yellow-400/80 text-white font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-yellow-400/20 hover:border-yellow-300"
          >
            <ShoppingCart size={24} />
            <div className="flex flex-col items-start text-left">
              <span className="text-base leading-tight">
                Visite nossa{" "}
                <span className="text-yellow-400">Loja Virtual</span>
              </span>
              <small className="text-xs font-normal opacity-90">
                Compre Online
              </small>
            </div>
          </a>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
