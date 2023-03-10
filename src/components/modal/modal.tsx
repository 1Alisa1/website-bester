import Portal from '../portal/portal';
import styles from './modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
  zIndex: string;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children, zIndex }) => {
  return (
    <Portal wrapperElementId="modal-root">
      <div
        className={`${styles.modalOverlay} ${(active ? styles.active : '')}`}
        style={{ zIndex: zIndex }}
        onClick={() => setActive(false)}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;