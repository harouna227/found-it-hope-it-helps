import { useParams, useNavigate } from "react-router-dom";
import { getItemById } from "@/data/items";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowLeft, User, Mail, Phone, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItemById(id || "");

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Item Not Found</h1>
            <p className="text-muted-foreground">The item you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Listings
          </Button>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Image Section */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <Badge 
                    variant={item.type === "lost" ? "destructive" : "default"}
                    className="text-sm px-3 py-1"
                  >
                    {item.type === "lost" ? "Lost" : "Found"}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-muted-foreground">{item.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Category</p>
                      <p className="text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {item.additionalDetails && (
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Additional Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.additionalDetails}
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Name</p>
                      <p className="text-muted-foreground">{item.contactName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a 
                        href={`mailto:${item.contactEmail}`}
                        className="text-primary hover:underline"
                      >
                        {item.contactEmail}
                      </a>
                    </div>
                  </div>

                  {item.contactPhone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a 
                          href={`tel:${item.contactPhone}`}
                          className="text-primary hover:underline"
                        >
                          {item.contactPhone}
                        </a>
                      </div>
                    </div>
                  )}

                  <Button variant="hero" className="w-full mt-4" asChild>
                    <a href={`mailto:${item.contactEmail}?subject=Regarding ${item.type} item: ${item.title}`}>
                      Contact Owner
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItemDetail;
