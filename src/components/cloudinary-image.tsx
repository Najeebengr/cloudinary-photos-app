'use client'
import HeartIcon from '@/components/icons/heart'
import { CldImage, CldImageProps } from 'next-cloudinary'
import React, { useState, useTransition } from 'react'
import setAsFavoriteAction from '../app/gallery/actions'
import FullHeartIcon from '@/components/icons/fullHeart'
import { searchResult } from '../app/gallery/page'
import ImageMenu from './image-menu'

function CloudinaryImage(
 props: {
    imgdata: searchResult; onUnheart?: (
  unheartedResource: searchResult
)=>void; }& Omit <CldImageProps, "src">) {
    const [transition, startTransition] = useTransition();
    const {imgdata , onUnheart, ...cldImageProps} = props;
    const [isFavorited, setIsFavorites] =useState(imgdata.tags.includes("favorite"))
    
return (
    <div className='relative'>
        <CldImage
        {...cldImageProps}
        src={imgdata.public_id}
      />
      {
        isFavorited ? 
        (
        <FullHeartIcon className='absolute top-2 left-2 hover:cursor-pointer text-red-600 hover:text-white'
      onClick={()=>{
        onUnheart?.(imgdata);
        setIsFavorites(false);
        startTransition(()=>{
            setAsFavoriteAction(imgdata.public_id, false);
        })
      }}
      />
    )
        :
        (
        <HeartIcon className='absolute top-2 left-2 hover:cursor-pointer hover:text-red-600'
      onClick={()=>{
        setIsFavorites(true);
        startTransition(()=>{
            setAsFavoriteAction(imgdata.public_id, true);
        })
      }}
      />
    )}
    <ImageMenu image={imgdata} />
      
    </div>
  )
}

export default CloudinaryImage
