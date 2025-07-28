import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import headshot from "@/assets/headshot.png";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ebuka2385", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chiebuka-onyejesi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chiebukaonyejesi@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-space">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text glow-text">Ebuka</span>
              </h1>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl text-muted-foreground font-semibold">
                  Software Engineer & CS Student
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"></p>
              </div>
            </div>
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center pt-10">
              <Button variant="glow" size="lg" className="group px-8 py-4 text-2xl" asChild>
                <a href="/chiebuka-onyejesi-resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <a href="#projects">
                <Button variant="glass" size="lg" className="group px-8 py-4 text-2xl">
                  <ExternalLink className="w-7 h-7 mr-3 group-hover:rotate-45 transition-transform" />
                  View Projects
                </Button>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-8 pt-10">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-full glass hover-lift hover:glow-purple transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          {/* Right: Headshot */}
          <div className="flex-shrink-0 w-96 h-96 md:w-[40rem] md:h-[40rem] lg:w-[48rem] lg:h-[48rem] rounded-full overflow-hidden border-primary shadow-xl bg-black flex items-center justify-center">
            <img
              src={headshot}
              alt="Ebuka Onyejesi headshot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;