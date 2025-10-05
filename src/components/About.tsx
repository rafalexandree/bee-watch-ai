import { Plane, Bug, Brain, BarChart3 } from "lucide-react";

const stats = [
  { value: "40K+", label: "hectares monitorados" },
  { value: "95%", label: "precisão IA" },
  { value: "Zero", label: "impacto ambiental" },
];

const icons = [
  { Icon: Plane, label: "Drone" },
  { Icon: Bug, label: "Abelha" },
  { Icon: Brain, label: "IA" },
  { Icon: BarChart3, label: "Dashboard" },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-bold text-primary tracking-widest uppercase">
                SOBRE O PROJETO
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Uma resposta estratégica à crise das abelhas
              </h2>
            </div>

            <p className="text-lg text-gray-dark leading-relaxed">
              A BeeGuard nasceu da necessidade urgente de enfrentar o
              desequilíbrio ecológico causado por espécies invasoras —
              especialmente vespas predadoras — sobre abelhas nativas brasileiras
              sem ferrão. Utilizando uma combinação de drones autônomos, visão
              computacional e inteligência artificial, o projeto oferece
              monitoramento contínuo e análise preditiva de ninhos de invasores,
              permitindo intervenções rápidas e cirúrgicas para proteger a
              biodiversidade e a segurança da apicultura local.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-accent p-6 rounded-xl mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {icons.map(({ Icon, label }, index) => (
                <div
                  key={label}
                  className="flex items-center justify-center animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-yellow-light border-4 border-primary flex items-center justify-center shadow-md">
                      <Icon className="w-12 h-12 text-primary" strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-primary whitespace-nowrap">
                      {label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: -1 }}
              >
                <line
                  x1="25%"
                  y1="25%"
                  x2="75%"
                  y2="25%"
                  stroke="hsl(var(--teal-primary))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
                <line
                  x1="25%"
                  y1="75%"
                  x2="75%"
                  y2="75%"
                  stroke="hsl(var(--teal-primary))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
                <line
                  x1="25%"
                  y1="25%"
                  x2="25%"
                  y2="75%"
                  stroke="hsl(var(--teal-primary))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
                <line
                  x1="75%"
                  y1="25%"
                  x2="75%"
                  y2="75%"
                  stroke="hsl(var(--teal-primary))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
