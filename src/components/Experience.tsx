import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      company: "John Deere",
      role: "Software Engineering Intern",
      duration: "May 2025 - Aug 2025",
      location: "Moline, Illinois",
      description: "Worked on SHIELD, an internal security dashboard, focusing on backend data integration and automation for security analytics.",
      highlights: [
        "Integrated CTR data for real-time GitHub risk visibility",
        "Built APIs and ETL pipelines (AWS, Databricks)",
        "Cut triage time, saved $100k+"
      ],
      technologies: ["React", "Python", "AWS", "Databricks", "ServiceNow"]
    },
    {
      company: "Parker Hannifin Corporation",
      role: "Software Engineering Intern",
      duration: "May 2024 - Aug 2024",
      location: "Cleveland, OH",
      description: "Developed internal AI tools for video transcript search and knowledge retrieval, collaborating across frontend and backend teams.",
      highlights: [
        "React frontend for AI assistant (+30% engagement)",
        "Automated video ingestion/transcripts (Python, Azure)",
        "Integrated OpenAI & Azure AI Search"
      ],
      technologies: ["React", "Python", "Azure Video Indexer", "OpenAI", "Azure AI Search"]
    },
        {
      company: "Concepta Innovation Services",
      role: "Data Analyst",
      duration: "2022 - 2023",
      location: "Remote",
      description: "Worked as a data analyst supporting business decisions through reporting and visualization.",
      highlights: [
        "Processed 10K+ record datasets",
        "Automated reporting (Python, Excel)",
        "Found trends that improved efficiency by 25%"
      ],
      technologies: ["Python", "SQL", "Excel", "Pandas"]
    }
  ];

  // Add state for expand/collapse
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Placeholder images for each company (replace with real images if available)
  const images = [
    "/deere.jpeg",
    "/parker1.jpeg",
    "/concepta.png"
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional growth and contributions
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 md:grid md:grid-cols-1 md:gap-8">
            {experiences.map((exp, index) => {
              const expanded = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-300 flex ${expanded ? "shadow-2xl z-10" : ""}`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    height: expanded ? 'auto' : '26rem',
                    minHeight: expanded ? undefined : '22rem',
                    maxHeight: expanded ? undefined : '30rem',
                  }}
                >
                  <div className="flex flex-col md:flex-row items-stretch glass p-0 rounded-xl hover-lift group-hover:glow-purple overflow-hidden w-full h-full">
                    {/* Text (1/2) */}
                    <div className={`flex-1 flex flex-col justify-center p-8 transition-all duration-300 ${!expanded ? "items-center text-center" : "items-start text-left"}`} style={{ minHeight: '100%' }}>
                      <div className={`w-full flex flex-col ${!expanded ? "items-center" : "lg:flex-row lg:items-center lg:justify-between"} mb-6`}>
                        <div className={`space-y-4 ${!expanded ? "w-full" : ""}`}> 
                          <h3 className={`font-bold font-space transition-all duration-300 ${!expanded ? "text-3xl md:text-4xl text-primary" : "text-2xl text-primary"} mb-2`}> 
                            {exp.role} 
                          </h3> 
                          <h4 className={`font-semibold transition-all duration-300 ${!expanded ? "text-2xl md:text-3xl text-foreground" : "text-xl text-foreground"} mb-3`}> 
                            {exp.company} 
                          </h4> 
                        </div> 
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-4 text-base text-muted-foreground mt-4 lg:mt-4 ${!expanded ? "justify-center mt-0 w-full" : ""}`}> 
                          <div className="flex items-center justify-center"> 
                            <Calendar className="w-5 h-5 mr-2" /> 
                            {exp.duration} 
                          </div> 
                          <div className="flex items-center justify-center"> 
                            <MapPin className="w-5 h-5 mr-2" /> 
                            {exp.location} 
                          </div> 
                        </div> 
                      </div>
                      <div className="mt-6"> 
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className={`w-fit mb-4 font-bold px-6 py-2 rounded-full transition-all duration-200 ${expanded ? "bg-primary text-white border-primary hover:bg-primary/80" : "bg-[#6B46C1] text-white border-[#6B46C1] hover:bg-[#6B46C1]/80"}`} 
                          onClick={() => setOpenIndex(expanded ? null : index)} 
                        > 
                          {expanded ? "Show Less" : "Learn More"} 
                        </Button>
                      </div>
                      {/* Expanded Info */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        style={{ pointerEvents: expanded ? "auto" : "none" }}
                      >
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="space-y-4 mb-6">
                          <h5 className="font-semibold text-primary">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start text-muted-foreground">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-primary">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Image (2/5) */}
                    <div className="md:w-2/5 w-full h-56 md:h-auto flex items-center justify-center bg-gray-800">
                      <img
                        src={images[index % images.length]}
                        alt={exp.company + " logo"}
                        className="object-cover w-full h-full md:rounded-l-none md:rounded-r-xl rounded-b-xl md:rounded-b-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;