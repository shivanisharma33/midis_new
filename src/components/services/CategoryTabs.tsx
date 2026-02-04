import { CategoryKey, categoryTabs } from '@/data/services';

interface CategoryTabsProps {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
      {categoryTabs.map((tab, idx) => {
        const isActive = activeCategory === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onCategoryChange(tab.key)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base border transition-all duration-300 animate-fade-in-up ${
              isActive
                ? "bg-orange-500 text-black border-orange-400 shadow-lg shadow-orange-500/30 scale-105"
                : "bg-white/5 text-white/75 border-white/20 hover:border-orange-400/60 hover:text-white hover:scale-105"
            }`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
