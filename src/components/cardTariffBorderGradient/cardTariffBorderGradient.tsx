import styles from './cardTariffBorderGradient.module.scss';

export interface CardTariffBorderGradientProps {
  children: React.ReactNode;
}

const CardTariffBorderGradient: React.FC<CardTariffBorderGradientProps> = ({
  children,
}) => {
  return (
    <div className={styles.cardTariffBorderGradient}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <p>Лучший выбор</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardTariffBorderGradient;
