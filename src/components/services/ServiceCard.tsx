import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <article
      className="service-card group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl card-responsive bg-gradient-to-br from-[#202020] via-[#151515] to-[#060606] border border-white/15 hover:border-orange-400/80 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 cursor-pointer"
      style={{
        animation: `fadeInScale 0.6s ease-out ${index * 0.08}s both`
      }}
    >
      {/* Animated background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {service.icon}
          </div>

          <span
            className={`text-[9px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-full border transition-all duration-300 group-hover:scale-105 ${
              service.category === "ai"
                ? "border-orange-400/80 bg-orange-500/15 text-orange-200"
                : "border-white/25 bg-white/10 text-white/70"
            }`}
          >
            {service.category === "ai" ? "AI Service" : "Core Service"}
          </span>
        </div>

        <h3 className="text-heading-sm group-hover:text-orange-300 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-caption text-white/75 mt-2 sm:mt-3 group-hover:text-white/90 transition-colors duration-300">
          {service.desc}
        </p>

        <button className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center gap-2 text-caption font-medium text-orange-300 group-hover:text-orange-200 group-hover:gap-3 transition-all duration-300">
          Learn more
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* Animated corner glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
    </article>
  );
};
