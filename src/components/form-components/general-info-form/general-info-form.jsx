import { useState } from 'react'
import './general-info-form.css'
import Input from '../input/input'

export default function GeneralInfoForm({ initData, handleFormChange }) {
  const onInputChange = (inputName, evt) => {
    const newInfo = {
      ...initData,
      [inputName]: evt.target.value
    }
    handleFormChange(newInfo)
  }
  return (
    <div className='form-container'>
      <h2>General Information</h2>
      <div className="inputs-container">
        <Input
          key={'firstName'}
          inputLabel={'First name'}
          inputType={'text'}
          inputName={'firstName'}
          inputValue={initData.firstName}
          min={3} isRequired={true}
          handleChange={(evt) => onInputChange('firstName', evt)}
        />
        <Input
          key={'lastName'}
          inputLabel={'Last name'}
          inputType={'text'}
          inputName={'lastName'}
          inputValue={initData.lastName}
          min={3} isRequired={true}
          handleChange={(evt) => onInputChange('lastName', evt)}
        />
        <Input
          key={'email'}
          inputLabel={'E-mail'}
          inputType={'email'}
          inputName={'email'}
          inputValue={initData.email}
          isRequired={true}
          // inputPattern={"/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"}
          handleChange={(evt) => onInputChange('email', evt)}
        />
        <Input
          key={'phone'}
          inputLabel={'Phone number'}
          inputType={'tel'}
          inputName={'phone'}
          inputValue={initData.phone}
          min={10} isRequired={true}
          handleChange={(evt) => onInputChange('phone', evt)}
        />
      </div>
    </div>
  )
}
