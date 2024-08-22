
import React from 'react'
import UploadButton from './upload-button';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from './cloudinary-image';

type searchResult = {
    public_id : string
}

async function GalleryPage() {
    const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(5)
  .execute() as {resources: searchResult[];}
    return (
        <section>
            <div className='flex flex-col gap-8'>

            <div className='flex justify-between mt-5 mx-8'>
                <h1 className='text-2xl font-bold'>
                    Gallery
                </h1>
            <UploadButton />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {results.resources.map((result)=>(
                    <CloudinaryImage
                    key={result.public_id}
                    src={result.public_id}
                    alt = "An image of something"
                    width = {400}
                    height ={300}
                    />
                ))}
            </div>
            </div>
        </section>
    )
}

export default GalleryPage
