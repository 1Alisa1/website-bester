import { useEffect, useRef } from "react";
import styles from "./cardTariffModalContentWrapper.module.scss";

interface CardTariffModalContentWrapperProps {
  children: React.ReactNode;
  scrollTop: boolean;
}

const CardTariffModalContentWrapper: React.FC<
  CardTariffModalContentWrapperProps
> = ({ children, scrollTop }) => {
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

  return (
    <div ref={divEl} className={styles.cardSTariffModalContentWrapper}>
      {children}
    </div>
  );
};

export default CardTariffModalContentWrapper;
