function SkillSection({data, onChange}) {




  return (
    <>
    <div className='section-card'>

    <h2>Habilidades / Herramientas</h2>
   </div>
   <div className='input-group'>
        <label>Habilidad</label>
        <input 
          type="text"
          name="skillName"          // IMPORTANTE: Coincide con person.name
          value={data.skillName}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Trabajo en equipo..."
        />


 <label>Herramienta</label>
        <input 
          type="text"
          name="devTool"          // IMPORTANTE: Coincide con person.name
          value={data.devTool}    // "Controlled Component": El valor viene del estado
          onChange={onChange}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Gemini 3.0 ...."
        />

      </div>
      
    
    </>
  )
}

export default SkillSection
