import React from 'react'
// @ts-ignore
import Button from '../../common/components/Button/index.tsx'
// @ts-ignore
import Input from "../../common/components/Input/index.tsx"
import {Link} from "react-router-dom"
import "./style.css"

const Login = () => {
  return (
    <div className="container">
    <form className='form-container'>
      <span className='login'>Login</span>
      <Input id='username' placeholder='Enter your username' type='text' label='Username' />
      <Input id='password' placeholder='Enter your password' type='password' label='Password' />
      <Button btn_text="Login"/>

      <span className='navigator'>Not yet registered? <Link to="/register">Click here to register</Link></span>
    </form>
  </div>
  )
}

export default Login

