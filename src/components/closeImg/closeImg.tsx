import styles from './closeImg.module.scss';
import closeImg from '../../img/close.svg';

interface CloseImgProps {
  setModalActive: (value: React.SetStateAction<boolean>) => void;
}

const CloseImg: React.FC<CloseImgProps> = ({setModalActive}) => {
  return (
    <div className={styles.img} onClick={() => setModalActive(false)}>
      <img src={closeImg} alt="x"></img>
    </div>
  );
}

export default CloseImg;