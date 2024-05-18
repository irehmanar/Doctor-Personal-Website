// import React from 'react';
// import './ImageGrid.css';

// function ImageGrid({containerId}) {
//     function handleImageClick(event) {
//         const expandImg = document.getElementById("expandedImg");
//         const imgText = document.getElementById("imgtext");
//         expandImg.src = event.target.src;
//         imgText.innerHTML = event.target.alt;
//         expandImg.parentElement.style.display = "block";
//     }

//     return (
//         <div >
//             <div className="row">
//                 <div className="column" style={{background:'red'}}>
//                     <img src="https://images.pexels.com/photos/4497733/pexels-photo-4497733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nature" onClick={handleImageClick} />
//                 </div>
//                 <div className="column">
//                     <img src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Snow" onClick={handleImageClick} />
//                 </div>
//                 <div className="column">
//                     <img src="https://images.pexels.com/photos/6550823/pexels-photo-6550823.jpeg" alt="Mountains" onClick={handleImageClick} />
//                 </div>
//                 <div className="column">
//                     <img src="https://images.pexels.com/photos/4497733/pexels-photo-4497733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lights" onClick={handleImageClick} />
//                 </div>
//             </div>

//             {/* The expanding image container */}
//             <div className="containerimage">
//                 {/* Close the image */}
//                 <span className="closebtn" onClick={() => document.getElementById("expandedImg").parentElement.style.display = "none"}>&times;</span>

//                 {/* Expanded image */}
//                 <img id={containerId} className="expandedImg" />

//                 {/* Image text */}
//                 <div id="imgtext" className="imgtext"></div>
//             </div>
//         </div>
//     );
// }

// export default ImageGrid;




import React from 'react';
import './ImageGrid.css';

function ImageGrid() {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img src="https://images.pexels.com/photos/4497733/pexels-photo-4497733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nature" download/>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Snow" download/>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/6550823/pexels-photo-6550823.jpeg" alt="Mountains" download/>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4497733/pexels-photo-4497733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lights" download/>
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;
