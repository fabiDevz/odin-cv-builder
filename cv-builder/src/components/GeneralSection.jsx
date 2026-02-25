function GeneralSection({ data, onChange }) {
  return (
    <>
      <div className="section-card">
        <h2>Información General</h2>
      </div>
      <div className="input-group">
        <label>Nombre Completo</label>
        <input
          type="text"
          name="name" // IMPORTANTE: Coincide con person.name
          value={data.name} // "Controlled Component": El valor viene del estado
          onChange={onChange} // Cuando escribo, llamo a la función de App
          placeholder="Ej: Juan Pérez"
        />

        <label>Email</label>
        <input
          type="text"
          name="email" // IMPORTANTE: Coincide con person.name
          value={data.email} // "Controlled Component": El valor viene del estado
          onChange={onChange} // Cuando escribo, llamo a la función de App
          placeholder="Ej: miempresa@example.com"
        />

        <label>Teléfono</label>
        <input
          type="text"
          name="phone" // IMPORTANTE: Coincide con person.name
          value={data.phone} // "Controlled Component": El valor viene del estado
          onChange={onChange} // Cuando escribo, llamo a la función de App
          placeholder="Ej: +569124567"
        />
      </div>
    </>
  );
}

export default GeneralSection;
