import React, { useState } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

function FormPdf() {
  const [formData, setFormData] = useState({});
  const pdfExportComponent = React.useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSavePdf = () => {
    pdfExportComponent.current.save();
  };

  return (
    <div>
      <PDFExport ref={pdfExportComponent}>
        <form className='bg-black'>
          <input name="name" type="text" onChange={handleChange} />
          <input name="email" type="email" onChange={handleChange} />
          <textarea name="message" onChange={handleChange} />
        </form>
      </PDFExport>
      <button onClick={handleSavePdf}>Save as PDF</button>
    </div>
  );
}

export default FormPdf;