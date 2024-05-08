import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Login.jsx";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors.password);
  return (
    <div class="login">
      <form onSubmit={handleSubmit}>
        <label for="chk" aria-hidden="true">
          Login
        </label>
        <div className="inputContainer">
          <input
            type="email"
            name="email1"
            placeholder="Email"
            value={values.email1}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="inputContainer">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          {errors.password && touched.password ? (
            <p className="form-error login-error">{errors.password}</p>
          ) : null}
        </div>
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;
