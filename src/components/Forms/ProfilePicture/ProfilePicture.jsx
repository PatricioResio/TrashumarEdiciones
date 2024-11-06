import {
  Box,
  Button,
  Typography,
  LinearProgress,
  TextField,
} from "@mui/material";
import useProfileUploader from "../../../hooks/useProfileUploader";

const ProfilePictureUploader = ({ userId, handlerChange }) => {
  const { image, url, progress, handleImageChange, handleUpload } =
    useProfileUploader(userId, handlerChange);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Subir foto de perfil</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
      <label
        htmlFor="file-upload"
        style={{ display: "block", marginBottom: "8px" }}
      >
        Seleccionar archivo:
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleImageChange}
        style={{ display: "block", marginBottom: "16px" }}
      />
      <Button
        onClick={handleUpload}
        disabled={!image}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Subir
      </Button>
      {url && <Typography sx={{ mt: 2 }}>URL de la imagen: {url}</Typography>}
      {url && (
        <TextField
          name="avatar"
          id="avatar"
          value={url}
          onChange={handlerChange}
          sx={{ mt: 2 }}
        >
          {url}
        </TextField>
      )}
    </Box>
  );
};

export default ProfilePictureUploader;
