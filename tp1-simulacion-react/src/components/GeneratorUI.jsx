import React, { useState, useEffect } from 'react';

export default function GeneratorUI({ title, inputs, logicFn, defaultDigits }) {
  const [formData, setFormData] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    const initialData = { iterations: 10, digits: defaultDigits };
    inputs.forEach(input => {
      initialData[input.name] = input.defaultValue;
    });
    setFormData(initialData);
    setResults([]);
  }, [inputs, defaultDigits]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
  };

  const handleGenerate = () => {
    // Validar que no haya campos vacíos
    for (const key in formData) {
      if (formData[key] === '') return;
    }

    // Extraer argumentos en el orden definido por los inputs, más iteraciones y dígitos
    const args = inputs.map(input => formData[input.name]);
    args.push(formData.iterations, formData.digits);
    
    // Ejecutar la función lógica
    const newResults = logicFn(...args);
    setResults(newResults);
  };

  return (
    <div className="generator-ui">
      <h2>{title}</h2>
      <div className="form-group">
        {inputs.map(input => (
          <div key={input.name} className="input-field">
            <label>{input.label}: </label>
            <input 
              type="number" 
              name={input.name} 
              value={formData[input.name] !== undefined ? formData[input.name] : ''} 
              onChange={handleChange} 
            />
          </div>
        ))}
        <div className="input-field">
          <label>Iteraciones: </label>
          <input 
            type="number" 
            name="iterations" 
            value={formData.iterations !== undefined ? formData.iterations : 10} 
            onChange={handleChange} 
          />
        </div>
        <div className="input-field">
          <label>Dígitos de Precisión: </label>
          <input 
            type="number" 
            name="digits" 
            value={formData.digits !== undefined ? formData.digits : defaultDigits} 
            onChange={handleChange} 
            min="1"
            max="10"
          />
        </div>
        <button onClick={handleGenerate}>Generar</button>
      </div>

      {results.length > 0 && (
        <table className="results-table">
          <thead>
            <tr>
              <th>i</th>
              <th>N_i</th>
              <th>u_i</th>
            </tr>
          </thead>
          <tbody>
            {results.map(row => (
              <tr key={row.i}>
                <td>{row.i}</td>
                <td>{row.Ni}</td>
                {/* Formateamos u_i a la cantidad de dígitos especificada para mostrar */}
                <td>{row.ui.toFixed(formData.digits)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
