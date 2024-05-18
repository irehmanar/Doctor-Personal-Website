import React from 'react'
import './PDFbutton.css'
function PDFbutton({pdfLink}) {
  return (
    <div className='pdfButtonContainer'>
    <a href={pdfLink} download="filename.pdf">
        <button className='PDFbutton'>Download PDF</button>
    </a>
</div>
  )
}

export default PDFbutton
