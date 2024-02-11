import React from "react";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./index.module.scss";
import DarkMode from "@/components/darkMode/DarkMode";
import Link from "next/link";

const AppShellComponent = ({ children, progressButtons, hideNavbar }) => {
  const [opened, { toggle }] = useDisclosure();

  const mainClassName = hideNavbar ? styles.mainHome : styles.AppShellMain;

  return (
    <AppShell
      className={styles.AppShell}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.AppShellHeader}>
        <div className={styles.AppShellHeaderEl}>
          {!hideNavbar && (
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="md"
              className={styles.button}
            />
          )}
          <DarkMode />
        </div>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
          </div>
        </Link>
      </AppShell.Header>
      {!hideNavbar && (
        <AppShell.Navbar className={styles.AppShellNavbar}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/walking">
            Scegli il cammino
          </Link>
          <Link className={styles.link} href="/progress">
            I miei progressi
          </Link>
        </AppShell.Navbar>
      )}
      <AppShell.Main className={mainClassName}>{children}</AppShell.Main>
      <AppShell.Footer>
        <div className={styles.Footer}>
          {progressButtons}
          <p className={styles.withLove}>WalkingWebApp creata con ❤️‍🩹 | 2024</p>
        </div>
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppShellComponent;
