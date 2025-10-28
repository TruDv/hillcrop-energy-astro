// src/components/HeroSection.jsx - FINAL BRANDED VERSION
import React from 'react';

export default function HeroSection() {
    return (
        // 1. Main container: Use dark green for a professional, deep background overlay
        <div className="relative h-[65vh] md:h-[80vh] bg-hillcrop-green-dark overflow-hidden">

            {/* 2. Background Image/Video Placeholder */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40" 
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} 
            ></div>

            {/* 3. Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                <div className="text-white max-w-4xl">

                    {/* Tagline: Use Accent Blue for contrast */}
                    <p className="font-body text-xl md:text-2xl font-semibold text-hillcrop-blue mb-3 uppercase tracking-wider">
                        Future-Ready Energy Solutions
                    </p>

                    {/* Main Headline: Apply Montserrat font (font-heading) and increased size */}
                    <h1 className="font-heading text-4xl md:text-7xl font-extrabold leading-tight mb-6">
                        Powering Tomorrow's <span className="text-hillcrop-blue">Industry</span> Today.
                    </h1>

                    {/* Subtext: Light text for readability */}
                    <p className="font-body text-lg md:text-xl text-green-100 mb-8 max-w-2xl">
                        From secure oil and gas infrastructure to cutting-edge renewable power, Hillcrop Energy delivers reliability, sustainability, and innovation across the globe.
                    </p>

                    {/* Call to Action (CTA) Buttons: Using Accent Blue and Green brand colors */}
                    <div className="flex space-x-4">
                        <a 
                            href="/services" 
                            // Primary CTA: Accent Blue
                            className="font-heading px-8 py-3 bg-hillcrop-blue text-white font-bold text-lg rounded-lg shadow-xl transform transition duration-330 hover:bg-hillcrop-blue-dark hover:scale-[1.03]"
                        >
                            Explore Services
                        </a>
                        <a 
                            href="/contact" 
                            // Secondary CTA: White border/text, hover to brand Green
                            className="font-heading px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-lg shadow-xl transform transition duration-300 hover:bg-white hover:text-hillcrop-green"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}