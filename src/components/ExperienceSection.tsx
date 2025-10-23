
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Dev Intern",
      company: "Credwave",
      period: "Feb 2025–Present",
      description: "Developing frontend features in Next.js and handling API integrations."
    },
    {
      title: "Freelance QA Tester",
      company: "Testlio",
      period: "2024",
      description: "Conducting web & mobile testing, creating detailed bug reports, and developing comprehensive test cases."
    },
    {
      title: "ICT Intern",
      company: "Ministry of Transport",
      period: "2023",
      description: "Provided network support, performed troubleshooting, and conducted training sessions."
    },
    {
      title: "IT Support Volunteer",
      company: "Micato Safaris",
      period: "2022",
      description: "Trained 52 learners in digital skills and provided technical support."
    },
    {
      title: "IT Assistant",
      company: "Jumia",
      period: "2021",
      description: "Set up devices and provided end-user support for staff."
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-sm text-muted-foreground bg-secondary dark:bg-gray-800 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
