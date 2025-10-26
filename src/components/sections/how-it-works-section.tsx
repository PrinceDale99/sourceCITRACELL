import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, Power, BatteryCharging, ArrowDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: LogIn,
    title: "1. Insert",
    description: "Place a few fresh kamias fruits into the CitraCell cartridge. The juicier, the better!",
  },
  {
    icon: Power,
    title: "2. Activate",
    description: "The natural acids in the kamias interact with our patented electrodes, kickstarting the energy generation process instantly.",
  },
  {
    icon: BatteryCharging,
    title: "3. Power Up",
    description: "Enjoy hours of clean, renewable energy to charge your phone, power a light, or run small devices.",
  },
];

export default function HowItWorksSection({ nextSection }: { nextSection?: string }) {
  return (
    <section id="how-it-works" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-br from-green-200 to-green-300 flex items-center snap-start">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">
            Simple, Clean, and Powerful
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Using CitraCell is incredibly easy. Three simple steps to a greener lifestyle.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 150}ms`}}>
                <Card className="text-center h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardHeader>
                        <div className="mx-auto bg-primary rounded-full p-4 w-fit mb-4">
                            <step.icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
       {nextSection && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Link href={`#${nextSection}`}>
            <Button variant="outline" size="icon" className="rounded-full animate-bounce transition-transform duration-300 ease-in-out hover:scale-110">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
