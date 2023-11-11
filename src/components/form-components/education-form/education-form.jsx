import './education-form.css'
import { useState } from 'react';
import EducationInputs from './education-inputs/education-inputs';
import { randomId } from '../../../utils/random-id';

export default function EducationForm({ initData, handleFormChange }) {
  const [showEducation, setShowEducation] = useState('');
  const changeShowEducation = (id) => {
    id === showEducation ? setShowEducation('') : setShowEducation(id)
  }
  const handleChanges = (data) => {
    const newInfo = {
      ...initData,
      education: initData.education
        .map(edu => (edu.id === data.id ? data : edu))
    }
    handleFormChange(newInfo)
  }
  const addNewEducation = () => {
    const newEdu = {
      id: randomId(),
      school: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      location: '',
      grade: '',
    }
    initData.education.push(newEdu);
    handleFormChange({ ...initData });
    setShowEducation(newEdu.id)
  }
  const deleteEducation = (id) => {
    const edu = initData.education.find(obj => obj.id === id).school;
    if (confirm(`Are you sure to delete ${edu} education?`)) {
      const objWithIdIndex = initData.education.findIndex(obj => obj.id === id);
      initData.education.splice(objWithIdIndex, 1);
      handleFormChange({ ...initData });
      setShowEducation('');
    }
  }
  return (
    <div className='form-container'>
      <h2 className='title'>Education</h2>
      {initData.education.map(edu => (
        <div key={edu.id}>
          <div className='toggle-container'>
            <button className='toggle' onClick={() => changeShowEducation(edu.id)}>
              <span>{edu.school}</span>
              {showEducation === edu.id ? (<span>&#9650;</span>) : (<span>&#9660;</span>)}
            </button>
          </div>
          {showEducation === edu.id && (
            <>
              <EducationInputs
                data={edu}
                handleFormChange={handleChanges}
              />
              <button className='delete-btn' onClick={() => deleteEducation(edu.id)}>
                Delete Education
              </button></>
          )}
        </div>
      ))}
      <div className="add-edu-container">
        <button onClick={() => addNewEducation()}>Add new Education</button>
      </div>
    </div>
  )
}
