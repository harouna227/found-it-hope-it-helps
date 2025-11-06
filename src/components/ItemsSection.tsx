import ItemCard from "./ItemCard";

interface ItemsSectionProps {
  title: string;
  type: "lost" | "found";
}

const mockItems = [
  {
    id: "1",
    title: "Black Leather Wallet",
    description: "Black leather wallet with multiple card slots. Last seen near Central Park.",
    location: "Central Park, New York",
    date: "2025-11-05",
    type: "lost" as const,
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Blue Backpack",
    description: "Nike blue backpack with laptop compartment. Contains important documents.",
    location: "Downtown Library",
    date: "2025-11-04",
    type: "lost" as const,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Golden Retriever",
    description: "Friendly golden retriever, answers to Max. Wearing a red collar.",
    location: "Riverside Park",
    date: "2025-11-03",
    type: "lost" as const,
    imageUrl: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&auto=format&fit=crop",
  },
];

const mockFoundItems = [
  {
    id: "4",
    title: "iPhone 14 Pro",
    description: "Found iPhone 14 Pro with blue case near the coffee shop.",
    location: "Main Street Cafe",
    date: "2025-11-05",
    type: "found" as const,
    imageUrl: "https://images.unsplash.com/photo-1678652633473-e53e8a200e3c?w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Set of House Keys",
    description: "Found set of keys with a green keychain near the bus stop.",
    location: "5th Avenue Bus Stop",
    date: "2025-11-04",
    type: "found" as const,
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Silver Watch",
    description: "Found silver watch with leather strap at the gym.",
    location: "City Fitness Center",
    date: "2025-11-03",
    type: "found" as const,
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
  },
];

const ItemsSection = ({ title, type }: ItemsSectionProps) => {
  const items = type === "lost" ? mockItems : mockFoundItems;

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
