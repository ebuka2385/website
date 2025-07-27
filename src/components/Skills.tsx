const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python"},
        { name: "JavaScript"},
        { name: "TypeScript"},
        { name: "Java"},
        { name: "SQL"}
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React"},
        { name: "HTML/CSS"},
        { name: "Tailwind CSS"},
        { name: "Vue.js"}
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js"},
        { name: "Express.js"},
        { name: "MongoDB"},
        { name: "PostgreSQL"},
        { name: "Firebase"}
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git"},
        { name: "Docker"},
        { name: "AWS"},
        { name: "Azure"},
        { name: "Neon"}
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-primary";
    if (level >= 70) return "bg-primary-glow";
    return "bg-primary/60";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and languages I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Bubbles Only, No Years or Progress Bars */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass p-8 rounded-xl hover-lift"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-space text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={
                        'px-6 py-3 rounded-full font-bold text-lg border hover-lift cursor-default shadow bg-primary text-white border-primary'
                      }
                      style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills as a Box */}
          <div className="mt-16">
            <div className="glass p-8 rounded-xl hover-lift text-center">
              <h3 className="text-2xl font-bold font-space mb-8 text-white">
                Other Technologies & Concepts
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Agile Development", "REST APIs", "GraphQL", "Testing (Jest)", 
                  "CI/CD", "Microservices", "Cloud Computing", "Data Structures",
                  "Algorithms", "System Design", "Version Control", "Debugging"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass rounded-full text-base font-semibold hover-lift cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;