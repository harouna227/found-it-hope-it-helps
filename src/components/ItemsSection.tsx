import ItemCard from "./ItemCard";
import walletImg from "@/assets/wallet.jpg";
import backpackImg from "@/assets/backpack.jpg";
import dogImg from "@/assets/dog.jpg";
import iphoneImg from "@/assets/iphone.jpg";
import keysImg from "@/assets/keys.jpg";
import watchImg from "@/assets/watch.jpg";

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
    imageUrl: walletImg,
  },
  {
    id: "2",
    title: "Blue Backpack",
    description: "Nike blue backpack with laptop compartment. Contains important documents.",
    location: "Downtown Library",
    date: "2025-11-04",
    type: "lost" as const,
    imageUrl: backpackImg,
  },
  {
    id: "3",
    title: "Golden Retriever",
    description: "Friendly golden retriever, answers to Max. Wearing a red collar.",
    location: "Riverside Park",
    date: "2025-11-03",
    type: "lost" as const,
    imageUrl: dogImg,
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
    imageUrl: iphoneImg,
  },
  {
    id: "5",
    title: "Set of House Keys",
    description: "Found set of keys with a green keychain near the bus stop.",
    location: "5th Avenue Bus Stop",
    date: "2025-11-04",
    type: "found" as const,
    imageUrl: keysImg,
  },
  {
    id: "6",
    title: "Silver Watch",
    description: "Found silver watch with leather strap at the gym.",
    location: "City Fitness Center",
    date: "2025-11-03",
    type: "found" as const,
    imageUrl: watchImg,
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
