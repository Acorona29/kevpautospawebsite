import React from 'react';
import { FocusCardsDemo } from '@/components/ui/focus-cards-demo';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/images/65b1fa0e-3bc2-4f9f-baf3-d8d391c7f4df.png" 
                alt="Kev's Auto Spa Logo" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="/#services" className="text-gray-700 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="/#pricing" className="text-gray-700 hover:text-gray-900 font-medium">
                Pricing
              </a>
              <a href="/gallery" className="text-blue-600 font-medium">
                Gallery
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-gray-600 text-lg font-normal max-w-2xl mx-auto">
              Kev's Auto Spa's recent projects
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <FocusCardsDemo />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-300 text-gray-600 bg-white">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-normal">© 2025 Kev's Auto Spa</p>
          <p className="text-xs font-normal">Professional auto detailing services in San Diego County</p>
        </div>
      </footer>
    </div>
  );
}