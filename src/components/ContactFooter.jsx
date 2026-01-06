import { Instagram, Disc, Github } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactFooter = () => {
  const socials = [
    { 
      name: "Instagram", 
      href: "https://instagram.com/patrickevan89", 
      icon: Instagram 
    },
    { 
      name: "Discord", 
      href: "https://discord.com/users/cerealdust_", 
      icon: Disc 
    },
    {
      name: "Github",
      href: "https://github.com/PatrickEvan071",
      icon: Github
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full p-6 z-40 flex justify-center items-center pointer-events-none">
      <div className={cn(
        "flex items-center gap-4 px-6 py-3 rounded-full border-2 border-window-outline bg-card/80 backdrop-blur-sm shadow-xl",
        "pointer-events-auto transition-all duration-300 hover:scale-105"
      )}>
        {socials.map((social, index) => (
          <div key={social.name} className="flex items-center gap-4">
            <a 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground transition-colors duration-200 flex items-center gap-2 group"
            >
              <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest font-roboto whitespace-nowrap">
                {social.name}
              </span>
            </a>

            {/* Divider logic: only appears between the two items */}
            {index !== socials.length - 1 && (
              <div className="w-[1px] h-4 bg-window-outline opacity-30" />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};