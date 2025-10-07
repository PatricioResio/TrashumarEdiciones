// useLoadGooglePlaces.js
import { useState, useEffect } from "react";

export default function useLoadGooglePlaces() {
  const [ready, setReady] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // Si ya está cargado
    if (window.google && window.google.maps) {
      setReady(true);
      return;
    }

    // Evitar duplicados
    if (document.querySelector("#google-maps-script")) {
      const checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          setReady(true);
          clearInterval(checkInterval);
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, [apiKey]);

  return ready;
}
