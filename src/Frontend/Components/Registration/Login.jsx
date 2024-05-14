import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Login.jsx";

const initialValues = {
  username: "",
  password: "",
};

function Login() {
  const [message, setMessage] = useState(""); // Declare message and setMessage

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        const apiUrl = 'http://localhost:3333/Hospital/signin';
        const data = values;

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };

        fetch(apiUrl, requestOptions)
          .then(response => {
            if (!response.ok) {
              console.log("Username or Password does not match")
            }
            return response.json();
          })
          .then(data => {
            setMessage(data.message);
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      },
    });

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <div className="inputContainer">
          <input
            type="text"
            name="username"
            placeholder="Email"
            value={values.username}
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
        <div className="errormessage" style={{textAlign:'center',color:'red'}}>
          <p>{message}</p>
        </div>

        <button type="submit" className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;
