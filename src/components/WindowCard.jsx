    import { useRef } from 'react'; // 1. Import useRef
import Draggable from 'react-draggable';
import { cn } from "../lib/utils";

export const WindowCard = ({
    title, 
    children, 
    className, 
    startPos,
    isDraggable = true,
    isClosable = true, }) => {
  const nodeRef = useRef(null);

  const centerPos = {
    x: typeof window !== 'undefined' ? window.innerWidth / 2 - 336 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 - 250 : 0
  };

  return (
    <Draggable 
        nodeRef={nodeRef} 
        handle=".window-header" 
        bounds="parent" 
        defaultPosition={startPos || centerPos}
        disabled={!isDraggable}
    >
      <div 
        ref={nodeRef} 
        className={cn(
          "fixed z-50 w-full max-w-2xl overflow-hidden rounded-xl border-3 border-window-outline bg-card shadow-2xl",
          "font-roboto",
          className
        )}
      >
        <div className={cn(
          "window-header flex items-center justify-between px-4 py-2 bg-[#404040] text-white select-none",
          "border-b-3 border-window-outline",
          isDraggable ? "cursor-grab active:cursor-grabbing" : "cursor-default"
        )}>
          <span className="text-med font-medium">{title}</span>
          {isClosable && (
            <div className="flex gap-2 text-sm transition-transform duration-200 hover:scale-120 cursor-pointer">
              <span className="font-bold">[x]</span>
            </div>
          )}
        </div>

        <div className="flex flex-col p-6 text-foreground bg-card min-h-[400px]">
            {children}
        </div>
      </div>
    </Draggable>
  );
};