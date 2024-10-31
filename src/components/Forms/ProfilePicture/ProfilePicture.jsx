import useProfileUploader from "../../../hooks/useProfileUploader"; // Ajusta la ruta según tu proyecto
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  TextField,
} from "@mui/material";

const ProfilePictureUploader = ({ userId, avatar }) => {
  const { image, url, progress, handleImageChange, handleUpload } =
    useProfileUploader(userId);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Subir foto de perfil</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
      <input type="file" onChange={handleImageChange} />
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
          id="avatar"
          name="avatar"
          label="X"
          variant="outlined"
          value={avatar}
          onChange={handlerChange}
          /*           error={formik.touched.avatar && Boolean(formik.errors.avatar)}
          helperText={formik.touched.avatar && formik.errors.avatar} */
        />
      )}
    </Box>
  );
};

export default ProfilePictureUploader;
