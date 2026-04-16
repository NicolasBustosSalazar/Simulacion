Simulación
* **Carrera:** Ingeniería en Sistemas de Información
* **Stack:** React JS + Vite
* **Función:** Implementación de algoritmos para generación de variables aleatorias.

## Algoritmos Implementados

### 1. Método de la Parte Central (Middle Square)
Algoritmo basado en la extracción de los dígitos centrales del cuadrado de una semilla. Esta implementación incluye la lógica de ajuste por paridad:
- Si la diferencia de dígitos entre el cuadrado y el objetivo ($N$) es **impar**, se realiza un desplazamiento (ajuste $\times 10$) para normalizar la extracción.
- Extracción simétrica mediante cálculo de índices con `Math.floor`.

### 2. Métodos Congruenciales
* **Mixto:** $X_{n+1} = (aX_n + c) \pmod m$
* **Multiplicativo:** $X_{n+1} = (aX_n) \pmod m$
* **Aditivo:** Basado en la suma de términos anteriores.


## Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>

2. **Entorno de desarrollo:**
    ```bash
    npm install

3. Ejecutar en modo desarrollo:

    ```bash
    npm run dev
    