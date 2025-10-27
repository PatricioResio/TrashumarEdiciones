// AddressAutocompleteWrapper.jsx
import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Map from "../../Map/Map";
import { Box } from "@mui/material";

export default function AddressAutocompleteWrapper({
  handlerChange,
  initialAddress = "",
}) {
  const [address, setAddress] = useState(initialAddress);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (initialAddress) setAddress(initialAddress);
  }, [initialAddress]);

  const handleChange = (newAddress) => {
    setAddress(newAddress);
    handlerChange({
      target: { name: "address", value: newAddress, type: "text" },
    });
  };

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      setPlace({
        formatted_address: results[0].formatted_address,
        lat: latLng.lat,
        lng: latLng.lng,
      });

      handlerChange({
        target: {
          name: "address",
          value: results[0].formatted_address,
          type: "text",
        },
      });
      handlerChange({
        target: {
          name: "zonaDistribuidor",
          value: { lat: latLng.lat, lng: latLng.lng },
          type: "custom",
        },
      });
    } catch (error) {
      console.error("Error al obtener coordenadas: ", error);
    }
  };

  return (
    <div style={{ maxWidth: "100%", marginBottom: "4rem" }}>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Escribí tu dirección...",
                style: {
                  width: "100%",
                  height: "48px",
                  fontSize: "16px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  backgroundColor: " rgba(255, 255, 255, 0.75)",
                },
              })}
            />
            <div
              style={{
                border: "1px solid #dfdfdfff",
                borderRadius: "4px",
                marginTop: "2px",
                position: "absolute",
                background: "#fff",
                maxWidth: "100%",
              }}
            >
              {loading && (
                <div style={{ padding: "8px", marginBot: "10px" }}>
                  Cargando...
                </div>
              )}
              {suggestions.map((suggestion, idx) => (
                <Box>
                  <div
                    key={idx}
                    {...getSuggestionItemProps(suggestion)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      marginBottom: "10px",
                      backgroundColor: suggestion.active ? "#eee" : "#fff",
                    }}
                  >
                    {suggestion.description}
                  </div>
                </Box>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {place && place.lat && place.lng && (
        <div style={{ marginTop: "16px" }}>
          <Map
            zonaDistribuidor={{ lat: place.lat, lng: place.lng }}
            address={place.formatted_address}
          />
        </div>
      )}
    </div>
  );
}
