import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Impacto", href: "#impacto" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2 group"
            aria-label="BeeGuard Home"
          >
            <Hexagon className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:rotate-180" />
            <span className="text-2xl font-bold text-secondary">BeeGuard</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-base font-medium transition-colors duration-200 hover:text-secondary relative ${
                  activeSection === item.href.slice(1)
                    ? "text-secondary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-secondary"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Button
            onClick={() => scrollToSection("#tecnologia")}
            variant="secondary"
            className="hidden lg:flex"
          >
            Conheça nossa tecnologia
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-secondary p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-primary/98 backdrop-blur-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-xl font-medium text-white hover:text-secondary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("#tecnologia")}
            variant="secondary"
            size="lg"
            className="mt-4"
          >
            Conheça nossa tecnologia
          </Button>
        </nav>
      </div>
    </header>
  );
};
