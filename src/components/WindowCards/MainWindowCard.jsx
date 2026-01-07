import { User, Gamepad2, Code2, Mail } from "lucide-react";
import { useState } from 'react';
import { WindowCard } from "./WindowCard";
import { AboutCard } from "./AboutCard";
import { ContactsCard } from "./ContactsCard";
import { HobbiesCard } from "./HobbiesCard";
import { ProjectsCard } from "./ProjectsCard";

export const MainWindowCard = () => {
    const navItems = [
        { label: "about", icon: User, component: AboutCard },
        { label: "hobbies", icon: Gamepad2, component: HobbiesCard },
        { label: "projects", icon: Code2, component: ProjectsCard },
        { label: "contact", icon: Mail, component: ContactsCard },
    ];

    // State now stores objects: { id, x, y } for controlled dragging
    const [openWindows, setOpenWindows] = useState([]);

    const openWindow = (id) => {
        if (!openWindows.find(w => w.id === id)) {
            const index = openWindows.length;
            
            // This is your pure cascading math:
            setOpenWindows((prev) => [...prev, { 
                id, 
                x: index * 60, // Horizontal shift
                y: index * 40  // Vertical shift
            }]);
        }
    };

    const updatePosition = (id, x, y) => {
        setOpenWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, x, y } : w))
        );
    };

    const closeWindow = (id) => {
        setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    };

    return (
        <>
            {/* Main "Home" Hub */}
            <main className="flex min-h-screen items-center justify-center p-4">
                <WindowCard 
                    title="Home"
                    isDraggable={false} 
                    isClosable={false}
                >
                    <div className="flex flex-col items-center justify-center min-h-[400px] gap-8 text-center">
                        <div className="space-y-2">
                            <h1 className="text-6xl font-bold tracking-tight text-foreground">
                                hi! <span className="text-[#98baefff]">i'm Patrick</span>
                            </h1>
                            <p className="text-xl text-muted-foreground font-roboto tracking-wide">
                                student, developer
                            </p>
                        </div>

                        <div className="flex gap-8 mt-4">
                            {navItems.map((item) => (
                                <div 
                                    key={item.label}
                                    onClick={() => openWindow(item.label)}
                                    className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer duration-200 hover:scale-120"
                                >
                                    <div className="w-14 h-14 border-2 border-window-outline rounded-lg flex items-center justify-center transition-colors group-hover:bg-window-outline/5">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-xs font-bold">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </WindowCard>
            </main>

            {/* Render Specific Windows Directly */}
            {openWindows.map((win, index) => {
                const navData = navItems.find(item => item.label === win.id);
                if (!navData) return null;

                const SpecificCard = navData.component;

                return (
                    <SpecificCard 
                        key={win.id}
                        title={win.id}
                        isDraggable={true} 
                        isClosable={true}
                        onClose={() => closeWindow(win.id)}
                        className="fixed top-20 left-95" 
                        spawnOffset={{ x: win.x, y: win.y }}
                        style={{ zIndex: 100 + index }} 
                    />
                );
            })}
        </>
    );
}