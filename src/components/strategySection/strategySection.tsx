import styles from './strategySection.module.scss';
import image from '../../img/second-img.png';
import imageSmall from '../../img/second-img-small.svg';

const StrategySection: React.FC = () => {
  return (
    <section className={styles.strategy}>
      <p className={styles.description}>
        Чтобы заняться товарным <br /> бизнесом, достаточно <br /><span>100$</span> в кармане
      </p>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="strategy"></img>
        <img className={styles.imgSmall} src={imageSmall} alt="strategy"></img>
      </div>
      <ul>
        <li className={styles.blackItem}>
          <p className={styles.firstItem}>01</p>
          <p>Покупай магазин</p>
        </li>
        <li className={styles.purpleItem}>
          <p className={styles.firstItem}>02</p>
          <p>Запускай рекламу</p>
        </li>
        <li className={styles.orangeItem}>
          <p className={styles.firstItem}>03</p>
          <p>Зарабатывай</p>
        </li>
      </ul>
    </section>
  );
};

export default StrategySection;
