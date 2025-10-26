import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function HeroSection() {
  const batteryImage = PlaceHolderImages.find(img => img.id === 'citracell-battery');

  return (
    <section id="hero" className="relative h-[100vh] w-full flex flex-col items-center justify-center text-white overflow-hidden bg-gradient-to-br from-green-400/30 via-primary to-green-900">
      
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent/20 via-primary to-green-900 opacity-70 animate-gradient-xy"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Product Image */}
        {batteryImage && (
          <div className="animate-subtle-sway mb-8">
            <Image
              src={batteryImage.imageUrl}
              alt={batteryImage.description}
              width={200}
              height={300}
              className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)] max-w-[120px] sm:max-w-[150px] md:max-w-[200px]"
              data-ai-hint={batteryImage.imageHint}
              priority
              unoptimized
            />
          </div>
        )}

        {/* Text Overlay */}
        <div className="flex flex-col items-center gap-2 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-md font-headline">
            CitraCell
          </h1>
          <p className="max-w-xl text-md md:text-lg text-gray-200 drop-shadow-sm">
            Refillable Battery Powered by Kamias
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <Link href="#cta">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/50 text-white hover:bg-white/20 hover:text-white font-bold text-lg px-8 py-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
              Notify Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
