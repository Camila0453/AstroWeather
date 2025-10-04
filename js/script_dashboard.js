document.getElementById('consultar').addEventListener('click', async function() {
  const deporte = document.getElementById('deporte').value;
  // Aquí deberás reemplazar por la llamada real a la API de Meteomatics
  // Por ejemplo, podrías obtener la temperatura, humedad, viento, etc.
  // Simulación de respuesta de la API:
  const clima = await obtenerClimaSimulado();

  // Lógica para determinar si el clima es bueno, regular o malo
  let estado = '';
  if (clima.temperatura > 20 && clima.temperatura < 30 && clima.lluvia < 1) {
    estado = 'bueno';
  } else if (clima.temperatura >= 15 && clima.temperatura <= 20 && clima.lluvia < 3) {
    estado = 'regular';
  } else {
    estado = 'malo';
  }

  mostrarResultado(estado, deporte, clima);
});

// Simulación de función para obtener datos de clima
async function obtenerClimaSimulado() {
  // Aquí deberás hacer el fetch real a la API de Meteomatics
  // Ejemplo de respuesta simulada:
  return {
    temperatura: 22, // grados Celsius
    lluvia: 0.5 // mm
  };
}

function mostrarResultado(estado, deporte, clima) {
  const resultado = document.getElementById('resultado');
  let mensaje = '';
  if (estado === 'bueno') {
    mensaje = `El clima es <span class="bueno">bueno</span> para practicar ${deporte}.`;
  } else if (estado === 'regular') {
    mensaje = `El clima es <span class="regular">regular</span> para practicar ${deporte}.`;
  } else {
    mensaje = `El clima es <span class="malo">malo</span> para practicar ${deporte}.`;
  }
  mensaje += `<br><small>Temperatura: ${clima.temperatura}°C, Lluvia: ${clima.lluvia}mm</small>`;
  resultado.innerHTML = mensaje;
}