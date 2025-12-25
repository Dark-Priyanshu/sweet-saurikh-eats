import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-1 sm:mb-2">
              न्यू चौबेजी मिष्ठान भंडार
            </h3>
            <p className="text-primary-foreground/70 text-xs sm:text-sm mb-2 sm:mb-4">
              New Chaubey Ji Misthan Bhandar & Restaurant
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm hidden sm:block">
              Traditional sweets and family restaurant serving authentic taste since generations.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:07275036218" className="flex items-center justify-center sm:justify-start gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                072750 36218
              </a>
              <div className="flex items-start justify-center sm:justify-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Saurikh, UP 209728</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Closes 11 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 sm:block sm:space-y-2">
              <a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                Home
              </a>
              <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                About
              </a>
              <a href="#gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                Gallery
              </a>
              <a href="#menu" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                Menu
              </a>
              <a href="#reviews" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                Reviews
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs sm:text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <p className="text-center text-primary-foreground/60 text-xs sm:text-sm">
            © {currentYear} New Chaubey Ji Misthan Bhandar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
