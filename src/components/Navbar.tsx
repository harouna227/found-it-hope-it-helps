import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Search className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LostFound
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/lost-items" className="text-sm font-medium hover:text-primary transition-colors">
              Lost Items
            </Link>
            <Link to="/found-items" className="text-sm font-medium hover:text-primary transition-colors">
              Found Items
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/post-item">Post Item</Link>
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
            <Link to="/lost-items" className="block text-sm font-medium hover:text-primary transition-colors">
              Lost Items
            </Link>
            <Link to="/found-items" className="block text-sm font-medium hover:text-primary transition-colors">
              Found Items
            </Link>
            <Link to="/how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/post-item">Post Item</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
