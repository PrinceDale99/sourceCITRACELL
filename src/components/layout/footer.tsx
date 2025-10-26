import Link from 'next/link';
import { BatteryCharging } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
           <BatteryCharging className="h-6 w-6 text-primary" />
           <p className="text-lg font-bold text-primary font-headline">CitraCell</p>
        </div>
        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} CitraCell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
