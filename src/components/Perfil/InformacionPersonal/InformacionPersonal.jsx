import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import InfoItem from "./InfoItem";
import {
  instagramLink,
  linkedinLink,
  whatsappLink,
  xLink,
} from "../../../utils/links.js";

const InformacionPersonal = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        m: 2,
        backgroundColor: "background.paper",
        boxShadow: 1,
        width: "50%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <IconButton
          onClick={() => navigate("/infoPerfil")}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </IconButton>

        <Typography variant="h6" fontWeight={600}>
          Datos personales
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          color: "text.primary",
        }}
      >
        <InfoItem
          icon={faLinkedin}
          text={user.linkedinForm}
          href={linkedinLink(user.linkedinForm)}
        />

        <InfoItem
          icon={faFacebook}
          text={user.facebookForm}
          href={linkedinLink(user.facebookForm)}
        />

        <InfoItem
          icon={faInstagram}
          text={user.instagramForm}
          prefix="@"
          href={instagramLink(user.instagramForm)}
        />

        <InfoItem
          icon={faSquareXTwitter}
          text={user.xForm}
          prefix="@"
          href={xLink(user.xForm)}
        />

        <InfoItem
          icon={faEnvelope}
          text={user.email}
          href={user.email ? `mailto:${user.email}` : null}
        />

        <InfoItem
          icon={faSquarePhone}
          text={user.telefono}
          href={whatsappLink(user.telefono)}
        />
      </Box>
    </Box>
  );
};

export default InformacionPersonal;
