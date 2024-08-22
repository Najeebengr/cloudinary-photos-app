'use client'
import { CldUploadButton, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
  event?: string;
    info?: string | CloudinaryUploadWidgetInfo;
};
 
export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">     
<CldUploadButton onSuccess={(results: UploadResult)=>{
   if (typeof results.info !== 'string' && results.info?.public_id) {
    setImageId(results.info.public_id);
  } else {
    console.log('No public_id found');
  }
}
} uploadPreset="ndlzctdz" />
{
  imageId && (<CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>)
}
    </main>
  );
}
