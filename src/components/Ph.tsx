import type { PhVariant } from "../data/baths";

/** Медиа-плитка: реальное фото (src) или плейсхолдер-градиент. */
export default function Ph({
  src,
  alt = "",
  label,
  variant,
  className = "",
}: {
  src?: string;
  alt?: string;
  label?: string;
  variant?: PhVariant;
  className?: string;
}) {
  return (
    <div
      className={`ph ${variant ? `ph--${variant}` : ""} ${src ? "ph--img" : ""} ${className}`.trim()}
      data-label={src ? undefined : label}
      aria-hidden={src ? undefined : true}
    >
      {src && <img src={src} alt={alt} loading="lazy" />}
    </div>
  );
}
