import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ItemsSection from "@/components/ItemsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <SearchBar />
      <ItemsSection title="Recently Lost Items" type="lost" />
      <ItemsSection title="Recently Found Items" type="found" />
      <Footer />
    </div>
  );
};

export default Index;
