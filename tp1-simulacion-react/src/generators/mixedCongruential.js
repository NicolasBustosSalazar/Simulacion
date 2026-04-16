export function mixedCongruential(a, n0, c, m, iterations, digits) {
  let current = n0;
  const results = [];
  
  for (let i = 0; i < iterations; i++) {
    current = (current * a + c) % m;
    let ui = current / m;
    ui = parseFloat(ui.toFixed(digits));
    results.push({ i: i + 1, Ni: current, ui: ui });
  }
  return results;
}
