import React, { Fragment } from 'react'
import './Login.css'
import Signup from '../../Components/Registration/Signup'
import Navbar from '../../Components/Navbar/Navbar'
function Login() {
  return (
<Fragment>
  <Navbar/>
  <div className="body Loginbg">
	<Signup></Signup>
  </div>
</Fragment>
  )
}

export default Login
