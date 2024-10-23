import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Error 404, ruta no encontrada,
      <Button component={Link} to="/">
        Volvé al incio
      </Button>
    </div>
  );
};

export default NotFound;
