import React, { useEffect, useState } from "react";
import { FormikErrors, useFormik } from "formik";
import Link from "@mui/material/Link";
import {
  FormGroup,
  TextField,
  Grid,
  FormLabel,
  FormControl,
  Button,
} from "@material-ui/core";

import styles from "./registration.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registration } from "../../store/loginSlice";
import Preloader from "../preloader/preloader";
import { useNavigate } from "react-router-dom";

export type valuesErrorsType = {
  name: string;
  phone: string;
  password: string;
};

const Registration = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { isLoading } = useAppSelector((state) => state.loginReducer);
  const { user } = useAppSelector((state) => state.loginReducer);
  const { error } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const pathToLoginPage = () => {
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(registration(values.name, values.phone, values.password));
    },
    validate: (values) => {
      const errors: FormikErrors<valuesErrorsType> = {};

      if (!values.name) {
        errors.name = "Enter your login";
      } else if (!values.password) {
        errors.password = "password is required";
      } else if (!/^[0-9]+$/.test(values.phone)) {
        errors.phone = "phone is required";
      }
      return errors;
    },
  });

  return (
    <>
      {isLoading ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className={styles.registrationPage}>
          <div className={styles.registrationInner}>
            <h2>Registraciya</h2>

            <form onSubmit={formik.handleSubmit}>
              <p>Atin'iz</p>
              <div className={styles.inputContainer}>
                <input id="name" {...formik.getFieldProps("name")} />
              </div>
              {formik.touched.name && formik.dirty && formik.errors.name && (
                <div className={styles.errorField}>{formik.errors.name}</div>
              )}

              <p>Tel nomerin'iz</p>
              <div className={styles.inputContainer}>
                <input id="phone" {...formik.getFieldProps("phone")} />
              </div>
              {formik.touched.phone && formik.dirty && formik.errors.phone && (
                <div className={styles.errorField}>{formik.errors.phone}</div>
              )}

              <p>Parol</p>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password &&
                formik.dirty &&
                formik.errors.password && (
                  <div className={styles.errorField}>
                    {formik.errors.password}
                  </div>
                )}

              <button type="submit" className={styles.button}>
                Registraciya
              </button>
              <p onClick={pathToLoginPage} className={styles.btnLogin}>login</p>
              {error ? <div>{error}</div> : ""}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Registration;
