import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // Importa useHistory per navigare tra le pagine
import styles from "./index.module.scss";
import Meteo from "../meteo/Meteo";
import { motion } from "framer-motion";
import SleepData from "../sleepData/SleepData";

const ProgressComponent = () => {
  const [savedDailyProgress, setSavedDailyProgress] = useState(null);
  const history = useHistory(); // Inizializza la history per la navigazione

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("dailyProgress"));
      setSavedDailyProgress(data);
    }
  }, []);

  const handleReturnToSavedData = () => {
    history.push("/");
  };

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
    <div className={styles.progressContainer}>
      <MotionDiv>
        <div>
          <button onClick={handleReturnToSavedData}>
            Torna al dato salvato
          </button>
          {savedDailyProgress ? (
            savedDailyProgress.map((item, index) => (
              <div key={index} className={styles.progressItem}>
                <Meteo firstCity={item.data.city} />
                <h2>Oggi sei arrivato a {item.data.city}</h2>
                <iframe
                  src={item.data.url}
                  title="Embedded Content"
                  width="100%"
                  height="400"
                  allowFullScreen
                ></iframe>
                <h3>Non credi sia ora di riposare? {item.data.city}</h3>

                <div className={styles.sleep}>
                  {item.data.sleep && <SleepData sleepData={item.data.sleep} />}
                </div>
              </div>
            ))
          ) : (
            <p>Nessun progresso salvato</p>
          )}
        </div>
      </MotionDiv>
    </div>
  );
};

export default ProgressComponent;
