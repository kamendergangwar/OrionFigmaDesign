import LicenseContainer from "../components/license-container";
import Header from "../components/header";
import CompositeIndexContainer1 from "../components/composite-index-container1";
import styles from "./bubble-chart.module.css";

const BubbleChart = () => {
  return (
    <div className={styles.bubbleChart}>
      <div className={styles.background} />
      <LicenseContainer />
      <div className={styles.title}>Design faster</div>
      <img className={styles.bubbleIcon} alt="" src="../bubble18.svg" />
      <img className={styles.bubbleIcon1} alt="" src="../bubble19.svg" />
      <img className={styles.bubbleIcon2} alt="" src="../bubble20.svg" />
      <img className={styles.bubbleIcon3} alt="" src="../bubble21.svg" />
      <img className={styles.bubbleIcon4} alt="" src="../bubble22.svg" />
      <b className={styles.timeline}>Timeline</b>
      <div className={styles.timeline1}>
        <div className={styles.backgroundElement} />
        <div className={styles.dateRangePicker}>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1W</div>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1M</div>
          </div>
          <div className={styles.timePeriod2}>
            <div className={styles.hover} />
            <b className={styles.period2}>3M</b>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1Y</div>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>ALL</div>
          </div>
        </div>
      </div>
      <Header
        iconImageUrl="../icon.svg"
        profileImageUrl="../profile.svg"
        optionImageUrl="../option.svg"
        logoImageUrl="../logo.svg"
      />
      <div className={styles.footer}>
        <div className={styles.bg} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2022</b>
      </div>
      <div className={styles.informerTrendGoods}>
        <div className={styles.value}>204</div>
        <b className={styles.title1}>Trend goods</b>
        <img className={styles.icon} alt="" src="../icon1.svg" />
      </div>
      <div className={styles.informerTrendGoods1}>
        <div className={styles.value1}>65,540</div>
        <b className={styles.title2}>Shopping views</b>
        <img className={styles.icon} alt="" src="../icon2.svg" />
      </div>
      <div className={styles.informerTrendGoods2}>
        <div className={styles.value2}>324</div>
        <b className={styles.title3}>Store dynamics</b>
        <img className={styles.icon} alt="" src="../icon3.svg" />
      </div>
      <img className={styles.panelGroupIcon} alt="" src="../panel-group.svg" />
      <div className={styles.widgetMSizeCombinedCir}>
        <div className={styles.graph}>
          <img
            className={styles.chartDoubleBigCircleChar}
            alt=""
            src="../chart--double-big-circle-chart.svg"
          />
          <div className={styles.info}>
            <div className={styles.title4}>
              <div className={styles.name}>Total earning</div>
            </div>
            <div className={styles.value3}>
              <div className={styles.amount}>$12,875</div>
              <div className={styles.indicator}>
                <img
                  className={styles.arrowUpIcon}
                  alt=""
                  src="../arrow-up.svg"
                />
                <div className={styles.percent}>2%</div>
              </div>
            </div>
            <div className={styles.detail}>Compared to $21,504 last year</div>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.name1}>Presentation</div>
            <div className={styles.amount1}>862</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon} alt="" src="../chart.svg" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.name1}>Development</div>
            <div className={styles.amount1}>753</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon1} alt="" src="../chart1.svg" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.name1}>Research</div>
            <div className={styles.amount1}>553</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon2} alt="" src="../chart2.svg" />
            </div>
          </div>
        </div>
      </div>
      <CompositeIndexContainer1 />
      <div className={styles.tableIndicatorTable}>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name4}>Travel</div>
            <div className={styles.amount4}>760</div>
            <div className={styles.summary1}>2,540</div>
          </div>
          <div className={styles.status}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up3.svg" />
            <img
              className={styles.arrowUpIcon2}
              alt=""
              src="../arrow-up4.svg"
            />
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name4}>Presentation</div>
            <div className={styles.amount4}>650</div>
            <div className={styles.summary1}>2,304</div>
          </div>
          <div className={styles.status}>
            <img
              className={styles.arrowUpIcon2}
              alt=""
              src="../arrow-up3.svg"
            />
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up4.svg" />
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name4}>Business</div>
            <div className={styles.amount4}>612</div>
            <div className={styles.summary1}>2,140</div>
          </div>
          <div className={styles.status}>
            <img className={styles.arrowUpIcon} alt="" src="../arrow-up3.svg" />
            <img
              className={styles.arrowUpIcon2}
              alt=""
              src="../arrow-up4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
