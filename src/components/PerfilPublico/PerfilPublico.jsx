import "./Perfil.css";
const PerfilPublico = ({ nombrePublico, avatar, oficio }) => {
  console.log(nombrePublico);
  return (
    <main className="perfil-main">
      <section className="perfil-card-container">
        <img
          className="img-perfil-card"
          src={!avatar ? "No se encontro usuario" : avatar}
          alt="foto"
        />
        <h2 className="h1-perfil-card">
          {!nombrePublico ? "No se encontro usuario" : nombrePublico}
        </h2>
        <span>
          <p>{!oficio ? "No se encontro usuario" : oficio}</p>
        </span>
      </section>
    </main>
  );
};

export default PerfilPublico;
