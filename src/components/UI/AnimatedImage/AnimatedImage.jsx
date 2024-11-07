import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './AnimatedImage.css';
// eslint-disable-next-line react/prop-types
function AnimatedImage({ as: Element = 'div', children, className }) {
    const imageRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    imageRef.current.classList.add('animate-image');
                } else {
                    // textRef.current.classList.remove('animate');
                }
            });
        });
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [location]);
    return (
        // <div ref={imageRef}>
        <Element ref={imageRef} className={`image-anim ${className}`}>{children}</Element>
        // </div>
    );
}

export default AnimatedImage;
