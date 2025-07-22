import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, Leaf, Lightbulb } from "lucide-react";
import aa1 from "../images/aa1.jpg";
import bb1 from "../images/bb1.jpg";
import cc1 from "../images/cc1.jpg";

export default function About() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const valueIcons = [
    <Heart key="excellence" className="w-8 h-8" />,
    <Users key="authenticity" className="w-8 h-8" />,
    <Leaf key="sustainability" className="w-8 h-8" />,
    <Lightbulb key="innovation" className="w-8 h-8" />
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                KribiBeach
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.about.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.about.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Description Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    {t.about.story.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.story.content}
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={aa1}
                    alt="MareSereno Story"
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                  <img 
                    src={cc1}
                    alt="Our Mission"
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-6">
                    {t.about.mission.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.mission.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.about.values.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.about.values.items.map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center text-primary">
                    {valueIcons[index]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.about.team.title}
              </h2>
              <p className="text-muted-foreground">
                {t.about.team.description}
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={bb1}
                alt="Our Team"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Notre Équipe Dévouée</h3>
                <p className="text-white/90">Votre satisfaction est notre priorité</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}