import React from 'react';
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6920c463f0b41b8fd16f8072/d3b16d801_Noir_Prancheta1cpia.png"
                            alt="NORD"
                            className="h-10 w-auto mb-6"
                        />
                        <p className="text-gray-400 max-w-md mb-6">
                            <span className="font-extrabold brand-name text-white">NORD</span>
                            <span className="font-normal brand-suffix text-gray-300">|PP</span>
                            <span> - Creative Content Studio.</span><br />
                            Transformando ideias em campanhas que geram resultados reais.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Mail className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Serviços</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Estratégia</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Conteúdo</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fotografia</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Portfólio</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 <span className="font-bold brand-name">NORD</span><span className="brand-suffix">|PP</span>. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-gray-500 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}