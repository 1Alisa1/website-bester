import styles from './coursesSection.module.scss';

export interface CoursesSectionProps {
  title: string;
  children: React.ReactNode;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.coursesSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>{children}</div>
      </div>
    </section>
  );
};

export default CoursesSection;