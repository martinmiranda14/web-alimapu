const MONTHS_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

const DAYS_ES = [
  'domingo', 'lunes', 'martes', 'miércoles',
  'jueves', 'viernes', 'sábado',
];

export function formatDateLong(date: Date): string {
  const day = date.getUTCDate();
  const month = MONTHS_ES[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const weekday = DAYS_ES[date.getUTCDay()];
  return `${weekday} ${day} de ${month} de ${year}`;
}

export function formatDateShort(date: Date): string {
  const day = date.getUTCDate();
  const month = MONTHS_ES[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} de ${month}, ${year}`;
}

export function formatDateCompact(date: Date): string {
  return date.toLocaleDateString('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function isUpcoming(date: Date): boolean {
  return date >= new Date();
}
