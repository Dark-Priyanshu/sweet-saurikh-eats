import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917275036218"; // India country code + phone number
  const message = encodeURIComponent(
    "नमस्ते! मुझे New Chaubey Ji Misthan Bhandar से ऑर्डर/जानकारी चाहिए।\n\nHello! I would like to place an order or get information from New Chaubey Ji Misthan Bhandar."
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#20BD5A]"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
