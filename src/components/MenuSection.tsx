import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import snacksImage from "@/assets/snacks.jpg";
import heroSweets from "@/assets/hero-sweets.jpg";

const menuCategories = [
  { id: "sweets", label: "Sweets", labelHi: "मिठाई" },
  { id: "namkeen", label: "Snacks", labelHi: "नमकीन" },
  { id: "fastfood", label: "Fast Food", labelHi: "फास्ट फूड" },
  { id: "beverages", label: "Drinks", labelHi: "पेय" }
];

const menuItems = {
  sweets: [
    { name: "Gulab Jamun", nameHi: "गुलाब जामुन", description: "Soft, syrup-soaked milk dumplings" },
    { name: "Rasgulla", nameHi: "रसगुल्ला", description: "Spongy cottage cheese balls in sugar syrup" },
    { name: "Kaju Barfi", nameHi: "काजू बर्फी", description: "Rich cashew fudge squares" },
    { name: "Besan Ladoo", nameHi: "बेसन लड्डू", description: "Traditional gram flour sweet balls" },
    { name: "Peda", nameHi: "पेड़ा", description: "Classic milk-based sweet with cardamom" },
    { name: "Jalebi", nameHi: "जलेबी", description: "Crispy, spiral-shaped sweet soaked in syrup" },
    { name: "Mohanthal", nameHi: "मोहनथाल", description: "Dense gram flour fudge with nuts" },
    { name: "Rasmalai", nameHi: "रसमलाई", description: "Cream-soaked cottage cheese patties" }
  ],
  namkeen: [
    { name: "Samosa", nameHi: "समोसा", description: "Crispy pastry with spiced potato filling" },
    { name: "Kachori", nameHi: "कचौरी", description: "Deep-fried puffed bread with dal filling" },
    { name: "Namkeen Mix", nameHi: "नमकीन मिक्स", description: "Assorted savory snack mixture" },
    { name: "Mathri", nameHi: "मठरी", description: "Crispy, flaky savory crackers" },
    { name: "Aloo Tikki", nameHi: "आलू टिक्की", description: "Spiced potato patties" },
    { name: "Bhujia", nameHi: "भुजिया", description: "Thin, crispy gram flour noodles" }
  ],
  fastfood: [
    { name: "Veg Pizza", nameHi: "वेज पिज़्ज़ा", description: "Fresh vegetable pizza with cheese" },
    { name: "Chole Bhature", nameHi: "छोले भटूरे", description: "Spiced chickpeas with fried bread" },
    { name: "Pav Bhaji", nameHi: "पाव भाजी", description: "Spiced vegetable mash with buttered buns" },
    { name: "Chowmein", nameHi: "चाउमीन", description: "Stir-fried noodles with vegetables" },
    { name: "Paneer Roll", nameHi: "पनीर रोल", description: "Cottage cheese wrapped in flatbread" },
    { name: "Dahi Puri", nameHi: "दही पूरी", description: "Crispy puris with yogurt topping" }
  ],
  beverages: [
    { name: "Mango Shake", nameHi: "मैंगो शेक", description: "Creamy fresh mango milkshake" },
    { name: "Lassi", nameHi: "लस्सी", description: "Traditional sweet yogurt drink" },
    { name: "Masala Chai", nameHi: "मसाला चाय", description: "Spiced Indian tea" },
    { name: "Cold Coffee", nameHi: "कोल्ड कॉफ़ी", description: "Chilled coffee with ice cream" },
    { name: "Thandai", nameHi: "ठंडाई", description: "Spiced almond milk drink" },
    { name: "Nimbu Pani", nameHi: "नींबू पानी", description: "Refreshing lemonade" }
  ]
};

const categoryImages: Record<string, string> = {
  sweets: heroSweets,
  namkeen: snacksImage,
  fastfood: snacksImage,
  beverages: heroSweets
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("sweets");

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-secondary font-medium uppercase tracking-wider text-xs sm:text-sm">
              Our Specialties
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-3 sm:mb-4">
              Explore Our Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Discover our wide range of traditional sweets, savory snacks, and delicious fast food items
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 flex-wrap">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                size="sm"
                className="text-xs sm:text-sm px-3 sm:px-4"
              >
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.labelHi}</span>
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Category Image - Hidden on mobile, shown on tablet+ */}
          <AnimatedSection animation="fade-right" className="hidden md:block lg:col-span-1">
            <img
              src={categoryImages[activeCategory]}
              alt={activeCategory}
              className="w-full h-64 lg:h-full object-cover rounded-lg shadow-warm"
            />
          </AnimatedSection>

          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <div className="p-3 sm:p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors h-full">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-medium text-foreground text-sm sm:text-base">{item.name}</h4>
                      <span className="text-secondary text-xs sm:text-sm font-medium flex-shrink-0">{item.nameHi}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <AnimatedSection animation="fade" delay={400}>
          <p className="text-center text-muted-foreground mt-6 sm:mt-8 text-xs sm:text-sm">
            * Prices available at the counter. Fresh items made daily.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;
