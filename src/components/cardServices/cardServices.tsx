import styles from './cardServices.module.scss';
import { HashLink } from 'react-router-hash-link';

interface CardServicesProps {
  title: string;
  description: React.ReactNode;
  redirectUrl: string;
}

const CardServices: React.FC<CardServicesProps> = ({
  title,
  description,
  redirectUrl,
}) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.description}>{description}</div>
      <div className={styles.buttonWrapper}>
        <HashLink to={redirectUrl}>
          <button className={styles.button}>
            Выбрать
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default CardServices;
