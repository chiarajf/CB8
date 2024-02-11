import React, { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import styles from "./index.module.scss";

const SleepData = ({ sleepData }) => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (sleepData && !activeTab) {
      const firstAccommodation = Object.values(sleepData)[0];
      setActiveTab(firstAccommodation.name);
    }
  }, [sleepData, activeTab]);

  return (
    <div className={styles.SleepData}>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          {sleepData &&
            Object.values(sleepData).map((accommodation, index) => (
              <Tabs.Tab
                className={styles.TabsList}
                key={index}
                value={accommodation.name}
              >
                {accommodation.name}
              </Tabs.Tab>
            ))}
        </Tabs.List>
        {sleepData &&
          Object.values(sleepData).map((accommodation, index) => (
            <Tabs.Panel key={index} value={accommodation.name}>
              <div className={styles.sleepDescription}>
                <p>Tipologia: {accommodation.type}</p>
                <p>Indirizzo: {accommodation.address}</p>
                <p>Persona di riferimento: {accommodation.person}</p>
                <p>Telefono: {accommodation.phone}</p>
                <p>Email: {accommodation.email}</p>
              </div>
            </Tabs.Panel>
          ))}
      </Tabs>
    </div>
  );
};

export default SleepData;
