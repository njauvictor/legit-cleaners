"use client"

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting
        setIsVisible(isElementVisible)
        
        if (isElementVisible && triggerOnce) {
          setHasAnimated(true)
        }
        
        if (!isElementVisible && !triggerOnce) {
          setHasAnimated(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible, hasAnimated }
}

export function useScrollAnimationWithDelay<T extends HTMLElement = HTMLDivElement>(
  delay: number = 0,
  options: UseScrollAnimationOptions = {}
) {
  const { ref, isVisible } = useScrollAnimation<T>(options)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setShouldAnimate(false)
    }
  }, [isVisible, delay])

  return { ref, shouldAnimate }
}
