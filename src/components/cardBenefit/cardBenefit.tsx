import styles from './cardBenefit.module.scss';

interface CardBenefitProps {
  icon: string;
  title: string;
  description: React.ReactNode;
  gradient: string;
}

const CardBenefit: React.FC<CardBenefitProps> = ({
  icon,
  title,
  description,
  gradient,
}) => {
  return (
    <div className={styles.card} style={{ backgroundImage: gradient }}>
      <div className={styles.icon}>
        <img src={icon} alt="icon"></img>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default CardBenefit;
