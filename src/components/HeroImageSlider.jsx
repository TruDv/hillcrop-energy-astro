import React, { useState, useEffect } from 'react';

// NOTE: You will need to ensure these image paths are valid in your project setup.
const slides = [
    {
        //tagline: "Marine Logistics and Support",
        headline: "Delivering Critical Offshore <span class='text-hillcrop-green'>Operations</span>.",
        subtext: "Providing vessel chartering, specialized crew transfers, and complex equipment transport across the globe.",
        image: "/images/marine-logistics.png",
        key: 0
    },
    {
        //tagline: "Procurement and Supply Chain",
        headline: "Ensuring Reliable and Timely <span class='text-hillcrop-green'>Supply</span>.",
        subtext: "Managing end-to-end sourcing, quality control, and certified equipment delivery to remote locations.",
        image: "/images/procurement.png",
        key: 1
    },
    {
        //tagline: "Onshore Support Services",
        headline: "Ground Support for Uninterrupted <span class='text-hillcrop-green'>Success</span>.",
        subtext: "From warehousing and maintenance to facility management, we back up your remote field operations.",
        image: "/images/onshore-support.jpg", // Updated to match image path style
        key: 2
    },
];

const HeroImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance the slide every 7 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000); 
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        // FINAL FIX: Using h-[500px] for stable mobile height, removing unreliable vh unit on small screens.
        <div className="relative h-[500px] md:h-[80vh] bg-gray-900 overflow-hidden"> 

            {/* Background Image Slider with Crossfade Transition */}
            {slides.map((s, index) => (
                <div
                    key={s.key}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
                    style={{ 
                        backgroundImage: `url(${s.image})`,
                        opacity: index === currentSlide ? 0.7 : 0, 
                        zIndex: index === currentSlide ? 5 : 0 // Ensure current slide is on top
                    }}
                />
            ))}

            {/* Content Container (Fixed, Layered over all slides) */}
            {/* Responsive Padding maintained for guaranteed space top/bottom */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-14 pb-14 md:pt-24 md:pb-24">
                <div className="text-white max-w-4xl">

                    {/* Tagline: Reduced tagline size to text-lg on mobile */}
                    <p 
                        key={`tag-${slide.key}`}
                        className="font-body text-lg md:text-2xl font-semibold text-hillcrop-green mb-2 uppercase tracking-wider transition-opacity duration-700 ease-in-out opacity-100"
                    >
                        {slide.tagline}
                    </p>

                    {/* Headline: Reduced headline size to text-2xl on mobile and reduced margin to mb-3 */}
                    <h1 
                        key={`head-${slide.key}`}
                        className="font-heading text-2xl md:text-6xl font-extrabold leading-tight mb-3 transition-opacity duration-700 ease-in-out opacity-100"
                        // Using dangerouslySetInnerHTML to allow the span tag for green color
                        dangerouslySetInnerHTML={{ __html: slide.headline }}
                    >
                    </h1>

                    {/* Subtext: Reduced subtext size to text-base on mobile and reduced margin to mb-4 */}
                    <p 
                        key={`sub-${slide.key}`}
                        className="font-body text-base md:text-xl text-green-100 mb-4 max-w-2xl transition-opacity duration-700 ease-in-out opacity-100"
                    >
                        {slide.subtext}
                    </p>

                    {/* Call to Action (CTA) Buttons: Fixed CTA regardless of slide */}
                    <div className="flex space-x-3">
                        <a 
                            href="/services" 
                            // Primary CTA: Brand Green
                            className="font-heading px-5 py-2 md:px-8 md:py-3 bg-hillcrop-green text-white font-bold text-base md:text-lg rounded-lg shadow-xl transform transition duration-330 hover:bg-hillcrop-green-dark hover:scale-[1.03]"
                        >
                            Explore Services
                        </a>
                        <a 
                            href="/contact" 
                            // Secondary CTA: White border/text, hover to brand Green
                            className="font-heading px-5 py-2 md:px-8 md:py-3 border-2 border-white text-white font-bold text-base md:text-lg rounded-lg shadow-xl transform transition duration-300 hover:bg-white hover:text-hillcrop-green"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide Indicators/Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={`dot-${index}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-hillcrop-green w-8' : 'bg-gray-400 opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroImageSlider;
