import { Favorite, WatchLater } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { FAVORITES, LASTEST } from "./../../routs/Routs";
//@ts-ignore
import styles from "./headerNavbar.module.scss";
import SearchComponent from "./search";

const HeaderNavbar = () => {
  return (
    <div className={`${styles.navbarBg} ${styles.container}`}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <span>Bookie.uz</span>
          </NavLink>
        </div>

        <SearchComponent />

        <div className={styles.icons}>
          <NavLink to={FAVORITES}>
            <Favorite />
          </NavLink>
          <NavLink to={LASTEST}>
            <WatchLater />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
