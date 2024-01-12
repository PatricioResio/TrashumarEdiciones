import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Forms1, Forms2, Forms3, Forms4 } from "./Forms";
import { useState } from "react";
import { Tab } from "@mui/material";

function FormProyectos() {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Container
      sx={{
        minHeight: "80vh",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        border: "1px solid",
        borderColor: "#3C9990",
        borderRadius: "20px",
      }}
    >
      <Typography sx={{}} component="h2" id="outlined-basic" variant="h2">
        Sumate a Trashumar!
      </Typography>
      <TabContext value={tabValue}>
        <Box
          type="form"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TabList
            sx={{ display: "flex", justifyContent: "center" }}
            onChange={(e, newValue) => handleChange(e, newValue)}
            aria-label="lab API tabs example"
          >
            <Tab label="Elegi el formato" value="1" />
            <Tab label="Información profesional" value="2" />
            <Tab label="Distribuidores" value="3" />
            <Tab label="Distribuidores" value="4" />
          </TabList>
        </Box>
        <TabPanel
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            mb: "8px",
          }}
          value="1"
        >
          <Forms1 />
        </TabPanel>
        <TabPanel
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            mb: "8px",
          }}
          value="2"
        >
          <Forms2 />
        </TabPanel>
        <TabPanel
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            mb: "8px",
          }}
          value="3"
        >
          <Forms3 />
        </TabPanel>
        <TabPanel
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            mb: "8px",
          }}
          value="4"
        >
          <Forms4 />
          <Button variant="contained"> enviar formulario</Button>
        </TabPanel>
      </TabContext>
    </Container>
  );
}

export default FormProyectos;
