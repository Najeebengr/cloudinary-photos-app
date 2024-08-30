'use client'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import React, { useState, useEffect } from 'react'
import { deleteImage } from './actions'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

function DeletePage({
    searchParams: {publicId},
}:{
    searchParams: {
        publicId: string
    }
}) {
    const { toast } = useToast();
    const router = useRouter();
    const [timer, setTimer] = useState(3);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let intervalId: any;

        if (isDeleting && timer > 0) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000); // Update every second
        } else if (timer === 0) {
            router.push('/gallery');  // Redirect to the gallery
        }

        return () => clearInterval(intervalId);  // Cleanup interval on component unmount
    }, [timer, isDeleting, router]);

    const handleDeleteClick = async () => {
        const result = await deleteImage(publicId);  // Await the deletion result
        if (result) {
            toast({
                variant: "destructive",
                title: `Image ${publicId} Deleted Successfully!`,
                description: `Redirecting to Gallery in 3 seconds`,
            });
            setIsDeleting(true);  // Start countdown
            setTimer(3);  // Reset timer
        }
    };

    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between mt-5'>
                    <h1 className='text-2xl font-bold'>
                        Delete {publicId}
                    </h1>
                </div>
                <Button 
                    onClick={handleDeleteClick} 
                    variant='destructive' 
                    className='w-44 flex justify-center gap-3'
                    disabled={isDeleting} // Disable button while deleting
                >
                    <Trash />
                    Delete Image
                </Button>
                <div className="grid grid-cols-2 gap-12">
                    <CldImage src={publicId} height={200} width={300} alt='Some Image' priority />
                </div>
            </div>
        </section>
    );
}

export default DeletePage;
