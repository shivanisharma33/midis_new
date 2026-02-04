import { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Image source path without extension */
  src: string;
  alt: string;
  /** Whether to use lazy loading (default: true for performance) */
  lazy?: boolean;
}

/**
 * Responsive image component with WebP support and fallback
 * Automatically uses WebP format with fallback to original format
 * Includes lazy loading by default for better performance
 */
export const ResponsiveImage = ({
  src,
  alt,
  lazy = true,
  className,
  ...props
}: ResponsiveImageProps) => {
  // Extract extension from src if present
  const hasExtension = /\.(png|jpg|jpeg|webp)$/i.test(src);
  const basePath = hasExtension ? src.replace(/\.(png|jpg|jpeg|webp)$/i, '') : src;
  const originalExt = hasExtension ? src.match(/\.(png|jpg|jpeg|webp)$/i)?.[1] : 'png';

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source srcSet={`${basePath}.webp`} type="image/webp" />

      {/* Fallback for browsers that don't support WebP */}
      <img
        src={`${basePath}.${originalExt}`}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
};
