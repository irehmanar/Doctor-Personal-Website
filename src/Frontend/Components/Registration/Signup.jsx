import React from 'react'
import { useFormik } from 'formik'
import './Login.css'
import { signUpSchema } from './schemas/Signup.jsx'
import Login from './Login.jsx'
import { signUp } from '../../../Services/SignUp'; // Adjust the import path as necessary

const Signup = () => {
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
          alert("Sign up successful!", response);
        } catch (error) {
          if (error && error.data && error.data.errors) {
            setErrors(error.data.errors);
            alert("Sign up failed: " + (error.data.errors.general || "Please check the form for errors."));
          } else {
            // Handle generic error
            setErrors({ general: 'An error occurred during sign up. Please try again.' });
            alert("An error occurred during sign up. Please try again.");
          }
        } finally {
          setSubmitting(false);
        }
      },

      
    });

  return (
    <div className="body signup">
      <div className='main'>
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
