import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/components/citas.module.scss";
import { setEdit, deleteCita } from "../slices/citas/citasSlice";

const Cita = ({ cita }) => {
  const { mascota, propietario, alta, sintomas, email } = cita;
  const dispatch = useDispatch();

  return (
    <div className={styles.cita}>
      <p>
        <span className={styles.cita__span}>Nombre:</span> {mascota}
      </p>
      <p>
        <span className={styles.cita__span}>Propietario:</span> {propietario}
      </p>
      <p>
        <span className={styles.cita__span}>Email:</span> {email}
      </p>
      <p>
        <span className={styles.cita__span}>Fecha Alta:</span> {alta}
      </p>
      <p>
        <span className={styles.cita__span}>SIntomas:</span> {sintomas}
      </p>

      <div className={styles.cita__buttonWrapper}>
        <button
          onClick={() => dispatch(setEdit(cita))}
          type="editar"
          className={styles.buttonWrapper__button}
        >
          Editar
        </button>
        <button
          onClick={() => dispatch(deleteCita(cita))}
          type="eliminar"
          className={styles.buttonWrapper__button}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Cita;
