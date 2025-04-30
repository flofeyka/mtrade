import React from "react";

export default function LandingContainer({
                                             children,
    className
                                         }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Видео как фон */}
            <video
                autoPlay
                loop
                muted
                playsInline
                src="/background.webm"
                className="w-full h-full object-cover absolute top-0 left-0"
            >
                <source src="/background.webm" type="video/webm"/>
            </video>

            {/* Затемняющая подложка */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,_#3B1F56_0%,_#322358_25%,_#232B5B_50%,_#1F2D5C_75%)] opacity-70"></div>

            {/* Контент */}
            <div className={`relative flex flex-col z-10 ${className}`}>
                {children}
            </div>
        </div>
    );
}