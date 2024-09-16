import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
export default function Header({ dummy }) {
  console.log(dummy);
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className="">ReactArt</h1>
      <p className={styles.para}>A community of artists and art-lovers.</p>
    </header>
  );
}

