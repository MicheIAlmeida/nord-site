import React from 'react';
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* Subtle gradient backgrounds */}
            <div className="absolute inset-0 gradient-bg-1" />
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-blue-500/12 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-500/12 rounded-full blur-[120px]" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/10 rounded-full blur-[150px]" />
            
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center">
                    <motion.h2 
                        className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                        initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    >
                        Pronto para criar algo<br />
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0, filter: "blur(20px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">extraordinário?</span>
                        </motion.span>
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                        Vamos transformar suas ideias em campanhas que geram resultados reais
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            size="lg" 
                            className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-7 rounded-xl group relative overflow-hidden"
                             onClick={() => window.open('https://www.instagram.com/nord.pp', '_blank')}
                        >
                            <span className="relative z-10 flex items-center">
                                Iniciar projeto
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Button>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}