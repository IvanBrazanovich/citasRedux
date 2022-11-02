import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles//components/formulario.module.scss";
import { editCita, postCita, setEdit } from "../slices/citas/citasSlice";
import Mensaje from "./Mensaje";

const Formulario = () => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const edit = useSelector((state) => state.citas.edit);

  useEffect(() => {
    if (edit?.mascota) {
      setPropietario(edit.propietario);
      setAlta(edit.alta);
      setEmail(edit.email);
      setMascota(edit.mascota);
      setSintomas(edit.sintomas);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Form Validation
    if (
      [mascota, propietario, alta, sintomas, email]
        .map((item) => item.toString().trim())
        .includes("")
    ) {
      setError(true);
      return;
    }
    //Si pasa elimino el error
    setError(false);

    //Checkeo si está en edit mode
    if (edit?.mascota) {
      dispatch(
        editCita({ mascota, propietario, alta, sintomas, email, id: edit.id })
      );

      dispatch(setEdit({}));
    } else {
      //Agrego la cita al state
      dispatch(
        postCita({
          mascota,
          propietario,
          alta,
          sintomas,
          email,
          id: Date.now(),
        })
      );
    }
    //Reinicio todos los valores
    setPropietario("");
    setAlta("");
    setEmail("");
    setMascota("");
    setSintomas("");
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        {error ? <Mensaje mensaje="Todos los campos son obligatorios" /> : null}
        <label htmlFor="mascota"> Nombre Mascota</label>
        <input
          placeholder="Nombre de la Mascota"
          type="text"
          name="mascota"
          id="mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label htmlFor="propietario">Nombre Propietario</label>
        <input
          placeholder="Nombre del Propietario"
          type="text"
          name="propietario"
          id="propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />

        <label htmlFor="email">email</label>
        <input
          placeholder="Email Contacto Propietario"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="alta">alta</label>
        <input
          placeholder="Nombre de la Mascota"
          type="date"
          name="alta"
          id="alta"
          value={alta}
          onChange={(e) => setAlta(e.target.value)}
        />

        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          placeholder="Describe los síntomas"
          rows="5"
          name="sintomas"
          id="sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <button type="submit">
          {edit?.mascota ? "Editar Cita" : "Agregar Paciente"}
        </button>
      </form>
    </section>
  );
};

export default Formulario;
