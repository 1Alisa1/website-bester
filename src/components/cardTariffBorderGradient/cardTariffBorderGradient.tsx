import styles from './cardTariffBorderGradient.module.scss';

export interface CardTariffBorderGradientProps {
  children: React.ReactNode;
  isIcon: boolean;
}

const CardTariffBorderGradient: React.FC<CardTariffBorderGradientProps> = ({
  children,
  isIcon,
}) => {
  return (
    <div className={styles.cardTariffBorderGradient}>
      {isIcon && (
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <p>Лучший выбор</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default CardTariffBorderGradient;
