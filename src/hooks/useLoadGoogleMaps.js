import { useEffect, useState } from "react";

export default function useLoadGoogleMaps() {
  const [ready, setReady] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // ya cargado?
    if (window.google && window.google.maps) {
      setReady(true);
      return;
    }

    // evitar insertar dos veces
    if (document.querySelector("#google-maps-script")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, [apiKey]);

  return ready;
}
