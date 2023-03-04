import styles from './list.module.scss';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div className={styles.list}>
      {children}
    </div>
  );
};

export default List;