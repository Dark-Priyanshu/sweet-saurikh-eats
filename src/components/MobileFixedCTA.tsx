import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileFixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-2 sm:p-3 safe-area-inset-bottom">
      <div className="flex gap-2 sm:gap-3">
        <Button className="flex-1 text-sm h-10 sm:h-11" asChild>
          <a href="tel:07275036218">
            <Phone className="w-4 h-4 mr-1.5 sm:mr-2" />
            Call Now
          </a>
        </Button>
        <Button variant="secondary" className="flex-1 text-sm h-10 sm:h-11" asChild>
          <a href="https://maps.google.com/?q=Chhibramau+Saurikh+Bidhuna+Rd,+Saurikh,+UP+209728" target="_blank" rel="noopener noreferrer">
            <Navigation className="w-4 h-4 mr-1.5 sm:mr-2" />
            Directions
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileFixedCTA;
