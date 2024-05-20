import React from 'react'
import './PDFbutton.css'
function PDFbutton({pdfLink}) {
  return (
    <div className='pdfButtonContainer'>
    <a href={pdfLink} download={pdfLink}>
        <button className='PDFbutton'>{pdfLink}</button>
    </a>
</div>
  )
}

export default PDFbutton
