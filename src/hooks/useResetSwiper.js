import { useEffect, useRef } from "react";

const useResetSwiper = (arrayImagenes) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && arrayImagenes.length > 0) {
      swiperRef.current.slideTo(0); // Reinicia el índice a la primera diapositiva
    }
  }, [arrayImagenes]);

  return swiperRef;
};

export default useResetSwiper;
