import styles from './cardTariffContent.module.scss';

export interface CardTariffContentProps {
  description: React.ReactNode;
  price: string;
  onButtonBuy: () => void;
  onButtonMore: () => void;
}

const CardTariffContent: React.FC<CardTariffContentProps> = ({
  description,
  price,
  onButtonBuy,
  onButtonMore
}) => {

  return (
    <div className={styles.content}>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.price}>
          {price}
          <span>BYN</span>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.btnBuy} onClick={onButtonBuy}>
            Купить
          </button>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.btnMore} onClick={onButtonMore}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTariffContent;