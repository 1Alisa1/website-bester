import styles from './cardTariffContentWrapperCourses.module.scss';

interface CardTariffContentWrapperCoursesProps {
  children: React.ReactNode;
}
const CardTariffContentWrapperCourses: React.FC<CardTariffContentWrapperCoursesProps> = ({children}) => {
  return (
    <div className={styles.cardTariffContentWrapperCourses}>
      {children}
    </div>
  );
}

export default CardTariffContentWrapperCourses;