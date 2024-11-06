import { useState } from "react";
import { storage } from "../api/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useProfileUploader = (userId, handlerChange) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;

    // Crear referencia a Firebase Storage
    const storageRef = ref(storage, `profile_pictures/${userId}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      async () => {
        // Obtener la URL de descarga con getDownloadURL y el ref del snapshot
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadUrl);
          handlerChange({
            target: { name: "avatar", value: downloadUrl },
          });
          console.log("URL de descarga:", downloadUrl);
        } catch (error) {
          console.error("Error obteniendo la URL de descarga:", error);
        }
      }
    );
  };

  return {
    image,
    setImage,
    url,
    progress,
    handleImageChange,
    handleUpload,
  };
};

export default useProfileUploader;
