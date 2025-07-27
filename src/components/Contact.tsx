import { Mail, Phone, Github, Linkedin } from "lucide-react";
import connect from "@/assets/connect.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info */}
          <div>
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
                Let's <span className="gradient-text">connect!</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to connect? Let's start a conversation
              </p>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <a
                href="mailto:chiebukaonyejesi@gmail.com"
                className="flex items-center justify-center p-6 glass rounded-xl hover-lift group min-w-[21rem]"
              >
                <span className="flex items-center">
                  <Mail className="w-8 h-8 text-primary mr-4 group-hover:scale-110 transition-transform" />
                </span>
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">Send Email</div>
                  <div className="text-muted-foreground break-all">chiebukaonyejesi@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+12164576629"
                className="flex items-center justify-center p-6 glass rounded-xl hover-lift group min-w-64"
              >
                <span className="flex items-center">
                  <Phone className="w-8 h-8 text-primary mr-4 group-hover:scale-110 transition-transform" />
                </span>
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">Call Me</div>
                  <div className="text-muted-foreground">216-457-6629</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="mb-6 text-white">Or connect with me on</p>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/chiebuka-onyejesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-full hover-lift group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/ebuka2385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-full hover-lift group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src={connect}
              alt="Connect"
              className="rounded-2xl shadow-xl w-[450px] h-[425px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;