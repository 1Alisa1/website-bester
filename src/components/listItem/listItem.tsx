import styles from './listItem.module.scss';
import check from '../../img/check.svg';
import ToolTip from '../toolTip/toolTip';
import circle from '../../img/circle.svg';

interface ListItemProps {
  text: React.ReactNode;
  prompt?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, prompt }) => {
  return (
    <div className={styles.listItemWrapper}>
      <img className={styles.check} src={check} alt="check"></img>
      {text}
      {prompt && (
        <ToolTip
          text={
            <ul>
              <li>
                <img src={circle} alt="circle"></img>
                <p className={styles.text}>
                  13 ответов <br className={styles.medium} /> на возражение “дорого”
                </p>
              </li>
              <li>
                <img src={circle} alt="circle"></img>
                <p className={styles.text}>
                  Чек-лист продажника <br className={styles.medium} /> в direct
                </p>
              </li>
              <li>
                <img src={circle} alt="circle"></img>
                <p className={styles.text}>Всё про таргет</p>
              </li>
            </ul>
          }
        >
          <div className={styles.prompt}>
            <img src={prompt} alt="prompt"></img>
          </div>
        </ToolTip>
      )}
    </div>
  );
};

export default ListItem;
