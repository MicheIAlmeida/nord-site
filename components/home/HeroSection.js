import React, { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 800], [0, 150]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const blurVariants = {
        hidden: { 
            opacity: 0, 
            filter: "blur(20px)",
            y: 30
        },
        visible: (custom) => ({
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 1,
                delay: custom * 0.15,
                ease: [0.23, 1, 0.32, 1]
            }
        })
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* DIV DO ESPAÇO */}
            <div className="h-20"></div>

            {/* Animated gradient background */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y
                }}
            />

            {/* Background effects... (mantenha todos os efeitos de fundo do seu código original) */}
            <div className="absolute inset-0 gradient-bg-1" />
            <div className="absolute inset-0 gradient-bg-2" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-orange-500/8 rounded-full blur-[120px]" />
            </div>
            
            {/* Grid pattern */}
            <motion.div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
                style={{ y }}
                initial={{ scale: 1.5, filter: "blur(10px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            />
            
            {/* Glow effects... (mantenha os efeitos de glow) */}

            <motion.div 
                className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center mt-40"
                style={{ opacity }}
            >
                {/* NOVO TÍTULO */}
<div className="mb-6">
    <h1 className="text-6xl md:text-8xl lg:text-[9rem] text-white tracking-tight font-['Funnel Display'] font-medium" style={{ lineHeight: '0.85' }}>
        {/* Primeira linha - Tamanho normal */}
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-medium"
        >
         Criamos o novo
        </motion.div>
        
        {/* Segunda linha - Fonte MENOR */}
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="font-extrabold text-9xl md:text-9xl lg:text-8xl"
        >
        Elevamos o extraordinário!
        </motion.div>
    </h1>
</div>

                <motion.p
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                    Criamos conteúdo criativo e estratégias impactantes. Sem complicação, só resultados.
                </motion.p>

                {/* Botões (mantenha os botões do seu código original) */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            size="lg" 
                            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-xl group relative overflow-hidden"
                             onClick={() => window.open('https://www.instagram.com/nord.pp', '_blank')}
                        >
                            <span className="relative z-10 flex items-center">
                                Começar projeto
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
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
                               onClick={() => window.open('https://nordpp.com', '_blank')}
                        >
                            <Play className="mr-2 w-5 h-5" />
                            Ver portfólio
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Logo rotating (mantenha a logo) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, delay: 2, ease: [0.23, 1, 0.32, 1] }}
                    className="mt-20 flex justify-center"
                >
                    <motion.img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/0e869d2b1_Noir_Prancheta1cpia3.png"
                        alt="NORD"
                        className="w-24 h-24 opacity-30"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        whileHover={{
                            scale: 1.3,
                            opacity: 0.6,
                            transition: { duration: 0.6 }
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}