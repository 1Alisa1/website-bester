import CardComment from "../cardComment/cardComment";
import styles from "./commentsSection.module.scss";
import inst from "../../img/inst.svg";
import Carousel from "../carousel/carousel";
import { CarouselItem } from "../carouselItem/carouselItem";

const CommentsSection: React.FC = () => {
  const comments = [
    <CardComment
      userName="@dima.schvab"
      content={
        <p>
          Крутая тема, магазин оформили <br className={styles.medium} /> за один
          день. Информации <br className={styles.small} /> для старта хватит,
          чтобы начать торговать, ничего сложного нет. Главное не тупить
        </p>
      }
    />,
    <CardComment
      userName="@vadzim.strakh"
      content={
        <p>
          Спасибо большое за вашу работу. Никогда не думал,{" "}
          <br className={styles.small} /> что за такие деньги можно открыть
          бизнес. Всё очень красиво <br className={styles.large} /> и грамотно
          оформлено. <br className={styles.medium} /> Читая ваши курсы, сразу
          понимаю, <br className={styles.medium} /> что работали профессионалы.{" "}
          <br className={styles.medium} /> Спасибо{" "}
          <br className={styles.small} /> за оперативность
        </p>
      }
    />,
    <CardComment
      userName="@_zgirovsky_"
      content={
        <p>
          Огромное спасибо команде bestep.by за качественный продукт. Все чётко
          соблюдённые условия <br className={styles.medium} />{" "}
          <br className={styles.small} /> и профессиональное отношение.
          Однозначно обращусь <br className={styles.large} /> к ребятам{" "}
          <br className={styles.medium} /> ещё раз, т.к. аналогов их работы{" "}
          <br className={styles.medium} /> пока <br className={styles.small} />{" "}
          не видел
        </p>
      }
    />,
  ];

  return (
    <section className={styles.commentsSection}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.commentsContainer}>
        {comments.map((el, index) => ({ ...el, key: index }))}
      </div>
      <div className={styles.commentsContainerMobile}>
        <Carousel>
          {comments.map((commentEl, index) => {
            return <CarouselItem key={index}>{commentEl}</CarouselItem>;
          })}
        </Carousel>
      </div>
      <button className={styles.button}>
        Смотреть все
        <img src={inst} alt="inst"></img>
      </button>
    </section>
  );
};

export default CommentsSection;
