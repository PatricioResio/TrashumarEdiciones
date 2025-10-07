import AddressAutocomplete from "./AddressAutocomplete"; // tu componente que usa react-places-autocomplete
import useLoadGooglePlaces from "../../../hooks/useLoadGooglePlaces";

export default function AddressAutocompleteWrapper({
  handlerChange,
  initialAddress,
}) {
  const ready = useLoadGooglePlaces();

  if (!ready) return <div>Cargando Google Maps...</div>;

  return (
    <AddressAutocomplete
      handlerChange={handlerChange}
      initialAddress={initialAddress}
    />
  );
}
