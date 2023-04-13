import React, { useState, useEffect, useRef } from "react"
import { trueTypeOf } from "./utils"
import './scss/_animate-on-scroll.scss'

type alphanumeric = number | string;

interface AnimateOnScrollOptions {
    type?: string,
    duration?: alphanumeric,
    delay?: alphanumeric,
    timing?: string
}

type AnimateOnScrollProps = {
    children: React.ReactElement<any, any>,
    reappear?: boolean,
    options?: AnimateOnScrollOptions,
    threshold?: number
}

const useElementOnScreen = (options: { threshold: number, reappear: boolean }) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const makeAppear = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setIsVisible(true)
        })
    }

    const makeAppearRepeating = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            setIsVisible(entry.isIntersecting)
        })
    }

    const callback = options.reappear ? makeAppearRepeating : makeAppear

    useEffect(() => {
        const containeRefCurrent = containerRef.current
        const observer = new IntersectionObserver(callback, options)
        if (containeRefCurrent) observer.observe(containeRefCurrent)
        return () => {
            if (containeRefCurrent) observer.unobserve(containeRefCurrent)
        }
    }, [containerRef, options, callback])

    return [containerRef, isVisible]
}

const AnimateOnScroll = ({
    children,
    reappear = false,
    options = {},
    threshold = 0.5,
}: AnimateOnScrollProps) => {
    options.type = options.type || "fade-in"
    options.duration = options.duration || "default"
    options.delay = options.delay || "default"
    options.timing = options.timing || "ease-out"
    const [containerRef, isVisible] = useElementOnScreen({
        threshold: threshold,
        reappear: reappear,
    })
    const classes = `animation animation__type-${options.type} ${isVisible ? "in-view" : ''
        } ${trueTypeOf(options.duration) === "string"
            ? `animation__duration-${options.duration}`
            : ''
        } ${trueTypeOf(options.delay) === "string"
            ? `animation__delay-${options.delay}`
            : ''
        }`
    let styles: any = {
        '--transition-timing': options.timing
    };
    if (trueTypeOf(options.duration) === 'number') {
        styles['--transition-duration'] = `${options.duration}ms`
    }
    if (trueTypeOf(options.delay) === 'number') {
        styles['--transition-delay'] = `${options.delay}ms`
    }

    return (
        <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className={classes}
            style={styles ? styles : null}
        >
            {children}
        </div>
    )
}

export default AnimateOnScroll
