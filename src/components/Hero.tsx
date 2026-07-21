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

      {/* Transparent overlay to block all interaction with the 3D scene */}
      <div className="absolute inset-0 z-10" />

      {/* Scroll down indicator - sits above the overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-white/70 text-xs font-medium tracking-widest uppercase group-hover:text-white transition-colors drop-shadow-md">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;