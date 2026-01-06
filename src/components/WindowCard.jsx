import { useRef } from 'react'; // 1. Import useRef
import Draggable from 'react-draggable';
import { cn } from "../lib/utils";

export const WindowCard = ({ title, children, className }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent">
      <div 
        ref={nodeRef} 
        className={cn(
          /* Use the single variable-based class here */
          "fixed z-50 w-full max-w-2xl overflow-hidden rounded-xl border-3 border-window-outline bg-card shadow-2xl",
          "font-roboto",
          className
        )}
      >
        <div className={cn(
          "window-header flex items-center justify-between px-4 py-2 bg-[#404040] text-white cursor-grab active:cursor-grabbing select-none",
          /* Use it here for the divider too */
          "border-b-3 border-window-outline"
        )}>
          <span className="text-sm font-medium lowercase">{title}</span>
          <div className="flex gap-2 text-sm opacity-80 hover:opacity-100 cursor-pointer">
            <span className="font-bold">[x]</span>
          </div>
        </div>

        <div className="p-6 text-foreground bg-white dark:bg-card min-h-[400px]">
          {children}
        </div>
      </div>
    </Draggable>
  );
};