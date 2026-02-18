function TemplateSection({ person, education, experience, skills }) {
  return (
    <div className='resume-paper'>
      
      {/* --- ENCABEZADO --- */}
      <div className='resume-header'>
        <h1>{person.name}</h1>
        <div className='contact-info'>
          {/* Agregué iconos visuales con texto simple si quisieras, o solo el texto */}
          <span>{person.phone}</span>
          <span style={{ margin: '0 10px' }}>|</span>
          <span>{person.email}</span>
        </div>
      </div>

      <div className="resume-body">
        
        {/* --- SECCIÓN EXPERIENCIA --- */}
        {/* Usamos la clase 'resume-section' de tu CSS para la línea debajo del título */}
        <div className="resume-section">
          <h3>Experiencia Laboral</h3>
          
          <div className="experience-item" style={{ marginBottom: '1.5rem' }}>
            {/* Fila 1: Empresa (Izquierda) y Fecha (Derecha) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>
                {experience.enterprise}
              </h4>
              <span style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>
                {experience.experienceDate}
              </span>
            </div>

            {/* Fila 2: Cargo */}
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#444' }}>
              {experience.position}
            </div>

            {/* Fila 3: Funciones */}
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
              {experience.functions}
            </p>
          </div>
        </div>

        {/* --- SECCIÓN EDUCACIÓN --- */}
        <div className="resume-section">
          <h3>Educación</h3>
          
          {education.map((item) =>(
          <div key={item.id} className="education-item" style={{ marginBottom: '1rem' }}>
            {/* Fila 1: Escuela y Fecha */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>
                {item.school}
              </h4>
              <span style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>
                {item.educationDate}
              </span>
            </div>

            {/* Fila 2: Grado */}
            <div style={{ marginTop: '0.2rem' }}>
              {item.grade}
            </div>
          </div>
          ))}
          
        </div>

        {/* --- SECCIÓN HABILIDADES (Placeholder) --- */}
        <div className="resume-section">
          <h3>Habilidades</h3>
          <p style={{ color: '#777', fontStyle: 'italic' }}>
            <span>{skills.skillName}</span>
            
          </p>
          <span>{skills.devTool}</span>
        </div>

      </div>
    </div>
  );
}

export default TemplateSection;