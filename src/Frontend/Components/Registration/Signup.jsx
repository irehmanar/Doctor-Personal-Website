import React from 'react'
import { useFormik } from 'formik'
import './Login.css'
import { signUpSchema } from './schemas/Signup.jsx'
import Login from './Login.jsx'
const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function Signup() {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: values => {
        console.log(values)
      }
    })
  console.log(errors)
  return (
<div className="body">
<div className='main'>
        <input type='checkbox' id='chk' aria-hidden='true' />
        <div class='signup'>
          <form onSubmit={handleSubmit}>
            <label for='chk' aria-hidden='true'>
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
                required=''
              />
              {errors.name && touched.name ? (
                <p className='form-error'>{errors.name}</p>
              ) : null}
            </div>
            <div className='inputContainer'>
              <input
                type='email'
                name='email'
                id='email'
                value={values.email}
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                required=''
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
                required=''
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
                placeholder='confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                required=''
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className='form-error'>{errors.confirmPassword}</p>
              ) : null}
            </div>
            <button type='submit'>Sign up</button>
          </form>
        </div>
      <Login></Login> 
      </div>


	</div>
  )
}

export default Signup
