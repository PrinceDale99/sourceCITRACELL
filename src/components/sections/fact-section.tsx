import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FactSection({ nextSection }: { nextSection?: string }) {
    return (
        <section id="fact" className="relative min-h-[100vh] py-24 sm:py-32 bg-gradient-to-b from-green-800 via-primary to-green-900 text-white flex items-center justify-center snap-start">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="animate-in fade-in duration-1000 delay-500">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-headline">
                        Power From Kamias.
                    </h2>
                    <p className="text-3xl md:text-4xl text-green-200">
                        Not Chemicals.
                    </p>
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
