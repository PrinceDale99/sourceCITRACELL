"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import placeholderData from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import SplashAnimation from './splash-animation';

const { placeholderImages: PlaceHolderImages } = placeholderData;

const CitrusLeaf = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("absolute fill-current text-accent/10 blur-sm", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 C80 10 100 40 100 50 C90 80 60 100 50 100 C20 90 0 60 0 50 C10 20 20 0 50 0 Z" transform="rotate(30 50 50)"/>
    </svg>
);


export default function HeroSection({ nextSection }: { nextSection?: string }) {
  const batteryImage = PlaceHolderImages.find(img => img.id === 'citracell-battery');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const { top } = heroSection.getBoundingClientRect();
        setIsScrolled(top < -50);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-[100vh] w-full flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-green-800 via-primary to-green-900 snap-start">
      
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent/10 via-primary to-green-900 opacity-70 animate-gradient-xy"></div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <CitrusLeaf className="w-48 h-48 -top-10 -left-12 animate-blob opacity-40" />
        <CitrusLeaf className="w-64 h-64 -bottom-12 -right-12 animate-blob animation-delay-4000 opacity-40" />
        <CitrusLeaf className="w-24 h-24 top-[10%] left-[5%] rotate-12 animate-float opacity-30" />
        <CitrusLeaf className="w-32 h-32 top-[20%] right-[10%] -rotate-12 animate-float animation-delay-2000 opacity-30" />
        <CitrusLeaf className="w-20 h-20 bottom-[15%] left-[20%] rotate-20 animate-float animation-delay-1000 opacity-30" />
        <CitrusLeaf className="w-28 h-28 bottom-[5%] right-[25%] -rotate-20 animate-float animation-delay-3000 opacity-30" />
        <CitrusLeaf className="w-16 h-16 top-[50%] left-[40%] rotate-45 animate-float animation-delay-500 opacity-20" />
        <CitrusLeaf className="w-20 h-20 top-[60%] right-[45%] -rotate-45 animate-float animation-delay-1500 opacity-20" />
        <CitrusLeaf className="w-24 h-24 top-[5%] right-[40%] rotate-12 animate-float animation-delay-5000 opacity-20" />
        <CitrusLeaf className="w-32 h-32 bottom-[25%] left-[5%] -rotate-12 animate-float animation-delay-6000 opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 w-full">
        <div className={cn("transition-opacity duration-500", isScrolled ? 'opacity-0' : 'opacity-100')}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center animate-in fade-in slide-in-from-left-16 duration-1000">
                    {batteryImage && (
                    <div className="animate-subtle-sway group">
                        <Image
                        src={batteryImage.imageUrl}
                        alt={batteryImage.description}
                        width={100}
                        height={150}
                        className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)] w-[100px] h-auto sm:w-[150px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={batteryImage.imageHint}
                        priority
                        />
                    </div>
                    )}
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-right-16 duration-1000">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md font-headline">
                        CitraCell
                    </h1>
                    <p className="mt-2 max-w-md text-lg lg:text-xl text-gray-200 drop-shadow-sm">
                        Refillable Battery Powered by Kamias
                    </p>
                    <div className="mt-8">
                    <Link href="#cta">
                        <Button size="lg" className="bg-white/10 border-white/30 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-accent/80 hover:to-primary/80 hover:border-transparent hover:text-white">
                            Join Wishlist
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className={cn("absolute inset-0 flex items-center justify-center transition-opacity duration-500", isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
            <div className="w-full flex items-center justify-around">
                {batteryImage && (
                    <Image
                        src={batteryImage.imageUrl}
                        alt={batteryImage.description}
                        width={100}
                        height={150}
                        className="object-contain w-[100px] h-auto sm:w-[150px]"
                        data-ai-hint={batteryImage.imageHint}
                    />
                )}
                <SplashAnimation />
            </div>
        </div>

      </div>
      {nextSection && (
        <div className={cn("absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500", isScrolled ? 'opacity-0' : 'opacity-100')}>
          <Link href={`#${nextSection}`}>
            <Button variant="outline" size="icon" className="rounded-full animate-bounce text-white bg-white/10 border-white/20 hover:bg-white/20">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
