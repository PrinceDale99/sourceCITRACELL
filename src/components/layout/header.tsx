"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { BatteryCharging, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
    <Link 
        href={href} 
        className="text-muted-foreground transition-all duration-300 hover:text-primary"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeSheet = () => setSheetOpen(false);

  const navLinks = (
      <>
        <NavLink href="#about" onClick={closeSheet}>About</NavLink>
        <NavLink href="#how-it-works" onClick={closeSheet}>How It Works</NavLink>
        <NavLink href="#why-it-matters" onClick={closeSheet}>Why It Matters</NavLink>
      </>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <BatteryCharging className="h-6 w-6 text-primary" />
          <span className="font-headline">CitraCell</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks}
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href="#cta">Get Notified</Link>
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary" onClick={closeSheet}>
                    <BatteryCharging className="h-6 w-6 text-primary" />
                    <span className="font-headline">CitraCell</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg">
                  {navLinks}
                </nav>
                <Button asChild variant="default" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform duration-300 ease-in-out hover:scale-105">
                    <Link href="#cta" onClick={closeSheet}>Get Notified</Link>
                </Button>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
