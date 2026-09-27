import { Container, Typography, Box, Divider } from "@mui/material";

const CONTACT_EMAIL = "contacto@trashumarediciones.com";
const LAST_UPDATED = "23 de septiembre de 2026";

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const TerminosCondiciones = () => {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Términos y Condiciones
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Última actualización: {LAST_UPDATED}
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 5 }}>
        Estos Términos y Condiciones regulan el uso del sitio Trashumar
        Ediciones. Al registrarte o usar el sitio, aceptás lo establecido
        acá. Te pedimos que los leas con atención.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section title="1. Quiénes somos">
        <Typography variant="body1" paragraph>
          Trashumar Ediciones es un proyecto editorial independiente y
          federal, orientado ante todo a la <strong>promoción del arte, la
          escritura y la cultura</strong>. Si bien funcionamos como una
          editorial y eventualmente pueden existir acuerdos comerciales
          vinculados a la publicación de una obra, nuestro propósito
          principal no es el lucro sino dar espacio y visibilidad a
          proyectos artísticos y literarios que de otro modo tendrían
          dificultades para encontrar una editorial.
        </Typography>
      </Section>

      <Section title="2. Tu cuenta">
        <Typography variant="body1" paragraph>
          Para usar ciertas funciones del sitio (publicar un perfil, enviar
          un proyecto, registrarte como distribuidor) necesitás crear una
          cuenta a través de "Iniciar sesión con Google". Sos responsable de
          que la información que proporciones en tu perfil sea veraz, y de
          mantener la confidencialidad de tu cuenta de Google. Nos
          reservamos el derecho de suspender cuentas que proporcionen
          información falsa o que se usen de forma abusiva.
        </Typography>
      </Section>

      <Section title="3. Contenido que enviás (proyectos)">
        <Typography variant="body1" paragraph>
          Cuando enviás un proyecto, una idea o cualquier contenido a través
          de los formularios de "Publicar", conservás todos los derechos de
          autor sobre ese contenido. Al enviarlo, nos das permiso para:
        </Typography>
        <Typography component="ul" sx={{ pl: 3 }}>
          <li>
            Leerlo, evaluarlo y compartirlo internamente con lectores,
            correctores y evaluadores vinculados a Trashumar, con el único
            fin de decidir si el proyecto se publica.
          </li>
          <li>
            Contactarte para conversar sobre tu propuesta, pedirte más
            información o, si corresponde, avanzar hacia un acuerdo de
            publicación.
          </li>
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          El envío de un proyecto <strong>no implica ningún compromiso de
          publicación</strong> de nuestra parte — la decisión editorial es
          discrecional. Si un proyecto avanza hacia una publicación real, los
          términos específicos (derechos, distribución, compensación, etc.)
          se acordarán por separado con vos, fuera de este sitio.
        </Typography>
        <Typography variant="body1" paragraph>
          Sos responsable de que el contenido que envíes sea de tu autoría o
          de que contés con los permisos necesarios para compartirlo (por
          ejemplo, si enviás una obra de otra persona a través del
          formulario correspondiente, debés contar con su autorización).
        </Typography>
      </Section>

      <Section title="4. Tu perfil público">
        <Typography variant="body1" paragraph>
          La información que completes en tu perfil (nombre público, redes
          sociales, biografía, oficios) se muestra públicamente en el sitio.
          Si te registrás como distribuidor, tu ubicación aproximada también
          se muestra públicamente en el mapa, con el fin de que lectores
          puedan encontrarte. Sos vos quien decide qué información incluir
          en tu perfil.
        </Typography>
      </Section>

      <Section title="5. Uso aceptable del sitio">
        <Typography variant="body1" paragraph>
          Al usar el sitio, te comprometés a no:
        </Typography>
        <Typography component="ul" sx={{ pl: 3 }}>
          <li>Enviar spam o contenido publicitario no solicitado.</li>
          <li>
            Suplantar la identidad de otra persona o crear perfiles falsos.
          </li>
          <li>
            Enviar contenido que infrinja derechos de autor, sea difamatorio,
            discriminatorio o ilegal.
          </li>
          <li>
            Intentar vulnerar la seguridad del sitio, sus formularios o su
            base de datos.
          </li>
          <li>
            Automatizar el envío masivo de formularios o solicitudes al
            sitio.
          </li>
        </Typography>
      </Section>

      <Section title="6. Propiedad intelectual del sitio">
        <Typography variant="body1" paragraph>
          El diseño, la marca "Trashumar Ediciones", el logo y los textos
          propios del sitio (fuera del contenido enviado por usuarios) son
          propiedad de Trashumar Ediciones y no pueden reproducirse sin
          autorización.
        </Typography>
      </Section>

      <Section title="7. Disponibilidad del servicio">
        <Typography variant="body1" paragraph>
          El sitio se ofrece "tal cual está". Hacemos nuestro mejor esfuerzo
          para mantenerlo disponible y funcionando correctamente, pero no
          garantizamos que esté libre de errores o interrupciones en todo
          momento.
        </Typography>
      </Section>

      <Section title="8. Cambios en la cuenta o el servicio">
        <Typography variant="body1" paragraph>
          Podés pedir la eliminación de tu cuenta en cualquier momento
          escribiéndonos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Nos
          reservamos el derecho de modificar, suspender o discontinuar
          funciones del sitio, así como de actualizar estos Términos. Los
          cambios importantes se anunciarán en el sitio.
        </Typography>
      </Section>

      <Section title="9. Ley aplicable">
        <Typography variant="body1" paragraph>
          Estos Términos se rigen por las leyes de la República Argentina.
          Cualquier controversia se someterá a los tribunales ordinarios
          competentes.
        </Typography>
      </Section>

      <Section title="10. Contacto">
        <Typography variant="body1" paragraph>
          Ante cualquier duda sobre estos Términos, escribinos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </Typography>
      </Section>
    </Container>
  );
};

export default TerminosCondiciones;
