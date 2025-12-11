import { useState } from 'react';
import '../styles/Section.css';

function Section({
  generalInformation,
  educationalExperience,
  practicalExperience,
}) {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="section-container">
        <div className="section-left">
          <h2>Información General</h2>
          {generalInformation.map((item, i) => (
            <div key={item} className="input-group">
              <label>{item}</label>
              <input type="text" />
            </div>
          ))}

          <h2>Educación</h2>

          {educationalExperience.map((item, i) => (
            <h3 key={i}>
              {item} <input />
            </h3>
          ))}
          <h2>Experiencia</h2>
          {practicalExperience.map((item, i) => (
            <h3 key={i}>
              {item} <input />
            </h3>
          ))}

          <button> Editar</button>
          <button>Guardar</button>
        </div>
      </div>

      {/* <input
     placeholder='{}'
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    /> */}
    </>
  );
}

export default Section;
