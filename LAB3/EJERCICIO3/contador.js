
const eventoFecha= new Date("2024-08-15");
function calcularDiasFaltantes(fechaFuturo) {
  const hoy = new Date();
  
  hoy.setHours(0, 0, 0, 0);
  fechaFuturo.setHours(0, 0, 0, 0);

  const segundosEnUnDia = 60 * 60 * 24; 

  const diferenciaEnSegundos = (fechaFuturo - hoy) / 1000;
  
  const diasFaltantes = Math.ceil(diferenciaEnSegundos / segundosEnUnDia);
  return diasFaltantes;
}
function mostrarDiasFaltantes() {
  const contador = document.getElementById('contador');
  const diasFaltantes = calcularDiasFaltantes(eventoFecha);

  if (diasFaltantes > 0) {
    contador.textContent = `Faltan ${diasFaltantes} días para el aniversario de Arequipa.`;
  } else if (diasFaltantes === 0) {
    contador.textContent = "¡Feliz Aniversario de Arequipa!";
  } else {
    contador.textContent = "El aniversario de Arequipa ya pas+ó";
  }
}

document.addEventListener('DOMContentLoaded', mostrarDiasFaltantes);

