import CardServices from "../cardServices/cardServices";
import styles from "./servicesSection.module.scss";

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <h2 className={styles.title}>Наши услуги</h2>
        <div className={styles.cardContainer}>
          <CardServices
            redirectUrl="/services#instagram"
            title="Instagram магазин"
            description={
              <>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Продажа готовых магазинов <br className={styles.medium} /> в
                    Instagram <br className={styles.large} /> под разные товары
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Изготовление магазинов <br className={styles.medium} /> в
                    Instagram <br className={styles.small} /> под твой товар
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>Разработка любой сложности</p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>Помощь в запуске</p>
                </div>
              </>
            }
          />
          <CardServices
            redirectUrl="/services#site"
            title="Сайт (landing page)"
            description={
              <>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Продажа готовых сайтов <br className={styles.large} />{" "}
                    <br className={styles.medium} />{" "}
                    <br className={styles.small} /> под разные товары
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Изготовление сайтов <br className={styles.medium} /> под
                    твой товар
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>Разработка любой сложности</p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>Помощь в запуске</p>
                </div>
              </>
            }
          />
          <CardServices
            redirectUrl="/services#courses"
            title="Обучающие курсы"
            description={
              <>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Курс с базовыми знаниями <br /> для новичков в товарке
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Курс с основами знаний <br className={styles.medium} /> для
                    быстрого старта в товарке
                  </p>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.img}></div>
                  <p>
                    Курс PRO — знания для успешного <br /> старта в товарке
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
