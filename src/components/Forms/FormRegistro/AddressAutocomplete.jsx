import { TextField } from "@mui/material";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Map from "../../Map/Map";

const AddressAutocomplete = () => {
  const [address, setAddress] = useState("");
  const [place, setPlace] = useState(null);

  const handleChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelectAddress = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      const placeDetails = {
        name: results[0].formatted_address,
        formatted_address: results[0].formatted_address,
        place_id: results[0].place_id,
        geometry: {
          location: {
            lat: latLng.lat,
            lng: latLng.lng,
          },
        },
      };
      setPlace(placeDetails);
    } catch (error) {
      console.error("Error getting address details: ", error);
    }
  };

  return (
    <div className="autocomplete-container">
      <PlacesAutocomplete
        value={address}
        onChange={handleChangeAddress}
        onSelect={handleSelectAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps({
                placeholder: "Calle falsa 123...",
                className: "autocomplete-input",
              })}
            />
            <div className="autocomplete-dropdown">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {place && place.geometry && place.geometry.location && (
        <Map zonaDistribuidor={place.geometry.location} address={address} />
      )}
    </div>
  );
};

export default AddressAutocomplete;
