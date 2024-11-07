import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Gallery.css';
import './MediaGallery.css';
import modalCloseIcon from '../../assets/icons/modalCloseGallery.svg'
import architecture1 from '../../assets/gallery/architecture6.webp';
import architecture2 from '../../assets/gallery/architecture2.webp';
import architecture3 from '../../assets/gallery/architecture3.webp';
import architecture4 from '../../assets/gallery/architecture4.webp';
import architecture5 from '../../assets/gallery/architecture5.webp';
import architecture6 from '../../assets/gallery/architecture9.webp';
import architecture7 from '../../assets/gallery/architecture7.webp';
import architecture8 from '../../assets/gallery/architecture8.webp';
import architecture9 from '../../assets/gallery/architecture1.webp';
import views1 from '../../assets/gallery/views1.webp';
import views2 from '../../assets/gallery/views2.webp';
import views3 from '../../assets/gallery/views3.webp';
import views4 from '../../assets/gallery/views4.webp';

import primeCity1 from '../../assets/gallery/prime-city1.webp';
import primeCity2 from '../../assets/gallery/prime-city2.webp';
import primeCity3 from '../../assets/gallery/prime-city3.webp';
import primeCity4 from '../../assets/gallery/prime-city4.webp';
import primeCity5 from '../../assets/gallery/prime-city5.webp';
import primeCity6 from '../../assets/gallery/prime-city6.webp';
import primeCity7 from '../../assets/gallery/prime-city7.webp';


import arrowNext from '../../assets/gallery/arrowNext.svg';
import arrowPrev from '../../assets/gallery/arrowPrev.svg';
import cursorNext from '../../assets/gallery/cursorNext.svg';
import cursorPrev from '../../assets/gallery/cursorPrev.svg';
import openListCategory from '../../assets/gallery/openListCategory.svg';
import AnimatedText from '../UI/AnimatedText/AnimatedText';

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('Все фото');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorX, setCursorX] = useState(null);
    const [cursorY, setCursorY] = useState(null);
    const [showText, setShowText] = useState(false);
    const [isCategoryMenuVisible, setIsCategoryMenuVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

    const images = [
        { id: 1, category: 'Архитектура', url: architecture1 },
        { id: 2, category: 'Архитектура', url: architecture2 },
        { id: 3, category: 'Архитектура', url: architecture3 },
        { id: 4, category: 'Архитектура', url: architecture4 },
        { id: 5, category: 'Архитектура', url: architecture5 },
        { id: 6, category: 'Архитектура', url: architecture6 },
        { id: 7, category: 'Архитектура', url: architecture7 },
        { id: 8, category: 'Архитектура', url: architecture8 },
        { id: 9, category: 'Архитектура', url: architecture9 },
        { id: 10, category: 'Виды', url: views1 },
        { id: 11, category: 'Виды', url: views2 },
        { id: 12, category: 'Виды', url: views3 },
        { id: 13, category: 'Виды', url: views4 },
        { id: 14, category: 'Prime City', url: primeCity1 },
        { id: 15, category: 'Prime City', url: primeCity2 },
        { id: 16, category: 'Prime City', url: primeCity7 },
        { id: 17, category: 'Prime City', url: primeCity4 },
        { id: 18, category: 'Prime City', url: primeCity5 },
        { id: 19, category: 'Prime City', url: primeCity6 },
        { id: 20, category: 'Prime City', url: primeCity3 },
    ];
    const filteredImages =
        selectedCategory === 'Все фото'
            ? images
            : images.filter((image) => image.category === selectedCategory);
    const currentImage = filteredImages[currentIndex];
    const sliderRef = useRef(null);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentIndex(0);
        setIsCategoryMenuVisible(false);
    };
    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    };
    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    };
    const handlePrevClick = () => {
        goToPrevImage();
    };
    const handleNextClick = () => {
        goToNextImage();
    };
    const handleSlideMouseMove = (event) => {
        const sliderWidth = event.target.offsetWidth;
        const cursorPosition = event.nativeEvent.offsetX;
        if (window.innerWidth > 991) {
            setCursorX(event.pageX);
            setCursorY(event.pageY);
            if (cursorPosition < sliderWidth / 2) {
                event.target.style.cursor = `none`;
                setShowText('Назад');
            } else {
                event.target.style.cursor = `none`;
                setShowText('Вперед');
            }
        }
    };
    const handleSlideMouseLeave = () => {
        setShowText(false);
    };
    const handleSlideClick = (event) => {
        const sliderWidth = event.target.offsetWidth;
        const cursorPosition = event.nativeEvent.offsetX;
        if (window.innerWidth > 991) {
            if (cursorPosition < sliderWidth / 2) {
                goToPrevImage();
            } else {
                goToNextImage();
            }
        }
    };
    const handleCategoryMenuToggle = () => {
        setIsCategoryMenuVisible((prevState) => !prevState);
    };
    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 991);
    };
    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);
    const handlers = useSwipeable({
        onSwipedLeft: isMobile ? goToNextImage : null,
        onSwipedRight: isMobile ? goToPrevImage : null,
    });
    return (
        <div className="modal fade slider gallery" id="galleryModal" ref={sliderRef} tabIndex={-1} aria-labelledby="galleryModal" aria-hidden="true" {...handlers}>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-gallery__body-content">
                            <div className="gallery__top">
                                <AnimatedText className="title-anim hero-title title title-lg">Галерея</AnimatedText>
                                <button type="button" className="modal-gallery__btn-close" data-bs-dismiss="modal" aria-label="Закрыть">
                                    <img src={modalCloseIcon} alt="Закрыть" />
                                </button>
                            </div>
                            {currentImage && (
                                <div>
                                    {filteredImages.map((image, index) => (
                                        <div
                                            key={image.id}
                                            className={`slide ${index === currentIndex ? '' : 'hidden'}`}
                                            onMouseMove={handleSlideMouseMove}
                                            onMouseLeave={handleSlideMouseLeave}
                                            onClick={handleSlideClick}>
                                            <img src={image.url} alt={`Image ${image.id}`} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="gallery__center"></div>
                            <div className="gallery__bottom">
                                <div className="category-menu">
                                    <button className="category-menu__toggle" onClick={handleCategoryMenuToggle}>
                                        {selectedCategory} <img src={openListCategory} alt="icon" />
                                    </button>
                                    <div className={`category-menu__list ${isCategoryMenuVisible ? 'visible' : ''}`}>
                                        <button className={selectedCategory === 'Все фото' ? 'active' : ''} onClick={() => handleCategoryChange('Все фото')}>
                                            Все фото
                                        </button>
                                        <button className={selectedCategory === 'Архитектура' ? 'active' : ''} onClick={() => handleCategoryChange('Архитектура')}>
                                            Архитектура
                                        </button>
                                        <button className={selectedCategory === 'Виды' ? 'active' : ''} onClick={() => handleCategoryChange('Виды')}>
                                            Виды
                                        </button>
                                        <button className={selectedCategory === 'Prime City' ? 'active' : ''} onClick={() => handleCategoryChange('Prime City')}>
                                            Prime City
                                        </button>
                                        <button className="category-menu__close" onClick={handleCategoryMenuToggle}>
                                            <img src={modalCloseIcon} alt="Закрыть" />
                                        </button>
                                    </div>
                                </div>

                                <div className="category">
                                    <button className={selectedCategory === 'Все фото' ? 'active' : ''} onClick={() => handleCategoryChange('Все фото')}>
                                        Все фото
                                    </button>
                                    <button className={selectedCategory === 'Архитектура' ? 'active' : ''} onClick={() => handleCategoryChange('Архитектура')}>
                                        Архитектура
                                    </button>
                                    <button className={selectedCategory === 'Виды' ? 'active' : ''} onClick={() => handleCategoryChange('Виды')}>
                                        Виды
                                    </button>
                                    <button className={selectedCategory === 'Prime City' ? 'active' : ''} onClick={() => handleCategoryChange('Prime City')}>
                                        Prime City
                                    </button>
                                </div>

                                <div className="buttons">
                                    <button onClick={handlePrevClick}>
                                        <img src={arrowPrev} alt="Назад" />
                                    </button>
                                    <div className="slide-count">
                                        {currentIndex + 1} / {filteredImages.length}
                                    </div>
                                    <button onClick={handleNextClick}>
                                        <img src={arrowNext} alt="Вперед" />
                                    </button>
                                </div>
                            </div>
                            <div className={`text-back ${showText === 'Назад' ? 'show' : ''}`} style={{ left: cursorX, top: cursorY }}>
                                <img src={cursorPrev} alt="Назад" />Назад
                            </div>
                            <div className={`text-next ${showText === 'Вперед' ? 'show' : ''}`} style={{ left: cursorX, top: cursorY }}>
                                Вперед <img src={cursorNext} alt="Вперед" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
