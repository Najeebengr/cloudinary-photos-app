"use server"

import cloudinary from 'cloudinary';
import { searchResult } from "@/app/gallery/page";

export async function addImageToAlbum(image: searchResult, album: string) {
    // Ensure the folder exists
    await cloudinary.v2.api.create_folder(album);

    const updateResult = await cloudinary.v2.api.update(image.public_id, {
        asset_folder: album, 
    });

}
