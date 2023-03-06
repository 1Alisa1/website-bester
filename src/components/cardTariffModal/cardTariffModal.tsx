import styles from './cardTariffModal.module.scss';

export interface CardTariffModalProps {
  title: React.ReactNode;
  description: React.ReactNode;
  price: string;
  onButtonBuy: () => void;
}

const CardTariffModal: React.FC<CardTariffModalProps> = ({ title, description, price, onButtonBuy }) => {
  return (
    <div className={styles.cardTariffModal}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
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
      </div>
    </div>
  );
};

export default CardTariffModal;