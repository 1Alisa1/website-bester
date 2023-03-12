import styles from "./toolTip.module.scss";

interface ToolTipProps {
  children: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ children }) => {
  return <div className={styles.toolTip}>{children}</div>;
};

export default ToolTip;
