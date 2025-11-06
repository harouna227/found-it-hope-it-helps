import walletImg from "@/assets/wallet.jpg";
import backpackImg from "@/assets/backpack.jpg";
import dogImg from "@/assets/dog.jpg";
import iphoneImg from "@/assets/iphone.jpg";
import keysImg from "@/assets/keys.jpg";
import watchImg from "@/assets/watch.jpg";

export interface Item {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  type: "lost" | "found";
  imageUrl: string;
  category: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  additionalDetails?: string;
}

export const lostItems: Item[] = [
  {
    id: "1",
    title: "Black Leather Wallet",
    description: "Black leather wallet with multiple card slots. Last seen near Central Park.",
    location: "Central Park, New York",
    date: "2025-11-05",
    type: "lost",
    imageUrl: walletImg,
    category: "Wallet",
    contactName: "John Smith",
    contactEmail: "john.smith@email.com",
    contactPhone: "+1 (555) 123-4567",
    additionalDetails: "Contains important ID cards and some cash. The wallet has my initials 'J.S.' embossed on the inside. There's a small tear on the back pocket. Last seen around 3 PM near the Bethesda Fountain.",
  },
  {
    id: "2",
    title: "Blue Backpack",
    description: "Nike blue backpack with laptop compartment. Contains important documents.",
    location: "Downtown Library",
    date: "2025-11-04",
    type: "lost",
    imageUrl: backpackImg,
    category: "Bag",
    contactName: "Sarah Johnson",
    contactEmail: "sarah.j@email.com",
    contactPhone: "+1 (555) 234-5678",
    additionalDetails: "The backpack contains a MacBook Pro, important work documents, and a water bottle. There's a small Starbucks keychain attached to the zipper. Please contact me if found - the documents are very important for my work presentation.",
  },
  {
    id: "3",
    title: "Golden Retriever",
    description: "Friendly golden retriever, answers to Max. Wearing a red collar.",
    location: "Riverside Park",
    date: "2025-11-03",
    type: "lost",
    imageUrl: dogImg,
    category: "Pet",
    contactName: "Michael Brown",
    contactEmail: "michael.b@email.com",
    contactPhone: "+1 (555) 345-6789",
    additionalDetails: "Max is a 3-year-old male golden retriever. He's very friendly and loves people. He has a small white spot on his chest. The red collar has a bone-shaped tag with my phone number. He was last seen near the dog park around 5 PM. Please call immediately if you see him - we're very worried!",
  },
];

export const foundItems: Item[] = [
  {
    id: "4",
    title: "iPhone 14 Pro",
    description: "Found iPhone 14 Pro with blue case near the coffee shop.",
    location: "Main Street Cafe",
    date: "2025-11-05",
    type: "found",
    imageUrl: iphoneImg,
    category: "Electronics",
    contactName: "Emily Davis",
    contactEmail: "emily.d@email.com",
    contactPhone: "+1 (555) 456-7890",
    additionalDetails: "I found this iPhone on a table at Main Street Cafe around 2 PM. The phone is locked but appears to be in good condition. The blue case has a cardholder on the back. I've turned it in to the cafe staff, but please contact me to verify ownership and arrange pickup.",
  },
  {
    id: "5",
    title: "Set of House Keys",
    description: "Found set of keys with a green keychain near the bus stop.",
    location: "5th Avenue Bus Stop",
    date: "2025-11-04",
    type: "found",
    imageUrl: keysImg,
    category: "Keys",
    contactName: "David Wilson",
    contactEmail: "david.w@email.com",
    additionalDetails: "Found a set of 5 keys on a ring with a distinctive green keychain that says 'COCONOS'. The keys appear to be house keys and possibly a car key. Found them on the bench at the 5th Avenue bus stop heading downtown around 8 AM. Contact me to describe the keys in detail to claim them.",
  },
  {
    id: "6",
    title: "Silver Watch",
    description: "Found silver watch with leather strap at the gym.",
    location: "City Fitness Center",
    date: "2025-11-03",
    type: "found",
    imageUrl: watchImg,
    category: "Accessories",
    contactName: "Lisa Martinez",
    contactEmail: "lisa.m@email.com",
    contactPhone: "+1 (555) 567-8901",
    additionalDetails: "I found this elegant silver watch in the locker room at City Fitness Center. It has a brown leather strap and appears to be a quality timepiece. The watch was found on the bench near locker #45. It's currently being held at the front desk. Please provide a description of the watch face and any engravings to claim it.",
  },
];

export const allItems = [...lostItems, ...foundItems];

export const getItemById = (id: string): Item | undefined => {
  return allItems.find(item => item.id === id);
};
