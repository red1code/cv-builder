import { useState } from 'react';
import Input from '../../input/input';

export default function EducationInputs({ data, handleFormChange }) {
  const [formValues, setFormValues] = useState({
    id: data.id,
    school: data.school,
    fieldOfStudy: data.fieldOfStudy,
    startDate: data.startDate,
    endDate: data.endDate,
    location: data.location,
    grade: data.grade,
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
        key={'school'}
        inputLabel={'School / University'}
        inputType={'text'}
        inputName={'school'}
        inputValue={formValues.school}
        min={3} isRequired={true}
        handleChange={(evt) => onInputChange('school', evt)}
      />
      <Input
        key={'fieldOfStudy'}
        inputLabel={'Field of study'}
        inputType={'text'}
        inputName={'fieldOfStudy'}
        inputValue={formValues.fieldOfStudy}
        min={3} isRequired={true}
        handleChange={(evt) => onInputChange('fieldOfStudy', evt)}
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
        inputLabel={'End Date'}
        inputType={'text'}
        inputName={'endDate'}
        inputValue={formValues.endDate}
        isRequired={true}
        handleChange={(evt) => onInputChange('endDate', evt)}
      />
      <Input
        key={'location'}
        inputLabel={'Location'}
        inputType={'text'}
        inputName={'location'}
        inputValue={formValues.location}
        isRequired={false}
        handleChange={(evt) => onInputChange('location', evt)}
      />
      <Input
        key={'grade'}
        inputLabel={'Grade'}
        inputType={'text'}
        inputName={'grade'}
        inputValue={formValues.grade}
        inputPlaceHolder={'No degree'}
        isRequired={false}
        handleChange={(evt) => onInputChange('grade', evt)}
      />
    </div>
  )
}
