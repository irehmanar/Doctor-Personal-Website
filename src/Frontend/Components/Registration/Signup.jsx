import React, { useState } from "react";
import { useFormik } from 'formik'
import './Login.css'
import { signUpSchema } from './schemas/Signup.jsx'
import Login from './Login.jsx'
import { signUp } from '../../../Services/SignUp'; // Adjust the import path as necessary
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

const Signup = () => {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // Define your initial form values here
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: signUpSchema,
      onSubmit: async (values, { setSubmitting, setErrors }) => {
        try {
          const data = { username: values.name, email: values.email, password: values.password };
          const response = await signUp(data);
          console.log("Sign up successful!Please verify your Email.Check Inbox")
          setMessage("Sign up successful!Please verify your Email.Check Inbox")
          setDisplayAlert(true)
        } catch (error) {
          if (error && error.data && error.data.errors) {
            setErrors(error.data.errors);
            setMessage("Username Already Exist.Signup Failed")
            setDisplayAlert(true)
          } else {
            // Handle generic error
            setErrors({ general: 'An error occurred during sign up. Please try again.' });
            setMessage("An error occurred during sign up. Please try again.")
            setDisplayAlert(true)
          }
        } finally {
          setSubmitting(false);
        }
      },

      
    });



    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setDisplayAlert(false)
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

  return (
    <div className="body signup">

      <div className='main'>
      {displayAlert?
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClick={handleClose}
        message= {message}
        key={vertical + horizontal}
      />:''}
        <input type='checkbox' id='chk' aria-hidden='true' />
        <div className='signup'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='chk' aria-hidden='true'>
              Sign up
            </label>
            <div className='inputContainer'>
              <input
                type='text'
                name='name'
                id='name'
                value={values.name}
                placeholder='User name'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.name && touched.name ? (
                <p className='form-error'>{errors.name}</p>
              ) : null}
            </div>
            <div className='inputContainer'>
              <input style={{width:'60%',padding:'0 2%'}}
                type='email'
                name='email'
                id='email'
                value={values.email}
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.email && touched.email ? (
                <p className='form-error'>{errors.email}</p>
              ) : null}
            </div>
            <div className='inputContainer'>
              <input
                type='password'
                name='password'
                id='password'
                value={values.password}
                placeholder='Password'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.password && touched.password ? (
                <p className='form-error'>{errors.password}</p>
              ) : null}
            </div>
            <div className='inputContainer'>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                value={values.confirmPassword}
                placeholder='Confirm Password'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className='form-error'>{errors.confirmPassword}</p>
              ) : null}
            </div>
            <button className="loginButton" type='submit'>Sign up</button>
          </form>
        </div>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
