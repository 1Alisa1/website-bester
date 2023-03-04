import styles from './cardTariff.module.scss';

export interface CardTariffProps {
  title: string;
  content: React.ReactNode;
}

const CardTariff: React.FC<CardTariffProps> = ({ title, content }) => {
  return (
    <div className={styles.cardTariff}>
      <div className={styles.title}>{title}</div>
      {content}
    </div>
  );
};

export default CardTariff;
