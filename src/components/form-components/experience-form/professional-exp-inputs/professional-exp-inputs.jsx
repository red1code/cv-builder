import { useState } from 'react';
import Input from '../../input/input';
import { employmentTypes } from '../../../../utils/employment-types';

export default function ExperienceInputs({ data, handleFormChange }) {
  const [formValues, setFormValues] = useState({
    id: data.id,
    title: data.title,
    employmentType: data.employmentType,
    companyName: data.companyName,
    location: data.location,
    startDate: data.startDate,
    endDate: data.endDate,
    description: data.description,
  });
  const onInputChange = (inputName, evt) => {
    const newValue = {
      ...formValues,
      [inputName]: evt.target.value
    }
    setFormValues(newValue);
    handleFormChange(newValue)
  }
  return (
    <div className="inputs-container">
      <Input
        key={'title'}
        inputLabel={'Job title'}
        inputType={'text'}
        inputName={'title'}
        inputValue={formValues.title}
        min={3} isRequired={true}
        handleChange={(evt) => onInputChange('title', evt)}
      />
      <div className='employment-type'>
        <label>Employment type</label> <br />
        <select className='months-dropdown'
          value={formValues.employmentType} required
          onChange={(evt) => onInputChange('employmentType', evt)}>
          <option key='select' defaultChecked>Please select</option>
          {employmentTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <Input
        key={'companyName'}
        inputLabel={'Company name'}
        inputType={'text'}
        inputName={'companyName'}
        inputValue={formValues.companyName}
        isRequired={true}
        handleChange={(evt) => onInputChange('companyName', evt)}
      />
      <Input
        key={'location'}
        inputLabel={'Job location'}
        inputType={'text'}
        inputName={'location'}
        inputValue={formValues.location}
        min={3} isRequired={true}
        handleChange={(evt) => onInputChange('location', evt)}
      />
      <Input
        key={'startDate'}
        inputLabel={'Start date'}
        inputType={'text'}
        inputName={'startDate'}
        inputValue={formValues.startDate}
        isRequired={true}
        handleChange={(evt) => onInputChange('startDate', evt)}
      />
      <Input
        key={'endDate'}
        inputLabel={'End date'}
        inputType={'text'}
        inputName={'endDate'}
        inputValue={formValues.endDate}
        isRequired={true}
        handleChange={(evt) => onInputChange('endDate', evt)}
      />
      <div className="job-description">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          value={formValues.description}
          style={{ width: '100%' }}
          onChange={(evt) => onInputChange('description', evt)}>
        </textarea>
      </div>
    </div>
  )
}
