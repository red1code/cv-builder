import { useState } from 'react';
import './experience-form.css'
import ExperienceInputs from './professional-exp-inputs/professional-exp-inputs';
import { randomId } from '../../../utils/random-id';

export default function ExperienceForm({ initData, handleFormChange }) {
  const [showExperience, setShowExperience] = useState('');
  const changeShowExpStatus = (id) => {
    id === showExperience ? setShowExperience('') : setShowExperience(id)
  }
  const handleChanges = (data) => {
    const newInfo = {
      ...initData,
      experiences: initData.experiences
        .map(exp => (exp.id === data.id ? data : exp))
    }
    handleFormChange(newInfo);
  }
  const addNewExperience = () => {
    const newExp = {
      id: randomId(),
      title: '',
      employmentType: '',
      companyName: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    }
    initData.experiences.push(newExp);
    handleFormChange({ ...initData });
    setShowExperience(newExp.id)
  }
  const deleteExperience = (id) => {
    const exp = initData.experiences.find(obj => obj.id === id).companyName;
    if (confirm(`Are you sure to delete ${exp} experience?`)) {
      const objWithIdIndex = initData.experiences.findIndex(obj => obj.id === id);
      initData.experiences.splice(objWithIdIndex, 1);
      handleFormChange({ ...initData });
      setShowExperience('');
    }
  }
  return (
    <div className='form-container'>
      <h2 className='title'>Professional Experiences</h2>
      {initData.experiences.map(exp => (
        <div key={exp.id}>
          <div className='experience-instance-btn'>
            <button className='exp-toggle' onClick={() => changeShowExpStatus(exp.id)}>
              <span>{exp.companyName}</span>
              {showExperience === exp.id ? (<span>&#9650;</span>) : (<span>&#9660;</span>)}
            </button>
          </div>
          {showExperience === exp.id && (
            <>
              <ExperienceInputs
                data={exp}
                handleFormChange={handleChanges}
              />
              <button className='delete-btn' onClick={() => deleteExperience(exp.id)}>
                Delete Experience
              </button>
            </>
          )}
        </div>
      ))}
      <div className="add-exp-container">
        <button onClick={() => addNewExperience()}>Add new Experience</button>
      </div>
    </div>
  )
}
