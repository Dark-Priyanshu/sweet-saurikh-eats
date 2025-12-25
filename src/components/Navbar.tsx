import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold text-primary">
              न्यू चौबेजी मिष्ठान भंडार
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              New Chaubey Ji Misthan Bhandar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="tel:07275036218">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" />
                Directions
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              <button onClick={() => scrollToSection("home")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection("menu")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection("reviews")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="tel:07275036218">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
