import { Box, Typography, Link as MuiLink } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoItem = ({ icon, text, href, prefix }) => {
  if (!text) return null;

  const content = (
    <>
      <Box
        sx={{
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.06)",
          fontSize: 16,
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>

      <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
        {prefix}
        {text}
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        transition: "all 0.2s ease",
        cursor: href ? "pointer" : "default",
        "&:hover": href
          ? { backgroundColor: "rgba(0,0,0,0.05)", transform: "scale(1.01)" }
          : {},
      }}
      component={href ? MuiLink : "div"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    >
      {content}
    </Box>
  );
};

export default InfoItem;
