
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  defaultImage: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  defaultImage,
  link,
}: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-card flex flex-col h-full">
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={imageError ? defaultImage : image}
          alt={title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {link && (
          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Project
            </a>
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
