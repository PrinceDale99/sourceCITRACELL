import { ArrowDown, Atom, Eye, HandHeart, Lightbulb, Recycle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface CoreValue {
    icon: LucideIcon;
    title: string;
    description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We turn Kamias fruit into a natural power source, creating a clean and renewable energy solution from local resources.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "We are committed to eco-friendly practices by reducing waste, lowering carbon footprint, and promoting renewable energy use.",
  },
    {
    icon: HandHeart,
    title: "Accessibility",
    description: "We make energy solutions simple and affordable, using basic materials that communities can easily replicate anytime, anywhere.",
  },
    {
    icon: ShieldCheck,
    title: "Resilience",
    description: "We provide reliable power during brownouts and outages, helping communities adapt to frequent energy challenges.",
  },
]

export default function CompanyOverviewSection({ nextSection }: { nextSection?: string }) {
    return (
        <section id="company-overview" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-b from-green-800 to-green-900 text-white flex items-center snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-headline">
                        Our Story
                    </h2>
                    <p className="mt-4 text-lg text-green-200 max-w-3xl mx-auto">
                        Established on September 5, 2024, in Paete, Laguna, CitraCell was born from a group of student researchers who discovered a powerful, eco-friendly energy alternative.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="animate-in fade-in slide-in-from-left-16 duration-1000">
                        <h3 className="flex items-center gap-3 text-3xl font-bold text-white mb-4"><Atom className="h-8 w-8 text-accent" /> Mission</h3>
                        <p className="text-lg text-green-200 leading-relaxed">
                            To develop an accessible and eco-friendly energy source through CitraCell, a renewable product powered by Kamias extract, bridging the gap between innovation and everyday usability.
                        </p>
                    </div>
                    <div className="animate-in fade-in slide-in-from-right-16 duration-1000">
                        <h3 className="flex items-center gap-3 text-3xl font-bold text-white mb-4"><Eye className="h-8 w-8 text-accent" /> Vision</h3>
                        <p className="text-lg text-green-200 leading-relaxed">
                            To establish CitraCell as a key contributor to sustainable energy innovation, fostering a future where renewable energy is the standard choice for everyone.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16 animate-in fade-in duration-1000 delay-300">
                    <h3 className="text-3xl font-bold text-white font-headline">Our Core Values</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <div key={index} className="animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 150 + 300}ms`}}>
                             <Card className="text-center h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/5 backdrop-blur-sm border-accent/20">
                                <CardHeader>
                                    <div className="mx-auto bg-accent rounded-full p-3 w-fit mb-3">
                                        <value.icon className="h-8 w-8 text-accent-foreground" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-green-200 text-sm">{value.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
            {nextSection && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
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
