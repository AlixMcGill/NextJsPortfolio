import Image from "next/image";
import Header from "./components/header"
import Button from "./components/button";
import Hero from "./components/hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Hero></Hero>
      <p className="font-extra-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga libero consectetur atque corporis quos voluptates, beatae minus obcaecati sapiente, quae iste necessitatibus dolore enim corrupti architecto harum voluptas error? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis modi voluptas, id incidunt voluptates atque quia animi aspernatur repellendus ducimus porro quos soluta consequuntur dolores sint? Itaque numquam in porro!</p>
    </div>
  );
}
