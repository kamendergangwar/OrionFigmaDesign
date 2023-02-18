import { useMemo } from "react";
import styles from "./map-pin-container.module.css";

const MapPinContainer = ({
  cityPopulationText,
  cityPopulationLabel,
  cityPopulationValue,
  propTop,
  propRight,
}) => {
  const mapPinPinWithNameStyle = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  return (
    <div className={styles.mapPinPinWithName} style={mapPinPinWithNameStyle}>
      <div className={styles.tooltip}>
        <img className={styles.indicatorIcon} alt="" src={cityPopulationText} />
        <div className={styles.info}>
          <div className={styles.title}>{cityPopulationLabel}</div>
          <div className={styles.amount}>{cityPopulationValue}</div>
        </div>
      </div>
      <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
    </div>
  );
};

export default MapPinContainer;
