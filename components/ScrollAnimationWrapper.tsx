"use client"

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  className?: string
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'rotate'
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
  duration?: number
}

export default function ScrollAnimationWrapper({
  children,
  className = '',
  animationType = 'fade-up',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  delay = 0,
  duration = 600
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce
  })

  const getAnimationClasses = () => {
    const baseClasses = []
    
    switch (animationType) {
      case 'fade-up':
        baseClasses.push('scroll-animate')
        if (isVisible) baseClasses.push('scroll-animate-visible')
        break
      case 'fade-left':
        baseClasses.push('scroll-animate-left')
        if (isVisible) baseClasses.push('scroll-animate-left-visible')
        break
      case 'fade-right':
        baseClasses.push('scroll-animate-right')
        if (isVisible) baseClasses.push('scroll-animate-right-visible')
        break
      case 'scale':
        baseClasses.push('scroll-animate-scale')
        if (isVisible) baseClasses.push('scroll-animate-scale-visible')
        break
      case 'rotate':
        baseClasses.push('scroll-animate-rotate')
        if (isVisible) baseClasses.push('scroll-animate-rotate-visible')
        break
    }

    // Add delay class if specified
    if (delay > 0) {
      const delayClass = `delay-${Math.min(Math.round(delay / 100) * 100, 1000)}`
      baseClasses.push(delayClass)
    }

    // Add duration class if specified (convert ms to nearest standard)
    if (duration !== 600) {
      let durationClass = ''
      if (duration <= 300) durationClass = 'duration-300'
      else if (duration <= 500) durationClass = 'duration-500'
      else if (duration <= 700) durationClass = 'duration-700'
      else if (duration <= 1000) durationClass = 'duration-1000'
      else durationClass = 'duration-1500'
      baseClasses.push(durationClass)
    }

    return baseClasses.join(' ')
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}

interface StaggerAnimationWrapperProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function StaggerAnimationWrapper({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: StaggerAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce
  })

  return (
    <div
      ref={ref}
      className={`stagger-child ${isVisible ? 'stagger-child-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
