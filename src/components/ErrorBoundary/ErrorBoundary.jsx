import { Component } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { logError } from "../../utils/errorLogger";

// Los Error Boundaries de React solo funcionan como class components — no
// existe un equivalente con hooks todavía. Atrapa errores de renderizado en
// cualquier componente hijo y muestra un fallback en vez de dejar la pantalla
// en blanco.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, {
      source: "ErrorBoundary",
      componentStack: errorInfo?.componentStack,
    });
  }

  handleReload = () => {
    // Reintentamos desde cero: recargar es lo más seguro ante un estado
    // de React que quedó roto por el error.
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <Container maxWidth="sm" sx={{ py: 8, textAlign: "center" }}>
            <Box>
              <Typography variant="h5" gutterBottom>
                Algo salió mal
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Encontramos un error inesperado. Ya quedó registrado para
                poder revisarlo.
              </Typography>
              <Button variant="contained" onClick={this.handleReload}>
                Recargar página
              </Button>
            </Box>
          </Container>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
