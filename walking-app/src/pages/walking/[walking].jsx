"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../../styles/walking.module.scss";
import Hero from "@/components/hero/Hero";
import Meteo from "@/components/meteo/Meteo";
import Detail from "@/components/detail/Detail";
import DayByDay from "@/components/daybyday/DayByDay";
import maps from "@/mock/maps";
import AppShellComponent from "@/components/appShellComponent/AppShellComponent";
import ProgressButtons from "@/components/progressButtons/ProgressButtons";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function Walking() {
  const router = useRouter();
  const filteredData = maps.find((item) => item.alt === router.query.walking);
  const [currentDay, setCurrentDay] = useState(1);
  const [showDayByDay, setShowDayByDay] = useState(false);
  const [dailyProgress, setDailyProgress] = useState([]);

  useEffect(() => {
    localStorage.setItem("currentDay", currentDay);
    localStorage.setItem("dailyProgress", JSON.stringify(dailyProgress));
  }, [currentDay, dailyProgress]);

  useEffect(() => {
    const savedCurrentDay = localStorage.getItem("currentDay");
    if (savedCurrentDay) {
      setCurrentDay(parseInt(savedCurrentDay));
    }

    const savedDailyProgress = JSON.parse(
      localStorage.getItem("dailyProgress")
    );
    if (savedDailyProgress.length > 0) {
      setCurrentDay(savedDailyProgress[savedDailyProgress.length - 1].day);
      setDailyProgress(savedDailyProgress);
      setShowDayByDay(true);
    }
  }, []);

  useEffect(() => {
    const savedCurrentDay = localStorage.getItem("currentDay");
    const savedDailyProgress = JSON.parse(
      localStorage.getItem("dailyProgress")
    );

    if (savedCurrentDay !== null) {
      setCurrentDay(parseInt(savedCurrentDay));
    }

    if (savedDailyProgress !== null && savedDailyProgress.length > 0) {
      setCurrentDay(savedDailyProgress[savedDailyProgress.length - 1].day);
      setDailyProgress(savedDailyProgress);
      setShowDayByDay(true);
    }
  }, []);

  const handleNextDay = (event) => {
    event.preventDefault();
    const nextDay = currentDay + 1;
    const lastDay = Object.keys(walkData).length;

    if (nextDay <= lastDay) {
      const nextDayData = walkData[`day${nextDay}`];
      if (nextDayData) {
        setCurrentDay(nextDay);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/percorso-completato");
    }
  };

  const handleStartWalking = () => {
    setShowDayByDay(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevDay = () => {
    if (currentDay > 1) {
      setCurrentDay(currentDay - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setShowDayByDay(false);
    }
  };

  const saveProgress = () => {
    const currentDayData = walkData[`day${currentDay}`];
    if (currentDayData) {
      setDailyProgress([{ day: currentDay, data: currentDayData }]);
    }
  };

  const handleSaveProgress = () => {
    saveProgress();
  };

  const handleClearProgress = () => {
    setDailyProgress([]);
  };

  const handleGoToHome = () => {
    router.push("/");
  };

  const handleGoToProgress = () => {
    router.push("/progress");
  };

  if (!filteredData) {
    return <h1>loading...</h1>;
  }

  const progressButtons = (
    <ProgressButtons
      handleSaveProgress={handleSaveProgress}
      handleClearProgress={handleClearProgress}
      handleGoToProgress={handleGoToProgress}
      handleGoToHome={handleGoToHome}
      currentDay={currentDay}
    />
  );

  const { first_city, last_city } = filteredData.meteo;
  const {
    difficulty,
    distance,
    days,
    ascent,
    descent,
    highest_point,
    cities,
    best_time_of_year,
  } = filteredData.detail;
  const walkData = filteredData.walk;

  const MotionDiv = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className={styles.walking}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={styles.walking}>
      <AppShellComponent progressButtons={progressButtons}>
        {showDayByDay ? (
          <div className={styles.daybyday_container}>
            <DayByDay
              city={walkData[`day${currentDay}`]?.city}
              description={walkData[`day${currentDay}`]?.description}
              difficulty={walkData[`day${currentDay}`]?.difficulty}
              distance={walkData[`day${currentDay}`]?.distance}
              ascent={walkData[`day${currentDay}`]?.ascent}
              descent={walkData[`day${currentDay}`]?.descent}
              highest_point={walkData[`day${currentDay}`]?.highest_point}
              sleepData={walkData[`day${currentDay}`]?.sleep}
              url={walkData[`day${currentDay}`]?.url}
            />
            <div>
              <div className={styles.navigation_buttons}>
                {currentDay === 1 ? (
                  <button
                    className={styles.backButton}
                    onClick={() => setShowDayByDay(false)}
                  >
                    Torna al cammino
                  </button>
                ) : (
                  <button className={styles.backButton} onClick={handlePrevDay}>
                    Cammino precedente
                  </button>
                )}
                <button
                  className={styles.startButton}
                  onClick={handleNextDay}
                  disabled={currentDay === days}
                >
                  Cosa mi aspetta domani?
                </button>
              </div>
            </div>
          </div>
        ) : (
          <MotionDiv className={styles.container}>
            <Hero
              img={filteredData.img}
              name={filteredData.name}
              description={filteredData.description}
              url={filteredData.url}
            />
            <Detail
              difficulty={difficulty}
              distance={distance}
              days={days}
              ascent={ascent}
              descent={descent}
              highest_point={highest_point}
              cities={cities}
              best_time_of_year={best_time_of_year}
            />
            <div className={styles.meteo_detail}>
              <Meteo firstCity={first_city} lastCity={last_city} />
              <div className={styles.starter}>
                <h3>Hai tutto l'occorrente?</h3>
                <button
                  className={styles.startButton}
                  onClick={handleStartWalking}
                >
                  Inizia il cammino!
                </button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AppShellComponent>
    </div>
  );
}
