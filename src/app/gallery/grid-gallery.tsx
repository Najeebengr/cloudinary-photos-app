'use client'
import React from 'react'
import CloudinaryImage from './cloudinary-image';
import ImageGrid from '@/components/image-grid';
import { searchResult } from './page';


 function GridGallery({images}: {images: searchResult[]}) {


    return (
           <ImageGrid
           images = {images}
           getImage={(imgData: searchResult)=>{
            return (
                <CloudinaryImage
        imgdata ={imgData}
key={imgData.public_id}
alt = "An image of something"
width = {400}
height ={300}
priority
        />
            )
           }}
           />
    )
}

export default GridGallery
