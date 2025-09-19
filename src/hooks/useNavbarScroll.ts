import { useEffect, useRef, useState } from "react";

export function useNavbarScroll(threshold: number = 10) {
  const [scrollState, setScrollState] = useState<"default" | "top" | "middle">("default");
  const [hidden, setHidden] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          // cập nhật scrollState theo khoảng
          if (y <= 10) {
            setScrollState("default");
            setHidden(false);
          } else if (y <= 500) {
            setScrollState("top");
            setHidden(false);
          } else {
            setScrollState("middle");
            setHidden(true);
          }

          // chỉ check direction khi hidden = true
          if (hidden && Math.abs(y - lastScrollY.current) > threshold) {
            setDirection(y > lastScrollY.current ? "down" : "up");
            lastScrollY.current = y;
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, hidden]);

  return { scrollState, hidden, direction };
}
