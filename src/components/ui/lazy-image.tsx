import { ImgHTMLAttributes } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Lazy-loaded image component for better performance
 * Uses native browser lazy loading with async decoding
 */
export const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...props}
    />
  );
};
