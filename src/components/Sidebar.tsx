import React from 'react'
import { Button } from './ui/button'
import HeartIcon from './icons/heart'
import Link from 'next/link'
import cloudinary from 'cloudinary'
import { Folder } from '@/app/albums/page'

async function Sidebar() {

    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[]
    };
  return (
    <div className='w-[20%]'>
      <div className="pb-12 ">
       <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href='/gallery'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
</svg>

               Gallery
               </Link>
            </Button>
            
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href={'/albums'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
</svg>

              Albums
              </Link>
            </Button>
            {folders.map((folder) =>(
               <Button variant='ghost'  
               asChild className="w-full justify-start gap-2" key={folder.name}>
                <Link className='pl-8' href={`/albums/${folder.path}`}>
            {folder.name}
              </Link>
               </Button>))}
            
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href={'/favorites'}>
            <HeartIcon />

              Favorites
              </Link>
            </Button>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Sidebar
