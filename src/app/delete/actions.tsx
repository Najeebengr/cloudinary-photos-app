"use server"

import cloudinary from 'cloudinary';

export async function deleteImage(public_id: string) {
  try {
    const result = await cloudinary.v2.api.delete_resources([public_id]);

    if (result) {
      console.log("Deleted!");
    } else {
      console.error("Failed to delete the image.");
    }

    return result; // Return the result to the client-side
  } catch (error) {
    console.error("Error deleting the image:", error);
    throw new Error("Failed to delete the image.");
  }
}
