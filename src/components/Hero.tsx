import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden bg-gradient-to-b from-white to-[#c4b4a7]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 border-3 border-[#C4A173] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/Ts36A7I8CkkFTNVH/scene.splinecode"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          />
        </Suspense>
      </div>

      {/* Invisible overlay to block all interaction with the 3D scene */}
      <div className="absolute inset-0 z-10" />

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