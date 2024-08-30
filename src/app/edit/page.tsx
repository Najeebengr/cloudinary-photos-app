'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Ghost } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

function EditPage({
    searchParams: {publicId},
}:{
    searchParams: {
        publicId: string
    }
}) {
    const [transformation, setTransformation] = useState<undefined | "generative-remove" | "blur" | "grey" | "pixelate" | "bg-remover">();
    const [pendindPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");
  return (
    <section>
    <div className='flex flex-col gap-8'>

    <div className='flex justify-between mt-5'>
        <h1 className='text-2xl font-bold'>
            Edit {publicId}
        </h1>
    </div>
    <div className='flex gap-4'>
    <div className="flex flex-col gap-3">
    <Button className='w-48' onClick={()=> {setTransformation("generative-remove"); setPrompt(pendindPrompt)}}>Apply Generative Remove </Button>
    <label htmlFor="">Prompt</label>
    <Input className='w-40' value={pendindPrompt} onChange={(e)=> setPendingPrompt(e.currentTarget.value)} />
    </div>
    <Button className='w-24' onClick={()=>setTransformation('blur')}>Apply Blur </Button>
    <Button  className='w-36' onClick={()=>setTransformation('grey')}>Convert to Grey </Button>
    <Button  className='w-24' onClick={()=>setTransformation('pixelate')}>Pixelate </Button>
    <Button  className='w-40' onClick={()=>setTransformation('bg-remover')}>Remove Background </Button>
    <Button variant="destructive" className='w-24' onClick={()=>setTransformation(undefined)}>Clear All </Button>
    </div>
    <div className="grid grid-cols-2 gap-12">
    <CldImage src={publicId} height={200} width={300} alt='Some Image' priority />
    {transformation !== undefined && (
    <CldImage
     src={publicId}
      height={200} 
      width={300}
       alt='Some Image' 
       {...(transformation === 'generative-remove' ? { remove: {prompt: prompt} } : {})}
       {...(transformation === 'blur' ? { blur: "1200" } : {})}
       {...(transformation === 'grey' ? { grayscale: true } : {})}
       {...(transformation === 'pixelate' ? { pixelate: true } : {})}
       {...(transformation === 'bg-remover' ? { removeBackground: true } : {})}
       priority
    />
    )}
    </div>
  
    </div>
</section>
  )
}

export default EditPage
