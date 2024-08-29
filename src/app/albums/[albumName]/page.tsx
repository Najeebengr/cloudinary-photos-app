
import React from 'react'
import cloudinary from 'cloudinary'
import AlbumGrid from './album-grid';
import ForceRefresh from '@/components/force-refresh';

export type searchResult = {
    public_id : string
    tags : string[]
}

async function GalleryPage({params: {albumName}}: {
    params: {
        albumName: string
    }
}) {
    const results = (await cloudinary.v2.search
  .expression(`resource_type:image AND folder = ${albumName}`)
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute()) as {resources: searchResult[]}


    return (
        <section>
            
        <ForceRefresh />
            <div className='flex flex-col gap-8'>

            <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-bold'>
                    Album {albumName}
                </h1>
            </div>
            <AlbumGrid
            images={results.resources}
            />
           
            </div>
        </section>
    )
}

export default GalleryPage
