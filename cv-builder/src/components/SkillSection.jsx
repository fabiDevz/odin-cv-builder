function SkillSection({ data, onChange, onAdd, onDelete }) {
  return (
    <>
      <div className="section-card">
        <h2>Habilidades / Herramientas</h2>
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} className="input-group">
            <label>Habilidad</label>
            <input
              type="text"
              name="skillName" // IMPORTANTE: Coincide con person.name
              value={item.skillName} // "Controlled Component": El valor viene del estado
              onChange={(e) => onChange(item.id, e)} // Cuando escribo, llamo a la función de App
              placeholder="Ej: Trabajo en equipo..."
            />

            <label>Herramienta</label>
            <input
              type="text"
              name="devTool" // IMPORTANTE: Coincide con person.name
              value={item.devTool} // "Controlled Component": El valor viene del estado
              onChange={(e) => onChange(item.id, e)} // Cuando escribo, llamo a la función de App
              placeholder="Ej: Gemini 3.0 ...."
            />
            <button
              onClick={() => onDelete(item.id)}
              style={{ backgroundColor: '#ef4444', marginTop: '10px' }} // Rojo peligroso
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <button
        onClick={onAdd}
        style={{ marginTop: '1rem', width: '100%', backgroundColor: '#22c55e' }} // Verde éxito
      >
        + Agregar Habilidad / Herramienta
      </button>
    </>
  );
}

export default SkillSection;
