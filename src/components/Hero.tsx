const Hero = () => {

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden">
      {/* Spline 3D Scene via iframe */}
      <iframe
        src="https://my.spline.design/interactivecolorblob-5tniViz10UQMOAZfQlmwZa5k/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full border-none"
        title="She Rising 3D Scene"
        loading="eager"
      />

      {/* Scroll down indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[#4D361E]/70 text-xs font-medium tracking-widest uppercase group-hover:text-[#4D361E] transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-[#4D361E]/40 rounded-full flex justify-center group-hover:border-[#4D361E]/70 transition-colors">
          <div className="w-1.5 h-1.5 bg-[#4D361E]/60 rounded-full mt-2 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;