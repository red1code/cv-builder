import './display-cv.css';

export default function CV({ info }) {
  return (
    <div className='cv-container' id='downloadCV'>
      <header>
        <h1>
          {info?.firstName?.toUpperCase()} {info?.lastName?.toUpperCase()}
        </h1>
        <div className="personal-details">
          <span className='phone'>
            {info?.phone
              && (<img className='icon' src="src/assets/phone.svg" alt="Phone icon" />)}
            {info?.phone}
          </span>
          <span className='email'>
            {info?.email
              && (<img className='icon' src="src/assets/envelope.svg" alt="E-mail icon" />)}
            {info?.email}
          </span>
        </div>
      </header>
      <div className="body">
        <section className='experience'>
          <h2>Professional Experiences</h2>
          {info.experiences.map(exp => (
            <div key={exp.id} className='experience-info'>
              <div className="left-side">
                {exp?.startDate} {exp?.endDate && '-'} {exp?.endDate} <br />
                {exp?.location}
              </div>
              <div className="right-side">
                <b>{exp?.companyName}</b> <br />
                <i>{exp?.title}</i> <b>{exp?.employmentType && '.'}</b>
                <span className='less-important-txt'> {exp?.employmentType}</span> <br />
                <small>{exp?.description}</small>
              </div>
            </div>
          ))}
        </section>
        <section className='education'>
          <h2>Education</h2>
          {info.education.map(edu => (
            <div key={edu.id} className='education-info'>
              <div className="left-side">
                {edu?.startDate} {edu?.endDate && '-'} {edu?.endDate} <br />
                {edu?.location}
              </div>
              <div className="right-side">
                <b>{edu?.school}</b><br />
                {edu?.fieldOfStudy} <br />
                {
                  edu?.school && edu?.fieldOfStudy && !edu?.grade
                    ? (<small>No degree</small>)
                    : (<b><i>{edu?.grade}</i></b>)
                }
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
