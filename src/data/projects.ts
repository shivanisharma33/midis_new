/**
 * Project data for the StackedCards component
 */

export interface Project {
  title: string;
  category: string;
  image: string;
  color: string;
  textColor: string;
}

export const projects: Project[] = [
  {
    title: "DIGITAL INNOVATION",
    category: "STRATEGY • DESIGN",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    color: "#E5E5E5",
    textColor: "#000000"
  },
  {
    title: "BRAND EVOLUTION",
    category: "IDENTITY • MOTION",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2564&auto=format&fit=crop",
    color: "#1A1A1A",
    textColor: "#FFFFFF"
  },
  {
    title: "FUTURE ARCHITECTURE",
    category: "3D RENDERING • VR",
    image: "https://images.unsplash.com/photo-1633167606207-d843b5021b65?q=80&w=2564&auto=format&fit=crop",
    color: "#F5F5F5",
    textColor: "#000000"
  },
  {
    title: "CREATIVE SYNERGY",
    category: "ART DIRECTION • CODE",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2564&auto=format&fit=crop",
    color: "#0B0B0B",
    textColor: "#FFFFFF"
  }
];
