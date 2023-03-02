import styles from './carouselItem.module.scss';

export interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

export { CarouselItem };
