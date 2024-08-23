
import React from 'react'
import cloudinary from 'cloudinary'
import { searchResult } from '../gallery/page';
import FavoritesList from './favorites-list';
import ForceRefresh from '@/components/force-refresh';


async function FavoritesPage() {
    const results = await cloudinary.v2.search
  .expression('resource_type:image AND tags=favorite')
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute() as {resources: searchResult[];}
    return (
        <section>
            <ForceRefresh />
            <div className='flex flex-col gap-8'>

            <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-bold'>
                    Favorite Images
                </h1>
            </div>

<FavoritesList 
InitialResources={results.resources}
/>

          
            </div>
        </section>
    )
}

export default FavoritesPage
