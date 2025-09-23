import React, { useEffect } from 'react';
import { Phone, Instagram, Star, MapPin, Clock, Mail, Home, Wrench, Image, DollarSign, Car, Sparkles, Menu, X } from 'lucide-react';
import { Pricing } from '@/components/ui/pricing-cards';
import ImagesScrollingDemo from '@/components/ui/images-scrolling-demo';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import { HoverButton } from '@/components/ui/hover-button';
import BookingEmbed from '@/components/BookingEmbed';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    // Simple scroll-reveal animation
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('in'); 
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));

    // Hero background shrink animation on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroVideo = document.getElementById('hero-bg-video');
      if (heroVideo) {
        // Calculate scale based on scroll position (start slightly larger, zoom out to normal)
        const scale = Math.max(1, 1.1 - scrollY * 0.0001);
        heroVideo.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle scroll for header background
    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 antialiased w-full overflow-x-hidden">
      {/* Transparent Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section with Navigation */}
          <div className="flex justify-between items-center py-2 relative overflow-hidden">
            {/* Mobile menu button aligned with logo */}
            <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation - Left side */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                Gallery
              </button>
            </nav>

            {/* Logo - Center */}
            <div className="flex-1 flex justify-center md:flex-none">
              <img 
                src="/images/65b1fa0e-3bc2-4f9f-baf3-d8d391c7f4df.png" 
                alt="Kev's Auto Spa Logo" 
                className="h-28 w-auto mx-4"
              />
            </div>

            {/* Desktop Navigation - Right side */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                Book Now
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Book Now
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* New Hero Section */}
      <section id="home">
        <section className="relative bg-black min-h-[120svh] md:min-h-[100svh] w-screen overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-screen h-full bg-contain sm:bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-bg.PNG')`
            }}
          />
          
          {/* Optional soft vignette so text stays readable */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 md:from-black/50 w-screen"
          />

          {/* CONTENT */}
          <div className="relative pt-24 md:pt-36 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-5xl lg:text-6xl text-gray-300 font-normal">
                Professional Auto Detailing Without Leaving Your Driveway
              </h1>
              
              {/* CTA Section */}
              <div className="mt-64 flex flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => window.open('tel:760-844-9066', '_self')}
                  className="relative isolate px-5 py-2 rounded-3xl text-white font-medium text-sm leading-5 backdrop-blur-lg bg-[rgba(43,55,80,0.1)] cursor-pointer overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:z-[1] before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)] before:mix-blend-multiply before:transition-transform before:duration-300 active:before:scale-[0.975] hover:scale-105 transition-transform duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services */}
      <section id="services" className="bg-black pb-0">
        <div className="bg-black py-16 md:py-20">
          <div className="text-center pb-8">
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
              Our Services
            </h2>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-anim>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                About Kev's Auto Spa
              </h2>
              <div className="space-y-4 text-gray-600 font-normal">
                <p className="text-lg leading-relaxed">
                  Kev's Auto Spa was founded by Keven Ponce, a car enthusiast dedicated to delivering top-tier detailing services. As CEO, Keven built the company on one simple belief, every vehicle deserves the same care and attention to detail as a luxury car.
                </p>
                <p>
                  From hand washes to advanced paint protection, Kev's Auto Spa takes pride in transforming vehicles and giving customers the confidence of a showroom-quality finish. With a passion for excellence and a commitment to customer satisfaction, Keven and his team ensure every car leaves polished, protected, and shining like new.
                </p>
              </div>
            </div>

            {/* Image */}
            <div data-anim className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/65b1fa0e-3bc2-4f9f-baf3-d8d391c7f4df.png" 
                  alt="Kev's Auto Spa Logo"
                  className="w-full h-96 object-cover bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="pt-0">
        <Pricing />
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12" data-anim>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Book Your Appointment
            </h2>
            <p className="text-gray-600 text-lg font-normal max-w-2xl mx-auto">
              Schedule your mobile auto detailing service at your convenience. 
              Choose your preferred date and time, and we'll come to you.
            </p>
          </div>
          
          {/* Calendly Embed */}
          <div className="max-w-4xl mx-auto" data-anim>
            <BookingEmbed />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/serjan-midili-ZJC-pdUbN3s-unsplash.jpg')`
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-12" data-anim>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Contact Info
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-xl" data-anim>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="text-sm text-gray-200 mb-3 font-medium">Hours</div>
                  <p className="text-white font-normal">Monday–Sunday: 6:00 AM – 5:00 PM</p>
                </div>
                
                <div>
                  <div className="text-sm text-gray-200 mb-3 font-medium">Location</div>
                  <p className="text-white font-normal">Located in Palm Springs</p>
                  <p className="text-gray-200 text-sm font-normal mt-1">Mobile Service Available</p>
                </div>
                
                <div>
                  <div className="text-sm text-gray-200 mb-3 font-medium">Contact</div>
                  <ul className="space-y-3 font-normal">
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <a href="tel:760-844-9066" className="text-white hover:text-blue-400 transition-colors">
                        760-844-9066
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Instagram className="w-5 h-5 text-blue-400" />
                      <a 
                        href="https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        @kevs.autospa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-300 text-gray-600 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-normal">© 2025 Kev's Auto Spa</p>
          <p className="text-xs font-normal">Professional auto detailing services in San Diego County</p>
        </div>
      </footer>

      {/* Custom styles for animations */}
      <style jsx>{`
        [data-anim] {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease;
        }
        [data-anim].in {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </div>
  );
}

export default App;
