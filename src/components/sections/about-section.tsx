import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function AboutSection({ nextSection }: { nextSection?: string }) {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  const benefits = [
    "Sustainable energy source",
    "Reduces fruit waste",
    "Completely non-toxic and safe",
    "Simple and intuitive to use"
  ];

  return (
    <section id="about" className="relative min-h-[100vh] py-24 sm:py-32 bg-background flex items-center scroll-snap-start">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              What is CitraCell?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              CitraCell is a groundbreaking bio-battery that harnesses the electrochemical properties of the kamias fruit (also known as bilimbi). By simply inserting a few kamias fruits, you can power small electronic devices for hours. It's a leap forward in personal, sustainable energy.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-in fade-in slide-in-from-right-16 duration-1000">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
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
            <Button variant="outline" size="icon" className="rounded-full animate-bounce">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
