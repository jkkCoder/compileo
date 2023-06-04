import React from 'react'
// @ts-ignore
import Button from '../../common/components/Button/index.tsx'
// @ts-ignore
import Input from "../../common/components/Input/index.tsx"
import {Link} from "react-router-dom"
import "./style.css"

const Register = () => {
  return (
    <div className="container">
      <form className='form-container'>
        <span className='login'>Register</span>
          <Input id='username' placeholder='Enter your username' type='text' label='Username' />
          <Input id='password' placeholder='Enter your password' type='password' label='Password' />
          <Input id='conf_password' placeholder='Enter your password again' type='password' label='Confirm Password' />
          <Button btn_text="Login"/>

        <span className='navigator'>Already registered? <Link to="/login">Click here to Login</Link></span>
      </form>
    </div>
  )
}

export default Register

