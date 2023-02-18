import styles from "./header.module.css";

const Header = ({
  iconImageUrl,
  profileImageUrl,
  optionImageUrl,
  logoImageUrl,
}) => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.background} />
      <div className={styles.search}>
        <div className={styles.input} />
        <img className={styles.icon} alt="" src={iconImageUrl} />
      </div>
      <div className={styles.tab} />
      <div className={styles.menu}>
        <div className={styles.label}>Statistics</div>
        <div className={styles.label1}>Overview</div>
        <div className={styles.label}>Dashboard</div>
        <div className={styles.label}>Analytics</div>
      </div>
      <img className={styles.profileIcon} alt="" src={profileImageUrl} />
      <img className={styles.optionIcon} alt="" src={optionImageUrl} />
      <div className={styles.logo}>
        <img className={styles.logoIcon} alt="" src={logoImageUrl} />
        <div className={styles.orion}>ORION</div>
      </div>
    </div>
  );
};

export default Header;
