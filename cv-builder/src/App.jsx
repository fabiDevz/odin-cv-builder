import { useState } from 'react';
import Section from './components/Section';

function App() {

const generalInformation = ['Nombre','Email', 'Teléfono'];
const educationalExperience = ['Centro educacional', 'Grado académico', 'Fecha estudios'];
const practicalExperience =  ['Nombre empresa', 'Cargo', 'Funciones', 'Fechas'];


  return (
    <>
      <Section
        generalInformation = {generalInformation}
        educationalExperience = {educationalExperience}
        practicalExperience = {practicalExperience}
      ></Section>
    </>
  )
}

export default App
