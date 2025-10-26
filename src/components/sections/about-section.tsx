import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function AboutSection({ nextSection }: { nextSection?: string }) {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  const benefits = [
    "Sustainable and renewable energy source",
    "Reduces fruit waste, supporting local farmers",
    "Completely non-toxic and safe for household use",
    "Simple, durable, and intuitive refillable design"
  ];

  return (
    <section id="about" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-b from-green-900 via-primary to-green-800 text-white flex items-center snap-start">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-headline">
              What is CitraCell?
            </h2>
            <p className="text-lg text-green-200 mb-8 leading-relaxed">
              CitraCell is a groundbreaking bio-battery that harnesses the electrochemical properties of the kamias fruit. By simply inserting the fruit's extract, you can power small electronic devices for hours. It's a leap forward in personal, sustainable energy, designed to be both eco-friendly and user-friendly.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="text-lg text-green-100 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-in fade-in slide-in-from-right-16 duration-1000">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-transparent border-accent/20">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
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
