import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages: PlaceHolderImages } = placeholderData;


interface Inventor {
    id: string;
    name: string;
    image: (typeof PlaceHolderImages)[number] | undefined;
}

const inventors: Inventor[] = [
    { id: 'inventor-1', name: 'Raven L. Pandakila', image: PlaceHolderImages.find(img => img.id === 'inventor-1') },
    { id: 'inventor-2', name: 'Edelyn A. Capucao', image: PlaceHolderImages.find(img => img.id === 'inventor-2') },
    { id: 'inventor-3', name: 'Ashley Heart A. Dela Cruz', image: PlaceHolderImages.find(img => img.id === 'inventor-3') },
    { id: 'inventor-4', name: 'Charise E. Magdato', image: PlaceHolderImages.find(img => img.id === 'inventor-4') },
    { id: 'inventor-5', name: 'Wylliana Nabablit', image: PlaceHolderImages.find(img => img.id === 'inventor-5') },
];

export default function InventorsSection({ nextSection }: { nextSection?: string }) {
    return (
        <section id="inventors" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-b from-green-900 to-green-800 text-white flex items-center snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-headline">
                        Meet the Inventors
                    </h2>
                    <p className="mt-4 text-lg text-green-200 max-w-3xl mx-auto">
                        The brilliant minds from the University of Makati behind CitraCell.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {inventors.map((inventor, index) => (
                        <div key={inventor.id} className="animate-in fade-in slide-in-from-bottom-16 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                            <Card className="relative text-center h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/5 backdrop-blur-sm border-accent/20 overflow-hidden group">
                                <CardContent className="p-0">
                                    {inventor.image && (
                                        <Image
                                            src={inventor.image.imageUrl}
                                            alt={`Portrait of ${inventor.name}`}
                                            width={400}
                                            height={400}
                                            className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-110"
                                            data-ai-hint={inventor.image.imageHint}
                                        />
                                    )}
                                </CardContent>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-lg font-semibold text-white drop-shadow-md">{inventor.name}</h3>
                                </div>
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
