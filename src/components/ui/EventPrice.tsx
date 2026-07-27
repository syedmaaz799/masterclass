import { event } from "@/content/event";
import { cn, formatINR } from "@/lib/utils";

type EventPriceProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  /** When false, only the offer price is shown. */
  showCompareAt?: boolean;
};

const sizeClasses = {
  sm: {
    compare: "text-caption",
    price: "text-caption font-semibold",
  },
  md: {
    compare: "text-body",
    price: "text-body font-semibold",
  },
  lg: {
    compare: "text-body-lg",
    price: "font-display text-h3 font-semibold",
  },
} as const;

/**
 * Strikethrough compare-at + offer price (04-conversion price-as-reassurance).
 * When `priceInINR` is 0, displays Free.
 */
export function EventPrice({
  size = "md",
  className,
  showCompareAt = true,
}: EventPriceProps) {
  const s = sizeClasses[size];
  const isFree = event.priceInINR <= 0;

  return (
    <span className={cn("inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5", className)}>
      {showCompareAt ? (
        <span
          className={cn(s.compare, "text-text-2 line-through decoration-white/40")}
          aria-hidden
        >
          {formatINR(event.compareAtPriceInINR)}
        </span>
      ) : null}
      <span className={cn(s.price, "text-text")}>
        {showCompareAt ? <span className="sr-only">Now </span> : null}
        {isFree ? "Free" : formatINR(event.priceInINR)}
      </span>
    </span>
  );
}
