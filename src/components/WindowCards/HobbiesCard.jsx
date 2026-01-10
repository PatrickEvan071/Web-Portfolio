import { Music, Keyboard, Coffee } from "lucide-react";
import { WindowCard } from "./WindowCard";

export const HobbiesCard = (props) => {
  const hobbies = [
    {
      title: "Music",
      description: "Music has been a major part of my life for a long time but I only started taking it seriously about 3 years ago when I picked up the bass guitar. While I am still on the learning curve, I love the grind of getting better. It’s easily my favorite way to cool off after some work.",
      tags: ["Music", "Bass", "Band"],
      image: "/bass_pic.jpg",
    },
    {
      title: "Custom Keyboards",
      description: "What began as a fascination for satisfying typing sounds has evolved into a passion for ergonomic and unusual layouts like the Void Ergo S pictured above. Designed by Victor Lucachi, this unit is a handwired build, replacing the standard PCB with a meticulous manual circuit.",
      tags: ["Ergonomics", "DIY", "Soldering"],
      image: "./void_ergo_pic.jpg",
    },
  ];

  return (
    <WindowCard {...props}>
      <div className="h-full max-h-[70vh] md:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar space-y-6">
        
        <div className="sticky top-0 bg-card z-10 flex items-center gap-3 border-b-2 border-window-outline pb-4 mb-4 pt-2">
          <Coffee className="text-[#98baefff]" size={24} />
          <h2 className="text-2xl font-bold">My Hobbies</h2>
        </div>

        <div className="grid gap-4 flex">
          {hobbies.map((hobby) => (
            <div 
              key={hobby.title} 
              className="group flex flex-col p-5 rounded-lg border-2 border-window-outline transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-[#98baefff]">
                  {hobby.title}
                </h3>
              </div>

              <div className="relative w-full mb-4 overflow-hidden border-2 rounded-lg border-window-outline">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="object-cover w-full h-full transition-all duration-500"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 flex-grow text-justified">
                {hobby.description}
              </p>

              {/* Tags Section  */}
              <div className="flex flex-wrap gap-2">
                {hobby.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-roboto px-2 py-0.5 rounded border border-window-outline bg-window-outline/10 tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End of list */}
        <div className="flex items-center justify-center py-4 opacity-20">
            <div className="h-[1px] w-full bg-window-outline"></div>
            <span className="px-4 text-[10px] whitespace-nowrap font-roboto">More to Come???</span>
            <div className="h-[1px] w-full bg-window-outline"></div>
        </div>
      </div>
    </WindowCard>
  );
};