
import { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "data" | "other" | "soft"
  >("frontend");

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Spring Boot", level: 65 },
      { name: "Django", level: 60 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
    data: [
      { name: "SQL", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Data Analysis", level: 80 },
      { name: "Database Design", level: 75 },
      { name: "Power BI", level: 70 },
      { name: "Data Visualization", level: 75 },
    ],
    other: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Manual QA", level: 85 },
      { name: "Testlio", level: 80 },
      { name: "Charles Proxy", level: 75 },
    ],
    soft: [
      { name: "Empathy", level: 95 },
      { name: "Fast Learner", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Troubleshooting", level: 90 },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "data", label: "Data & Analytics" },
    { id: "other", label: "Tools" },
    { id: "soft", label: "Soft Skills" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-secondary dark:bg-gray-800 hover:bg-primary/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skills[activeTab].map((skill) => (
            <div key={skill.name} className="bg-card rounded-lg p-5 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-display text-lg font-semibold">
                BSc. Software Engineering
              </h4>
              <p className="text-muted-foreground">
                Multimedia University (2020–2024)
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-display text-lg font-semibold">KCSE</h4>
              <p className="text-muted-foreground">
                Lenana School (2016–2019)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
