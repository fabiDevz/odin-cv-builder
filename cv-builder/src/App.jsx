import { useState, useId } from 'react';
import './App.css'; 
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import GeneralSection from './components/GeneralSection';
import SkillSection from './components/SkillSection';
import TemplateSection from './components/TemplateSection';


function App() {

const [person, setPerson] = useState({
  name: 'Fabian Mella', 
  email: 'fabian.dev@email.com', 
  phone: '+56 9 8765 4321'
});

const [education, setEducation] = useState([
  {
    id: 1,
    school: 'Universidad del Bío-Bío',
    grade: 'Ingeniería Civil en Informática',
    educationDate: 'Mar 2018 - Dic 2023'
  }
]);

const [experience, setExperience] = useState({
  enterprise: 'Tech Solutions Biobío', 
  position: 'Desarrollador Frontend', 
  functions: 'Desarrollo de interfaces de usuario utilizando React.js. Optimización de rendimiento y consumo de APIs REST.', 
  experienceDate: 'Ene 2024 - Presente'
});

const [skills, setSkills] = useState({
  skillName: 'Desarrollo Web', 
  devTool: 'React, JavaScript (ES6+), CSS3, Git'
});

function handlePersonChange(e) {
  const { name, value } = e.target;
  
  setPerson({
    ...person,     
    [name]: value    
  });

};

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


function handleExperienceChange(e){
  const {name, value} = e.target;

  setExperience({
    ...experience,
    [name]: value
  });
};

function handleSkillChange(e){
  const {name, value} = e.target;

  setSkills({
    ...skills,
    [name]: value
  });
};

function addEducation(){
  const newEducation ={
    id: crypto.randomUUID(),
    school:'',
    grade:'',
    educationDate:''
  };

  setEducation([...education, newEducation]);
};

function deleteEducation(index)
{
  setEducation(education.filter((item) => item.id !== index));
};

function addExperience(){
  const newExperience={
    id: crypto.randomUUID(),
    enterprise:'',
    positions:'',
    functions:'',
    experienceDate:''
  };
};

function deleteExperience(index)
{
  setExperience(experience.filter((item)=> item.id !== index));
}





  return (
    <>
    <div className='main-container'>
       <div className='left-container'>
          <GeneralSection
            data={person} 
            onChange={handlePersonChange}
          />
          <EducationSection
            data = {education}
            onChange={handleEducationChange}
            onAdd={addEducation}
            onDelete={deleteEducation}
          />
          <ExperienceSection
          data ={experience}
            onChange={handleExperienceChange}
            onAdd={addExperience}
            onDelete={deleteExperience}
          />
          <ContactSection/>
          <SkillSection
            data = {skills}
            onChange={handleSkillChange}
          />
       </div>
       <div className='right-container'>
          <TemplateSection 
          person={person}
          education={education}
          experience={experience}
          skills = {skills}
          />
       </div>
    </div>
   
    

      
    </>
  )
}

export default App
