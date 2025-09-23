<section className="relative bg-black min-h-[100svh]">
  {/* HERO MEDIA (art-directed) */}
  <picture className="absolute inset-0 -z-20">
    {/* Optional: use a portrait crop for mobile if you have it */}
    {/* <source media="(max-width: 767px)" srcSet="/hero-mobile-9x16.webp" /> */}
    <img
      src="/hero.webp" // <-- put your Kev's Auto Spa image here
      alt="Kev's Auto Spa hero"
      className="
        absolute inset-0 w-full h-full
        object-contain md:object-cover
      "
      fetchPriority="high"
    />
  </picture>

  {/* Optional soft vignette so text stays readable */}
  <div
    aria-hidden
    className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/60 md:from-black/50"
  />

  {/* CONTENT */}
  <div className="relative pt-24 md:pt-36 mx-auto max-w-7xl px-6">
    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
      <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] text-white font-bold">
        Kev&apos;s Auto Spa
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-200">
        Professional mobile detailing services in San Diego.
      </p>

      <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
        {/* your buttons unchanged */}
      </div>
    </div>
  </div>
</section>
