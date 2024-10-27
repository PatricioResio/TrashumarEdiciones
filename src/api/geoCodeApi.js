export const obtenerCoordenadasOpenCage = async (direccion) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    direccion
  )}&key=${import.meta.env.VITE_GEOCODE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      throw new Error(
        "No se encontraron coordenadas para la dirección proporcionada."
      );
    }
  } catch (error) {
    console.error("Error en la geocodificación:", error);
    return null;
  }
};
