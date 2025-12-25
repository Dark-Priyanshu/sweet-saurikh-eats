import { Star, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Indian Sweets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="font-medium text-foreground">4.5</span>
            <span className="text-muted-foreground">(77 Reviews)</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-2">
            न्यू चौबेजी मिष्ठान भंडार
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-primary mb-4">
            New Chaubey Ji Misthan Bhandar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            & Restaurant
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl">
            Traditional Sweets & Family Restaurant in Saurikh — Serving authentic taste since generations
          </p>

          {/* Business Hours */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <Clock className="w-5 h-5 text-secondary" />
            <span>Open Today · Closes 11 PM</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToMenu} className="shadow-warm">
              View Menu
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:07275036218">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
