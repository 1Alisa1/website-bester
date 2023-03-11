import styles from "./notFoundPage.module.scss";
import notfound from "../../img/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFoundSection}>
      <div className={styles.notFoundContainer}>
        <div className={styles.img}>
          <img src={notfound} alt="not found" />
        </div>
        <p className={styles.text}>
          Упс, что-то пошло не так, <br /> вернись на главную страницу
        </p>
        <button className={styles.button} onClick={() => navigate("/")}>
          Главная
        </button>
      </div>
    </section>
  );
};

export { NotFoundPage };
