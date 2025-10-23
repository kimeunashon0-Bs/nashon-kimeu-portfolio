const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Credwave, Westlands",
      period: "Feb 2025 – Oct 2025",
      description: "At Credwave, I helped design and co-develop internal tools like the Referral App and Policy Tracker, which simplified workflows and reduced manual follow-ups by 40%. I worked closely with engineers and product managers to ensure every feature addressed real user challenges. Through user interviews and feedback sessions, I refined UI components for better clarity and accessibility. I also built Power BI dashboards to visualize system usage and identify recurring pain points, helping the team make data-backed design improvements."
    },
    {
      title: "IT Support & Digital Literacy Trainer (Voluntary)",
      company: "Micato Safaris, Mukuru Kwa Njenga",
      period: "June 2024 – Sep 2024",
      description: "I trained over 50 learners in digital literacy, software use, and the basics of user experience design. My focus was on helping first-time users gain confidence and navigate technology smoothly. I also created easy-to-follow user guides and provided IT support that improved both system reliability and user satisfaction. This experience deepened my understanding of designing for inclusivity and accessibility in real-world environments."
    },
    {
      title: "Inventory & Checkout Officer",
      company: "Jumia Kenya, Nairobi",
      period: "Apr 2023 – Dec 2023",
      description: "At Jumia, I analyzed and optimized the customer journey in order tracking by identifying bottlenecks in the fulfillment system using Grafana dashboards. I designed Power BI reports to visualize delivery performance and enhance communication between logistics teams. Working with both warehouse and customer service departments, I helped streamline operations and reduce user friction in digital workflows — ensuring smoother end-to-end service experiences."
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
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
