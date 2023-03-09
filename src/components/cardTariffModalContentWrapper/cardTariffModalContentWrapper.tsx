import styles from './cardTariffModalContentWrapper.module.scss';

interface CardTariffModalContentWrapperProps {
  children: React.ReactNode;
}

const CardTariffModalContentWrapper: React.FC<CardTariffModalContentWrapperProps> = ({
  children,
}) => {
  return <div className={styles.cardSTariffModalContentWrapper}>{children}</div>;
};

export default CardTariffModalContentWrapper;
