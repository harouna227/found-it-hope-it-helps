import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ItemsSection from "@/components/ItemsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchBar />
      <ItemsSection title="Recently Lost Items" type="lost" />
      <ItemsSection title="Recently Found Items" type="found" />
    </div>
  );
};

export default Index;
