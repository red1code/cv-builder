import { useState } from 'react';
import './input.css'

export default function Input({
  inputLabel,
  inputType,
  inputName,
  inputValue,
  inputPlaceHolder,
  isRequired,
  min, max,
  inputPattern,
  handleChange,
  inputDisabled = false,
}) {
  const [errMsg, setErrMsg] = useState('');
  const checkValidity = (evt) => {
    if (!evt.target.checkValidity()) {
      setErrMsg(evt.target.validationMessage)
      evt.target.className = 'invalid'
    }
    if (evt.target.checkValidity()) {
      setErrMsg('')
      evt.target.className = 'valid'
    }
  }
  return (
    <div className='container'>
      <label htmlFor={inputName}
        style={inputDisabled ? { textDecoration: 'line-through' } : {}}>
        {inputLabel}
      </label>
      <br />
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceHolder}
        required={isRequired}
        pattern={inputPattern}
        minLength={min}
        maxLength={max}
        disabled={inputDisabled}
        onChange={handleChange} onInput={checkValidity}
      />
      <br />
      {errMsg && (<small className='err-msg'>{errMsg}</small>)}
    </div>
  )
}
