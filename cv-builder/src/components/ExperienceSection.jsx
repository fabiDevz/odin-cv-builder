function ExperienceSection({data, onChange, onAdd, onDelete}) {


  return (
    <>
   <div className='section-card'>

    <h2>Experiencia</h2>
   </div>
   <div className='input-group'>
        <label>Nombre empresa</label>
        <input 
          type="text"
          name="enterprise"          // IMPORTANTE: Coincide con person.name
          value={data.enterprise}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Doofertzmith inc."
        />


 <label>Cargo</label>
        <input 
          type="text"
          name="position"          // IMPORTANTE: Coincide con person.name
          value={data.position}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Programador..."
        />


 <label>Funciones</label>
        <input 
          type="text"
          name="functions"          // IMPORTANTE: Coincide con person.name
          value={data.functions}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Supervisar la planta de energia nuclear..."
        />

         <label>Fecha</label>
        <input 
          type="date"
          name="experienceDate"          // IMPORTANTE: Coincide con person.name
          value={data.experienceDate}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Supervisar la planta de energia nuclear..."
        />



      </div>
      
    </>
  )
}

export default ExperienceSection
