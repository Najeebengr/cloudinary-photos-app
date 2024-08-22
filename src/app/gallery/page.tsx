'use client'
import { CldUploadButton } from 'next-cloudinary';
import React from 'react'
import { UploadResult } from '../page';
import { Button } from '@/components/ui/button';

function page() {
    return (
        <section>
            <div className='flex justify-between mt-5 mx-8'>
                <h1 className='text-2xl font-bold'>
                    Gallery
                </h1>
                <Button asChild>
                    <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>

                <CldUploadButton onSuccess={(results: UploadResult) => {
                    if (typeof results.info !== 'string' && results.info?.public_id) {
                        // setImageId(results.info.public_id);
                    } else {
                        console.log('No public_id found');
                    }
                }
                } uploadPreset="ndlzctdz" />
                    </div>
                </Button>
            </div>
        </section>
    )
}

export default page
