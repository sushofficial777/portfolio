import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
export default function SmoothScroll() {


    useEffect(() =>{
        const lenis = new Lenis();
        function raf(time) {
          lenis.raf(time, true  )
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])

  return (
    <div></div>
  )
}