// AddressAutocompleteWrapper.jsx
import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Map from "../../Map/Map";

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
    <div style={{ maxWidth: "100%" }}>
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
                  boxSizing: "border-box",
                  backgroundColor: "#A4FFFE",
                },
              })}
            />
            <div
              style={{
                border: "1px solid #ccc",
                marginTop: "2px",
                position: "absolute",
                background: "#fff",
                maxWidth: "100%",
              }}
            >
              {loading && <div style={{ padding: "8px" }}>Cargando...</div>}
              {suggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  {...getSuggestionItemProps(suggestion)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    backgroundColor: suggestion.active ? "#eee" : "#fff",
                  }}
                >
                  {suggestion.description}
                </div>
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
