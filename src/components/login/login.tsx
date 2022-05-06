import { Https, Phone } from "@material-ui/icons";
import { FormikErrors, useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { login } from "../../store/slices/loginSlice";
import Preloader from "../preloader/preloader";
//@ts-ignore
import styles from "./login.module.scss";


export type valuesErrorsType = { phone: string; password: string };

const LogIn = () => {
  const { isLoading } = useAppSelector((state) => state.loginReducer);
  const { isUserLogin } = useAppSelector((state) => state.loginReducer);
  const { user } = useAppSelector((state) => state.loginReducer);
  const { error } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pathToRegistrationPage = () => {
    navigate("/registration");
  };
  useEffect(() => {
    if (!isUserLogin) {
      navigate("/login");
    } else if (user && isUserLogin) {
      navigate("/");
    }
  }, [isUserLogin, user]);

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values.phone, values.password));
    },

    validate: (values) => {
      const errors: FormikErrors<valuesErrorsType> = {};
      if (!/^[0-9]+$/.test(values.phone)) {
        errors.phone = "Phone is required";
      } else if (!values.password) {
        errors.password = "password is required";
      }
      return errors;
    },
  });

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.loginPage}>
          <div className={styles.loginInner}>
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
              <p>Telefon nomerin`iz</p>
              <div className={styles.inputContainer}>
                <Phone />
                <input
                  placeholder="998 --- --- ----"
                  {...formik.getFieldProps("phone")}
                />
              </div>

              {formik.errors.phone && (
                <div className={styles.errorField}>{formik.errors.phone}</div>
              )}
              <p>Parolin`iz</p>
              <div className={styles.inputContainer}>
                <Https />
                <input
                  type="password"
                  placeholder="Parolin`iz"
                  {...formik.getFieldProps("password")}
                />
              </div>

              {formik.errors.password && (
                <div className={styles.errorField}>
                  {formik.errors.password}
                </div>
              )}
              <button type="submit" className={styles.button}>
                Login
              </button>
              <p onClick={pathToRegistrationPage} className={styles.btnReg}>
                Registraciya
              </p>
              {error ? <div>{error}</div> : ""}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default LogIn;
