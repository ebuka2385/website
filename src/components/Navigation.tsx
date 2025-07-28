import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 mt-3 ${
      isScrolled ? 'glass backdrop-blur-lg border-b border-white/10' : ''
    }`} style={{ marginTop: '1rem' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="font-space font-bold text-lg md:text-xl gradient-text hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Chiebuka
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-base md:text-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-semibold text-lg md:text-xl px-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="glow" size="default" className="group px-4 py-2 text-base md:text-lg" asChild>
              <a href="/chiebuka-onyejesi-resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass hover-lift"
            style={{ fontSize: '1.5rem' }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 glass rounded-lg mt-2 border border-white/10 text-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-6 py-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer font-semibold text-xl"
              >
                {item.label}
              </a>
            ))}
            <div className="px-6 pt-2">
              <Button variant="glow" size="default" className="w-full group px-4 py-2 text-base" asChild>
                <a href="/chiebuka-onyejesi-resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;