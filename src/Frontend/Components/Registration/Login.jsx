import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Login.jsx";

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

const initialValues = {
  username: "",
  password: "",
};

function Login() {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage

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
              setDisplayAlert(true)
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('role', data.role);
              console.log(data);
              setMessage("Login successful");
              setDisplayAlert(true)
              // alert("Login successful");
              localStorage.getItem('role') === "Admin"?
              window.location.href = '/Admin/Dashboard':
              window.location.href = '/';
            } else {
              setMessage("Please check the Form/Internet.Signin Failed");
              // alert("Please check the Form/Internet.Signin Failed");
              setDisplayAlert(true)

            }
          })
          .catch(error => {
            // alert("Username password doest match");
                   setMessage("Please check the Form/Internet.Signin Failed");
                   setDisplayAlert(true)

          });
      },
    });










    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setDisplayAlert(false)
      setState({ ...state, open: false });
    };
  
  return (
    <div className="login">
      {displayAlert?
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClick={handleClose}
        message= {message}
        key={vertical + horizontal}
      />:''}

      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <div className="inputContainer">
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
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

        <button type="submit" className="loginButton">Login</button>
        <Box sx={{ width: 500 }}>
  
 
    </Box>
      </form>
    </div>
  );
}

export default Login;
