
import React from 'react'
import UploadButton from './upload-button';
import cloudinary from 'cloudinary'
import GridGallery from './grid-gallery';

export type searchResult = {
    public_id : string
    tags : string[]
}

async function GalleryPage() {
    const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute() as {resources: searchResult[];}


    return (
        <section>
            <div className='flex flex-col gap-8'>

            <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-bold'>
                    Gallery
                </h1>
            <UploadButton />
            </div>
            <GridGallery
            images={results.resources}
            />
           
            </div>
        </section>
    )
}

export default GalleryPage
