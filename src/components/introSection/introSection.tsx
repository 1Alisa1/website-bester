import styles from "./introSection.module.scss";
import img from "../../img/first-img.png";
import imgSmall from "../../img/first-img-small.png";

const IntroSection: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          <span>BESTEP</span> — бизнес для каждого
        </h1>
        <p className={styles.subtitle}>
          Мы продаём и создаём готовые интернет-магазины под ключ
        </p>
        <div className={styles.imageSmall}>
          <img
            src={imgSmall}
            alt="Мы продаём и создаём готовые интернет-магазины под ключ"
          />
        </div>
        <button className={styles.contact}>Связаться</button>
      </div>
      <div className={styles.image}>
        <img
          src={img}
          alt="Мы продаём и создаём готовые интернет-магазины под ключ"
        />
      </div>
    </section>
  );
};

export default IntroSection;
