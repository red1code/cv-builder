import './resume.css';
import { useState } from 'react';
import GeneralInfoForm from '../form-components/general-info-form/general-info-form';
import ExperienceForm from '../form-components/experience-form/experience-form';
import EducationForm from '../form-components/education-form/education-form';
import CV from '../display-cv/display-cv';
import { initialCvValues, emtyCv } from '../../utils/initial-cv-values';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {
  const [formsData, setFormsData] = useState(initialCvValues);
  const onFormsChange = (data) => {
    setFormsData({
      ...formsData,
      ...data
    })
  }
  const resetForms = () => {
    setFormsData(emtyCv)
  }
  const downloadPDF = () => {
    const doc = new jsPDF();
    const downloadCV = document.getElementById('downloadCV');
    html2canvas(downloadCV).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      doc.addImage(imageData, 'PNG', 10, 10, 190, 0);
      doc.save('Resume.pdf');
    });
  }
  return (
    <div className="resume-container">
      <div className="forms">
        <small className='top-btns'>
          <button className='reset-forms' onClick={resetForms}>
            Clear all informations
          </button>
          <button onClick={downloadPDF}> Download CV</button>
        </small>
        <GeneralInfoForm
          initData={formsData}
          handleFormChange={onFormsChange}
        />
        <ExperienceForm
          initData={formsData}
          handleFormChange={onFormsChange}
        />
        <EducationForm
          initData={formsData}
          handleFormChange={onFormsChange}
        />
      </div>
      <div className="cv">
        <CV info={formsData} />
      </div>
    </div>
  )
}
