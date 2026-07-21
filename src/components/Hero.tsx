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
        src='https://my.spline.design/interactivecolorblob-5tniViz10UQMOAZfQlmwZa5k/'
        frameBorder='0'
        width='100%'
        height='100%'
        className="absolute inset-0 w-full h-full border-none"
        title="She Rising 3D Scene"
        loading="eager"
      />

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-3 cursor-pointer group bg-white/20 backdrop-blur-md px-6 py-4 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          <span className="text-[#8B4513] text-sm font-semibold tracking-widest uppercase drop-shadow-lg">
            Scroll Down
          </span>
          <img src="/icons/arrow-down.svg" className="w-6 h-6 animate-bounce" alt="scroll down" />
        </button>
      </div>
    </section>
  );
};

export default Hero;