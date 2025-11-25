import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FlashlightText({ text = "ON Y VA?" }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [letterFills, setLetterFills] = useState({});
    const letterRefs = React.useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            
            const newFills = {};
            letterRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const letterX = rect.left + rect.width / 2;
                    const letterY = rect.top + rect.height / 2;
                    
                    const distance = Math.sqrt(
                        Math.pow(e.clientX - letterX, 2) + 
                        Math.pow(e.clientY - letterY, 2)
                    );
                    
                    const maxDistance = 200;
                    const fill = Math.max(0, 1 - (distance / maxDistance));
                    newFills[index] = fill;
                }
            });
            setLetterFills(newFills);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Floating logo symbol with rotation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="mb-20"
            >
                <motion.img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/0e869d2b1_Noir_Prancheta1cpia3.png"
                    alt="NORD Symbol"
                    className="w-16 h-16 mx-auto opacity-40"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ 
                        scale: 1.2, 
                        rotate: 180,
                        opacity: 0.8,
                        transition: { duration: 0.6 }
                    }}
                />
            </motion.div>

            <div className="w-full relative z-10 overflow-hidden" style={{ maxHeight: '50vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                    style={{ transform: 'translateY(25%)' }}
                >
                    <h2 className="text-[26vw] font-black select-none font-balgin leading-none" style={{ letterSpacing: '-0.1em' }}>
                        {text.split('').map((char, index) => {
                            const fill = letterFills[index] || 0;
                            return (
                                <span
                                    key={index}
                                    ref={(el) => letterRefs.current[index] = el}
                                    className="inline-block transition-all duration-100 ease-out"
                                    style={{
                                        WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                        color: `rgba(255, 255, 255, ${fill})`,
                                        textShadow: fill > 0.5 
                                            ? `0 0 40px rgba(59, 130, 246, ${fill * 0.6}), 0 0 80px rgba(249, 115, 22, ${fill * 0.4})`
                                            : 'none',
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            );
                        })}
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}