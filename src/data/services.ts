/**
 * Services data for the Services page
 */

export type ServiceCategory = "core" | "ai";

export interface Service {
  title: string;
  desc: string;
  icon: string;
  category: ServiceCategory;
}

export const services: Service[] = [
  // Core Digital & Creative
  {
    title: "Web Development",
    desc: "Stunning, responsive websites tailored to convert visitors into customers.",
    icon: "🌐",
    category: "core",
  },
  {
    title: "Web Designing",
    desc: "Creative, user-friendly designs that enhance your brand's online presence.",
    icon: "🎨",
    category: "core",
  },
  {
    title: "Graphic Design",
    desc: "Logos, social media posts, and branding visuals that reflect your identity.",
    icon: "✨",
    category: "core",
  },
  {
    title: "Content Writing",
    desc: "SEO-rich blogs, captions, and ad copies that align with your brand voice.",
    icon: "✍️",
    category: "core",
  },
  {
    title: "Video Editing",
    desc: "Reels, ads, and long-form videos designed to captivate and engage.",
    icon: "🎬",
    category: "core",
  },
  {
    title: "YouTube Management",
    desc: "We grow and manage your YouTube presence from zero to hero.",
    icon: "📺",
    category: "core",
  },
  {
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and attract organic traffic effortlessly.",
    icon: "🔍",
    category: "core",
  },
  {
    title: "Email Marketing",
    desc: "Automated email campaigns designed to convert and retain customers.",
    icon: "📧",
    category: "core",
  },
  {
    title: "E-Commerce Strategy",
    desc: "Shopify, WooCommerce, Wix — we optimize and scale online stores.",
    icon: "🛒",
    category: "core",
  },
  // AI SERVICES
  {
    title: "ChatGPT Integration",
    desc: "Smart assistants that engage users, generate leads, and elevate experience.",
    icon: "🤖",
    category: "ai",
  },
  {
    title: "OpenAI API Integration",
    desc: "Custom AI-powered workflows, automation, and predictive insights.",
    icon: "⚡",
    category: "ai",
  },
  {
    title: "Generative AI Consultancy",
    desc: "AI-driven creativity, automation & smart intelligence for your brand.",
    icon: "🧠",
    category: "ai",
  },
  {
    title: "AI Chatbot Development",
    desc: "24/7 AI chatbots that provide instant support & scale customer operations.",
    icon: "💬",
    category: "ai",
  },
];

export type CategoryKey = "all" | "core" | "ai";

export interface CategoryTab {
  key: CategoryKey;
  label: string;
}

export const categoryTabs: CategoryTab[] = [
  { key: "all", label: "All services" },
  { key: "core", label: "Digital & Creative" },
  { key: "ai", label: "AI & Automation" },
];
