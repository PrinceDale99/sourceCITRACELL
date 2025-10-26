import Link from 'next/link';
import { BatteryCharging } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/90 py-8 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
           <BatteryCharging className="h-6 w-6 text-accent" />
           <p className="text-lg font-bold text-white font-headline">CitraCell</p>
        </div>
        <p className="text-sm text-green-200 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} CitraCell Inc. All rights reserved.
        </p>
        <p className='text-xs text-green-300/50 mt-2 md:mt-0'>
          University of Makati, Group 3 (I-D BSBA FM)
        </p>
      </div>
    </footer>
  );
}
