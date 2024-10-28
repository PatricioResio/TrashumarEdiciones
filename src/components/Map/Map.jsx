import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Configuración para ícono personalizado (opcional)
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapaLeaflet = ({ lat, lg, zoom = 13 }) => {
  if (!lat || !lg) {
    return <p>Coordenadas no disponibles</p>;
  }

  return (
    <MapContainer
      center={[lat, lg]}
      zoom={zoom}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Capa base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador en la posición especificada */}
      <Marker position={[lat, lg]} icon={customIcon}>
        <Popup>Ubicación del distribuidor</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaLeaflet;
