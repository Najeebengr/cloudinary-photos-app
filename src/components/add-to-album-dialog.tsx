import { searchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { forwardRef, useState } from "react"
import { addImageToAlbum } from "./actions"

  const AddToAlbumDialog = forwardRef(({ image , onClose }: {image: searchResult, onClose: ()=> void}, ref) => {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(newOpenState)=> {
      setOpen(newOpenState)
      if(!newOpenState){
        onClose();
      }

    }}>
      <DialogTrigger asChild className="w-full" >
        <Button variant="ghost" className="p-0  w-full">
        <FolderPlus />
        <span className="pl-2">Add to Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
            onChange={(e)=> setAlbumName(e.currentTarget.value)  }
              id="album-name"
              value={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
          onClick={async ()=>{
            onClose();
            setOpen(false);
            await addImageToAlbum(image , albumName);
          }}
          type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
  })
  AddToAlbumDialog.displayName = 'AddToAlbumDialog';
  export default AddToAlbumDialog;
