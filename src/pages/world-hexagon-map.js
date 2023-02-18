import ContainerWidget from "../components/container-widget";
import Header from "../components/header";
import EarningsContainer from "../components/earnings-container";
import MSizeContainer from "../components/m-size-container";
import MapPinContainer from "../components/map-pin-container";
import DataContainer from "../components/data-container";
import styles from "./world-hexagon-map.module.css";

const WorldHexagonMap = () => {
  return (
    <div className={styles.worldHexagonMap}>
      <ContainerWidget />
      <Header
        iconImageUrl="../icon.svg"
        profileImageUrl="../profile.svg"
        optionImageUrl="../option.svg"
        logoImageUrl="../logo1.svg"
      />
      <div className={styles.footer}>
        <div className={styles.bg} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2019</b>
      </div>
      <EarningsContainer iconImageUrl="../icon5.svg" />
      <MSizeContainer
        activeUsers="27"
        progressText="../progress.svg"
        newUsersText="92,980"
        activeUsersCount="Active users"
        propLeft="60px"
        propLeft1="42px"
      />
      <MSizeContainer
        activeUsers="67"
        progressText="../progress1.svg"
        newUsersText="22,652"
        activeUsersCount="New users"
        propLeft="330px"
        propLeft1="0.97px"
      />
      <img className={styles.hexMapIcon} alt="" src="../hex-map.svg" />
      <MapPinContainer
        cityPopulationText="../indicator.svg"
        cityPopulationLabel="Chicago"
        cityPopulationValue="98,320,300"
        propTop="calc(50% - 250px)"
        propRight="1147px"
      />
      <MapPinContainer
        cityPopulationText="../indicator1.svg"
        cityPopulationLabel="Manaus"
        cityPopulationValue="12,320,300"
        propTop="calc(50% - 3px)"
        propRight="1024px"
      />
      <MapPinContainer
        cityPopulationText="../indicator2.svg"
        cityPopulationLabel="Berlin"
        cityPopulationValue="76,541,106"
        propTop="calc(50% - 332px)"
        propRight="692px"
      />
      <MapPinContainer
        cityPopulationText="../indicator3.svg"
        cityPopulationLabel="Giza"
        cityPopulationValue="10,547,980"
        propTop="calc(50% - 116px)"
        propRight="605px"
      />
      <MapPinContainer
        cityPopulationText="../indicator4.svg"
        cityPopulationLabel="Shanghai"
        cityPopulationValue="239,570,110"
        propTop="calc(50% - 184px)"
        propRight="224px"
      />
      <MapPinContainer
        cityPopulationText="../indicator5.svg"
        cityPopulationLabel="Queensland"
        cityPopulationValue="6,097,321"
        propTop="calc(50% + 116px)"
        propRight="113px"
      />
      <div className={styles.footer}>
        <div className={styles.bg} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2022</b>
      </div>
      <div className={styles.amount}>2,431,340</div>
      <div className={styles.title}>
        <div className={styles.name}>All users</div>
        <div className={styles.detail}>
          <b className={styles.detail1}>Detail</b>
          <img className={styles.arowIcon} alt="" src="../arow.svg" />
        </div>
      </div>
    
      <div className={styles.widgetLSizeGlobalStati}>
        <div className={styles.header}>
          <div className={styles.title1}>Sales Figures</div>
          <div className={styles.legend}>
            <div className={styles.shape} />
            <div className={styles.marketingSales}>Sales</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.shape1} />
            <div className={styles.marketingSales}>Users</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.shape2} />
            <div className={styles.marketingSales}>Product</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.shape3} />
            <div className={styles.marketingSales}>Team</div>
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.chart}>
            <div className={styles.yAxis}>
              <div className={styles.k}>1k</div>
              <div className={styles.div}>0</div>
              <div className={styles.div1}>200</div>
              <div className={styles.div2}>400</div>
              <div className={styles.div3}>600</div>
              <div className={styles.div4}>800</div>
            </div>
            <div className={styles.xAxis}>
              <div className={styles.dec}>
                <div className={styles.name1}>Dec</div>
                <img className={styles.shapeIcon} alt="" src="../shape.svg" />
              </div>
              <div className={styles.nov}>
                <div className={styles.name2}>Nov</div>
                <img className={styles.shapeIcon} alt="" src="../shape1.svg" />
              </div>
              <div className={styles.oct}>
                <div className={styles.name3}>Oct</div>
                <img className={styles.shapeIcon2} alt="" src="../shape2.svg" />
              </div>
              <div className={styles.sep}>
                <div className={styles.name4}>Sep</div>
                <img className={styles.shapeIcon3} alt="" src="../shape3.svg" />
              </div>
              <div className={styles.aug}>
                <div className={styles.name5}>Aug</div>
                <img className={styles.shapeIcon} alt="" src="../shape4.svg" />
              </div>
              <div className={styles.jul}>
                <div className={styles.name6}>Jul</div>
                <img className={styles.shapeIcon5} alt="" src="../shape5.svg" />
              </div>
              <div className={styles.jun}>
                <div className={styles.name7}>Jun</div>
                <img className={styles.shapeIcon6} alt="" src="../shape6.svg" />
              </div>
              <div className={styles.may}>
                <div className={styles.name8}>May</div>
                <img className={styles.shapeIcon7} alt="" src="../shape7.svg" />
              </div>
              <div className={styles.apr}>
                <div className={styles.name9}>Apr</div>
                <img className={styles.shapeIcon8} alt="" src="../shape8.svg" />
              </div>
              <div className={styles.mar}>
                <div className={styles.name10}>Mar</div>
                <img className={styles.shapeIcon9} alt="" src="../shape9.svg" />
              </div>
              <div className={styles.feb}>
                <div className={styles.name11}>Feb</div>
                <img
                  className={styles.shapeIcon10}
                  alt=""
                  src="../shape10.svg"
                />
              </div>
              <div className={styles.jan}>
                <div className={styles.name11}>Jan</div>
                <img
                  className={styles.shapeIcon11}
                  alt=""
                  src="../shape11.svg"
                />
              </div>
            </div>
          </div>
          <DataContainer />
        </div>
      </div>
    </div>
  );
};

export default WorldHexagonMap;
