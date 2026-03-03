import { useState, useEffect } from 'react';
import './App.css';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import GeneralSection from './components/GeneralSection';
import SkillSection from './components/SkillSection';
import TemplateSection from './components/TemplateSection';

function App() {
  const [person, setPerson] = useState(() => {
    const guardado = localStorage.getItem('cv_person');
    if (guardado) {
      return JSON.parse(guardado); // Recupera los datos guardados
    }
    // Si no hay nada guardado, usa tus datos por defecto
    return {
      name: 'Fabian Mella',
      email: 'fabian.dev@email.com',
      phone: '+56 9 8765 4321',
    };
  });

  const [education, setEducation] = useState(() => {
    const guardado = localStorage.getItem('cv_education');

    if (guardado) {
      return JSON.parse(guardado);
    }

    return [
      {
        id: 1,
        school: 'Universidad del Bío-Bío',
        grade: 'Ingeniería Civil en Informática',
        educationDate: 'Mar 2018 - Dic 2023',
      },
    ];
  });

  const [experience, setExperience] = useState(() => {
    const guardado = localStorage.getItem('cv_experience');

    if (guardado) {
      return JSON.parse(guardado);
    }

    return [
      {
        id: crypto.randomUUID(),
        enterprise: 'Tech Solutions Biobio',
        position: 'Desarrollador',
        functions:
          'Desarrollo de UI en React.js. Optimización de rendmiento y consumo de APIs REST',
        experienceDate: 'Mar 2022 - Dic 2023',
      },
      {
        id: crypto.randomUUID(),
        enterprise: 'Tech Ubicorp Talcahuano',
        position: 'Analista de datos',
        functions: 'Reporteria de datos para fines estadisticos',
        experienceDate: 'Noviembre 2022 - Diciembre 2022',
      },
    ];
  });

  const [skills, setSkills] = useState(() => {
    const guardado = localStorage.getItem('cv_skills');
    if (guardado) {
      return JSON.parse(guardado);
    }

    return [
      {
        id: crypto.randomUUID(),
        skillName: 'Desarrollo Web',
        devTool: 'React, JavaScript (ES6+), CSS3, Git',
      },
    ];
  });

  function handlePersonChange(e) {
    const { name, value } = e.target;

    setPerson({
      ...person,
      [name]: value,
    });
  }

  function handleEducationChange(id, e) {
    const { name, value } = e.target;

    setEducation(
      education.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function handleExperienceChange(id, e) {
    const { name, value } = e.target;

    setExperience(
      experience.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function handleSkillChange(id, e) {
    const { name, value } = e.target;

    setSkills(
      skills.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function addEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      school: '',
      grade: '',
      educationDate: '',
    };

    setEducation([...education, newEducation]);
  }

  function deleteEducation(index) {
    setEducation(education.filter((item) => item.id !== index));
  }

  function addExperience() {
    const newExperience = {
      id: crypto.randomUUID(),
      enterprise: '',
      position: '',
      functions: '',
      experienceDate: '',
    };
    setExperience([...experience, newExperience]);
  }

  function deleteExperience(index) {
    setExperience(experience.filter((item) => item.id !== index));
  }

  function addSkill() {
    const newSkill = {
      id: crypto.randomUUID(),
      skillName: 'Desarrollo web',
      devTool: 'HTML, CSS , JS, Git',
    };

    setSkills([...skills, newSkill]);
  }

  function deleteSkill(id) {
    setSkills(skills.filter((item) => item.id !== id));
  }

  function resetCV() {
    // 1. Preguntamos por si acaso (para evitar accidentes)
    const confirmar = window.confirm(
      '¿Estás seguro de que quieres borrar todo y empezar de cero?'
    );

    if (confirmar) {
      // 2. Borramos la memoria del navegador
      localStorage.removeItem('cv_person');
      localStorage.removeItem('cv_education');
      localStorage.removeItem('cv_experience');
      localStorage.removeItem('cv_skills');

      // 3. Dejamos los estados en blanco
      setPerson({ name: '', email: '', phone: '' });
      setEducation([]);
      setExperience([]);
      setSkills([]);
    }
  }

  useEffect(() => {
    // Convertimos los objetos y listas a texto (JSON) para poder guardarlos
    localStorage.setItem('cv_person', JSON.stringify(person));
    localStorage.setItem('cv_education', JSON.stringify(education));
    localStorage.setItem('cv_experience', JSON.stringify(experience));
    localStorage.setItem('cv_skills', JSON.stringify(skills));
  }, [person, education, experience, skills]);

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          {/* NUEVO BOTÓN PARA IMPRIMIR */}
          <button
            className="print-btn"
            onClick={() => window.print()}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '10px',
              marginBottom: '20px',
              width: '100%',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            🖨️ Descargar CV en PDF
          </button>

          <button
            className="print-btn"
            onClick={resetCV}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '10px',
              marginBottom: '20px',
              width: '100%',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            🗑️ Empezar de cero
          </button>
          <GeneralSection data={person} onChange={handlePersonChange} />
          <EducationSection
            data={education}
            onChange={handleEducationChange}
            onAdd={addEducation}
            onDelete={deleteEducation}
          />
          <ExperienceSection
            data={experience}
            onChange={handleExperienceChange}
            onAdd={addExperience}
            onDelete={deleteExperience}
          />
          <SkillSection
            data={skills}
            onChange={handleSkillChange}
            onAdd={addSkill}
            onDelete={deleteSkill}
          />
        </div>
        <div className="right-container">
          <TemplateSection
            person={person}
            education={education}
            experience={experience}
            skills={skills}
          />
        </div>
      </div>
    </>
  );
}

export default App;
