import fantasyops1 from "@/assets/fantasyops1.png";
import fantasyops2 from "@/assets/fantasyops2.png";
import fantasyops3 from "@/assets/fantasyops3.png";
import fantasyops4 from "@/assets/fantasyops4.png";
import fantasyops5 from "@/assets/fantasyops5.png";
import fantasyops6 from "@/assets/fantasyops6.png";
import orina1 from "@/assets/orina1.png";
import orina2 from "@/assets/orina2.png";
import orina3 from "@/assets/orina3.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FantasyOps – Fantasy Football Community Platform",
      description: "FantasyOps is a web app built for Fantasy Premier League enthusiasts — a space where fans can compete, gain insights, and monetize their analytical skills. I designed the user interface to feel sporty, interactive, and data-driven, with smooth navigation and strong community focus.",
      link: "https://fantasyops-squad-builder-09.vercel.app",
      screenshots: [fantasyops1, fantasyops2, fantasyops3, fantasyops4, fantasyops5, fantasyops6]
    },
    {
      title: "Orina Crochet Website",
      description: "A clean and interactive website built for a crochet business. The design emphasizes warmth, creativity, and simplicity, offering users an easy way to explore products and connect directly through WhatsApp for personalized orders. The layout is friendly, responsive, and built for smooth browsing across all devices.",
      link: "https://orena-crochet-whispers-31472.vercel.app",
      screenshots: [orina1, orina2, orina3]
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              {/* Project Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Live Project →
                  </a>
                </div>
                <p className="text-muted-foreground text-lg max-w-4xl">{project.description}</p>
              </div>

              {/* Screenshots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, screenshotIndex) => (
                  <div 
                    key={screenshotIndex} 
                    className="rounded-lg overflow-hidden border bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
