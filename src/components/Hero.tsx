import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-primary to-primary/90" />

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              x="0"
              y="0"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L93.3 25 L93.3 62 L50 87 L6.7 62 L6.7 25 Z"
                fill="none"
                stroke="hsl(var(--yellow-primary))"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-sm animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <span className="text-2xl">🐝</span>
            <span className="text-secondary font-medium">
              Proteção Inteligente de Abelhas Nativas
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in-up"
            style={{
              animationDelay: "200ms",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Monitoramento inteligente para a proteção das abelhas nativas
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Combate automatizado a espécies invasoras com drones, visão
            computacional e IA aplicada à apicultura.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              onClick={() => scrollToSection("#tecnologia")}
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 h-auto animate-pulse-subtle shadow-xl hover:shadow-2xl"
            >
              → Conheça nossa tecnologia
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/80 hover:text-secondary transition-colors animate-bounce-gentle"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
