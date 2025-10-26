"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { BatteryCharging } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl text-primary">
          <BatteryCharging className="h-7 w-7 text-primary" />
          <span className="font-headline">CitraCell</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#cta">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get Notified
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
