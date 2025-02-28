'use client'

import { useEffect, useState } from "react";

interface CursorFollowerProps{
    selectedTheme: string;
}

export default function CursorFollower({ selectedTheme } : CursorFollowerProps){

    const [position, setPosition] = useState<{x: number, y: number} | null>(null)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.pageX, y: event.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {position && (
                <div className="pointer-events-none">
                    <div
                        className="absolute w-[785px] h-[785px] rounded-full z-[999] pointer-events-none"
                        style={{
                            top: `${position.y}px`,
                            left: `${position.x}px`,
                            transform: 'translate(-50%, -50%)',
                            background: selectedTheme == 'dark' ? 
                            'radial-gradient(500px, rgba(36, 77, 187, 0.15), transparent 70%)' :
                            'radial-gradient(500px, rgba(255, 255, 255, 0.15), transparent 70%)',
                            opacity: 1,
                        }}
                    />
                </div>
            )}
        </>
    )
}