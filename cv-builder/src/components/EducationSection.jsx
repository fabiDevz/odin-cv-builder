function EducationSection({data, onChange, onAdd, onDelete}) {


  return (
    <>
   <div className='section-card'>

    <h2>Educación</h2>
   </div>
   {data.map((item) =>{return(
<div key={item.id} className='input-group'>
        <label>Centro Educacional</label>
        <input 
          type="text"
          name="school"          // IMPORTANTE: Coincide con person.name
          value={item.school}    // "Controlled Component": El valor viene del estado
         onChange={(e) => onChange(item.id, e)}
          placeholder="Ej: Preparatoria Orange"
        />


 <label>Grado académico</label>
        <input 
          type="text"
          name="grade"          // IMPORTANTE: Coincide con person.name
          value={item.grade}    // "Controlled Component": El valor viene del estado
          onChange={(e) => onChange(item.id, e)}
          placeholder="Ej: Licenciatura en artes misticas..."
        />


 <label>Fecha</label>
        <input 
          type="date"
          name="educationDate"          // IMPORTANTE: Coincide con person.name
          value={item.educationDate}    // "Controlled Component": El valor viene del estado
        onChange={(e) => onChange(item.id, e)}
          placeholder=" dd/mm/aaaa"
        />

<button 
            onClick={() => onDelete(item.id)} 
            style={{backgroundColor: '#ef4444', marginTop: '10px'}} // Rojo peligroso
          >
            Eliminar
          </button>
      </div>



  ) })}
      {/* 3. Botón AGREGAR (Afuera del loop, al final) */}
      <button 
        onClick={onAdd}
        style={{marginTop: '1rem', width: '100%', backgroundColor: '#22c55e'}} // Verde éxito
      >
        + Agregar Educación
      </button>
    </>
  )
}

export default EducationSection
