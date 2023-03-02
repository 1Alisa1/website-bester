import styles from './cardComment.module.scss';
import userCircle from '../../img/UserCircle.svg';

interface CardCommentProps {
  userName: string;
  content: React.ReactNode;
}

const CardComment: React.FC<CardCommentProps> = ({userName, content}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img}>
        <img src={userCircle} alt='userCircle'></img>
      </div>
      <div className={styles.userName}>{userName}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default CardComment;
