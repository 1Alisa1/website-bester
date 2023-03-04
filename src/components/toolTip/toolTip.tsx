import { useState } from 'react';
import styles from './toolTip.module.scss';

interface ToolTipProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    setShowToolTip(false);
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
      </div>
      <div
        style={{ opacity: showToolTip ? '1' : '0' }}
        className={styles.toolTip}
      >
        {text}
      </div>
    </div>
  );
};

export default ToolTip;
