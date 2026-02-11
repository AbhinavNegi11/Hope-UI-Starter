export function printSectionAsImage(sectionId: string, printTitle = "Print QR Codes") {
    const section = document.getElementById(sectionId);
    if (!section) return;
    // Clone the section to avoid modifying the DOM
    const clone = section.cloneNode(true) as HTMLElement;
    const canvases = section.querySelectorAll('canvas');
    const cloneCanvases = clone.querySelectorAll('canvas');
    canvases.forEach((canvas, idx) => {
        const img = document.createElement('img');
        img.src = (canvas as HTMLCanvasElement).toDataURL();
        img.style.height = canvas.style.height;
        img.style.width = canvas.style.width;
        // Replace the canvas in the clone with the image
        cloneCanvases[idx].parentNode?.replaceChild(img, cloneCanvases[idx]);
    });
    const printContents = clone.innerHTML;
    const printWindow: any = window.open('', '', 'height=600,width=800');
    if (printWindow && printContents) {
        printWindow.document.write('<html><head><title>' + printTitle + '</title>');
        printWindow.document.write('<style>body{font-family:sans-serif;} h5{padding-top:12px;text-align:center;} .qr-col{display:flex;flex-direction:column;align-items:center;margin-bottom:20px;} .row{display:flex;flex-wrap:wrap;} .col-md-6{flex:0 0 50%;max-width:50%;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="row">' + printContents + '</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
}

export function printData() {
    printSectionAsImage('qr-print-section', 'Print QR Codes');
}