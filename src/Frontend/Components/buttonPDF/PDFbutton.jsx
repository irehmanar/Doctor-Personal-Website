import React from 'react'
import './PDFbutton.css'
import downloadS3File from '../../../aws/downloadfile'
function PDFbutton() {
  return (
    <div className='pdfButtonContainer'>
    <a>
        <button className='PDFbutton' onClick={downloadS3File}>Download Prescription</button>
    </a>
</div>
  )
}

export default PDFbutton
