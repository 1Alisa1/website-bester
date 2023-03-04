import styles from './tariffsSection.module.scss';

export interface TariffsSectionProps {
  title: string;
  children: React.ReactNode;
}

const TariffsSection: React.FC<TariffsSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.tariffsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>{children}</div>
      </div>
    </section>
  );
};

export default TariffsSection;