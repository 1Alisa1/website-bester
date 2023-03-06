import styles from './list.module.scss';

interface ListProps {
  title?: string;
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ title, children }) => {
  return (
    <div className={styles.list}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  );
};

export default List;
