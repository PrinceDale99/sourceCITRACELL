import { Leaf, DollarSign, ShieldCheck, Recycle, ArrowDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Advantage {
    icon: LucideIcon;
    title: string;
    description: string;
}

const advantages: Advantage[] = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our batteries are 100% organic and biodegradable. After use, the kamias fruit can be safely composted, leaving no trace behind.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Slash your reliance on grid power for small devices. A handful of kamias can provide power for less than a cent per hour.",
  },
  {
    icon: ShieldCheck,
    title: "Safe For All",
    description: "No harsh chemicals, no risk of leaks or explosions. CitraCell is so safe, it's practically edible (though we don't recommend it!).",
  },
  {
    icon: Recycle,
    title: "Reduces Waste",
    description: "Give a second life to kamias fruits that are past their prime. CitraCell helps reduce food waste and landfill burden.",
  },
];

export default function WhyItMattersSection({ nextSection }: { nextSection?: string }) {
  return (
    <section id="why-it-matters" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-b from-green-900 via-primary to-green-700 text-white flex items-center snap-start">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-headline">A Greener Tomorrow, Today</h2>
            <p className="mt-4 text-lg text-green-200 max-w-3xl mx-auto">
                CitraCell isn't just a product; it's a statement. A choice for a healthier planet and a smarter way to live.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-2 hover:shadow-accent/10 animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="bg-accent rounded-lg p-3 mb-4">
                  <advantage.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-green-200">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
      {nextSection && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Link href={`#${nextSection}`}>
            <Button variant="outline" size="icon" className="rounded-full animate-bounce transition-transform duration-300 ease-in-out hover:scale-110 text-white bg-white/10 border-white/20 hover:bg-white/20">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
