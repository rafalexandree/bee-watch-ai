import { Plane, Eye, Map, CheckCircle2 } from "lucide-react";

const techCards = [
  {
    icon: Plane,
    title: "Inspeção Aérea Autônoma",
    description:
      "Drones com rotas programadas para inspeção aérea de áreas apícolas",
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    description:
      "Algoritmos de visão computacional para identificar ninhos de vespas e colônias invasoras",
  },
  {
    icon: Map,
    title: "Painel de Controle Inteligente",
    description:
      "Painel de controle com mapeamento dinâmico e alertas automatizados para tomada de decisão rápida",
  },
];

export const Technology = () => {
  return (
    <section id="tecnologia" className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-bold text-primary tracking-widest uppercase">
            NOSSA TECNOLOGIA
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Drones autônomos + IA + geolocalização em tempo real
          </h2>
          <p className="text-lg text-gray-dark mt-4">
            A BeeGuard combina três frentes tecnológicas para criar uma
            vigilância contínua e precisa:
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-card p-8 rounded-2xl border-t-4 border-primary shadow-md hover-lift hover:bg-teal-veryLight transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-yellow-light border-2 border-primary/20 flex items-center justify-center mb-6">
                <card.icon className="w-10 h-10 text-primary" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-gray-dark leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary text-white p-8 rounded-xl shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <CheckCircle2
                    className="w-5 h-5 text-primary"
                    strokeWidth={3}
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-relaxed">
                Tudo operando com mínima interferência humana e alta
                escalabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
