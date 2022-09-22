import { Instagram, Phone, Telegram, YouTube } from "@material-ui/icons";
import { Logout } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LOGIN_PAGE, REGISTRATION_PAGE } from "../../routs/Routs";
import { fetchLogout } from './../../store/thunks/loginThunk';
import styles from "./headerInfo.module.scss";

const HeaderInfo = () => {
  const { isUserLogin } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(fetchLogout());
  };

  return (
    <div className={`${styles.headerInfo} ${styles.container}`}>
      <a href="tel:933625744" className={styles.headerContact}>
        <Phone />
        <span>+998 93 362 57 44</span>
      </a>

      <div className={styles.headerRight}>
        <div className={styles.headerSocial}>
          <a
            href="https://instagram.com/bookie_karakalpak?utm_medium=copy_link"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCrb_94b-JGhG0X43CUx6CyA"
            target="_blank"
          >
            <YouTube />
          </a>
          <a href="https://t.me/bookie_nks" target="_blank">
            <Telegram />
          </a>
        </div>

        {isUserLogin ? (
          <div className={styles.logout} onClick={onLogOut}>
            <Logout /> Shig'iw
          </div>
        ) : (
          <div className={styles.headerAuth}>
            <NavLink to={LOGIN_PAGE}>
              <span>Kiriw</span>
            </NavLink>
            /
            <NavLink to={REGISTRATION_PAGE}>
              <span>Registraciya</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderInfo;
