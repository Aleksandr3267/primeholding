/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
export const ScrollContext = createContext();


export function ScrollProvider({ children, location, setScrollInstancesD }) {
    const scrollRef = useRef(null);
    const [scrollInstance, setScrollInstance] = useState(null);

    useEffect(() => {
        const newScrollInstance = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.05,
        });
        setScrollInstance(newScrollInstance);
        setScrollInstancesD(newScrollInstance);
        const timeoutId = setTimeout(() => {
            newScrollInstance.update();
        }, 700);
        return () => {
            clearTimeout(timeoutId);
            newScrollInstance.destroy();
        };
    }, [location]);

    useEffect(() => {
        const onScrollParallax = () => {
            if (scrollInstance) {
                const elements = document.querySelectorAll("#paralax-text");
                elements.forEach((element) => {
                    const elementPosition = element.getBoundingClientRect();
                    if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
                        const elementTop = elementPosition.top - window.innerHeight;
                        const parallaxOffset = parseFloat(element.getAttribute('data-speed')) || 0.6;
                        const parallaxValue = elementTop * parallaxOffset / 3;
                        element.style.transform = `translateY(${parallaxValue}px)`;
                    }
                });
            }
        };
        if (scrollInstance) {
            scrollInstance.on("scroll", onScrollParallax);
        }
        return () => {
            if (scrollInstance) {
                scrollInstance.off("scroll", onScrollParallax);
            }
        };


    }, [scrollInstance]);
    return (
        <ScrollContext.Provider value={scrollInstance}>
            <div className="app" ref={scrollRef}>
                {children}
            </div>
        </ScrollContext.Provider>
    );
}
