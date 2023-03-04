import styles from './cardTariffContentWrapperWeb.module.scss';

interface CardTariffContentWrapperWebProps {
  children: React.ReactNode;
}
const CardTariffContentWrapperWeb: React.FC<CardTariffContentWrapperWebProps> = ({children}) => {
  return (
    <div className={styles.cardTariffContentWrapperWeb}>
      {children}
    </div>
  );
}

export default CardTariffContentWrapperWeb;
