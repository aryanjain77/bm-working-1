import { useEffect, useRef, useState } from "react";

export function Manifesto() {
  const [isVisible, setIsVisible] = useState(false);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (manifestoRef.current) {
      observer.observe(manifestoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={manifestoRef}
      className="font-tech relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="manifesto"
    >
      {/* Angular bracket decorations */}
      <div className="absolute top-0 left-4 text-primary/30 font-mono text-7xl select-none pointer-events-none">
        {"<"}
      </div>
      <div className="absolute bottom-10 right-5 text-primary/30 font-mono text-7xl select-none pointer-events-none">
        {"/>"}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-0">
          {/* Title */}
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
          </div>

          {/* Manifesto Text */}
          <div className="space-y-8" data-testid="text-manifesto">
            <div 
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="font-brutalist font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground">
                I DON'T BUILD
              </p>
              <p className="font-brutalist font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                TEMPLATES.
              </p>
            </div>

            <div 
              className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="font-brutalist font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground">
                I BUILD
              </p>
              <p className="font-brutalist font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                INTELLIGENCE.
              </p>
            </div>

            <div 
              className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed border-l-4 border-primary/50 pl-6 py-4">
                Every line of code is a statement. Every system I architect is designed to scale, 
                to think, to evolve. I merge full-stack engineering with machine learning to create 
                applications that don't just work—they adapt, predict, and dominate their domain.
              </p>
            </div>

            <div 
              className={`transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="font-brutalist font-bold text-3xl sm:text-4xl md:text-5xl text-foreground uppercase">
                ZERO COMPROMISE.
              </p>
              <p className="font-brutalist font-bold text-3xl sm:text-4xl md:text-5xl text-primary uppercase">
                MAXIMUM IMPACT.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center border border-primary/20 p-6 hover-elevate">
              <div className="font-display font-black text-4xl md:text-5xl text-primary" data-testid="text-stat-projects">3+</div>
              <div className="font-mono text-sm text-muted-foreground mt-2">MAJOR PROJECTS</div>
            </div>
            <div className="text-center border border-primary/20 p-6 hover-elevate">
              <div className="font-display font-black text-4xl md:text-5xl text-primary" data-testid="text-stat-internships">3</div>
              <div className="font-mono text-sm text-muted-foreground mt-2">INTERNSHIPS</div>
            </div>
            <div className="text-center border border-primary/20 p-6 hover-elevate">
              <div className="font-display font-black text-4xl md:text-5xl text-primary" data-testid="text-stat-tech">15+</div>
              <div className="font-mono text-sm text-muted-foreground mt-2">TECH STACK</div>
            </div>
            <div className="text-center border border-primary/20 p-6 hover-elevate">
              <div className="font-display font-black text-4xl md:text-5xl text-primary" data-testid="text-stat-impact">100%</div>
              <div className="font-mono text-sm text-muted-foreground mt-2">DEDICATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}