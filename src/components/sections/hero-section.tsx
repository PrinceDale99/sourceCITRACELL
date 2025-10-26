import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowDown, Leaf } from 'lucide-react';

export default function HeroSection({ nextSection }: { nextSection?: string }) {
  const batteryImage = PlaceHolderImages.find(img => img.id === 'citracell-battery');

  return (
    <section id="hero" className="relative h-[100vh] min-h-[700px] w-full flex items-center text-white overflow-hidden bg-gradient-to-br from-accent/70 via-primary to-green-800">
        {/* Decorative citrus splashes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-lime-300/20 rounded-full mix-blend-soft-light filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400/20 rounded-full mix-blend-soft-light filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/2 right-1/2 w-48 h-48 bg-yellow-300/10 rounded-full mix-blend-soft-light filter blur-xl animate-blob"></div>

        {/* Soury leaf designs */}
        <Leaf className="absolute top-[15%] left-[10%] h-24 w-24 text-white/10 rotate-12" strokeWidth={1} />
        <Leaf className="absolute top-[20%] right-[15%] h-16 w-16 text-white/5 -rotate-45 filter blur-sm" strokeWidth={1} />
        <Leaf className="absolute bottom-[25%] left-[20%] h-28 w-28 text-white/10 rotate-[60deg]" strokeWidth={1} />
        <Leaf className="absolute bottom-[15%] right-[10%] h-20 w-20 text-white/10 -rotate-12" strokeWidth={1} />
        <Leaf className="absolute bottom-[40%] right-[30%] h-12 w-12 text-white/5 filter blur-md" strokeWidth={1} />
        <Leaf className="absolute top-[50%] left-[40%] h-32 w-32 text-white/5 filter blur-lg -rotate-45" strokeWidth={1} />


      <div className="relative z-10 container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-8">
        <div className="flex justify-center animate-in fade-in slide-in-from-left-16 duration-1000 order-2 md:order-1 mt-12 md:mt-0">
          {batteryImage && (
            <div className="animate-float">
                <Image
                src={batteryImage.imageUrl}
                alt={batteryImage.description}
                width={400}
                height={600}
                className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] w-1/2 h-auto md:w-2/3 max-w-[250px]"
                data-ai-hint={batteryImage.imageHint}
                unoptimized
                />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 px-4 animate-in fade-in slide-in-from-right-16 duration-1000 order-1 md:order-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg font-headline">
              Power Your Life with <span className="text-accent">Nature</span>.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-200 drop-shadow-md leading-relaxed">
              Introducing CitraCell, the revolutionary battery powered by the natural energy of kamias (bilimbi). Clean, sustainable, and surprisingly powerful.
            </p>
            <div className="flex gap-4 mt-4">
                <Link href="#cta">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-2xl">
                        Join the Waitlist
                    </Button>
                </Link>
            </div>
        </div>
      </div>

      {nextSection && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Link href={`#${nextSection}`}>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white animate-bounce">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
