import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Switch,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TabPerfil1, TabPerfil2, TabPerfil3 } from "./TabPerfil1";

const FormPerfil = () => {
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
        Registro
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
            <Tab label="Información basica" value="1" />
            <Tab label="Información profesional" value="2" />
            <Tab label="Distribuidores" value="3" />
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
          <TabPerfil1 />
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
          <TabPerfil2 />
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
          <TabPerfil3 />
          <Button variant="contained"> enviar formulario</Button>
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default FormPerfil;
