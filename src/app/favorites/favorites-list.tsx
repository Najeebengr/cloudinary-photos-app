'use client'

import React, { useEffect, useState } from 'react'
import CloudinaryImage from '../gallery/cloudinary-image';
import { searchResult } from '../gallery/page';
import ImageGrid from '@/components/image-grid';


 function FavoritesList({InitialResources,}: {InitialResources: searchResult[]}) {
    const [resources, setResources] = useState(InitialResources);
    useEffect(()=>{
        setResources(InitialResources)
    }, [InitialResources])
    return (

           <ImageGrid
           images={resources}
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

export default FavoritesList
