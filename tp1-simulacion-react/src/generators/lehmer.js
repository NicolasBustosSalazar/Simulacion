export function lehmer(n0, t, iterations, digits) {
  let current = n0;
  const results = [];
  // Asumiendo módulo 10^digits si no se provee un 'm', basado en la descripción clásica de Lehmer con truncamiento
  const mod = Math.pow(10, digits); 
  
  for (let i = 0; i < iterations; i++) {
    current = (current * t) % mod;
    let ui = current / mod;
    results.push({ i: i + 1, Ni: current, ui: ui });
  }
  return results;
}
