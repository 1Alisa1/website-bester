import styles from './iconsGroup.module.scss';
import viber from '../../img/viber.svg';
import inst from '../../img/inst.svg';
import telegram from '../../img/telegram.svg';

interface IconsGroupProps {
  iconClass: string;
}

const IconsGroup: React.FC<IconsGroupProps> = ({ iconClass }) => {
  
  return (
    <div className={styles.iconsWrapper}>
      <a href="#!" className={`${styles.icon} ${iconClass}`} >
        <img src={viber} alt="Viber"></img>
      </a>
      <a href="#!" className={`${styles.icon} ${iconClass}`} >
        <img src={inst} alt="Instagram"></img>
      </a>
      <a href="#!" className={`${styles.icon} ${iconClass}`} >
        <img src={telegram} alt="Telegram"></img>
      </a>
    </div>
  );
};

export default IconsGroup;
