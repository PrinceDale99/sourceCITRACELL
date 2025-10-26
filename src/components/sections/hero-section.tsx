import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function HeroSection() {
  const batteryImage = PlaceHolderImages.find(img => img.id === 'citracell-battery');

  return (
    <section id="hero" className="relative h-[100vh] w-full flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-green-400/30 via-primary to-green-900">
      
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent/20 via-primary to-green-900 opacity-70 animate-gradient-xy"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center animate-in fade-in slide-in-from-left-16 duration-1000">
                {batteryImage && (
                <div className="animate-subtle-sway">
                    <Image
                    src={batteryImage.imageUrl}
                    alt={batteryImage.description}
                    width={200}
                    height={300}
                    className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)]"
                    data-ai-hint={batteryImage.imageHint}
                    priority
                    unoptimized
                    />
                </div>
                )}
            </div>

            {/* Text and CTA */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-right-16 duration-1000">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md font-headline">
                    CitraCell
                </h1>
                <p className="mt-2 max-w-md text-lg lg:text-xl text-gray-200 drop-shadow-sm">
                    Refillable Battery Powered by Kamias
                </p>
                <div className="mt-8">
                <Link href="#cta">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/50 text-white hover:bg-white/20 hover:text-white font-bold text-lg px-8 py-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
                    Notify Me
                    </Button>
                </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
