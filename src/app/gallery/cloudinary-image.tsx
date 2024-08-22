'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'

function CloudinaryImage(props:any) {
  return (
    <CldImage
    {...props}
  />
  )
}

export default CloudinaryImage
