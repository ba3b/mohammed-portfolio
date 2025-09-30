'use client'

import { useEffect, useState } from 'react'

interface UseScrollReturn {
  scrollY: number
  scrollDirection: 'up' | 'down'
  scrollProgress: number
  isScrolling: boolean
}

export function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight

      // Update scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      // Update scroll values
      setScrollY(currentScrollY)
      setScrollProgress(documentHeight > 0 ? Math.min(currentScrollY / documentHeight, 1) : 0)
      setIsScrolling(true)

      lastScrollY = currentScrollY

      // Reset scrolling state
      const timeoutId = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      return () => clearTimeout(timeoutId)
    }

    // Set initial values
    setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollY,
    scrollDirection,
    scrollProgress,
    isScrolling,
  }
}
