import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function CartaProyectos({ proyecto }) {
  return (
    <Fade triggerOnce delay={500}>
      <Card
        sx={{
          height: { xs: "22rem", sm: "29rem", md: "37rem" },
          width: { xs: "12rem", sm: "17rem", md: "22rem" },
          border: "1px solid #09A5B0",
          borderRadius: "15px",
          backgroundColor: "transparent",

          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
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
                component="img"
                sx={{
                  height: { xs: "22rem", sm: "29rem", md: "39rem" },
                  width: { xs: "12rem", sm: "17rem", md: "22rem" },
                  m: "0",
                  p: "0",
                }}
                image={proyecto?.img || "https://placehold.co/700x1100?text=Proyecto"}
                src={proyecto?.img || "https://placehold.co/700x1100?text=Proyecto"}
                alt={proyecto?.titulo || "Proyecto"}
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}
