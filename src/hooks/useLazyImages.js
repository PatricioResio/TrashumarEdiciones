import { useEffect, useRef, useState } from "react";

export const useLazyImage = (rootMargin = "200px") => {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin }, // 👈 empieza a cargar antes de entrar en pantalla
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return { imgRef, isVisible };
};
