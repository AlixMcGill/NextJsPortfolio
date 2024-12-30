import Image from "next/image";
import Header from "./components/header"
import Button from "./components/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Button btnText="Portfolio" size="button-size-large" fontSize="font-mid-large" color="header-bg" href=""></Button>
      <Button btnText="Contact" size="button-size-large" fontSize="font-mid-large" color="skills-bg" href=""></Button>
    </div>
  );
}
