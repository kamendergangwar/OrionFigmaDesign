import styles from "./informer-container.module.css";

const InformerContainer = ({
  totalEarningsText,
  salesEarningsText,
  percentageEarningsText,
}) => {
  return (
    <div className={styles.informer}>
      <div className={styles.title}>
        <div className={styles.name}>{totalEarningsText}</div>
      </div>
      <div className={styles.value}>
        <div className={styles.amount}>{salesEarningsText}</div>
        <div className={styles.indicator}>
          <img className={styles.arrowUpIcon} alt="" src="../arrow-up1.svg" />
          <div className={styles.percent}>{percentageEarningsText}</div>
        </div>
      </div>
      <div className={styles.detail}>Compared to $21,490 last year</div>
    </div>
  );
};

export default InformerContainer;
