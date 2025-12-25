import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">
              न्यू चौबेजी मिष्ठान भंडार
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              New Chaubey Ji Misthan Bhandar & Restaurant
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Traditional sweets and family restaurant serving authentic taste since generations.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a href="tel:07275036218" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                072750 36218
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Chhibramau – Saurikh – Bidhuna Rd, Saurikh, UP 209728</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Open Daily · Closes 11 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                About Us
              </a>
              <a href="#menu" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Menu
              </a>
              <a href="#reviews" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Reviews
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} New Chaubey Ji Misthan Bhandar & Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
