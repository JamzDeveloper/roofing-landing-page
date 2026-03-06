import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Star, Phone, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Our Portfolio",
    description: "View our completed roofing projects and see the quality craftsmanship we deliver.",
    href: "/portfolio",
    icon: ImageIcon,
  },
  {
    title: "Customer Reviews",
    description: "Read testimonials from satisfied customers who trust us with their roofing needs.",
    href: "/testimonials",
    icon: Star,
  },
  {
    title: "Get in Touch",
    description: "Request a free estimate and let us help you with your roofing project.",
    href: "/contact",
    icon: Phone,
  },
];

export function PreviewCardsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            Explore More
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Discover What We Offer
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link href={card.href} key={card.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                    <CardDescription className="text-base">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:bg-primary/5"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
