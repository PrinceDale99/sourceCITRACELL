"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const LimeSlice = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#BEF264" />
        <circle cx="50" cy="50" r="40" fill="#A3E635" />
        <path d="M50 10 V 90 M18.7 25 L 81.3 75 M25 81.3 L 75 18.7 M10 50 H 90" stroke="#BEF264" strokeWidth="4" />
    </svg>
);

const Splash = ({ className }: { className?: string }) => (
    <svg viewBox="-50 -50 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M-5 0 Q 0 -20 5 0 M -15 5 Q 0 -15 15 5 M-25 15 Q 0 -5 25 15 M-10 -10 Q -20 -20 -30 -10 M10 -10 Q 20 -20 30 -10" stroke="#A3E635" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
);


export default function SplashAnimation() {
    const [limeVisible, setLimeVisible] = useState(false);
    const [splashVisible, setSplashVisible] = useState(false);

    useEffect(() => {
        const limeTimer = setTimeout(() => setLimeVisible(true), 200);
        const splashTimer = setTimeout(() => {
            setLimeVisible(false);
            setSplashVisible(true);
        }, 800);
        const hideSplashTimer = setTimeout(() => setSplashVisible(false), 1200);

        return () => {
            clearTimeout(limeTimer);
            clearTimeout(splashTimer);
            clearTimeout(hideSplashTimer);
        }
    }, [])

    return (
        <div className="relative w-48 h-48">
            <LimeSlice className={cn("absolute inset-0 w-full h-full text-lime-300 transition-all duration-300 ease-in-out", limeVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45")} />
            <Splash className={cn("absolute inset-0 w-full h-full text-lime-400 transition-all duration-300 ease-out", splashVisible ? "opacity-100 scale-125" : "opacity-0 scale-50")} />
        </div>
    )
}
