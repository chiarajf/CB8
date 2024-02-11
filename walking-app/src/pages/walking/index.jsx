import React from "react";
import styles from "../../styles/walking.module.scss";
import AppShellComponent from "@/components/appShellComponent/AppShellComponent";
import Walks from "@/components/walks/Walks";

export default function GeneralWalking() {
  return (
    <div className={styles.walking}>
      <AppShellComponent>
        <Walks />
      </AppShellComponent>
    </div>
  );
}
