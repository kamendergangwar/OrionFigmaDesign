import styles from "./earnings-container.module.css";

const EarningsContainer = ({ iconImageUrl }) => {
  return (
    <div className={styles.sideIndicators}>
      <div className={styles.informerInfoWithIcon}>
        <img className={styles.icon} alt="" src={iconImageUrl} />
        <div className={styles.info}>
          <div className={styles.title}>Total earning</div>
          <div className={styles.amount}>
            <div className={styles.value}>540,549</div>
            <div className={styles.indicator}>
              <img className={styles.upIcon} alt="" src="../up.svg" />
              <div className={styles.div}>145</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.informerInfoWithIcon}>
        <img className={styles.icon} alt="" src="../icon6.svg" />
        <div className={styles.info}>
          <div className={styles.title}>Sales</div>
          <div className={styles.amount}>
            <div className={styles.value}>1,205,677</div>
            <div className={styles.indicator}>
              <img className={styles.upIcon} alt="" src="../up.svg" />
              <div className={styles.div}>145</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.informerInfoWithIcon}>
        <img className={styles.icon} alt="" src="../icon7.svg" />
        <div className={styles.info}>
          <div className={styles.title}>Purchase</div>
          <div className={styles.amount}>
            <div className={styles.value}>48,430,039</div>
            <div className={styles.indicator}>
              <img className={styles.upIcon} alt="" src="../up.svg" />
              <div className={styles.div}>145</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsContainer;
