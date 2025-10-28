// src/components/NavBar.jsx - FINAL GREEN/CHARCOAL BRANDING
import React, { useState } from 'react';

const mainNavLinks = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about' },
    // Removed 'Services' from this main list, as it's now handled by the Dropdown component
    // Remaining links after Services
    { title: 'Careers', url: '/career' },
    { title: 'Contact', url: '/contact' },
];

const serviceLinks = [
    //{ title: "Services Overview", url: "/services" },
    { title: "Marine Logistics", url: "/services/marine-logistics" },
    { title: "Technical Tools", url: "/services/technical-tools-procurement" },
    { title: "Safety Materials Supply", url: "/services/safety-materials-supply" },
    { title: "International Procurement", url: "/services/international-procurement" },
    { title: "Onshore / Support", url: "/services/onshore-support" },
    { title: "Marine Tools/Equipment Support", url: "/services/marine-tools-equipment-support" },
    { title: "General Contracts", url: "/services/general-contracts" },
];


// Helper component for the Services Dropdown (Desktop Only)
const ServicesDropdown = () => {
    return (
        <div className="relative group hidden lg:block">
            {/* Nav link: uses Primary Green on hover */}
            <a href="/services" className="text-lg font-medium text-gray-700 hover:text-hillcrop-green transition duration-300 px-2 py-1 flex items-center">
                Services
                {/* Dropdown Arrow */}
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block w-72 mt-0 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 py-2">
                {serviceLinks.map((service) => (
                    <a 
                        key={service.title}
                        href={service.url} 
                        // Dropdown Links: uses Primary Green on hover
                        className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-hillcrop-green transition duration-200"
                    >
                        {service.title}
                    </a>
                ))}
            </div>
        </div>
    );
};


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false); 
    // New state for mobile services dropdown
    const [isServicesOpen, setIsServicesOpen] = useState(false); 

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* 1. LOGO: Replaced text with image link */}
                <a href="/" className="flex items-center">
                    <img 
                        src="/images/logo.png" 
                        alt="Hillcrop Energy Logo" 
                        class="h-12 w-auto" // CHANGED from h-10 to h-12
                        // Fallback for image loading error
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="/images/placeholder-logo.png" }} 
                    />
                </a>

                <nav className="hidden lg:flex space-x-6 items-center">
                    
                    {/* 2. MAIN LINKS (Desktop): Home & About Us */}
                    {mainNavLinks.slice(0, 2).map((link) => (
                        <a 
                            key={link.title}
                            href={link.url} 
                            className="text-lg font-medium text-gray-700 hover:text-hillcrop-green transition duration-300 px-2 py-1"
                        >
                            {link.title}
                        </a>
                    ))}
                    
                    {/* 3. SERVICES DROPDOWN: Positioned after 'About Us' */}
                    <ServicesDropdown />

                    {/* 4. REMAINING MAIN LINKS (Desktop): Contact & Careers */}
                    {mainNavLinks.slice(2).map((link) => (
                        <a 
                            key={link.title}
                            href={link.url} 
                            className="text-lg font-medium text-gray-700 hover:text-hillcrop-green transition duration-300 px-2 py-1"
                        >
                            {link.title}
                        </a>
                    ))}

                    {/* 5. CTA BUTTON (Desktop): Uses Primary Green */}
                    <a 
                        href="/contact" 
                        className="ml-2 px-6 py-2 bg-hillcrop-green text-white font-semibold rounded-full shadow-md hover:bg-hillcrop-green-dark transition duration-300 ease-in-out text-base"
                    >
                        Get a Quote
                    </a>
                </nav>

                {/* 6. MOBILE HAMBURGER ICON */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden text-gray-600 hover:text-hillcrop-green focus:outline-none"
                >
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <nav className="px-2 pt-2 pb-4 space-y-2 bg-gray-50 border-t border-gray-200">
                    
                    {/* Mobile Links: Home & About Us */}
                    {mainNavLinks.slice(0, 2).map((link) => (
                        <a 
                            key={link.title}
                            href={link.url} 
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-hillcrop-green rounded-lg transition duration-300"
                        >
                            {link.title}
                        </a>
                    ))}
                    
                    {/* Mobile Services Dropdown Block */}
                    <div className="border-b border-gray-200">
                        <button 
                            onClick={() => setIsServicesOpen(!isServicesOpen)} 
                            // Full width link styling
                            className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-hillcrop-green rounded-lg transition duration-300"
                        >
                            {/* Link to /services is nested, stopPropagation on click */}
                            <a 
                                href="/services" 
                                className="flex-grow font-medium" 
                                onClick={(e) => {
                                    // Prevents the button's toggle action when the link is clicked, allowing navigation
                                    e.stopPropagation(); 
                                }}
                            >
                                Services Overview
                            </a>
                            {/* Toggle Arrow */}
                            <svg 
                                className={`w-5 h-5 ml-2 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        
                        {/* Sub-Links - Conditionally rendered based on state */}
                        {isServicesOpen && (
                            <div className="pb-2 space-y-1">
                                {serviceLinks.slice(1).map((link) => (
                                    <a 
                                        key={link.title}
                                        href={link.url} 
                                        // Reduced padding for submenu look
                                        className="block px-3 py-2 pl-8 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-hillcrop-green rounded-lg transition duration-300"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Links: Contact & Careers */}
                    {mainNavLinks.slice(2).map((link) => (
                        <a 
                            key={link.title}
                            href={link.url} 
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-hillcrop-green rounded-lg transition duration-300"
                        >
                            {link.title}
                        </a>
                    ))}

                    {/* Mobile CTA Button: Uses Primary Green */}
                    <a 
                        href="/contact" 
                        className="mt-4 block px-3 py-2 text-base font-medium text-white bg-hillcrop-green hover:bg-hillcrop-green-dark rounded-lg text-center transition duration-300"
                    >
                        Get a Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}
