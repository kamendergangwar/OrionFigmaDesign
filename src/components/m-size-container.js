import { useMemo } from "react";
import styles from "./m-size-container.module.css";

const MSizeContainer = ({
  activeUsers,
  progressText,
  newUsersText,
  activeUsersCount,
  propLeft,
  propLeft1,
}) => {
  const widgetMSizeBigCircleCStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const progressIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={styles.widgetMSizeBigCircleC}
      style={widgetMSizeBigCircleCStyle}
    >
      <div className={styles.chart}>
        <div className={styles.percent}>
          <span className={styles.span}>{activeUsers}</span>%
        </div>
        <img className={styles.backgroundIcon} alt="" src="../background.svg" />
        <img
          className={styles.progressIcon}
          alt=""
          src={progressText}
          style={progressIconStyle}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.amount}>{newUsersText}</div>
        <div className={styles.detail}>{activeUsersCount}</div>
      </div>
    </div>
  );
};

export default MSizeContainer;
