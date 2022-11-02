import Formulario from "./componentes/Formulario";
import ListadoCitas from "./componentes/ListadoCitas";
import styles from "../styles/components/app.module.scss";

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.app__mainHeading}>
        Seguimiento pacientes <span>Veterinaria</span>
      </h1>

      <section className={styles.app__formulario}>
        <div className={styles.app__infoWrapper}>
          <h2 className="infoWrapper__titulo">Seguimiento Pacientes</h2>
          <p className="infoWrapper__parrafo">
            Añade pacientes y <span> adminístralos </span>
          </p>
        </div>
        <Formulario />
      </section>
      <section className={styles.app__listadoWrapper}>
        <div className={styles.app__infoWrapper}>
          <h2 className="infoWrapper__titulo">No hay pacientes</h2>
          <p className="infoWrapper__parrafo">
            Comienza agregando pacientes <br />
            <span> y aparecerán en este lugar</span>
          </p>
        </div>

        <ListadoCitas />
      </section>
    </main>
  );
}

export default App;
