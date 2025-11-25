import React, { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const menuItems = ['Serviços', 'Portfólio', 'Sobre', 'Contato'];

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ 
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1]
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                isScrolled 
                    ? 'bg-black/80 backdrop-blur-xl border-white/10' 
                    : 'bg-transparent border-white/10'
            } group-header`}
            onMouseMove={(e) => {
                const border = e.currentTarget.querySelector('.border-flare');
                if (border) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    border.style.left = `${x}px`;
                }
            }}
        >
            {/* Flare na borda superior do header */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
                <div className="border-flare absolute top-0 h-full w-96 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-header-hover:opacity-100 transition-opacity duration-200 blur-md" 
                     style={{ transform: 'translateX(-50%)' }} />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between relative">
                    {/* Linha horizontal abaixo do header com efeito flare */}
                    <div 
                        className="absolute -bottom-4 left-0 right-0 h-px overflow-visible group cursor-pointer"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const percentage = (x / rect.width) * 100;
                            const flare = e.currentTarget.querySelector('.line-flare');
                            if (flare) {
                                flare.style.left = `${percentage}%`;
                            }
                        }}
                    >
                        <div 
                            className="absolute inset-0 bg-white/20"
                        />
                        <div 
                            className="line-flare absolute top-1/2 -translate-y-1/2 h-[40px] w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-75 pointer-events-none"
                            style={{ 
                                transform: 'translateX(-50%) translateY(-50%)',
                                background: 'radial-gradient(ellipse 200px 40px at center, rgba(255,255,255,0.8) 0%, rgba(59,130,246,0.4) 30%, transparent 70%)',
                                filter: 'blur(8px)'
                            }}
                        />
                    </div>
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/d3b16d801_Noir_Prancheta1cpia.png"
                            alt="NORD"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item, i) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                                whileHover={{ 
                                    y: -2,
                                    textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                                }}
                                className="text-gray-300 hover:text-white transition-all text-sm font-medium relative"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.div 
                        className="hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button 
                                className="bg-white text-black hover:bg-gray-200 rounded-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">Começar projeto</span>
                                <motion.div
                                    className="absolute inset-0 bg-gray-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item}
                                    className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                                >
                                    {item}
                                </button>
                            ))}
                            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-lg mt-4">
                                Começar projeto
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}