"use client"

import { useEffect, useRef } from 'react'

export function ScrollingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 1
      if (position <= -banner.scrollWidth / 2) {
        position = 0
      }
      banner.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="overflow-hidden bg-primary text-primary-foreground py-2">
      <div ref={bannerRef} className="whitespace-nowrap inline-block">
        {[...Array(2)].map((_, index) => (
          <span key={index} className="inline-block px-4">
            🔥 Hot Deal: 10% off all PLA filaments! Use code PLA10 at checkout
          </span>
        ))}
      </div>
    </div>
  )
}

