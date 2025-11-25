import React from 'react';
import { motion } from "framer-motion";

const services = [
    {
        icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/f7f487084_Avatar2.png",
        title: "Impacto Real",
        description: "Branding que conecta, engaja e transforma sua marca em referência no mercado."
    },
    {
        icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/cc2ba03f3_Noir_Prancheta1cpia2.png",
        title: "Visuais Fortes",
        description: "Design que impressiona e comunica sua mensagem com clareza e impacto visual."
    },
    {
        icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/d3097014c_Avatar.png",
        title: "Ideias Ousadas",
        description: "Estratégias criativas que quebram padrões e geram resultados extraordinários."
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-zinc-950 py-24 px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            {/* Subtle gradients */}
            <div className="absolute inset-0 gradient-bg-3" />
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        O que fazemos de melhor
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Combinamos criatividade com estratégia para criar campanhas que realmente funcionam
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ 
                                opacity: 0, 
                                y: 60,
                                filter: "blur(10px)"
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                filter: "blur(0px)"
                            }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group"
                        >
                            <motion.div 
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.5 }}
                                />
                                
                                <motion.div 
                                    className="w-16 h-16 mb-6 rounded-xl bg-white/10 p-3 relative z-10"
                                    whileHover={{ 
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img 
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-contain"
                                    />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">{service.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}