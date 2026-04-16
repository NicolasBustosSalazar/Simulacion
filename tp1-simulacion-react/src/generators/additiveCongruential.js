export function additiveCongruential(n_minus_1, n0, m, iterations, digits) {
  let prev = n_minus_1;
  let current = n0;
  const results = [];
  
  for (let i = 0; i < iterations; i++) {
    const next = (prev + current) % m;
    prev = current;
    current = next;
    
    let ui = next / (m - 1); // Normalización respecto a m-1 o m, comúnmente m o m-1. Usaremos m para u_i.
    ui = next / m;
    ui = parseFloat(ui.toFixed(digits)); // Truncar a la cantidad de dígitos
    results.push({ i: i + 1, Ni: next, ui: ui });
  }
  return results;
}
