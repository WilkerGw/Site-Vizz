"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { Eye, Wrench, UserCheck } from "lucide-react";
import React from 'react';

type Service = {
  icon?: React.ReactNode; title: string; highlight: string; description?: string; images?: string[];
};

const servicesData: Service[] = [
  { icon: <Eye size={48} />, title: "Exame de Vista", highlight: "Gratuito", description: "Cuidamos da sua saúde ocular com precisão, usando o que há de mais moderno em aparelhos optométricos.", },
  { icon: <Wrench size={48} />, title: "Óculos de Grau", highlight: "Personalizados", description: "Criamos óculos sob medida para você! Escolha a armação perfeita e conte com lentes adaptadas às suas necessidades.", },
  { icon: <UserCheck size={48} />, title: "Consultoria com", highlight: "Especialistas", description: "Nossa equipe de Optometristas está pronta para te ajudar a escolher o melhor óculos para seu estilo e conforto.", },
  { title: "Trabalhamos com as", highlight: "Melhores Marcas", images: ["/images/parceiros/hb.png", "/images/parceiros/hoya.png", "/images/parceiros/varilux-logo-0.png", "/images/parceiros/zeiss.png"], },
];

export function FeaturesSection() {
  return (
    <section id="servicos" className="w-full py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative pb-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Soluções Completas para sua Visão
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div key={index} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[350px] hover:-translate-y-2" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }}>
              {service.icon && (<div className="text-yellow-500 mb-6">{service.icon}</div>)}
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-4 leading-tight">
                {service.title}{" "}
                <span className="block text-2xl text-yellow-500 mt-1">{service.highlight}</span>
              </h3>
              {service.description && (<p className="text-gray-600 text-center text-sm leading-relaxed">{service.description}</p>)}
              {service.images && (
                <div className="flex flex-wrap justify-center items-center gap-8 w-full mt-auto pt-4">
                  {service.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-10 w-24">
                       <Image
                        src={image}
                        alt={`Logo parceiro ${imgIndex + 1}`}
                        fill
                        sizes="100px" // Definimos um tamanho fixo, já que são logos pequenos
                        className="object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}