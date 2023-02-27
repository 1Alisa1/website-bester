import styles from './cardServices.module.scss';

interface CardServicesProps {
  title: string;
  description: React.ReactNode;
  onButtonClick: () => void;
}

const CardServices: React.FC<CardServicesProps> = ({ title, description, onButtonClick }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.description}>{description}</div>
        <button className={styles.button} onClick={onButtonClick}>Выбрать</button>
    </div>
  );
};

export default CardServices;
