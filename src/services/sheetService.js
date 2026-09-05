// Reemplaza esta URL con la que te dio Google Apps Script al implementar
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmoVnh2T7qvGR4w5Brg0OWaJFfy4rGlb2kV_jaQ4wg-Xr8BqJrSbUKC1vFiZW_SWXs6Q/exec';

/**
 * Registra y guarda la información de las respuestas del diagnóstico en Google Sheets.
 * @param {Object} data Datos consolidados reportados desde Step5Report
 */
export const saveResponsesToGoogleSheets = async (data) => {
  try {
    const payload = {
      fecha: data.fecha || new Date().toLocaleString('es-CO'),
      area: data.area || 'Sin especificar',
      termometroScore: data.termometroScore ?? 0,
      termometroNivel: data.termometroNivel || 'N/A',
      puntajeGeneral: data.puntajeGeneral ?? 0,
      nivelGeneral: data.nivelGeneral || 'N/A',
      metaSeleccionada: data.metaSeleccionada || 'N/A',
      pilarPrioritario: data.pilarPrioritario || 'Sin definir',
      pilarScore: data.pilarScore ?? 0,
      dimensiones: data.dimensiones || []
    };

    // Usamos text/plain para evitar bloqueos por CORS en Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    return { success: true };
  } catch (error) {
    console.error("Error al enviar datos a Google Sheets:", error);
    return { success: false, error };
  }
};

// Se mantiene este alias por compatibilidad con llamados anteriores
export const recordDataToGoogleSheet = saveResponsesToGoogleSheets;