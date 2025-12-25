import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroSweets from "@/assets/hero-sweets.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import snacks from "@/assets/snacks.jpg";
import sweetDisplay from "@/assets/sweet-display.jpg";
import jalebiMaking from "@/assets/jalebi-making.jpg";
import thaliMeal from "@/assets/thali-meal.jpg";
import giftBoxes from "@/assets/gift-boxes.jpg";

const galleryImages = [
  { src: sweetDisplay, alt: "Sweet Display Counter", caption: "Our colorful mithai display" },
  { src: restaurantInterior, alt: "Restaurant Interior", caption: "Family dining area" },
  { src: heroSweets, alt: "Traditional Sweets", caption: "Fresh traditional sweets" },
  { src: jalebiMaking, alt: "Jalebi Making", caption: "Fresh jalebi being prepared" },
  { src: thaliMeal, alt: "Thali Meal", caption: "Delicious vegetarian thali" },
  { src: snacks, alt: "Samosa Platter", caption: "Crispy samosas with chutney" },
  { src: giftBoxes, alt: "Gift Boxes", caption: "Festive gift packaging" },
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            A Glimpse Inside
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a peek at our restaurant, freshly prepared sweets, and the warm ambiance that awaits you
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-96" : "h-32 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-background hover:text-secondary transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 text-background hover:text-secondary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] px-16">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-background mt-4 text-lg">
              {galleryImages[currentIndex].caption}
            </p>
            <p className="text-center text-background/60 mt-1 text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 p-2 text-background hover:text-secondary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
