import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Reunite with What Matters
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              A community-powered platform connecting people with their lost belongings. 
              Report what you've lost or found and help reunite items with their owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="hero" size="lg" asChild>
                <Link to="/post-item">Report Lost Item</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/post-item">Report Found Item</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Community helping each other find lost items"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
