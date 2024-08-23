"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function ForceRefresh() {
  const router = useRouter();
   useEffect(()=>{
    router.refresh();
   }, [])
   return <></>
}

export default ForceRefresh
