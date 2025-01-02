import Image from "next/image";
import Header from "./components/header"
import Button from "./components/button";
import Hero from "./components/hero";
import Skills from "./components/skills";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="position-absolute z-index-neg5">
        <Header></Header>
        <Hero></Hero>
      </div>
      <Skills></Skills>
    </div>
  );
}
