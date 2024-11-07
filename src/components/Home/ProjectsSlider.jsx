
import { useState, useRef } from 'react';

import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';

import rhombusIcon from '../../assets/icons/rhombusIcon.svg';
import projectExample from '../../assets/projectExample.png';
import iconMore from '../../assets/icons/iconMore.svg';
import sliderArrowIcon from '../../assets/icons/sliderArrowIcon.svg';

function ProjectsSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    const animRefContent = useRef(null);
    const [cursorX, setCursorX] = useState(null);
    const [cursorY, setCursorY] = useState(null);
    const [showText, setShowText] = useState(false);



    const slides = [
        {
            image: projectExample,
            title: 'ЖК PRIME city',
            description: 'Описание'
        },
        {
            image: projectExample,
            title: 'ЖК PRIME city',
            description: 'Описание первого слайда'
        },
    ];
    const handleSlideChange = (direction) => {
        if (direction === 'prev') {
            setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
        } else if (direction === 'next') {
            setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }
    };





    const handleSlideMouseMove = (event) => {
        if (window.innerWidth > 991) {
            const containerBounds = animRefContent.current.getBoundingClientRect();
            const offsetX = event.clientX - containerBounds.left;
            const offsetY = event.clientY - containerBounds.top;
            setShowText('cursor');
            setCursorX(offsetX);
            setCursorY(offsetY);
            event.target.style.cursor = `none`;
        }
    };
    const handleSlideMouseLeave = () => {
        setShowText(false);
    };


    return (
        <section className="projects-slider">
            <div className="projects-slider__item">
                <div ref={animRefContent}>
                    <AnimatedImage className="projects-slider__item-preview">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.image}
                                onMouseMove={handleSlideMouseMove}
                                onMouseLeave={handleSlideMouseLeave}
                                className={`projects-slider__item-preview__img${activeSlide === index ? ' active' : ''}`}
                                alt="ЖК Prime City"
                            />
                        ))}
                        <a href="#" className={`projects-slider__item-preview__btn ${showText === 'cursor' ? 'show' : ''}`} style={{ left: cursorX, top: cursorY }}>
                            Подробнее
                            <img src={iconMore} alt="Подробнее" />
                        </a>
                    </AnimatedImage>
                </div>
                <div className="container container-lg">
                    <div className="projects-slider__item-bottom">
                        <div id="paralax-text">
                            <AnimatedText id="animate-line-before" as="h2" className="title-anim projects-slider__item-title title title-lg">
                                <span>ЖК</span> PRIME city
                            </AnimatedText>
                        </div>
                        <div data-speed="0.2" id="paralax-text" className="projects-slider__item-info">
                            <AnimatedText as='h6' className="text-fade-in projects-slider__item-info__title">
                                <img src={rhombusIcon} alt="Ромб" />
                                Жилой комплекс «PRIME CITY»
                            </AnimatedText>
                            <AnimatedText as='p' className="text-fade-in projects-slider__item-info__text block-text">
                                {/* {slides[activeSlide].description} */}
                                В котором отлично гармонируют все те требования, которые относят к домам комфорт класса.Между ботаническим садом и жилым комплексом протекает горная река Аламедин.Жилой комплекс «Prime City» был спроектирован для комфортного проживания во всех областях быта и отдыха.
                            </AnimatedText>
                            <div className="projects-slider__tools">
                                <div className="custom-nav">
                                    <button
                                        type="button"
                                        className="custom-nav__btn-left link-hovered--opacity"
                                        onClick={() => handleSlideChange('prev')}
                                    >
                                        <img src={sliderArrowIcon} alt="Налево" />
                                    </button>
                                    <button
                                        type="button"
                                        className="custom-nav__btn-right link-hovered--opacity"
                                        onClick={() => handleSlideChange('next')}
                                    >
                                        <img src={sliderArrowIcon} alt="Направо" />
                                    </button>
                                </div>
                                <div className="projects-slider__tools-pag">
                                    <span>{activeSlide + 1}</span> / <span>{slides.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-speed="0.3" id="paralax-text" className="container container-lg projects-slider__bg-one">
                <AnimatedText as="p" className="title-anim-one bg-font-anim bg-font">
                    Harmony
                </AnimatedText>
            </div>
        </section>
    );
}

export default ProjectsSlider;