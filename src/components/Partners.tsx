export const Partners = () => {
  const partnerSlots = Array(8).fill(null);

  return (
    <section id="parceiros" className="py-24 bg-yellow-light">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-bold text-primary tracking-widest uppercase">
            ECOSSISTEMA DE PARCEIROS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Ciência aplicada em rede de colaboração
          </h2>
          <p className="text-lg text-gray-dark mt-6">
            O projeto BeeGuard é desenvolvido em parceria com instituições de
            pesquisa, apicultores locais, startups de tecnologia ambiental e
            órgãos de preservação. O monitoramento contínuo gera dados que
            alimentam pesquisas acadêmicas, políticas públicas e sistemas de
            alerta precoce.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Lizard Domain - Featured */}
          <div className="bg-primary p-8 rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="text-secondary font-bold text-xl mb-1">
              LIZARD DOMAIN
            </div>
            <div className="text-white/80 text-sm">Iniciativa</div>
          </div>

          {/* Partner Placeholders */}
          {partnerSlots.slice(0, 7).map((_, index) => (
            <div
              key={index}
              className="bg-card border-2 border-dashed border-primary/30 p-8 rounded-xl flex items-center justify-center text-center hover:border-primary hover:border-solid hover:scale-105 transition-all duration-300 min-h-[140px]"
            >
              <span className="text-muted-foreground text-sm">
                Logo Parceiro
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
