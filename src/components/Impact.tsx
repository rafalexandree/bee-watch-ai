import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Preservação ativa de abelhas nativas sem ferrão",
  "Prevenção de desequilíbrios ecológicos causados por predadores",
  "Apoio à agricultura sustentável e à polinização natural",
  "Redução de custos operacionais para apicultores",
  "Interface de dados acessível para tomada de decisão baseada em evidências",
];

export const Impact = () => {
  return (
    <section id="impacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-bold text-primary tracking-widest uppercase">
            NOSSO IMPACTO
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Inovação de baixo impacto com alta precisão ecológica
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-accent border-l-4 border-primary rounded-lg hover:bg-teal-veryLight hover:translate-x-2 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle2
                    className="w-5 h-5 text-secondary"
                    strokeWidth={3}
                  />
                </div>
              </div>
              <p className="text-lg text-foreground leading-relaxed pt-0.5">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
