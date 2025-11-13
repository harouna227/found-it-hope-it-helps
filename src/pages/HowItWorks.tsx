import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Upload, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Upload,
      title: "Post Your Item",
      description: "Lost something? Found something? Post it on our platform with details and a photo.",
    },
    {
      icon: Search,
      title: "Search & Browse",
      description: "Browse through lost and found items. Use filters to narrow down your search.",
    },
    {
      icon: MessageCircle,
      title: "Connect",
      description: "Found a match? Contact the person who posted the item directly through our platform.",
    },
    {
      icon: CheckCircle,
      title: "Reunite",
      description: "Arrange a safe meetup and reunite items with their rightful owners.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              How It Works
            </h1>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              LostFound makes it easy to reunite lost items with their owners. Follow these simple steps.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {index + 1}. {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Is LostFound free to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! LostFound is completely free. We believe in helping people reunite with their belongings without any barriers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I contact someone about an item?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Click on any item to view its details. You'll find contact information including email and phone number to reach out to the person who posted it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What should I include in my post?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Include a clear photo, detailed description, location where it was lost/found, and the date. The more details, the better!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long do posts stay active?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Posts remain active for 90 days. You can update or remove your post anytime from your dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Post your lost or found item today and help reunite belongings with their owners.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/post-item")}
            >
              Post an Item Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
