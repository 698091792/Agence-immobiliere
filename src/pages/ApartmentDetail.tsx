import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowLeft, 
  Users, 
  Maximize, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Bath, 
  Utensils,
  Wind,
  Tv,
  WashingMachine
} from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";

// Sample apartments data (in a real app, this would come from an API)
const apartmentsData: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Sea View Suite",
    description: "Luxurious suite with panoramic sea views, modern amenities, and a private balcony. Perfect for couples seeking a romantic getaway with unparalleled comfort and elegance.",
    price: 180,
    capacity: 2,
    size: 45,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony", "Sea View", "Room Service"]
  },
  {
    id: "2",
    name: "Premium Family Apartment",
    description: "Spacious apartment ideal for families, with full kitchen and stunning coastal views. Features multiple bedrooms and living areas for maximum comfort and privacy.",
    price: 250,
    capacity: 4,
    size: 75,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine", "Dishwasher", "Parking"]
  },
  {
    id: "3",
    name: "Executive Beach Studio",
    description: "Elegant studio with direct beach access, modern design, and premium finishes. Ideal for business travelers or couples looking for sophisticated accommodation.",
    price: 150,
    capacity: 2,
    size: 35,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV", "Beach Access", "Work Desk"]
  },
  {
    id: "4",
    name: "Luxury Penthouse Suite",
    description: "Exclusive top-floor suite with expansive terrace and panoramic sea views. The ultimate in luxury accommodation with premium amenities and services.",
    price: 400,
    capacity: 6,
    size: 120,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    location: "Penthouse",
    features: ["Wi-Fi", "Full Kitchen", "Multiple Bathrooms", "Air Conditioning", "Smart TV", "Terrace", "Jacuzzi", "Concierge"]
  },
  {
    id: "5",
    name: "Classic Double Room",
    description: "Comfortable hotel room with modern amenities and partial sea views. Perfect for travelers seeking quality accommodation at an excellent value.",
    price: 120,
    capacity: 2,
    size: 25,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    location: "Hotel Wing",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Mini Bar", "Safe"]
  },
  {
    id: "6",
    name: "Garden View Apartment",
    description: "Peaceful apartment surrounded by lush gardens, just a short walk from the beach. Offers tranquility while remaining close to all amenities.",
    price: 160,
    capacity: 3,
    size: 55,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    location: "Garden Side",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Garden View", "Patio"]
  }
];

const getFeatureIcon = (feature: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Wi-Fi": <Wifi className="h-4 w-4" />,
    "Kitchen": <Utensils className="h-4 w-4" />,
    "Full Kitchen": <Utensils className="h-4 w-4" />,
    "Kitchenette": <Coffee className="h-4 w-4" />,
    "Bathroom": <Bath className="h-4 w-4" />,
    "Multiple Bathrooms": <Bath className="h-4 w-4" />,
    "Air Conditioning": <Wind className="h-4 w-4" />,
    "TV": <Tv className="h-4 w-4" />,
    "Smart TV": <Tv className="h-4 w-4" />,
    "Washing Machine": <WashingMachine className="h-4 w-4" />,
    "Parking": <Car className="h-4 w-4" />,
  };
  
  return iconMap[feature] || <Coffee className="h-4 w-4" />;
};

export default function ApartmentDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const [apartment, setApartment] = useState<ApartmentProps | null>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find apartment by ID
    const found = apartmentsData.find(apt => apt.id === id);
    setApartment(found || null);
  }, [id]);

  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Apartment Not Found</h1>
            <Button asChild>
              <Link to="/apartments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Apartments
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Use translated name and description if available
  const translatedName = language !== 'en' && t.apartmentDescriptions[apartment.id]?.name 
    ? t.apartmentDescriptions[apartment.id].name 
    : apartment.name;
    
  const translatedDescription = language !== 'en' && t.apartmentDescriptions[apartment.id]?.description 
    ? t.apartmentDescriptions[apartment.id].description 
    : apartment.description;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Back Navigation */}
        <div className="container py-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/apartments">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.apartments.title}
            </Link>
          </Button>
        </div>

        {/* Apartment Hero */}
        <section className="container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={translatedName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Additional images */}
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={`${apartment.image}&random=${index}`}
                      alt={`${translatedName} view ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Apartment Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  {apartment.location}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {translatedName}
                </h1>
                <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{apartment.capacity} {apartment.capacity === 1 ? 
                      t.apartments.filters.guests : t.apartments.filters.guests}</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{apartment.size} m²</span>
                  </div>
                </div>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-3xl font-bold">${apartment.price}</span>
                  <span className="text-muted-foreground">/ {t.booking.summary.night}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {translatedDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.apartments.filters.features}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {apartment.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 text-sm bg-muted px-3 py-2 rounded-lg"
                    >
                      {getFeatureIcon(feature)}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <Button asChild className="w-full btn-primary" size="lg">
                <Link to={`/booking?apartment=${apartment.id}`}>
                  {t.nav.bookNow}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="bg-card py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.bookingForm.title}</h2>
                <p className="text-muted-foreground mb-8">
                  Check availability and make your reservation for {translatedName}.
                </p>
                
                {/* Additional apartment info */}
                <div className="space-y-4 bg-background p-6 rounded-xl">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complimentary Wi-Fi throughout the property</li>
                    <li>• Daily housekeeping service</li>
                    <li>• Access to all hotel amenities</li>
                    <li>• 24/7 concierge service</li>
                    <li>• Welcome amenities upon arrival</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:sticky lg:top-24">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}