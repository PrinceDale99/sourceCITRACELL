import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  const benefits = [
    "Sustainable energy source",
    "Reduces household waste",
    "Completely non-toxic and safe",
    "Simple and intuitive to use"
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-16 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-headline">
              What is CitraCell?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              CitraCell is a groundbreaking bio-battery that harnesses the electrochemical properties of citric acid to generate power. By simply inserting a slice of lime or other citrus fruit, you can power small electronic devices for hours. It's a leap forward in personal, sustainable energy.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-in fade-in slide-in-from-right-16 duration-1000">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
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
    </section>
  );
}
