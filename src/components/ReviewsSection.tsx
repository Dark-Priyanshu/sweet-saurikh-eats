import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Best sweets in Saurikh! The Gulab Jamun and Rasgulla are absolutely divine. My family loves coming here.",
    highlight: "Best sweets"
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Amazing service and tasty food. The restaurant is very clean and perfect for family outings. Highly recommended!",
    highlight: "Family friendly"
  },
  {
    name: "Amit Kumar",
    rating: 4,
    text: "Good quality namkeen and snacks. The samosas are crispy and delicious. Great place for tea time treats.",
    highlight: "Tasty snacks"
  },
  {
    name: "Sunita Devi",
    rating: 5,
    text: "We ordered sweets for our daughter's birthday. Everyone loved them! The quality and taste is consistent.",
    highlight: "Celebrations"
  },
  {
    name: "Vinod Gupta",
    rating: 5,
    text: "Been coming here for years. The taste never disappoints. Good service and reasonable prices.",
    highlight: "Good service"
  },
  {
    name: "Meera Tiwari",
    rating: 4,
    text: "Nice family restaurant with variety of options. Kids loved the fast food items. Will visit again!",
    highlight: "Great variety"
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
              ))}
            </div>
            <span className="font-medium text-foreground">4.5</span>
            <span className="text-muted-foreground">(77 Google Reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-warm transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-secondary/30" />
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  {review.highlight}
                </span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{review.name}</span>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
