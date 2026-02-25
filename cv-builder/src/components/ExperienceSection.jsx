function ExperienceSection({data, onChange, onAdd, onDelete}) {


  return (
    <>
   <div className='section-card'>

    <h2>Experiencia</h2>
   </div>
    {data.map((item) =>{return(
      <div key ={item.id} className='input-group'>
        <label>Nombre empresa</label>
        <input 
          type="text"
          name="enterprise"          // IMPORTANTE: Coincide con person.name
          value={item.enterprise}    // "Controlled Component": El valor viene del estado
          onChange={(e) => onChange(item.id, e)}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Doofertzmith inc."
        />


 <label>Cargo</label>
        <input 
          type="text"
          name="position"          // IMPORTANTE: Coincide con person.name
          value={item.position}    // "Controlled Component": El valor viene del estado
          onChange={(e) => onChange(item.id, e)}  // Cuando escribo, llamo a la función de App
          placeholder="Ej: Programador..."
        />


 <label>Funciones</label>
        <input 
          type="text"
          name="functions"          // IMPORTANTE: Coincide con person.name
          value={item.functions}    // "Controlled Component": El valor viene del estado
          onChange={(e) => onChange(item.id, e)}  // Cuando escribo, llamo a la función de App
          placeholder="Supervisar la planta de energia nuclear..."
        />

         <label>Fecha</label>
        <input 
          type="date"
          name="experienceDate"          // IMPORTANTE: Coincide con person.name
          value={item.experienceDate}    // "Controlled Component": El valor viene del estado
          onChange={(e) => onChange(item.id, e)} // Cuando escribo, llamo a la función de App
          placeholder="dd/mm/aaaa"
        />


<button 
            onClick={() => onDelete(item.id)} 
            style={{backgroundColor: '#ef4444', marginTop: '10px'}} // Rojo peligroso
          >
            Eliminar
          </button>
      </div>)

    })}
       <button 
        onClick={onAdd}
        style={{marginTop: '1rem', width: '100%', backgroundColor: '#22c55e'}} // Verde éxito
      >
        + Agregar Experiencia
      </button>
    </>
  )
}

export default ExperienceSection
