import { useEffect, useState } from "react";
import { HoverButton } from "@/components/ui/hover-button";
import { Phone, Instagram } from "lucide-react";

function Hero() {
  return (
    <section 
      className="relative bg-black min-h-[120svh] md:min-h-[100svh] bg-contain md:bg-cover bg-center bg-no-repeat w-full overflow-hidden"
      style={{
        backgroundImage: `url('/images/hero-bg.PNG')`
      }}
    >
      {/* Optional soft vignette so text stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/60 md:from-black/50 w-full"
      />

      {/* CONTENT */}
      <div className="relative pt-24 md:pt-36 mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 w-full">
          <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-5xl lg:text-6xl text-gray-300 font-normal">
            Professional Shine Without Leaving Your Driveway
          </h1>
          
          {/* Memo between title and CTA */}
          <p className="mt-6 max-w-2xl mx-auto text-balance text-lg md:text-xl font-normal" style={{ color: '#1a237e' }}>
            Detailing Backed by Premium Products & Proven Care
          </p>
          
          {/* CTA Section */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <HoverButton 
              onClick={() => window.open('tel:760-844-9066', '_self')}
              className="text-white hover:text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </HoverButton>
            <HoverButton 
              onClick={() => window.open('https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1', '_blank')}
              className="text-white hover:text-white"
            >
              <Instagram className="mr-2 h-4 w-4" />
              View Our Work
            </HoverButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };