import { Card, Container } from "@mui/material";

const SectionPerfil = () => {
  return (
    <Container
      sx={{
        margin: "4rem 2rem",
      }}
    >
      <Card
        sx={{
          width: "42vw",
          display: "flex",
          height: "50vh",
          backgroundColor: "#4D7A77",
          border: "3px solid #3c9990",
          borderRadius: "2%",
          marginTop: "1rem",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Mis proyectos
      </Card>
    </Container>
  );
};

export default SectionPerfil;
