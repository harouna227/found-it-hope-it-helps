import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LostFound
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#lost" className="text-sm font-medium hover:text-primary transition-colors">
              Lost Items
            </a>
            <a href="#found" className="text-sm font-medium hover:text-primary transition-colors">
              Found Items
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Post Item
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#lost" className="block text-sm font-medium hover:text-primary transition-colors">
              Lost Items
            </a>
            <a href="#found" className="block text-sm font-medium hover:text-primary transition-colors">
              Found Items
            </a>
            <a href="#how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                Post Item
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
