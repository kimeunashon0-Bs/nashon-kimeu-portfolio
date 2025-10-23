
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    // {
    //   title: "FPL Gaming Web App",
    //   description: "Fantasy football with M-PESA wallet, auto payouts, and league panel",
    //   image: "/project1.jpg",
    //   defaultImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    // },
    {
      title: "GameTrack App",
      description: "PlayStation match result tracker with M-PESA balance integration",
      image: "/project2.jpg",
      defaultImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      link: "" // Adding empty link property to fix the type error
    },
    {
      title: "Sobriety App",
      description: "Online rehab tracker with motivation tools and goal monitoring",
      image: "/project3.jpg",
      defaultImage: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "" // Adding empty link property to fix the type error
    },
    {
      title: "Premier Arena ",
      description: "This project showcases my ability to structure dynamic layouts, incorporate interactive transitions, and craft user-centric dashboards.",
      image: "/project4.jpg",
      defaultImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      link: "https://preview--premier-arena-royale-45.lovable.app/user-dashboard"
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              defaultImage={project.defaultImage}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
