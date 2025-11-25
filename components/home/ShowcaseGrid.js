import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const featuredItems = [
    {
        id: 1,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/20cfa671e_Feed---Fileira_01.png",
        title: "Branding",
        category: "Design"
    },
    {
        id: 2,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/59d2ac619_Feed---Fileira_02.png",
        title: "Estratégia",
        category: "Conteúdo"
    },
    {
        id: 3,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/cffe88319_Feed---Fileira_03.png",
        title: "Campanhas",
        category: "Marketing"
    }
];

const regularItems = [
    {
        id: 4,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/2813c9e15_Design.png",
        title: "Design",
        category: "Visual"
    },
    {
        id: 5,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/4baeaa1c6_Diaadia.png",
        title: "Dia a dia",
        category: "Social"
    },
    {
        id: 6,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/b19c4e8c2_Estratgia.png",
        title: "Estratégia",
        category: "Planejamento"
    },
    {
        id: 7,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/d1902f6d1_Fotografia.png",
        title: "Fotografia",
        category: "Produção"
    }
];

const showcaseItems = [...featuredItems, ...regularItems];

const categories = ["Todos", "Design", "Conteúdo", "Planejamento", "Produção"];

export default function ShowcaseGrid() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [hoveredId, setHoveredId] = useState(null);

    const filteredItems = activeCategory === "Todos" 
        ? showcaseItems 
        : showcaseItems.filter(item => item.category === activeCategory);

    return (
        <section className="bg-black py-24 px-6 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Category filters */}
                <div className="flex flex-wrap gap-3 justify-center mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category
                                    ? 'bg-white text-black'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Grid - 3 items em destaque */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.filter(item => item.id <= 3).map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ 
                                    opacity: 0, 
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    filter: "blur(0px)"
                                }}
                                exit={{ 
                                    opacity: 0, 
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.08,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group"
                            >
                                <motion.img 
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredId === item.id ? 1.15 : 1
                                    }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <motion.p 
                                            className="text-xs text-gray-300 mb-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: hoveredId === item.id ? 1 : 0,
                                                y: hoveredId === item.id ? 0 : 10
                                            }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {item.category}
                                        </motion.p>
                                        <motion.h3 
                                            className="text-xl font-bold text-white"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: hoveredId === item.id ? 1 : 0,
                                                y: hoveredId === item.id ? 0 : 10
                                            }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Regular Grid - 4 items menores */}
                <motion.div 
                    layout
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.filter(item => item.id > 3).map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ 
                                    opacity: 0, 
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    filter: "blur(0px)"
                                }}
                                exit={{ 
                                    opacity: 0, 
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.08,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                            >
                                <motion.img 
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredId === item.id ? 1.15 : 1
                                    }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <motion.p 
                                            className="text-xs text-gray-300 mb-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: hoveredId === item.id ? 1 : 0,
                                                y: hoveredId === item.id ? 0 : 10
                                            }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {item.category}
                                        </motion.p>
                                        <motion.h3 
                                            className="text-xl font-bold text-white"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: hoveredId === item.id ? 1 : 0,
                                                y: hoveredId === item.id ? 0 : 10
                                            }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}