import styles from "./data-container.module.css";

const DataContainer = () => {
  return (
    <div className={styles.data}>
      <img className={styles.bubbleIcon} alt="" src="../bubble23.svg" />
      <img className={styles.bubbleIcon1} alt="" src="../bubble24.svg" />
      <img className={styles.bubbleIcon2} alt="" src="../bubble25.svg" />
      <img className={styles.bubbleIcon3} alt="" src="../bubble26.svg" />
      <img className={styles.bubbleIcon4} alt="" src="../bubble27.svg" />
      <img className={styles.bubbleIcon5} alt="" src="../bubble28.svg" />
      <img className={styles.bubbleIcon6} alt="" src="../bubble29.svg" />
      <img className={styles.bubbleIcon7} alt="" src="../bubble30.svg" />
      <img className={styles.bubbleIcon8} alt="" src="../bubble31.svg" />
      <img className={styles.bubbleIcon9} alt="" src="../bubble32.svg" />
      <img className={styles.bubbleIcon10} alt="" src="../bubble33.svg" />
      <div className={styles.bubble}>
        <img className={styles.bubbleIcon11} alt="" src="../bubble34.svg" />
        <div className={styles.value}>$27632</div>
      </div>
      <div className={styles.bubble1}>
        <img className={styles.bubbleIcon12} alt="" src="../bubble35.svg" />
        <div className={styles.value1}>$27632</div>
      </div>
      <div className={styles.bubble2}>
        <img className={styles.bubbleIcon13} alt="" src="../bubble36.svg" />
        <div className={styles.value2}>$27632</div>
        <div className={styles.text}>August</div>
      </div>
    </div>
  );
};

export default DataContainer;
