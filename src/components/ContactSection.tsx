import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Contact & Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located on Chhibramau-Saurikh-Bidhuna Road. Come visit us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Chhibramau – Saurikh – Bidhuna Rd,<br />
                    Saurikh, Uttar Pradesh 209728
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-2">Phone</h3>
                  <a href="tel:07275036218" className="text-primary hover:text-primary/80 text-xl font-medium">
                    072750 36218
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Open Daily<br />
                    <span className="text-foreground font-medium">Closes at 11:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="tel:07275036218">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" asChild>
                <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.5!2d79.55!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaurikh%2C%20Uttar%20Pradesh%20209728!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
