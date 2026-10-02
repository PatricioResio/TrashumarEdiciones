import { useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Stack,
  SvgIcon,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PaymentsIcon from "@mui/icons-material/Payments";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Map from "../../Map/Map";

// Ícono de WhatsApp: SVG inline en vez de sumar una librería de íconos nueva
// solo para esto (ya sacamos @fortawesome del proyecto por el mismo motivo).
const WhatsAppIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c1.002.587 1.79.888 2.806.888 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.368 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.859-.775-3.048-2.673-3.14-2.797-.093-.125-.757-.999-.757-1.907 0-.909.477-1.355.647-1.539.17-.183.372-.229.496-.229.124 0 .248.002.356.007.114.005.267-.043.418.32.155.372.531 1.295.578 1.389.046.094.077.204.015.328-.061.124-.092.203-.185.311-.093.109-.196.243-.28.327-.093.093-.19.195-.082.381.108.186.48 1.106 1.488 1.542.474.205.845.295 1.135.353.29.058.463.05.637.029.206-.025.648-.265.739-.522zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.934-1.408A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </SvgIcon>
);

/**
 * Deja solo dígitos en un teléfono para armar el link de wa.me. Si el
 * usuario ya cargó el prefijo de país, se respeta; si no, no inventamos uno
 * (mejor un link imperfecto a que ande mal para distintos países).
 */
const soloDigitos = (telefono) => (telefono ? telefono.replace(/\D/g, "") : "");

const SectionDistribuidor = ({
  zonaDistribuidor,
  address,
  metodoVentas,
  radio,
  telefono,
  horario,
  metodosPago,
}) => {
  const [copiado, setCopiado] = useState(false);

  const formatedAddress = useMemo(() => {
    if (!address) return "";
    return address.split(",").slice(0, 2).join(",").trim();
  }, [address]);

  const googleMapsUrl = useMemo(() => {
    if (!address) return null;
    return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  }, [address]);

  const whatsappUrl = useMemo(() => {
    const digitos = soloDigitos(telefono);
    return digitos ? `https://wa.me/${digitos}` : null;
  }, [telefono]);

  const handleCopiar = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopiado(true);
    } catch {
      // clipboard no disponible (http sin TLS, permiso denegado, etc.) —
      // no rompemos nada, simplemente no mostramos la confirmación.
    }
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Encabezado + descripción */}
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          border: "1px solid",
          borderColor: "border.main",
          p: { xs: 2, sm: 3 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <LocalShippingIcon sx={{ color: "primary.main" }} />
          <Chip
            label="Logística de entrega"
            size="small"
            sx={{
              bgcolor: "bg.whiteBlue",
              color: "primary.main",
              fontWeight: 700,
              fontSize: "0.7rem",
              textTransform: "uppercase",
            }}
          />
        </Stack>

        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          Puntos de encuentro y envíos
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Acá podés coordinar el retiro de ejemplares directamente, sin
          intermediarios.
        </Typography>

        {/* Caja destacada de dirección */}
        <Box
          sx={{
            bgcolor: "bg.main",
            border: "2px dashed",
            borderColor: "border.main",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Box
              sx={{
                bgcolor: "bg.whiteBlue",
                color: "primary.main",
                borderRadius: "10px",
                p: 1,
                display: "flex",
              }}
            >
              <LocationOnIcon fontSize="small" />
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", fontWeight: 700, color: "text.secondary" }}
              >
                Dirección de retiro
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                {formatedAddress || "Dirección no cargada"}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button
              onClick={handleCopiar}
              variant="outlined"
              size="small"
              startIcon={copiado ? <CheckIcon /> : <ContentCopyIcon />}
              sx={{ flex: { xs: 1, sm: "initial" } }}
            >
              {copiado ? "Copiado" : "Copiar"}
            </Button>
            {googleMapsUrl && (
              <Button
                component="a"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="small"
                startIcon={<DirectionsIcon />}
                sx={{ flex: { xs: 1, sm: "initial" } }}
              >
                Cómo llegar
              </Button>
            )}
          </Stack>
        </Box>

        {/* Horario / Pagos / Método de venta — solo los que estén cargados */}
        {(horario || metodosPago || metodoVentas) && (
          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(auto-fit, minmax(160px, 1fr))" },
              gap: 2,
            }}
          >
            {horario && (
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <ScheduleIcon sx={{ color: "primary.main", mt: 0.3 }} fontSize="small" />
                <Box>
                  <Typography variant="caption" fontWeight={700} color="text.secondary">
                    Horarios
                  </Typography>
                  <Typography variant="body2">{horario}</Typography>
                </Box>
              </Stack>
            )}
            {metodosPago && (
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <PaymentsIcon sx={{ color: "primary.main", mt: 0.3 }} fontSize="small" />
                <Box>
                  <Typography variant="caption" fontWeight={700} color="text.secondary">
                    Pagos
                  </Typography>
                  <Typography variant="body2">{metodosPago}</Typography>
                </Box>
              </Stack>
            )}
            {metodoVentas && (
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <StorefrontIcon sx={{ color: "primary.main", mt: 0.3 }} fontSize="small" />
                <Box>
                  <Typography variant="caption" fontWeight={700} color="text.secondary">
                    Método de venta
                  </Typography>
                  <Typography variant="body2">{metodoVentas}</Typography>
                </Box>
              </Stack>
            )}
          </Box>
        )}

        {/* WhatsApp, solo si hay teléfono cargado */}
        {whatsappUrl && (
          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              mt: 3,
              bgcolor: "#25D366",
              "&:hover": { bgcolor: "#20ba59" },
              fontWeight: 700,
              borderRadius: "10px",
              py: 1.2,
            }}
          >
            Coordinar por WhatsApp
          </Button>
        )}
      </Box>

      {/* Mapa */}
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          border: "1px solid",
          borderColor: "border.main",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid",
            borderColor: "border.main",
            bgcolor: "bg.main",
          }}
        >
          <Typography variant="subtitle2" fontWeight={700}>
            Ubicación aproximada
          </Typography>
          {radio && (
            <Chip
              label={`Radio de ${radio}`}
              size="small"
              sx={{ bgcolor: "white", color: "primary.main", fontWeight: 700 }}
            />
          )}
        </Box>
        <Map zonaDistribuidor={zonaDistribuidor} address={address} />
      </Box>

      <Snackbar
        open={copiado}
        autoHideDuration={2000}
        onClose={() => setCopiado(false)}
        message="Dirección copiada"
      />
    </Box>
  );
};

export default SectionDistribuidor;