import { useState } from "react";
import { Github, ExternalLink, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Helthy",
      subtitle: "AI-Powered Fitness & Nutrition Platform",
      description: "Full-stack mobile app with AI fitness coach, calorie tracking, workout logging, and personalized nutrition targets.",
      features: [
        "AI fitness & nutrition coach",
        "Calorie & workout tracking",
        "Personalized targets & analytics",
        "Cross-platform (React Native)"
      ],
      technologies: ["React Native", "Node.js", "Fastify.js", "Postgres", "AI/ML"],
      githubUrl: "https://github.com/ebuka2385/helthy",
      liveUrl: "#",
      status: "In Progress",
      highlight: true,
      date: "2025-07-01"
    },
    {
      title: "Refactr",
      subtitle: "High-Volume File Conversion Web App",
      description: "Web app for converting 500+ file formats with instant previews, secure uploads, and parallel processing.",
      features: [
        "500+ file format conversions",
        "Instant previews",
        "Batch & parallel processing"
      ],
      technologies: ["Node.js", "React", "Tailwind CSS", "LibreOffice", "FFmpeg"],
      githubUrl: "https://github.com/ebuka2385/refactr",
      liveUrl: "#",
      status: "Completed",
      highlight: false,
      date: "2025-05-01"
    },
    {
      title: "SOS",
      subtitle: "Personal Safety App (Harvard Hackathon)",
      description: "Mobile app for emergency activation, real-time tracking, and automated SMS alerts. Includes heart-rate monitoring and 'Drunk Mode'.",
      features: [
        "One-tap emergency activation",
        "Real-time tracking",
        "Automated SMS alerts"
      ],
      technologies: ["React Native", "Firebase", "Express.js", "Twilio"],
      githubUrl: "https://github.com/ebuka2385/sos",
      liveUrl: "#",
      status: "Completed",
      highlight: false,
      date: "2024-10-01"
    },
    {
      title: "Grocify",
      subtitle: "Smart Grocery List & Pantry Manager",
      description: "App for grocery list management, pantry tracking, and meal planning with food waste reduction reminders.",
      features: [
        "Grocery list management",
        "Pantry tracking",
        "Meal planning"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/ebuka2385/grocify",
      liveUrl: "#",
      status: "Completed",
      highlight: false,
      date: "2023-09-01"
    }
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {projects.map((project, index) => {
              const isOpen = expanded === index;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col glass rounded-xl border border-primary/20 transition-all duration-300 ${isOpen ? 'shadow-2xl glow-purple' : 'hover:shadow-xl hover:glow-purple'}`}
                  style={{ minHeight: '420px' }}
                >

                  <div className="flex flex-col h-full p-8">
                    {/* Title, Subtitle, Date, Status */}
                    <div className="mb-4 flex flex-col gap-1">
                      <h3 className="text-4xl font-extrabold font-space text-primary leading-tight">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-lg md:text-xl text-muted-foreground font-medium block">
                          {project.subtitle}
                        </span>
                      )}
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-base text-muted-foreground font-semibold">
                          {new Date(project.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
                        </span>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium w-fit ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Preview */}
                    <div className="relative group/image mb-6">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-lg border border-primary/20 flex items-center justify-center group-hover/image:scale-105 transition-transform duration-500">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                            <ExternalLink className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Project Preview</p>
                        </div>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <Button variant="glass" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Buttons and Learn More */}
                    <div className="flex flex-wrap gap-4 mb-2">
                      <Button variant="glow" size="lg" className="group text-lg px-6 py-3" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="glass" size="lg" className="group text-lg px-6 py-3" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        className="flex items-center gap-2 font-bold text-primary text-lg px-6 py-3"
                        onClick={() => setExpanded(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? (
                          <>
                            Show Less <ChevronUp className="w-5 h-5 ml-2" />
                          </>
                        ) : (
                          <>
                            Learn More <ChevronDown className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Collapsible Details */}
                    {isOpen && (
                      <div className="mt-4 space-y-4 animate-fade-in text-lg">
                        <p className="text-muted-foreground font-medium">
                          {project.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Key Features:</h4>
                          <ul className="list-disc list-inside ml-4">
                            {project.features.map((feature, fIndex) => (
                              <li key={fIndex} className="text-muted-foreground">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Technologies:</h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.technologies.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button variant="glass" size="lg" className="group" asChild>
              <a href="https://github.com/ebuka2385?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;