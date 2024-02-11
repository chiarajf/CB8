import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import styles from "./index.module.scss";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";

export default function DarkMode() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className={styles.DarkMode}>
      <ActionIcon
        color={dark ? "#f2763a" : "#0191ac"}
        onClick={() => setColorScheme(dark ? "light" : "dark")}
      >
        {dark ? (
          <SunIcon onClick={() => setColorScheme("dark")} />
        ) : (
          <MoonIcon onClick={() => setColorScheme("light")} />
        )}
      </ActionIcon>
    </div>
  );
}
