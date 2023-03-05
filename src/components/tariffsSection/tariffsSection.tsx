import styles from './tariffsSection.module.scss';

export interface TariffsSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const TariffsSection: React.FC<TariffsSectionProps> = ({ title, id, children }) => {
  return (
    <section className={styles.tariffsSection} id={id}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>{children}</div>
      </div>
    </section>
  );
};

export default TariffsSection;