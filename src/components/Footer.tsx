import { Hexagon, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Impacto", href: "#impacto" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
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
    <footer className="bg-black border-t border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hexagon className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold text-secondary">
                BeeGuard
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Tecnologia a serviço da biodiversidade
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/70 hover:text-secondary transition-colors duration-200 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@beeguard.com"
                className="text-white/70 hover:text-secondary transition-colors duration-200 block text-sm"
              >
                contato@beeguard.com
              </a>
              <p className="text-white/60 text-sm">
                Uma iniciativa da Lizard Domain
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-white/70 hover:text-secondary hover:scale-125 transition-all duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/50 text-sm">
            © 2025 BeeGuard. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
