import styles from "./index.module.scss";
import { Image } from "@mantine/core";

const Hero = ({ name, description, url, img }) => {
  return (
    <>
      <div className={styles.Hero}>
        <Image src={img} width={100} height={100} className={styles.image} />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.frameContainer}>
          <Image src={url} width={1000} height={500} className={styles.image} />
        </div>
      </div>
    </>
  );
};

export default Hero;
