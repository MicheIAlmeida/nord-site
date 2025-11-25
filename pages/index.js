import React from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import ShowcaseGrid from '../components/home/ShowcaseGrid';
import ServicesSection from '../components/home/ServicesSection';
import ClientsSection from '../components/home/ClientsSection';
import CTASection from '../components/home/CTASection';
import FlashlightText from '../components/home/FlashlightText';
import Footer from '../components/home/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <HeroSection />
            <ShowcaseGrid />
            <ServicesSection />
            <ClientsSection />
            <CTASection />
            <FlashlightText text="ON Y VA?" />
            <Footer />
        </div>
    );
}