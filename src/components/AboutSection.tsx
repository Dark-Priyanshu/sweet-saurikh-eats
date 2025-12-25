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
    <section id="about" className="py-16 md:py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <img
                src={restaurantImage}
                alt="Restaurant Interior"
                className="rounded-lg shadow-warm w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hidden md:block">
                <span className="font-serif text-lg">Since Generations</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                A Legacy of Taste & Tradition
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Welcome to <strong className="text-foreground">New Chaubey Ji Misthan Bhandar & Restaurant</strong>, 
                a beloved destination in Saurikh, Uttar Pradesh. For generations, we have been serving 
                the finest traditional Indian sweets and delicious food to families across the region.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From our famous <strong className="text-foreground">mithai collection</strong> including 
                Gulab Jamun, Rasgulla, and Barfi, to our crispy samosas and refreshing mango shakes — 
                every item is crafted with love and the finest ingredients. Our newly upgraded restaurant 
                space is perfect for family dining and small party celebrations.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={300 + index * 100}>
                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <feature.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
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
