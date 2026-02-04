import { Service } from '@/data/services';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid-3-col">
      {services.map((service, index) => (
        <ServiceCard
          key={`${service.title}`}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};
