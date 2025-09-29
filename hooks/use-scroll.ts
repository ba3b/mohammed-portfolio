'use client'

import { useEffect, useState, useCallback } from 'react'

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

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight

    // Update scroll direction
    if (currentScrollY > scrollY) {
      setScrollDirection('down')
    } else if (currentScrollY < scrollY) {
      setScrollDirection('up')
    }

    // Update scroll values
    setScrollY(currentScrollY)
    setScrollProgress(Math.min(currentScrollY / documentHeight, 1))
    setIsScrolling(true)

    // Reset scrolling state after a delay
    const timeoutId = setTimeout(() => {
      setIsScrolling(false)
    }, 150)

    return () => clearTimeout(timeoutId)
  }, [scrollY])

  useEffect(() => {
    // Set initial values
    const initialScrollY = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight

    setScrollY(initialScrollY)
    setScrollProgress(Math.min(initialScrollY / documentHeight, 1))

    // Add scroll listener with throttling
    let ticking = false

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [handleScroll])

  return {
    scrollY,
    scrollDirection,
    scrollProgress,
    isScrolling,
  }
}

// Hook for scroll-based animations with easing
export function useScrollAnimation(threshold = 0) {
  const { scrollY, scrollProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(scrollY > threshold)
  }, [scrollY, threshold])

  // Smooth easing functions
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const easeOutQuart = (t: number) => {
    return 1 - Math.pow(1 - t, 4)
  }

  return {
    isVisible,
    progress: scrollProgress,
    smoothProgress: easeInOutCubic(scrollProgress),
    bounceProgress: easeOutQuart(scrollProgress),
  }
}
