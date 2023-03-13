import styles from './listItem.module.scss';
import check from '../../img/check.svg';

interface ListItemProps {
  text: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, className }) => {

  return (
      <div className={styles.listItemWrapper + ' ' + className}>
        <img className={styles.check} src={check} alt="check"></img>
        {text}
      </div>
  );
};

export default ListItem;
