import styles from './cardTariffBorder.module.scss';

export interface CardTariffBorderProps {
  icon?: string;
  children: React.ReactNode;
}

const CardTariffBorder: React.FC<CardTariffBorderProps> = ({ children, icon }) => {
  return (
    <div className={styles.cardTariffBorder}>
      {icon && 
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={icon} alt="Crown"></img>
        </div>}
      {children}
    </div>
  );
};

export default CardTariffBorder;
