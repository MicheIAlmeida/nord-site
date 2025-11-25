import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function ClientsSection() {
    const [currentStat, setCurrentStat] = useState(0);
    
    const stats = [
        "100 projetos entregues",
        "9 anos", 
        "4 países"
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentStat}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-white text-5xl md:text-6xl lg:text-6xl font-['Funnel Display']"
                    >
                        {/* "Mais de" em MEDIUM */}
                        <span className="font-medium">Mais de </span>
                        
                        {/* Número + texto em EXTRA BOLD */}
                        <span className="font-extrabold">
                            {stats[currentStat]}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}