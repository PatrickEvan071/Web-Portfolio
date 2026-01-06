import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground"
import {WindowCard} from "../components/WindowCard"
import {ContactFooter} from "../components/ContactFooter"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>
        
        {/* Main Content */}
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
                    <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <div className="w-12 h-12 border-2 border-window-outline rounded-lg" />
                        <span className="text-xs font-bold uppercase">about</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <div className="w-12 h-12 border-2 border-window-outline rounded-lg" />
                        <span className="text-xs font-bold uppercase">about</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <div className="w-12 h-12 border-2 border-window-outline rounded-lg" />
                        <span className="text-xs font-bold uppercase">about</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <div className="w-12 h-12 border-2 border-window-outline rounded-lg" />
                        <span className="text-xs font-bold uppercase">about</span>
                    </div>
                </div>
                
            </div>
        </WindowCard>

        {/* Footer */}
        <ContactFooter/>
    </div>;
}