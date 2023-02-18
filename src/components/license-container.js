import styles from "./license-container.module.css";

const LicenseContainer = () => {
  return (
    <div className={styles.bigWidgetBubbleChart}>
      <img className={styles.bgLinesIcon} alt="" src="../bg-lines.svg" />
      <img className={styles.bgLinesIcon1} alt="" src="../bg-lines1.svg" />
      <div className={styles.bubbleChart}>
        <div className={styles.title}>
          {`💸 `}
          <a
            className={styles.purchaseFullLicense}
            href="https://gumroad.com/a/860517491/aTSZV"
            target="_blank"
          >
            <span className={styles.purchaseFullLicense1}>
              Purchase full license
            </span>
          </a>
        </div>
        <img className={styles.bubbleIcon} alt="" src="../bubble.svg" />
        <img className={styles.bubbleIcon1} alt="" src="../bubble1.svg" />
        <img className={styles.bubbleIcon2} alt="" src="../bubble2.svg" />
        <img className={styles.bubbleIcon3} alt="" src="../bubble3.svg" />
        <img className={styles.bubbleIcon4} alt="" src="../bubble4.svg" />
        <img className={styles.bubbleIcon5} alt="" src="../bubble5.svg" />
        <img className={styles.bubbleIcon6} alt="" src="../bubble6.svg" />
        <img className={styles.bubbleIcon7} alt="" src="../bubble7.svg" />
        <img className={styles.bubbleIcon8} alt="" src="../bubble8.svg" />
        <img className={styles.bubbleIcon9} alt="" src="../bubble9.svg" />
        <img className={styles.bubbleIcon10} alt="" src="../bubble10.svg" />
        <img className={styles.bubbleIcon11} alt="" src="../bubble11.svg" />
        <img className={styles.bubbleIcon12} alt="" src="../bubble12.svg" />
        <img className={styles.bubbleIcon13} alt="" src="../bubble13.svg" />
        <img className={styles.bubbleIcon14} alt="" src="../bubble14.svg" />
        <img className={styles.bubbleIcon15} alt="" src="../bubble15.svg" />
        <img className={styles.bubbleIcon16} alt="" src="../bubble16.svg" />
        <img className={styles.bubbleIcon17} alt="" src="../bubble17.svg" />
      </div>
      <div className={styles.investments}>
        <div className={styles.time}>3 month</div>
        <div className={styles.tittle}>Investments</div>
        <div className={styles.value}>$76,644</div>
      </div>
      <div className={styles.design}>
        <div className={styles.time1}>3 month</div>
        <div className={styles.value1}>$32,982</div>
        <div className={styles.title1}>Design</div>
      </div>
      <div className={styles.finance}>
        <div className={styles.value2}>
          <span> $</span>
          <span className={styles.span}>23,657</span>
        </div>
        <div className={styles.title2}>Finance</div>
      </div>
      <div className={styles.business}>
        <div className={styles.value3}>$21,987</div>
        <div className={styles.title3}>Business</div>
      </div>
      <div className={styles.development}>
        <div className={styles.value4}>$31,657</div>
        <div className={styles.title4}>Development</div>
      </div>
    </div>
  );
};

export default LicenseContainer;
