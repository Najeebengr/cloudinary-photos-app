import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folder } from "./page"
import Link from "next/link"

export function AlbumCard({folder}: {folder: Folder}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} images.</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline"><Link href={`albums/${folder.name}`}>View Album</Link></Button>
      </CardFooter>
    </Card>
  )
}
