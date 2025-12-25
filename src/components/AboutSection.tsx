import { Award, Heart, Users, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const features = [
  {
    icon: Award,
    title: "Quality Ingredients",
    description: "Only the finest ingredients for authentic taste"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Traditional recipes passed through generations"
  },
  {
    icon: Users,
    title: "Family Space",
    description: "Perfect for family gatherings & celebrations"
  },
  {
    icon: Sparkles,
    title: "Hygiene First",
    description: "Clean, hygienic preparation every time"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <img
                src={restaurantImage}
                alt="Restaurant Interior"
                className="rounded-lg shadow-warm w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hidden sm:block">
                <span className="font-serif text-sm sm:text-lg">Since Generations</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <span className="text-secondary font-medium uppercase tracking-wider text-xs sm:text-sm">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4 sm:mb-6">
                A Legacy of Taste & Tradition
              </h2>
              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Welcome to <strong className="text-foreground">New Chaubey Ji Misthan Bhandar & Restaurant</strong>, 
                a beloved destination in Saurikh, Uttar Pradesh. For generations, we have been serving 
                the finest traditional Indian sweets and delicious food to families across the region.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                From our famous <strong className="text-foreground">mithai collection</strong> including 
                Gulab Jamun, Rasgulla, and Barfi, to our crispy samosas and refreshing mango shakes — 
                every item is crafted with love and the finest ingredients.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={300 + index * 100}>
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-card rounded-lg h-full">
                      <div className="p-1.5 sm:p-2 bg-secondary/20 rounded-lg flex-shrink-0">
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
