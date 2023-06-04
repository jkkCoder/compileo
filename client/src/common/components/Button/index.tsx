import React from 'react'
import "./style.css"

interface Props {
    btn_text: string;
}

const Button = ({btn_text}:Props) => {
  return (
    <div className="form-group">
        <button type="submit">{btn_text}</button>
    </div>
  )
}

export default Button