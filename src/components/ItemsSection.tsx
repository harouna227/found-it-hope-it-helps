import ItemCard from "./ItemCard";
import { lostItems, foundItems } from "@/data/items";

interface ItemsSectionProps {
  title: string;
  type: "lost" | "found";
}

const ItemsSection = ({ title, type }: ItemsSectionProps) => {
  const items = type === "lost" ? lostItems : foundItems;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
