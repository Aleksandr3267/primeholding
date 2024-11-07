import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './AnimatedText.css';
// eslint-disable-next-line react/prop-types
function AnimatedText({ as: Element = 'h1', href, children, className, id, dataSpeed, dataMargin }) {
    const textRef = useRef(null);
    const textRefInner = useRef(null);
    const location = useLocation();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textRef.current.classList.add('animate');
                } else {
                    // textRef.current.classList.remove('animate');
                }
                if (textRefInner.current && textRefInner.current.classList.contains('text-fade-in')) {
                    textRef.current.style.overflow = 'hidden';
                }
            });
        });
        if (textRef.current) {
            observer.observe(textRef.current);
        }
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, [location]);
    return (
        <div data-speed={dataSpeed} data-margin={dataMargin} id={id} ref={textRef}>
            <Element href={href} className={` ${className}`} ref={textRefInner}>{children}</Element>
        </div>
    );
}

export default AnimatedText;
