import Meteo from "../meteo/Meteo";
import styles from "./index.module.scss";
import { Image } from "@mantine/core";
import SleepData from "../sleepData/SleepData";
import { motion } from "framer-motion";

const DayByDay = ({
  city,
  description,
  difficulty,
  distance,
  ascent,
  descent,
  highest_point,
  sleepData,
  url,
}) => {
  const MotionDiv = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.walking}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={styles.DayByDay}>
      <MotionDiv>
        <Meteo firstCity={city} />

        <h1 key="city">Benvenuto nella città di {city}</h1>
        <p key="description"> {description}</p>

        <ul className={styles.listDetail}>
          <li className={styles.listDetailLi} key="difficulty">
            <Image
              src={"/difficulty.png"}
              width={100}
              height={100}
              className={styles.image}
            />
            <p> {difficulty}</p>
          </li>
          <li className={styles.listDetailLi} key="distance">
            <Image
              src={"/distance.png"}
              width={100}
              height={100}
              className={styles.image}
            />
            <p> {distance}</p>
          </li>
          <li className={styles.listDetailLi} key="ascent">
            <Image
              src={"/ascent.png"}
              width={100}
              height={100}
              className={styles.image}
            />
            <p> {ascent}</p>
          </li>
          <li className={styles.listDetailLi} key="descent">
            <Image
              src={"/discent.png"}
              width={100}
              height={100}
              className={styles.image}
            />
            <p> {descent}</p>
          </li>
          <li className={styles.listDetailLi} key="highest_point">
            <Image
              src={"/alto.png"}
              width={100}
              height={100}
              className={styles.image}
            />
            <p> {highest_point}</p>
          </li>
        </ul>
        <iframe
          src={url}
          title="Embedded Content"
          width="100%"
          height="400"
          allowFullScreen
        ></iframe>
        <h2>Dopo la tua lunga camminata, puoi trovare ristoro qui:</h2>
        <SleepData sleepData={sleepData} />
      </MotionDiv>
    </div>
  );
};

export default DayByDay;
