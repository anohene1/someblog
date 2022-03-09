import Image from "next/image";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.title}>Make better coffee ☕️</h1>
        <h2>why learn how to blog?</h2>
      </div>
      <Image src="/../public/images/hero.png" width={536} height={383} alt="" />
    </div>
  );
}

export default Hero;
