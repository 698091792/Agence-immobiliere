import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import aa from "../images/aa.jpg";
import bb from "../images/bb.jpg";
import dd from "../images/dd.jpg";
import hh from "../images/hh.jpg";
import ff from "../images/ff.jpg";
import cc from "../images/cc.jpg";
import ii from "../images/ii.jpg";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Mballa",
    location: "Yaounde, CMR",
    avatar: aa,
    content: "My family and I had the most wonderful stay at KribiBeach. The apartment was immaculate, with breathtaking sea views. The staff went above and beyond to make our vacation special.",
    rating: 4
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Rome, Italy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    content: "Absolutely perfect location, steps away from the beach. The apartment had everything we needed and more. The modern amenities combined with the traditional coastal charm created a truly magical experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Bilogue",
    location: "Edea, CMR",
    avatar: bb,
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 3
  },
  {
    id: 4,
    name: "Benjamin Bayarm",
    location: "Douala, CMR",
    avatar: dd,
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 4
  },
   {
    id: 5,
    name: "Maya Martinez",
    location: "New York, USA",
    avatar: hh,
    content: "My family and I had the most wonderful stay at KribiBeach. The apartment was immaculate, with breathtaking sea views. The staff went above and beyond to make our vacation special.",
    rating: 5
  },
  {
    id: 6,
    name: "Jean Awono",
    location: "Buea, CMR",
    avatar: ff,
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 3.5
  },
  {
    id: 7,
    name: "Biloa Bello",
    location: "Buea, CMR",
    avatar: cc,
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 4
  },
  {
    id: 8,
    name: "Ruben Ngoh",
    location: "Bamenda, CMR",
    avatar: ii,
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 3
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-8 md:p-10 transition-all duration-500",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-primary">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-center md:text-left">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground text-center md:text-left">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
