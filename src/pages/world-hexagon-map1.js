import ContainerWidget from "../components/container-widget";
import Header from "../components/header";
import EarningsContainer from "../components/earnings-container";
import MSizeContainer from "../components/m-size-container";
import MapPinContainer from "../components/map-pin-container";
import styles from "./world-hexagon-map1.module.css";

const WorldHexagonMap1 = () => {
  return (
    <div className={styles.worldHexagonMap}>
      <ContainerWidget />
      <Header
        iconImageUrl="../icon8.svg"
        profileImageUrl="../profile2.svg"
        optionImageUrl="../option2.svg"
        logoImageUrl="../logo2.svg"
      />
      <div className={styles.footer}>
        <div className={styles.bg} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>2019</b>
      </div>
      <EarningsContainer iconImageUrl="../icon9.svg" />
      <MSizeContainer
        activeUsers="27"
        progressText="../progress.svg"
        newUsersText="92,980"
        activeUsersCount="Active users"
      />
      <MSizeContainer
        activeUsers="67"
        progressText="../progress1.svg"
        newUsersText="22,652"
        activeUsersCount="New users"
        propLeft="330px"
        propLeft1="0.97px"
      />
      <img className={styles.hexMapIcon} alt="" src="../hex-map1.svg" />
      <MapPinContainer
        cityPopulationText="../indicator6.svg"
        cityPopulationLabel="Chicago"
        cityPopulationValue="98,320,300"
      />
      <MapPinContainer
        cityPopulationText="../indicator7.svg"
        cityPopulationLabel="Manaus"
        cityPopulationValue="12,320,300"
        propTop="calc(50% - 3px)"
        propRight="1024px"
      />
      <MapPinContainer
        cityPopulationText="../indicator8.svg"
        cityPopulationLabel="Berlin"
        cityPopulationValue="76,541,106"
        propTop="calc(50% - 332px)"
        propRight="692px"
      />
      <MapPinContainer
        cityPopulationText="../indicator9.svg"
        cityPopulationLabel="Giza"
        cityPopulationValue="10,547,980"
        propTop="calc(50% - 116px)"
        propRight="605px"
      />
      <MapPinContainer
        cityPopulationText="../indicator10.svg"
        cityPopulationLabel="Shanghai"
        cityPopulationValue="239,570,110"
        propTop="calc(50% - 184px)"
        propRight="224px"
      />
      <MapPinContainer
        cityPopulationText="../indicator11.svg"
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
     
    </div>
  );
};

export default WorldHexagonMap1;
