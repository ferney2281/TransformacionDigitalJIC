import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Servicio encargado de exportar elementos HTML estructurados a PDF 
 * calculando saltos de página limpios por sección.
 * 
 * @param {HTMLElement} containerElement - Elemento contenedor del reporte.
 * @param {string} filename - Nombre del archivo PDF a guardar.
 */
export const exportReportToPDF = async (containerElement, filename = 'Reporte_Diagnostico.pdf') => {
  if (!containerElement) {
    throw new Error('El elemento contenedor no está disponible.');
  }

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 10; // Margen superior e inferior en mm
  const printableWidth = pageWidth - margin * 2;

  // Selecciona las secciones marcadas como atómicas para evitar cortes
  const sections = containerElement.querySelectorAll('.pdf-section');
  
  // Si no se usó la clase .pdf-section, cae en fallback del contenedor completo
  const elementsToProcess = sections.length > 0 ? Array.from(sections) : [containerElement];

  let currentY = margin;

  for (let i = 0; i < elementsToProcess.length; i++) {
    const section = elementsToProcess[i];

    const canvas = await html2canvas(section, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const imgHeight = (canvas.height * printableWidth) / canvas.width;

    // Si la sección excede el alto disponible de la página actual, salta de página
    if (currentY + imgHeight > pageHeight - margin && currentY !== margin) {
      pdf.addPage();
      currentY = margin;
    }

    pdf.addImage(imgData, 'PNG', margin, currentY, printableWidth, imgHeight);
    currentY += imgHeight + 5; // 5mm de espacio entre secciones
  }

  pdf.save(filename);
};