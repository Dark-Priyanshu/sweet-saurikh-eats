import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reviews = [
  {
    name: "Rahul S.",
    rating: 5,
    text: "Best sweets in Saurikh! The Gulab Jamun and Rasgulla are absolutely divine.",
    highlight: "Best sweets"
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Amazing service and tasty food. The restaurant is very clean and perfect for family outings.",
    highlight: "Family friendly"
  },
  {
    name: "Amit Kumar",
    rating: 4,
    text: "Good quality namkeen and snacks. The samosas are crispy and delicious.",
    highlight: "Tasty snacks"
  },
  {
    name: "Sunita D.",
    rating: 5,
    text: "We ordered sweets for our daughter's birthday. Everyone loved them!",
    highlight: "Celebrations"
  },
  {
    name: "Vinod G.",
    rating: 5,
    text: "Been coming here for years. The taste never disappoints. Good service.",
    highlight: "Good service"
  },
  {
    name: "Meera T.",
    rating: 4,
    text: "Nice family restaurant with variety of options. Kids loved the fast food items.",
    highlight: "Great variety"
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-secondary font-medium uppercase tracking-wider text-xs sm:text-sm">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="font-medium text-foreground text-sm sm:text-base">4.5</span>
              <span className="text-muted-foreground text-xs sm:text-sm">(77 Reviews)</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm border border-border hover:shadow-warm transition-shadow h-full">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-secondary/30" />
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/10 text-secondary text-[10px] sm:text-xs font-medium rounded-full">
                    {review.highlight}
                  </span>
                </div>
                <p className="text-foreground/80 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground text-sm sm:text-base">{review.name}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
