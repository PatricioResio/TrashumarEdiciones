import AddressAutocomplete from "./AddressAutocomplete";
import useLoadGoogleMaps from "../../../hooks/useLoadGoogleMaps.js";

export default function AddressAutocompleteWrapper() {
  const ready = useLoadGoogleMaps();

  return !ready ? <p>Loading..</p> : <AddressAutocomplete />;
}
