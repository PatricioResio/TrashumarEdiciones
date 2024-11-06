import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Box } from "@mui/material";

import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet

// Configuración para ícono personalizado (opcional)
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapaLeaflet = ({ zonaDistribuidor, zoom = 13 }) => {
  const { lat, lng } = zonaDistribuidor;
  const markers = [
    {
      geocode: [-34.80549222964987, -58.400773458690026],
      popUp: "La Casa De Los Vientos",
    },
    {
      geocode: [-34.806445637152265, -58.39474421534425],
      popUp: "Mi Casa",
    },
  ];

  if (!lat || !lng) {
    return <p>Coordenadas no disponibles</p>;
  }

  return (
    <Box
      style={{
        height: "400px",
        width: "100%",
        maxWidth: "800px",
        margin: "0",
      }}
    >
      <MapContainer
        center={zonaDistribuidor.geocode}
        zoom={zoom}
        style={{ height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>Ubicación del distribuidor</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapaLeaflet;
