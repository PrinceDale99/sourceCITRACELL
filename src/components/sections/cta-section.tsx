"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function CtaSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock API call
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Subscription Successful!",
      description: "Thanks for your interest! We'll keep you updated on our launch.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="cta" className="min-h-[70vh] py-24 sm:py-32 bg-gradient-to-br from-primary via-green-700 to-teal-800 text-primary-foreground flex items-center scroll-snap-start">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-16 duration-1000">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">
                    Be the First to Experience CitraCell
                </h2>
                <p className="mt-4 text-lg text-green-200 max-w-xl">
                    Sign up for exclusive updates, launch news, and a special early-bird discount. Join the sustainable energy revolution!
                </p>
            </div>

            <div className="animate-in fade-in slide-in-from-right-16 duration-1000">
                <Card className="bg-background/20 backdrop-blur-md border-white/20">
                    <CardHeader>
                        <CardTitle className="text-white">Join the Wishlist</CardTitle>
                        <CardDescription className="text-gray-300">
                        Enter your email to join the wishlist.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex-grow">
                                <FormControl>
                                    <Input 
                                        type="email" 
                                        placeholder="your.email@example.com" 
                                        {...field} 
                                        className="h-12 text-lg bg-white/90 text-black placeholder:text-gray-500 border-none focus-visible:ring-2 focus-visible:ring-accent" 
                                    />
                                </FormControl>
                                <FormMessage className="text-accent"/>
                                </FormItem>
                            )}
                            />
                            <Button type="submit" size="lg" className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 transition-transform duration-300 ease-in-out hover:scale-105" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Joining...' : 'Join Wishlist'}
                            </Button>
                        </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
