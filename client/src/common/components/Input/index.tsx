import React from 'react'
import "./style.css"

interface Props {
    id: string;
    type: string;
    placeholder: string;
    label: string;
}

const Input = ({id,type,placeholder,label}: Props) => {
  return (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  )
}

export default Input