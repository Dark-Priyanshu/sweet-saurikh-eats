import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>New Chaubey Ji Misthan Bhandar & Restaurant | Traditional Sweets in Saurikh</title>
        <meta 
          name="description" 
          content="Famous sweet shop and family restaurant in Saurikh, UP. Serving traditional Indian sweets, namkeen, fast food & beverages. Dine-in, takeaway & party orders." 
        />
        <meta name="keywords" content="sweets shop Saurikh, mithai, restaurant, Chaubey Ji, Indian sweets, namkeen, fast food, family restaurant, Uttar Pradesh" />
        <link rel="canonical" href="https://chaubeyjimisthan.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="New Chaubey Ji Misthan Bhandar & Restaurant" />
        <meta property="og:description" content="Traditional Sweets & Family Restaurant in Saurikh - Famous for quality mithai and delicious food" />
        <meta property="og:type" content="restaurant" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "New Chaubey Ji Misthan Bhandar & Restaurant",
            "image": "/hero-sweets.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chhibramau – Saurikh – Bidhuna Rd",
              "addressLocality": "Saurikh",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "209728",
              "addressCountry": "IN"
            },
            "telephone": "+91-72750-36218",
            "servesCuisine": ["Indian", "Sweets", "Fast Food"],
            "priceRange": "₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "77"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "closes": "23:00"
            }
          })}
        </script>
      </Helmet>

      <main className="pb-16 md:pb-0">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
        <MobileFixedCTA />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
