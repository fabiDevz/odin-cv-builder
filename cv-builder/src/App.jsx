import { useState } from 'react'
import InputCard from './components/InputCard.jsx'

function App() {


  return (
    <>
     <InputCard
      title={'Información Personal '}
      nameInput={['Nombre', 'Apellido', 'Teléfono', 'Email']}
     ></InputCard>

     <InputCard
      title={'Educación'}
      nameInput={['Universidad y/o Instituto', 'Titulo obtenido', 'Fecha estudios']}
     >
     </InputCard>

    <InputCard
      title={'Experiencia'}
      nameInput={['Nombre compañia', 'Cargo', 'Responsabilidades' , 'Fecha Inicio', 'Fecha término']}
    ></InputCard>
    </>
  )
}

export default App
