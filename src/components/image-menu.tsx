import { FolderPlus, Pencil } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import MenuIcon from "./icons/menu"
import AddToAlbumDialog from "./add-to-album-dialog"
import { searchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
  
  export default function ImageMenu({image}: {image: searchResult}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button className="w-8 h-8 p-0" variant="ghost"><MenuIcon /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuGroup className="w-full">
            <DropdownMenuItem asChild  className="w-full justify-center">
              <AddToAlbumDialog image={image} onClose={()=> setOpen(false)} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild  className="w-full justify-start gap-4 cursor-pointer">
              <Link href={`/edit/?publicId=${encodeURIComponent(image.public_id)}`} > 
              <Pencil className="w-6" />
              Edit </Link> 
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    )
  }
  