import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function ClientsSection() {
    const [currentStat, setCurrentStat] = useState(0);
    
    const stats = [
        "Mais de 100 projetos entregues com excelência",
        "Mais de 9 anos de experiência",
        "Mais de 4 países atendidos"
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="bg-black py-24 px-6 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[100px]" />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Confiança de marcas que buscam excelência</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Trabalhamos com os melhores
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                        <motion.div 
                            key={i}
                            initial={{ 
                                opacity: 0, 
                                filter: "blur(10px)",
                                y: 30
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                filter: "blur(0px)",
                                y: 0
                            }}
                            viewport={{ once: false }}
                            transition={{ 
                                duration: 0.6, 
                                delay: i * 0.05,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="flex items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 cursor-pointer"
                        >
                            <div className="text-white/40 text-xs font-medium">Cliente {i}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-16 h-12 flex items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.p 
                            key={currentStat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-gray-300 text-xl font-medium"
                        >
                            {stats[currentStat]}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}