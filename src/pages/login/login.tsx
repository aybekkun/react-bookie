import { Https, Phone } from "@material-ui/icons";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Preloader from "../../components/preloader/preloader";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchLogin } from "../../store/thunks/loginThunk";
import styles from "./login.module.scss";

export type valuesErrorsType = { phone: string; password: string };

const LogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId, isUserLogin, isLoading } = useAppSelector(
    (state) => state.loginReducer
  );

  const pathToRegistrationPage = () => {
    navigate("/registration");
  };

  useEffect(() => {
    if (!isUserLogin) {
      navigate("/login");
    } else if (userId && isUserLogin) {
      navigate("/");
    }
  }, [isUserLogin, userId]);

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  });

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginInner}>
        <h2>Login</h2>

        <Formik
          initialValues={{ phone: "+998", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            dispatch(
              fetchLogin({ phone: values.phone, password: values.password })
            )
          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <p>Telefon nomerin`iz</p>
              <div className={styles.inputContainer}>
                <Phone />
                <input
                  type="tel"
                  name="phone"
                  placeholder="998 --- --- ----"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
              {errors.phone && touched.phone}

              <p>Parolin`iz</p>
              <div className={styles.inputContainer}>
                <Https />
                <input
                  type="password"
                  name="password"
                  placeholder="Parolin`iz"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              {errors.password && touched.password}

              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>
          )}
        </Formik>
        <p onClick={pathToRegistrationPage} className={styles.btnReg}>
          Registraciya
        </p>
      </div>
    </div>
  );
};
export default LogIn;
