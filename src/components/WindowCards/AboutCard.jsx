import { User, Terminal, Mail, GraduationCap } from "lucide-react";
import { WindowCard } from "./WindowCard";

export const AboutCard = (props) => {
  return (
    <WindowCard {...props}>
      <div className="h-full max-h-[70vh] md:max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b-2 border-window-outline/30">
          <div className="relative w-32 h-32 shrink-0">
            <div className="absolute inset-0 bg-[#98baefff]/20 rounded-full animate-pulse" />
            <img 
              src="/patrick_pic.jpg" 
              alt="Patrick"
              className="relative w-full h-full rounded-full border-4 border-window-outline object-cover transition-all duration-500"
            />
          </div>
          
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter text-[#98baefff]">
              Patrick Evan
            </h2>
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
              Student & Developer @ Monash University Malaysia
            </p>
          </div>
        </div>

        <div className="py-8 space-y-6">
          <p className="text-lg leading-relaxed text-foreground/80 font-roboto">
            Hi! I'm Patrick, a developer who enjoys building interactive web pages.
          </p>

          <ul className="space-y-4">
            {/* Item 1 */}
            <li className="flex items-start group">
              <div className="w-6 flex-none flex justify-center pt-2.5">
                <div className="h-2 w-2 rounded-full bg-[#98baefff] shadow-[0_0_8px_#98baefff/40]" />
              </div>
              <p className="text-muted-foreground leading-relaxed pl-2">
                Currently a <span className="font-medium text-[#98baefff]">Year 2 Semester 2</span> Computer Science student at Monash University.
              </p>
            </li>

            {/* Item 2 */}
            <li className="flex items-start group">
              <div className="w-6 flex-none flex justify-center pt-2.5">
                <div className="h-2 w-2 rounded-full bg-[#98baefff] shadow-[0_0_8px_#98baefff/40]" />
              </div>
              <p className="text-muted-foreground leading-relaxed pl-2">
                Proficient in <span className="text-[#98baefff] font-medium">English and Indonesian</span> <span className="text-[9px]">and maybe some conversational Hokkien</span>.
              </p>
            </li>

            {/* Item 3 */}
            <li className="flex items-start group">
              <div className="w-6 flex-none flex justify-center pt-2.5">
                <div className="h-2 w-2 rounded-full bg-[#98baefff] shadow-[0_0_8px_#98baefff/40]" />
              </div>
              <p className="text-muted-foreground leading-relaxed pl-2">
                Always <span className="text-[#98baefff] font-medium">learning and experimenting</span> with new web development technologies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </WindowCard>
  );
};