import { Https, Phone } from "@material-ui/icons";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Preloader from "../../components/preloader/preloader";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRegistration } from "./../../store/thunks/loginThunk";
import styles from "./registration.module.scss";

export type valuesErrorsType = {
  name: string;
  phone: string;
  password: string;
};

const Registration = () => {
  const { isLoading, userId } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  const pathToLoginPage = () => {
    navigate("/login");
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Должно быть строкой")
      .min(2, "Короткий")
      .max(20, "Длинный")
      .required("Обязательно"),
    phone: yup
      .string()
      .typeError("Должно быть строкой")
      .min(13, "Короткий")
      .max(14, "Длинный")
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
    <div className={styles.registrationPage}>
      <div className={styles.registrationInner}>
        <h2>Registraciya</h2>

        <Formik
          initialValues={{ name: "", phone: "+998", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            dispatch(
              fetchRegistration({
                name: values.name,
                phone: values.phone,
                password: values.password,
              })
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
              <p>Atin'iz</p>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  placeholder="Atin'iz"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              {errors.name && touched.name && errors.name}

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
              {errors.phone && touched.phone && errors.phone}

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
              {errors.password && touched.password && errors.password}

              <button type="submit" className={styles.button}>
                Registraciya
              </button>

              <p onClick={pathToLoginPage} className={styles.btnLogin}>
                login
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Registration;
