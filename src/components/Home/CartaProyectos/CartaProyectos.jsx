import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function CartaProyectos({ proyecto }) {
  return (
    <Fade triggerOnce delay={1200}>
      <Card
        sx={{
          height: { xs: "22rem", sm: "29rem", md: "37rem" },
          width: { xs: "12rem", sm: "17rem", md: "22rem" },
          border: "0.5px solid #3C9990",
          borderRadius: "3px",
          backgroundColor: "transparent",
          p: "0",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardActions
          sx={{
            height: { xs: "22rem", sm: "29rem", md: "39rem" },
            width: { xs: "12rem", sm: "17rem", md: "22rem" },
            p: "0",
            m: "0",
          }}
        >
          <Button component={Link} to={`/proyecto/${proyecto.idProyecto}`}>
            <CardContent
              sx={{
                height: { xs: "22rem", sm: "29rem", md: "39rem" },
                width: { xs: "12rem", sm: "17rem", md: "22rem" },
                p: "0",
                m: "0",
              }}
            >
              <CardMedia
                sx={{
                  height: { xs: "22rem", sm: "29rem", md: "39rem" },
                  width: { xs: "12rem", sm: "17rem", md: "22rem" },
                  m: "0",
                  p: "0",
                }}
                image={proyecto.img}
                src={!proyecto ? "" : proyecto.img}
              />
            </CardContent>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}
