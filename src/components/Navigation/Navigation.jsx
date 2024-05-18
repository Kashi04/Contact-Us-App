import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div>
          <img src="src\assets\Frame 2 1.png" alt="logo" />
        </div>

        <ul>
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#">
            <li>ABOUT</li>
          </a>
          <a href="#">
            <li>CONTACT US</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
