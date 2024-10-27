import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const LogOutBtn = () => {
  const authContext = useContext(AuthContext);
  const logOut = authContext.logOut;
  return (
    <Button
      onClick={logOut}
      variant="contained"
      component={Link}
      to="/"
      sx={{
        maxWidth: "150px",
        flexGrow: 1,
        fontFamily: "roboto",
        color: "#FFFFF8",
        fontSize: { xs: "12px", lg: "14px" },
        letterSpacing: { xs: "0", md: ".2rem" },
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          color: "white",
        },
      }}
    >
      Salir
    </Button>
  );
};

export default LogOutBtn;
