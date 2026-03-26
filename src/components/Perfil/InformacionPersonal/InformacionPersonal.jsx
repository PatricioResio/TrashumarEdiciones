import { Box, IconButton, Typography, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import InfoItem from "./InfoItem";
import { instagramLink, linkedinLink, whatsappLink, xLink } from "../../../utils/links.js";

const InformacionPersonal = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, borderRadius: 3, m: 2, backgroundColor: "background.paper", boxShadow: 1, width: "50%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <IconButton
          onClick={() => navigate("/infoPerfil")}
          sx={{ backgroundColor: "primary.main", color: "white", "&:hover": { backgroundColor: "primary.dark" } }}
        >
          <EditIcon />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>Datos personales</Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "text.primary" }}>
        <InfoItem icon={<LinkedInIcon />} text={user.linkedinForm} href={linkedinLink(user.linkedinForm)} />
        <InfoItem icon={<FacebookIcon />} text={user.facebookForm} href={linkedinLink(user.facebookForm)} />
        <InfoItem icon={<InstagramIcon />} text={user.instagramForm} prefix="@" href={instagramLink(user.instagramForm)} />
        <InfoItem icon={<CloseIcon />} text={user.xForm} prefix="@" href={xLink(user.xForm)} />
        <InfoItem icon={<EmailIcon />} text={user.email} href={user.email ? `mailto:${user.email}` : null} />
        <InfoItem icon={<PhoneIcon />} text={user.telefono} href={whatsappLink(user.telefono)} />
      </Box>
    </Box>
  );
};

export default InformacionPersonal;