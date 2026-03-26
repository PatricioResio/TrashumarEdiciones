import { useEffect, useRef, useState } from "react";

export const useLazyImage = (rootMargin = "200px") => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin }, // 👈 empieza a cargar antes de entrar en pantalla
    );

    const currentNode = imgRef.current;
    if (currentNode) observer.observe(currentNode);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return { imgRef, isVisible };
};
