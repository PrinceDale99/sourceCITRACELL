import { Leaf, DollarSign, ShieldCheck, Recycle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
    icon: LucideIcon;
    title: string;
    description: string;
}

const advantages: Advantage[] = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our batteries are 100% organic and biodegradable. After use, they can be safely composted, leaving no trace behind.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Slash your reliance on grid power for small devices. A single citrus fruit can provide power for less than a cent per hour.",
  },
  {
    icon: ShieldCheck,
    title: "Safe For All",
    description: "No harsh chemicals, no risk of leaks or explosions. CitraCell is so safe, it's practically edible (though we don't recommend it!).",
  },
  {
    icon: Recycle,
    title: "Reduces Waste",
    description: "Give a second life to citrus fruits that are past their prime. CitraCell helps reduce food waste and landfill burden.",
  },
];

export default function WhyItMattersSection() {
  return (
    <section id="why-it-matters" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">A Greener Tomorrow, Today</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                CitraCell isn't just a product; it's a statement. A choice for a healthier planet and a smarter way to live.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-muted/50 rounded-2xl transition-all duration-300 hover:bg-muted animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="bg-accent rounded-lg p-3 mb-4">
                  <advantage.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
