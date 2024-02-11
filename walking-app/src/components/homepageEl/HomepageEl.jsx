import Link from "next/link";
import styles from "./index.module.scss";

const HomepageEl = () => {
  return (
    <div className={styles.homepage}>
      <h2 className={styles.title}>
        Quando non puoi più correre, cammina veloce; quando non puoi più
        camminare veloce, cammina; quando non puoi più camminare, usa il
        bastone; però non trattenerti mai.
      </h2>
      <Link href="/walking">
        <button>Walking</button>
      </Link>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default HomepageEl;
