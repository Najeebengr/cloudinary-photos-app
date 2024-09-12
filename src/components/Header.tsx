import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto capitalize">
            <Link href={'/'} className='flex gap-3 items-center font-bold'>
            <Image src={'/icon.png'} height={40} width={40} alt='Photo Album'/> Najeeb Photos Album
            </Link>
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
