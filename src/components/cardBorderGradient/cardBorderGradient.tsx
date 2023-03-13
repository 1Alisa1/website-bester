import styles from './cardBorderGradient.module.scss';

export interface CardBorderGradientProps {
  children: React.ReactNode;
  isIcon: boolean;
}

const CardBorderGradient: React.FC<CardBorderGradientProps> = ({
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

export default CardBorderGradient;
