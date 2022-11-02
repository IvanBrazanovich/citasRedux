import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cita from "./Cita";
import styles from "../../styles/components/citas.module.scss";
import { getCitas } from "../slices/citas/citasSlice";

const ListadoCitas = () => {
  const { citas } = useSelector((state) => state.citas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCitas());
  }, []);
  return (
    <section className={styles.listadoCitas}>
      {citas?.map((cita) => {
        return <Cita key={cita.id} cita={cita} />;
      })}
    </section>
  );
};

export default ListadoCitas;
