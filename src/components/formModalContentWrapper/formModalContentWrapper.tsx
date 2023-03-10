import { useEffect, useRef } from 'react';
import styles from './formModalContentWrapper.module.scss';

interface FormModalContentWrapperProps {
  children: React.ReactNode;
  scrollTop: boolean;
}

const FormModalContentWrapper: React.FC<FormModalContentWrapperProps> = ({
  children,
  scrollTop
}) => {
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTop) {
      setTimeout(() => {
        if (!divEl.current) {
          return;
        }
        divEl.current.scrollTop = 0;
      }, 300);
    }
  }, [scrollTop]);
  
  return <div ref={divEl} className={styles.formModalContentWrapper}>{children}</div>;
};

export default FormModalContentWrapper;