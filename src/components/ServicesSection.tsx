import { UtensilsCrossed, Car, PartyPopper, Gift } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine-In",
    description: "Comfortable family seating with AC and modern amenities for a pleasant dining experience"
  },
  {
    icon: Car,
    title: "Drive-Through",
    description: "Quick service for takeaway orders. Get your favorites without leaving your vehicle"
  },
  {
    icon: PartyPopper,
    title: "Party Orders",
    description: "Perfect venue for small family gatherings, birthday parties, and celebrations"
  },
  {
    icon: Gift,
    title: "Sweet Boxes",
    description: "Beautifully packed gift boxes for festivals, weddings, and special occasions"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              How We Serve You
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              From quick takeaways to memorable family celebrations, we're here to serve you
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="text-center p-6 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/10 h-full">
                <div className="inline-flex p-4 bg-secondary rounded-full mb-4">
                  <service.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
