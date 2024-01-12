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
        my: 2,
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 500,
        letterSpacing: ".3rem",
        color: "inherit",
        maxWidth: { sm: "70px", md: "150px" },
      }}
    >
      Salir
    </Button>
  );
};

export default LogOutBtn;
