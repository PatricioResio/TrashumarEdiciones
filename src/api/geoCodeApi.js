export const getGeocode = async (direccion) => {
  // Verificación inicial para asegurarse de que la dirección no esté vacía
  if (!direccion) {
    console.error("Debe proporcionar una dirección válida.");
    return null;
  }

  const apiKey = import.meta.env.VITE_GEOCODE_API_KEY;
  if (!apiKey) {
    console.error("API Key no encontrada. Verifique su archivo .env.");
    return null;
  }

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    direccion
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);

    // Verificar si la respuesta es exitosa (status 200-299)
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      console.warn(
        "No se encontraron coordenadas para la dirección proporcionada."
      );
      return null;
    }
  } catch (error) {
    console.error("Error en la geocodificación:", error.message || error);
    return null;
  }
};
