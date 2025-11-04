import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Box } from "@mui/material";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapaLeaflet = ({ zonaDistribuidor, address, zoom = 13 }) => {
  const { lat, lng } = zonaDistribuidor;

  if (!lat || !lng) {
    return <p>Coordenadas no disponibles</p>;
  }

  return (
    <Box
      style={{
        height: "500px",
        maxWidth: "1200px",
        width: "100%",
        margin: "auto",
      }}
    >
      <MapContainer
        center={[zonaDistribuidor.lat, zonaDistribuidor.lng]}
        zoom={zoom}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapaLeaflet;
