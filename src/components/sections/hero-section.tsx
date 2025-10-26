import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg font-headline">
          Power Your Life with <span className="text-accent">Nature</span>.
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-200 drop-shadow-md">
          Introducing CitraCell, the revolutionary battery powered by the natural energy of citrus. Clean, sustainable, and surprisingly powerful.
        </p>
        <div className="flex gap-4">
            <Link href="#cta">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-2xl">
                    Join the Waitlist
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
