import React from 'react';

export const Component = () => {
  // Images for the infinite scroll - using your actual detailing work
  const images = [
    "/images/IMG_8387.png", // After detailing
    "/images/IMG_1421.PNG", // Additional before/after work
    "/images/IMG_1427-2.PNG", // More detailing results
    "/images/IMG_8418-2.png", // Professional transformation
    "/images/IMG_8419-2.png", // Quality detailing work
    "/images/IMG_8387.png"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full bg-gray-50 relative overflow-hidden flex items-center justify-center py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50/95 to-gray-100 z-0" />
        
        {/* Section Header */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 px-4">Before & After Gallery</h3>
          <p className="text-base md:text-xl text-gray-600 px-4">See the incredible transformations we achieve</p>
          <a 
            href="https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-1 md:mt-2 text-xs md:text-sm text-gray-500 hover:text-gray-700 transition-colors font-normal px-4"
          >
            View full gallery on Instagram →
          </a>
        </div>
        
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center mt-24">
          <div className="scroll-container w-full max-w-6xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      </div>
    </>
  );
};