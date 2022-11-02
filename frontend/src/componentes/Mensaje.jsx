import React from "react";
import styles from "../../styles/components/mensaje.module.scss";

const Mensaje = ({ mensaje }) => {
  return <div className={styles.mensaje}>{mensaje}</div>;
};

export default Mensaje;
