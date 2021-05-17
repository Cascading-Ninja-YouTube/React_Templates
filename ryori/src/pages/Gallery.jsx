import React from 'react'
import GalleryComponent from '../components/Gallery/Gallery'
function Gallery() {
    window.scrollTo(0,0)
    return (
        <div>
               <div className="alteranteLanding galleryLanding">
         <h3> Our Gallery</h3>
        </div>
        <GalleryComponent/>
        </div>
    )
}

export default Gallery
