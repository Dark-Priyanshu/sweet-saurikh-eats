import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917275036218";
  const message = encodeURIComponent(
    "नमस्ते! मुझे New Chaubey Ji Misthan Bhandar से ऑर्डर/जानकारी चाहिए।\n\nHello! I would like to place an order or get information."
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 sm:bottom-20 md:bottom-6 right-3 sm:right-4 z-50 flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      <span className="hidden sm:inline font-medium text-sm sm:text-base">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-4 sm:w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-[#20BD5A]"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
