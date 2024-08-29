
import React from 'react'
import cloudinary from 'cloudinary'
import { AlbumCard } from './album-card';

export type Folder =  {name: string, path: string}

async function AlbumsPage() {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[]
    };

    

    return (
        <section>
            <div className='flex flex-col gap-8'>

            <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-bold'>
                    Albums
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-8'>
            {folders.map((folder: Folder) =>( <AlbumCard key={folder.path} folder={folder} />))}
            </div>
            </div>
        </section>
    )
}

export default AlbumsPage
