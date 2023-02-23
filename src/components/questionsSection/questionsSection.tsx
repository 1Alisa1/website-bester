import Question from '../question/question';
import styles from './questionsSection.module.scss';

const QuestionsSection = () => {
  return (
    <section>
      <h2>Ваши вопросы</h2>
      <div className={styles.questionsContainer}>
        <Question
          question="С какой суммы можно начать товарный бизнес?"
          answer="Тебе достаточно 100$ в кармане, чтобы начать товарный бизнес. У нас есть поставщики, которые готовы работать по системе Дропшиппинга, что позволяет значительно снизить расходы на запуск"
          isAlwaysOpen={true}
        />
        <Question
          question="С чего начинать?"
          answer="Достаточно оставить заявку на сайте, и наш менеджер свяжется с тобой. Наши менеджеры проконсультируют по тарифам и подберут подходящий вариант"
        />
        <Question
          question="Можно поднять тариф?"
          answer="Да, конечно! В случае если ты захочешь поднять свой тариф, то достаточно будет доплатить разницу между тарифами и всё"
        />
        <Question
          question="Если я из другой страны, мне подойдут ваши услуги?"
          answer="Да, наши тарифы подходят для Беларуси, России и Украины"
        />
      </div>
    </section>
  );
};

export default QuestionsSection;
