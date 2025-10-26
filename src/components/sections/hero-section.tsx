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

      {/* Citrus Leaf Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -left-12 w-48 h-48 bg-green-300/20 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        <div className="absolute top-[10%] left-[5%] w-24 h-12 bg-accent/20 rounded-[50%] rotate-12 blur-sm opacity-50 animate-float"></div>
        <div className="absolute top-[20%] right-[10%] w-32 h-16 bg-green-300/10 rounded-[50%] -rotate-12 blur-md opacity-40 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-[15%] left-[20%] w-20 h-10 bg-accent/20 rounded-[50%] rotate-20 opacity-60 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-[5%] right-[25%] w-28 h-14 bg-green-300/15 rounded-[50%] -rotate-20 blur-sm opacity-50 animate-float animation-delay-3000"></div>
        <div className="absolute top-[50%] left-[40%] w-16 h-8 bg-accent/10 rounded-[50%] rotate-45 blur-lg opacity-30 animate-float animation-delay-500"></div>
        <div className="absolute top-[60%] right-[45%] w-20 h-10 bg-green-300/10 rounded-[50%] -rotate-45 blur-xl opacity-20 animate-float animation-delay-1500"></div>
         <div className="absolute top-[5%] right-[40%] w-24 h-12 bg-accent/20 rounded-[50%] rotate-12 blur-sm opacity-50 animate-float animation-delay-5000"></div>
        <div className="absolute bottom-[25%] left-[5%] w-32 h-16 bg-green-300/10 rounded-[50%] -rotate-12 blur-md opacity-40 animate-float animation-delay-6000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center animate-in fade-in slide-in-from-left-16 duration-1000">
                {batteryImage && (
                <div className="animate-subtle-sway group">
                    <Image
                    src={batteryImage.imageUrl}
                    alt={batteryImage.description}
                    width={100}
                    height={150}
                    className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)] w-[100px] h-auto sm:w-[150px] transition-transform duration-500 ease-in-out group-hover:scale-110"
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
                    <Button size="lg" className="bg-white/10 border-white/30 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-accent/80 hover:to-primary/80 hover:border-transparent hover:text-primary-foreground">
                        Join Wishlist
                    </Button>
                </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
