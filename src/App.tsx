import React from 'react';
import { HeroSection } from './components/ui/hero-section-5';
import { Component } from './components/ui/image-auto-slider';
import { FeaturesSectionWithHoverEffects } from './components/ui/feature-section-with-hover-effects';
import { Pricing } from './components/ui/pricing-cards';
import { FocusCardsDemo } from './components/ui/focus-cards-demo';
import BookingEmbed from './components/BookingEmbed';
import { Phone, Instagram, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Before & After Gallery Slider */}
      <Component />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional auto detailing services with attention to every detail
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kev's Auto Spa's recent projects
            </p>
          </div>
          <FocusCardsDemo />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
              Book Your Service
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to give your vehicle the professional care it deserves?
            </p>
          </div>
          <BookingEmbed />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kev's Auto Spa</h3>
              <p className="text-gray-300">
                Professional mobile auto detailing services in San Diego County.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:760-844-9066" className="text-gray-300 hover:text-white">
                    760-844-9066
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <a 
                    href="https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    @kevs.autospa
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Hours</h4>
              <p className="text-gray-300">Monday–Sunday: 6:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Kev's Auto Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;