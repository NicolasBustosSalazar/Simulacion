

//Función para generar números pseudoaleatorios utilizando el método del cuadrado medio

export function middleSquare(seed, iterations, digits) {
  let current = seed;
  const results = [];

  //loop para generar los números pseudoaleatorios
  for (let i = 0; i < iterations; i++) {
    
    let squared = power(current, 2);
    //Manejo de numeros impares
    let squaredStr = squared.toString();  
    let diff = squaredStr.length - digits;
    // Si la diferencia es impar, ajustamos el número de dígitos multiplicando por 10
    if (diff % 2 !== 0) {
      squared = squared * 10;
      squaredStr = squared.toString();
    }
    // Extracción de los dígitos centrales
    let start = Math.floor((squaredStr.length - digits) / 2);
    let middle = squaredStr.substring(start, start + digits);
    
    current = parseInt(middle, 10);
    
    //Se convierte el numero generado en un número entre 0 y 1
    let ui = current / Math.pow(10, digits);
    
    results.push({ 
      i: i + 1, 
      Ni: current, 
      ui: ui 
    });
  }

  return results;
}
