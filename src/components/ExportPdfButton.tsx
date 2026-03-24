
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2pdf from 'html2pdf.js';

interface ExportPdfButtonProps {
  targetElementId: string;
  filename?: string;
}

const ExportPdfButton = ({ targetElementId, filename = "rugby-standings" }: ExportPdfButtonProps) => {
  const handleExport = () => {
    const element = document.getElementById(targetElementId);
    
    if (!element) {
      console.error(`Element with ID ${targetElementId} not found`);
      return;
    }
    
    // Create a clone of the element to modify for export
    const clonedElement = element.cloneNode(true) as HTMLElement;
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.width = '100%';
    tempContainer.appendChild(clonedElement);
    document.body.appendChild(tempContainer);
    
    // Apply styles to ensure everything fits and looks good
    clonedElement.style.width = '100%';
    clonedElement.style.pageBreakInside = 'avoid';
    clonedElement.style.breakInside = 'avoid';
    
    // Find all table rows and ensure they don't break across pages
    const rows = clonedElement.querySelectorAll('tr');
    rows.forEach(row => {
      row.style.pageBreakInside = 'avoid';
      row.style.breakInside = 'avoid';
      row.style.height = '48px'; // Increased height for better spacing
    });
    
    // Find all cells and adjust padding for PDF
    const cells = clonedElement.querySelectorAll('td, th');
    cells.forEach(cell => {
      (cell as HTMLElement).style.padding = '8px 10px';
      (cell as HTMLElement).style.fontSize = '14px';
    });
    
    // Make logos bigger and clearer for PDF
    const logos = clonedElement.querySelectorAll('img');
    logos.forEach(logo => {
      logo.style.width = '32px';
      logo.style.height = '32px';
      logo.style.minWidth = '32px';
      logo.style.minHeight = '32px';
      logo.setAttribute('crossorigin', 'anonymous');
      
      // Force high-quality image rendering
      logo.style.imageRendering = 'high-quality';
      logo.style.objectFit = 'contain';
    });
    
    // Enhance text clarity
    const textElements = clonedElement.querySelectorAll('span, p, h1, h2, h3, div');
    textElements.forEach(el => {
      (el as HTMLElement).style.textRendering = 'optimizeLegibility';
      (el as HTMLElement).style.fontKerning = 'normal';
    });
    
    const opt = {
      margin: [10, 10],
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 1.0 }, // Maximum image quality
      html2canvas: { 
        scale: 2, // Increased scale for higher resolution
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        logging: true, // Enable logging for debugging
        backgroundColor: '#ffffff',
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        dpi: 300, // Higher DPI
        x: 0,
        y: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a3', // Larger format for better quality
        orientation: 'landscape',
        compress: false, // Don't compress to maintain quality
        precision: 16, // Higher precision for better font rendering
        hotfixes: ["px_scaling"],
        putOnlyUsedFonts: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'], avoid: ['tr', 'td'] }
    };
    
    html2pdf().set(opt).from(clonedElement).save().then(() => {
      // Clean up the temporary container after PDF is generated
      document.body.removeChild(tempContainer);
    }).catch(err => {
      console.error("Error generating PDF:", err);
      document.body.removeChild(tempContainer);
    });
  };
  
  return (
    <Button 
      onClick={handleExport}
      className="bg-[#0F1A2A] hover:bg-[#1c304d] text-white"
    >
      <Download className="mr-2 h-4 w-4" />
      Export as PDF
    </Button>
  );
};

export default ExportPdfButton;
