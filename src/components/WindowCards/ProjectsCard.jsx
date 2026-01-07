import { Github, ExternalLink, Folder, Calendar } from "lucide-react";
import { WindowCard } from "./WindowCard";

export const ProjectsCard = (props) => {
  const projects = [
    {
      title: "This Website",
      description: "A small passion project to document/blog my technical journey and the things I love doing. This site is a continuous learning experiment which will evolve as time goes on.",
      tech: ["React", "Tailwind", "JavaScript"],
      image: "/home_page_pic.png",
    },
    {
      title: "Flappy Birb",
      description: "A flappy bird clone with a focus on functional programming principles. Using RxJS to manage the game loop as events, and utilizing observables to handle physics, user input, and collisions seamlessly. Overall, this project has greatly helped improve my understanding of functional programming and why it is used.",
      tech: ["RxJS", "HTML"],
      image: "/flappybirb.png",
      link: "https://flappybird-rxjs.vercel.app"
    },
  ];

  return (
    <WindowCard {...props}>
      {/* The "h-[450px]" sets the fixed height of the content area.
        The "overflow-y-auto" enables the scrollbar when content exceeds that height.
        The "pr-2" adds padding so the scrollbar doesn't overlap the text.
      */}
      <div className="h-[450px] overflow-y-auto pr-2 custom-scrollbar space-y-6">
        
        {/* Section Header */}
        <div className="sticky top-0 bg-card z-10 flex items-center gap-3 border-b-2 border-window-outline pb-4 mb-4">
          <Folder className="text-[#98baefff]" size={24} />
          <h2 className="text-2xl font-bold tracking-tight">My Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 flex">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group flex flex-col p-5 rounded-lg border-2 border-window-outline"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-[#98baefff]">
                  {project.title}
                </h3>

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#98baefff] transition-colors p-1"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}

              </div>

              <div className="relative w-full  mb-4 overflow-hidden rounded-lg border border-window-outline">
                <img 
                  src={project.image} 
                />
              </div>

              <p className="text-sm text-muted-foreground mb-6 flex-grow text-justified">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] font-roboto px-2 py-0.5 rounded border border-window-outline bg-window-outline/5 uppercase tracking-tighter"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End of list indicator */}
        <div className="flex items-center justify-center py-4 opacity-20">
            <div className="h-[1px] w-full bg-window-outline"></div>
            <span className="px-4 text-[10px] whitespace-nowrap font-roboto">Working on More!</span>
            <div className="h-[1px] w-full bg-window-outline"></div>
        </div>
      </div>
    </WindowCard>
  );
};