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

const PoliticaPrivacidad = () => {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Política de Privacidad
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Última actualización: {LAST_UPDATED}
      </Typography>

      <Typography variant="body1" paragraph>
        Trashumar Ediciones ("Trashumar", "nosotros") es un proyecto editorial
        cuyo eje central es la promoción del arte y la cultura, más que la
        ganancia comercial. Esta Política de Privacidad explica qué datos
        personales recolectamos a través del sitio{" "}
        <strong>trashumarediciones.netlify.app</strong>, para qué los usamos,
        con quién los compartimos y qué derechos tenés sobre ellos.
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 5 }}>
        Al crear una cuenta o usar el sitio, aceptás las prácticas descritas
        acá. Si no estás de acuerdo, por favor no uses el sitio ni nos
        proporciones tus datos.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section title="1. Qué datos recolectamos">
        <Typography variant="body1" paragraph>
          <strong>a) Datos de tu cuenta de Google.</strong> Para crear una
          cuenta en Trashumar usamos "Iniciar sesión con Google". Google nos
          comparte tu nombre, tu dirección de email y tu foto de perfil. Estos
          datos se usan <strong>exclusivamente</strong> para crear e
          identificar tu cuenta en Trashumar — no los usamos para ningún otro
          fin, no los cruzamos con otros servicios de Google ni los usamos con
          fines publicitarios.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>b) Datos de tu perfil.</strong> Al completar tu perfil podés
          proporcionar: nombre público, teléfono, email de contacto, enlaces a
          tus redes sociales (Facebook, Instagram, X, LinkedIn), una
          biografía y una lista de oficios u ocupaciones vinculadas al mundo
          editorial. Estos datos son los que vos decidís compartir, y son
          visibles públicamente en tu perfil dentro del sitio (ver sección 4).
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>c) Datos de distribuidores.</strong> Si elegís registrarte
          como distribuidor, además pedimos tu ubicación física aproximada,
          un radio de cobertura y tus métodos de venta. Estos datos se piden
          específicamente para mostrarte en el mapa público del sitio, de
          forma que lectores puedan encontrar dónde conseguir los libros. Si
          no te registrás como distribuidor, no pedimos ni guardamos tu
          domicilio.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>d) Proyectos que enviás para evaluación.</strong> Si
          completás alguno de los formularios de "Publicar un proyecto", esa
          información (incluido el texto o la idea que describís) se envía
          por correo electrónico a nuestro equipo editorial a través de un
          proveedor externo (EmailJS). No se guarda en nuestra base de datos.
          Ese contenido puede ser compartido internamente con lectores y
          evaluadores vinculados a Trashumar, con el único fin de evaluar tu
          propuesta editorialmente.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>e) Formulario de contacto.</strong> Si nos escribís desde el
          formulario de contacto, tu nombre, email, asunto y mensaje se
          envían por correo a través de EmailJS. No se almacenan en nuestra
          base de datos.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>f) Datos técnicos y de errores.</strong> Cuando ocurre un
          error en el sitio, guardamos automáticamente un registro técnico
          (mensaje de error, navegador usado, URL donde ocurrió, fecha y
          hora) para poder detectar y corregir problemas. Este registro no
          incluye tu nombre ni tus datos de perfil, salvo que estuvieras
          logueado al momento del error.
        </Typography>
      </Section>

      <Section title="2. Para qué usamos tus datos">
        <Typography component="ul" sx={{ pl: 3 }}>
          <li>Crear, identificar y administrar tu cuenta.</li>
          <li>Mostrar tu perfil público a otros usuarios del sitio.</li>
          <li>
            Mostrar tu ubicación en el mapa de distribuidores, si te
            registraste con ese rol.
          </li>
          <li>
            Evaluar los proyectos que enviás para su posible publicación.
          </li>
          <li>Responder tus consultas de contacto.</li>
          <li>
            Detectar, diagnosticar y corregir errores técnicos del sitio.
          </li>
        </Typography>
      </Section>

      <Section title="3. Con quién compartimos tus datos">
        <Typography variant="body1" paragraph>
          No vendemos tus datos personales ni los compartimos con terceros
          con fines publicitarios. Usamos los siguientes proveedores, que
          actúan como encargados técnicos del tratamiento de los datos, bajo
          sus propias políticas de privacidad:
        </Typography>
        <Typography component="ul" sx={{ pl: 3 }}>
          <li>
            <strong>Google Firebase / Firestore</strong> (Google LLC): para
            autenticación y almacenamiento de la base de datos.
          </li>
          <li>
            <strong>EmailJS</strong>: para el envío de los formularios de
            contacto y de propuesta de proyectos por correo electrónico.
          </li>
          <li>
            <strong>Netlify</strong>: para el hosting del sitio web.
          </li>
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          Solo compartiríamos datos adicionales con autoridades si una ley o
          una orden judicial nos obligara a hacerlo.
        </Typography>
      </Section>

      <Section title="4. Qué información es pública">
        <Typography variant="body1" paragraph>
          Tu perfil (nombre público, redes sociales, bio, oficios) es visible
          para cualquier persona que visite el sitio, incluso sin estar
          registrada — es la forma en que otros usuarios y lectores pueden
          conocerte dentro de la comunidad de Trashumar. Si te registrás como
          distribuidor, tu ubicación aproximada también es pública, con ese
          mismo propósito. Tu email de Google y tu teléfono no se muestran
          públicamente salvo que vos decidas incluirlos en tu biografía.
        </Typography>
      </Section>

      <Section title="5. Cuánto tiempo guardamos tus datos">
        <Typography variant="body1" paragraph>
          Guardamos los datos de tu cuenta y perfil mientras la cuenta esté
          activa. Si pedís que eliminemos tu cuenta, borramos tu perfil de
          nuestra base de datos en un plazo razonable, salvo que debamos
          conservar cierta información por obligación legal. Los registros
          técnicos de errores se conservan por un tiempo limitado, solo con
          fines de diagnóstico.
        </Typography>
      </Section>

      <Section title="6. Tus derechos">
        <Typography variant="body1" paragraph>
          De acuerdo con la Ley 25.326 de Protección de Datos Personales de
          la República Argentina, tenés derecho a acceder, rectificar,
          actualizar y solicitar la eliminación de tus datos personales
          (derechos ARCO). También podés retirar tu consentimiento en
          cualquier momento.
        </Typography>
        <Typography variant="body1" paragraph>
          Para ejercer estos derechos, escribinos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. La Agencia
          de Acceso a la Información Pública (AAIP), órgano de control de la
          Ley 25.326, es la autoridad ante la cual podés presentar un reclamo
          si considerás que no respetamos tus derechos.
        </Typography>
      </Section>

      <Section title="7. Cookies y almacenamiento local">
        <Typography variant="body1" paragraph>
          El sitio usa el almacenamiento local del navegador (localStorage)
          únicamente con fines funcionales: guardar un registro técnico de
          errores en tu propio dispositivo, y optimizar la carga de imágenes.
          No usamos cookies de seguimiento publicitario ni de terceros con
          fines de marketing.
        </Typography>
      </Section>

      <Section title="8. Menores de edad">
        <Typography variant="body1" paragraph>
          El sitio no está dirigido a menores de 13 años, y no recolectamos
          intencionalmente datos de menores de esa edad. Si sos padre, madre
          o tutor y creés que tu hijo/a nos proporcionó datos personales,
          contactanos para eliminarlos.
        </Typography>
      </Section>

      <Section title="9. Cambios a esta política">
        <Typography variant="body1" paragraph>
          Podemos actualizar esta Política de Privacidad ocasionalmente. Si
          hacemos cambios importantes, lo indicaremos en el sitio. La fecha
          de "última actualización" al inicio de esta página refleja la
          versión vigente.
        </Typography>
      </Section>

      <Section title="10. Contacto">
        <Typography variant="body1" paragraph>
          Si tenés preguntas sobre esta Política de Privacidad o sobre cómo
          tratamos tus datos, escribinos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </Typography>
      </Section>
    </Container>
  );
};

export default PoliticaPrivacidad;
