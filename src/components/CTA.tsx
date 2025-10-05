import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-primary to-primary" />

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons-cta"
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
          <rect width="100%" height="100%" fill="url(#hexagons-cta)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Junte-se à missão de proteger as abelhas do futuro
          </h2>

          <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            Estamos em busca de parceiros, instituições e investidores que
            compartilhem da nossa visão de proteção ambiental com base em
            inovação responsável.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-12 py-6 h-auto shadow-2xl animate-pulse-subtle hover:shadow-[0_15px_60px_rgba(245,227,159,0.5)]"
            asChild
          >
            <a href="mailto:contato@beeguard.com">
              → Entre em contato com a BeeGuard
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
