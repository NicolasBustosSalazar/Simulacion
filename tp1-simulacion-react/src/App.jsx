import React, { useState } from 'react';
import './App.css';
import GeneratorUI from './components/GeneratorUI';
import { middleSquare } from './generators/middleSquare';
import { lehmer } from './generators/lehmer';
import { additiveCongruential } from './generators/additiveCongruential';
import { multiplicativeCongruential } from './generators/multiplicativeCongruential';
import { mixedCongruential } from './generators/mixedCongruential';

function App() {
  const [selectedMethod, setSelectedMethod] = useState('mixed');

  const methods = {
    middleSquare: {
      id: 'middleSquare',
      title: 'Parte Central del Cuadrado',
      logicFn: middleSquare,
      defaultDigits: 4,
      inputs: [
        { name: 'seed', label: 'Semilla (N)', defaultValue: 1234 }
      ]
    },
    lehmer: {
      id: 'lehmer',
      title: 'Método de Lehmer',
      logicFn: lehmer,
      defaultDigits: 4,
      inputs: [
        { name: 'n0', label: 'n0 (Semilla)', defaultValue: 1234 },
        { name: 't', label: 't (Multiplicador)', defaultValue: 13 }
      ]
    },
    additive: {
      id: 'additive',
      title: 'Congruencial Aditivo',
      logicFn: additiveCongruential,
      defaultDigits: 4,
      inputs: [
        { name: 'n_minus_1', label: 'n-1', defaultValue: 65 },
        { name: 'n0', label: 'n0', defaultValue: 89 },
        { name: 'm', label: 'm (Módulo)', defaultValue: 100 }
      ]
    },
    multiplicative: {
      id: 'multiplicative',
      title: 'Congruencial Multiplicativo',
      logicFn: multiplicativeCongruential,
      defaultDigits: 4,
      inputs: [
        { name: 'a', label: 'a (Multiplicador)', defaultValue: 13 },
        { name: 'n0', label: 'n0 (Semilla)', defaultValue: 17 },
        { name: 'm', label: 'm (Módulo)', defaultValue: 100 }
      ]
    },
    mixed: {
      id: 'mixed',
      title: 'Congruencial Mixto',
      logicFn: mixedCongruential,
      defaultDigits: 4,
      inputs: [
        { name: 'a', label: 'a (Multiplicador)', defaultValue: 1739 },
        { name: 'n0', label: 'n0 (Semilla)', defaultValue: 2170 },
        { name: 'c', label: 'c (Incremento)', defaultValue: 893 },
        { name: 'm', label: 'm (Módulo)', defaultValue: 3135 }
      ]
    }
  };

  const currentMethod = methods[selectedMethod];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generadores de Números Pseudoaleatorios</h1>
        <div className="method-selector">
          <label>Seleccionar Método: </label>
          <select 
            value={selectedMethod} 
            onChange={(e) => setSelectedMethod(e.target.value)}
          >
            {Object.values(methods).map(method => (
              <option key={method.id} value={method.id}>{method.title}</option>
            ))}
          </select>
        </div>
      </header>
      <main>
        <GeneratorUI 
          key={currentMethod.id} // Forza que se remonte el componente al cambiar de método
          title={currentMethod.title}
          inputs={currentMethod.inputs}
          logicFn={currentMethod.logicFn}
          defaultDigits={currentMethod.defaultDigits}
        />
      </main>
    </div>
  );
}

export default App;