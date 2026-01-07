import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground"
import {ContactFooter} from "../components/ContactFooter"
import {MainWindowCard} from "../components/WindowCards/MainWindowCard"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>
        
        {/* Main Content */}
        <MainWindowCard/>

        {/* Footer */}
        <ContactFooter/>
    </div>;
}