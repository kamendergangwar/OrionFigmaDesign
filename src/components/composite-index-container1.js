import InformerContainer from "../components/informer-container";
import styles from "./composite-index-container1.module.css";

const CompositeIndexContainer1 = () => {
  return (
    <div className={styles.widgetMSizeOmpositeIn}>
      <InformerContainer
        totalEarningsText="Total earning"
        salesEarningsText="$12,875"
        percentageEarningsText="10%"
      />
      <img className={styles.dividerIcon} alt="" src="../divider.svg" />
      <InformerContainer
        totalEarningsText="Sales"
        salesEarningsText="$43,123"
        percentageEarningsText="12%"
      />
    </div>
  );
};

export default CompositeIndexContainer1;
