import { User, Gamepad2, Code2, Mail } from "lucide-react";
import {useState} from 'react';
import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground"
import {WindowCard} from "../components/WindowCard"
import {ContactFooter} from "../components/ContactFooter"

export const Home = () => {
    const navItems = [
        { label: "about", icon: User },
        { label: "hobbies", icon: Gamepad2 },
        { label: "projects", icon: Code2 },
        { label: "contact", icon: Mail },
    ];

    const [openWindows, setOpenWindows] = useState([]);

    const openWindow = (id) => {
        // Only add if it's not already in the array (prevents duplicates)
        if (!openWindows.includes(id)) {
            setOpenWindows((prev) => [...prev, id]);
        }
    };

    // 2. ADDED: Logic to remove a window from the state
    const closeWindow = (id) => {
        setOpenWindows((prev) => prev.filter((windowId) => windowId !== id));
    };

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>
        
        {/* Main Content */}
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

        {openWindows.map((windowId, index) => {
    const cascadeOffset = {
        x: index * 80, // Horizontal shift per window
        y: index * 40  // Vertical shift per window
    };

    return (
        <WindowCard 
            key={windowId}
            title={windowId}
            isDraggable={true} 
            isClosable={true}
            onClose={() => closeWindow(windowId)}
            className="fixed top-20 left-95" 
            spawnOffset={cascadeOffset}
            style={{ zIndex: 100 + index }} 
        >
            <div className="p-4">
                <p>Content for {windowId}</p>
            </div>
        </WindowCard>
    );
})}

        {/* Footer */}
        <ContactFooter/>
    </div>;
}