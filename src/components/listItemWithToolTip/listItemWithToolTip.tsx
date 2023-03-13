import styles from "./listItemWithToolTip.module.scss";
import { useState } from "react";
import ToolTip from "../toolTip/toolTip";
import prompt from "../../img/prompt.svg";
import ListItem from "../listItem/listItem";
import CloseImg from "../closeImg/closeImg";

interface ListItemToolTipProps {
  children: React.ReactNode;
  toolTipContent: React.ReactNode;
  setToolTipModalActive: (value: React.SetStateAction<boolean>) => void;
  setToolTipModalContent: (
    value: React.SetStateAction<React.ReactNode>
  ) => void;
}

const ListItemWithToolTip: React.FC<ListItemToolTipProps> = ({
  children,
  toolTipContent,
  setToolTipModalActive: setModalActive,
  setToolTipModalContent: setModalContent,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <ListItem
      text={
        <>
          <div className={styles.wrapper + " " + styles.notMobile}>
            {children}
            <div className={styles.toolTipContainer}>
              <div
                className={
                  styles.toolTipWrapper +
                  " " +
                  (showToolTip ? styles.active : "")
                }
              >
                <ToolTip>{toolTipContent}</ToolTip>
              </div>
            </div>
            <div
              className={styles.prompt}
              onMouseEnter={() => setShowToolTip(true)}
              onMouseLeave={() => setShowToolTip(false)}
            >
              <img src={prompt} alt="prompt"></img>
            </div>
          </div>
          <div
            className={styles.wrapper + " " + styles.mobile}
            onClick={() => {
              setModalContent(
                <ToolTip>
                  <div className={styles.closeImg}>
                    <CloseImg setModalActive={setModalActive} />
                  </div>

                  {toolTipContent}
                </ToolTip>
              );
              setModalActive(true);
            }}
          >
            {children}
            <div className={styles.prompt}>
              <img src={prompt} alt="prompt"></img>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ListItemWithToolTip;
