import { useRef } from 'react';
import Draggable from 'react-draggable';
import { cn } from "../lib/utils";

export const WindowCard = ({
    title, 
    children, 
    className, 
    onClose, // Pass this from Home
    spawnOffset,
    isDraggable = true,
    isClosable = true, 
    style // Pass zIndex from Home
}) => {
  const nodeRef = useRef(null);

  const content = (
    <div 
        ref={nodeRef} 
        style={style}
        className={cn(
          "w-full max-w-2xl overflow-hidden rounded-xl border-3 border-window-outline bg-card shadow-2xl",
          "font-roboto",
          isDraggable ? "fixed" : "relative", 
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
            <button 
              onClick={onClose}
              className="flex gap-2 text-sm transition-transform duration-200 hover:scale-120 cursor-pointer outline-none"
            >
              <span className="font-bold">[x]</span>
            </button>
          )}
        </div>

        <div className="flex flex-col p-6 text-foreground bg-card min-h-[400px]">
            {children}
        </div>
      </div>
  );

  if (!isDraggable) return content;

  return (
    <Draggable 
        nodeRef={nodeRef} 
        handle=".window-header" 
        bounds="parent"
        defaultPosition={spawnOffset || {x: 0, y: 0}}
    >
      {content}
    </Draggable>
  );
};