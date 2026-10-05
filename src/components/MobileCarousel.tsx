"use client";

import { Children, useEffect, useRef, useState } from "react";

/**
 * Below `md` → horizontal snap carousel with dot indicators (and optional
 * auto-advance). At `md` and up → renders children in a grid using
 * `desktopClassName` (pass grid-cols and gap classes — NOT the `grid` keyword
 * itself, which is added here), so desktop layout is untouched.
 */
export default function MobileCarousel({
  children,
  desktopClassName,
  autoScrollMs,
  itemWidthClass = "w-[85%]",
}: {
  children: React.ReactNode;
  desktopClassName: string;
  /** Auto-advance interval in ms; omit for manual swipe only */
  autoScrollMs?: number;
  /** Tailwind width for each slide on mobile */
  itemWidthClass?: string;
}) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  // Track active slide from scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slides = Array.from(el.children) as HTMLElement[];
        if (!slides.length) return;
        const center = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        slides.forEach((s, i) => {
          const c = s.offsetLeft + s.offsetWidth / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Optional auto-advance (mobile only — track is hidden on md+)
  useEffect(() => {
    if (!autoScrollMs) return;
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      if (el.offsetParent === null) return; // hidden on desktop
      const slides = Array.from(el.children) as HTMLElement[];
      if (slides.length < 2) return;
      const next = (active + 1) % slides.length;
      el.scrollTo({ left: slides[next].offsetLeft - 16, behavior: "smooth" });
    }, autoScrollMs);
    return () => clearInterval(id);
  }, [autoScrollMs, active]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (slide) el.scrollTo({ left: slide.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: snap carousel */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 -mx-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => {
            setTimeout(() => (pausedRef.current = false), 4000);
          }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className={`shrink-0 snap-center ${itemWidthClass} flex`}
            >
              <div className="w-full flex flex-col">{child}</div>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300 border-none cursor-pointer p-0"
                style={{
                  width: i === active ? "22px" : "8px",
                  background:
                    i === active ? "var(--electric-blue)" : "var(--card-border)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: original layout */}
      <div className={`hidden md:grid ${desktopClassName}`}>{children}</div>
    </>
  );
}
