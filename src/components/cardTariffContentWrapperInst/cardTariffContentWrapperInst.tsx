import styles from './cardTariffContentWrapperInst.module.scss';

interface CardTariffContentWrapperInstProps {
  children: React.ReactNode;
}
const CardTariffContentWrapperInst: React.FC<CardTariffContentWrapperInstProps> = ({children}) => {
  return (
    <div className={styles.cardTariffContentWrapperInst}>
      {children}
    </div>
  );
}

export default CardTariffContentWrapperInst;