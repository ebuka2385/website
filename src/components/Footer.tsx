import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/ebuka2385", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chiebuka-onyejesi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chiebukaonyejesi@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-space font-bold text-2xl gradient-text">
                Chiebuka Onyejesi
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer passionate about creating innovative solutions 
                and building the future through technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Experience" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                  { href: "#", label: "Resume" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Get In Touch</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Case Western Reserve University
                </p>
                <p className="text-muted-foreground">
                  Cleveland, OH 44106
                </p>
                <a 
                  href="mailto:chiebukaonyejesi@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  chiebukaonyejesi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover-lift hover:glow-purple transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
              © {currentYear} Chiebuka Onyejesi. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500 mx-1" /> and React.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;