import {useState, useEffect} from 'react';
import Wave from 'react-wavify'

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    
    useEffect(() => {
        generateStars();

        const handleResize = () => {
            generateStars();
        }
        
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key = {star.id} 
                className = "star animate-pulse-subtle" 
                style = {{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
            />
        ))}

        <div className="absolute bottom-0 w-full h-[300px]"> 
            <Wave 
                fill="url(#wave-gradient)"
                paused={false}
                className="h-full"
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.2,
                    points: 3
                }}
            >
                <defs>
                    <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
                        <stop offset="0%"  stopColor="#98baefff" />
                        <stop offset="100%" stopColor="#b1c0d8ff" />
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    </div>;
}