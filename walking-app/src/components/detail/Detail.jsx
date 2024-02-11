import styles from "./index.module.scss";
import { Image } from "@mantine/core";

const Detail = ({
  difficulty,
  distance,
  days,
  ascent,
  descent,
  highest_point,
  cities,
  best_time_of_year,
}) => {
  return (
    <div className={styles.Detail}>
      <h2>Detail</h2>
      <ul>
        <li key="difficulty">
          <Image
            src={"/difficulty.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Difficoltà: {difficulty}</p>
        </li>
        <li key="distance">
          <Image
            src={"/distance.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Distanza: {distance}</p>
        </li>
        <li key="days">
          <Image
            src={"/days.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Giorni di cammino: {days}</p>
        </li>
        <li key="ascent">
          <Image
            src={"/ascent.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Salita totale: {ascent}</p>
        </li>
        <li key="descent">
          <Image
            src={"/discent.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Discesa totale: {descent}</p>
        </li>
        <li key="highest_point">
          <Image
            src={"/alto.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p>Punto più alto: {highest_point}</p>
        </li>
        <li key="cities">
          <Image
            src={"/places.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p>Comuni attreversati: {cities}</p>
        </li>
        <li key="best_time_of_year">
          <Image
            src={"/best.png"}
            width={100}
            height={100}
            className={styles.image}
          />
          <p> Miglior periodo dell'anno: {best_time_of_year}</p>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
