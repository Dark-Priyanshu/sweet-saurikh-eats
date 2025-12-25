import { Star, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 pb-24 md:pt-20 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Indian Sweets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/95 via-background/85 to-background/70 md:to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-secondary/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary" />
            <span className="font-medium text-foreground text-sm sm:text-base">4.5</span>
            <span className="text-muted-foreground text-xs sm:text-sm">(77 Reviews)</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-1 sm:mb-2 leading-tight">
            न्यू चौबेजी मिष्ठान भंडार
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif text-primary mb-2 sm:mb-4">
            New Chaubey Ji Misthan Bhandar
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-1 sm:mb-2">
            & Restaurant
          </p>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 sm:mb-6 md:mb-8 max-w-xl leading-relaxed">
            Traditional Sweets & Family Restaurant in Saurikh — Serving authentic taste since generations
          </p>

          {/* Business Hours */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4 sm:mb-6 md:mb-8">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            <span className="text-sm sm:text-base">Open Today · Closes 11 PM</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button size="lg" onClick={scrollToMenu} className="shadow-warm w-full sm:w-auto">
              View Menu
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <a href="tel:07275036218">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
