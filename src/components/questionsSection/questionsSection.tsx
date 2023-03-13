import Question from "../question/question";
import styles from "./questionsSection.module.scss";

const QuestionsSection: React.FC = () => {
  return (
    <section className={styles.questionsSection}>
      <h2>Ваши вопросы</h2>
      <div className={styles.questionsContainer}>
        <Question
          question={
            <p>
              С какой суммы можно начать <br className={styles.small} />{" "}
              товарный бизнес?
            </p>
          }
          answer={
            <p>
              Тебе достаточно 100$ в кармане, чтобы начать товарный{" "}
              <br className={styles.small} /> бизнес. У нас есть поставщики,
              которые готовы работать <br className={styles.small} /> по системе{" "}
              <br className={styles.large} /> Дропшиппинга, что позволяет
              значительно <br className={styles.small} /> снизить расходы на
              запуск
            </p>
          }
          isAlwaysOpen={true}
        />
        <Question
          question={<p>Можно поднять тариф?</p>}
          answer={
            <p>
              Да, конечно! В случае если ты захочешь поднять свой{" "}
              <br className={styles.small} /> тариф,{" "}
              <br className={styles.large} /> то достаточно будет{" "}
              <br className={styles.medium} /> доплатить разницу{" "}
              <br className={styles.small} /> между тарифами и всё
            </p>
          }
        />
        <Question
          question={<p>С чего начинать?</p>}
          answer={
            <p>
              Достаточно оставить заявку на сайте, и наш менеджер{" "}
              <br className={styles.small} /> свяжется{" "}
              <br className={styles.large} /> с тобой. Наши{" "}
              <br className={styles.medium} /> менеджеры проконсультируют{" "}
              <br className={styles.small} /> по тарифам и подберут{" "}
              <br className={styles.large} /> подходящий вариант
            </p>
          }
        />
        <Question
          question={
            <p>
              Если я из другой страны, <br className={styles.small} /> мне
              подойдут ваши услуги?
            </p>
          }
          answer={
            <p>
              Да, наши тарифы подходят для Беларуси, России{" "}
              <br className={styles.small} /> и Украины
            </p>
          }
        />
      </div>
    </section>
  );
};

export default QuestionsSection;
