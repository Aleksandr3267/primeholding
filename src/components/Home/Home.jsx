/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useContext, useState, Suspense } from 'react';
// import SplitType from 'split-type';

import videoIcon from '../../assets/icons/videoIcon.svg';
const MapComponent = React.lazy(() => import('../MapComponent/MapComponent'));

// images
import videoBg from '../../assets/videoBg.png';
import rhombusIcon from '../../assets/icons/rhombusIcon.svg';
import iconMoreBright from '../../assets/icons/iconMoreBright.svg';
import building from '../../assets/building.svg';
import ecoImg1 from '../../assets/ecoImg1.png';
import ecoImg2 from '../../assets/ecoImg2.png';
import quayImg1 from '../../assets/quayImg1.png';
import quayImg2 from '../../assets/quayImg2.png';
import dreamsImg1 from '../../assets/dreamsImg1.png';
import dreamsImg2 from '../../assets/dreamsImg2.png';
import businessImg from '../../assets/businessImg.png';
import safetyImg1 from '../../assets/safetyImg1.png';
import safetyImg2 from '../../assets/safetyImg2.png';
import placeImg1 from '../../assets/placeImg1.png';
import placeImg2 from '../../assets/placeImg2.png';


import plusIcon from '../../assets/icons/plusIcon.svg';
import videoP from '../../assets/Prime.mp4';
// import ImagesSlide from './ImagesSlide';
import { ScrollContext } from '../../ScrollContext';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';
// import ProjectsSlider from './ProjectsSlider';
import { Link } from 'react-router-dom';

const ImagesSlide = React.lazy(() => import('./ImagesSlide'));
const ProjectsSlider = React.lazy(() => import('./ProjectsSlider'));


// eslint-disable-next-line react/prop-types
function Home({ onOpenSelectBlockModal }) {

    function openPlanLayModalFn() {
        onOpenSelectBlockModal();
    }

    const scrollInstance = useContext(ScrollContext);
    const animRefContent = useRef(null);
    const animRef = useRef(null);
    const [cursorX, setCursorX] = useState(null);
    const [cursorY, setCursorY] = useState(null);
    const [showText, setShowText] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const animElemContent = animRefContent.current;
        const animElement = animRef.current;
        const onScroll = () => {
            if (scrollInstance) {
                const scrollProgress = (scrollInstance.scroll.instance.scroll.y / window.innerHeight) * 100;
                if (77.212 + scrollProgress / 2 >= 100) {
                    animElement.style.minWidth = `100%`;
                } else {
                    animElement.style.minWidth = `${77.212 + scrollProgress / 2}%`;
                }
                if (window.innerWidth > 1600) {
                    animElement.style.marginRight = `${7 - scrollProgress / 6.5}%`;
                    if (7 - scrollProgress / 6.5 <= 0) {
                        animElement.style.marginRight = `0px`;
                    }
                }
                if (window.innerWidth > 560) {
                    animElemContent.style.transform = `translateY(${scrollProgress * 3 - 20}px)`;
                    if (scrollProgress * 3 - 20 >= 500) {
                        animElemContent.style.transform = 'translateY(500px)';
                    }
                } else {
                    animElemContent.style.transform = `translateY(${scrollProgress * 3 - 20}px)`;
                    if (scrollProgress * 3 - 20 >= 100) {
                        animElemContent.style.transform = 'translateY(100px)';
                    }
                }
            }
        };
        if (scrollInstance) {
            scrollInstance.on('scroll', onScroll);
        }
        return () => {
            if (scrollInstance) {
                scrollInstance.off('scroll', onScroll);
            }
        };
    }, [scrollInstance]);


    const handleSlideMouseMove = (event) => {
        if (window.innerWidth > 991) {
            const containerBounds = animRefContent.current.getBoundingClientRect();
            const offsetX = event.clientX - containerBounds.left;
            const offsetY = event.clientY - containerBounds.top;
            setShowText('Cursor');
            setCursorX(offsetX);
            setCursorY(offsetY);
            event.target.style.cursor = `none`;
        }
    };
    const handleSlideMouseLeave = () => {
        setShowText(false);
    };
    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };



    return (
        <>
            <section className="hero hero-header">
                <div className="container container-md">
                    <AnimatedText id='animate-line-before' dataMargin='data-margin3-5' className='title-anim hero-title title title-lg'>Prime city</AnimatedText>
                    <AnimatedText as='h2' id='title-small-position' className='title-anim title-small'>Идеальное место для вашей семьи</AnimatedText>
                </div>
                <div ref={animRefContent} className="hero-video">
                    <button type="button" className={`hero-video__btn link-hovered ${showText === 'Cursor' ? 'show' : ''}`} style={{ left: cursorX, top: cursorY }} >
                        Смотреть видео
                        <img src={videoIcon} alt="Смотреть" />
                    </button>
                    <video
                        poster={videoBg}
                        preload="metadata"
                        onLoadedData={handleVideoLoaded}
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        onMouseMove={handleSlideMouseMove}
                        onMouseLeave={handleSlideMouseLeave}
                        ref={animRef}
                        className="hero-video__img"
                        controls={false}
                        muted
                        autoPlay
                        width="100%"
                        height="100%"
                        onLoadedMetadata={(e) => e.target.currentTime = 0}
                        onEnded={(e) => e.target.play()}>
                        <source src={videoP} type="video/mp4" />
                    </video>

                </div>
            </section>
            <Suspense fallback={<div>Loading...</div>}><ProjectsSlider /></Suspense>
            <section className="quote">
                <div className="container container-md">
                    <div data-speed='0.5' id='paralax-text' className="quote-content margin-3-5">
                        <AnimatedText as='h5' className="text-fade-in quote-title">
                            <p>Безопасность и комфорт</p>
                            <img src={rhombusIcon} alt="Ромб" />
                            <span className="quote-title__line" />
                        </AnimatedText>
                        <AnimatedText as='p' className="title-anim quote-text">
                            <span className="quote-text__quote">“</span>
                            Дом — это место, где живет любовь, где рождаются воспоминания, где всегда есть друзья, где
                            никогда не кончается смех
                            <span className="quote-text__quote--right">”</span>
                        </AnimatedText>
                    </div>
                </div>
            </section>
            <Suspense fallback={<div>Loading...</div>}><ImagesSlide dataSpeed='0.2' id='paralax-text' /></Suspense>
            <section className="arc">
                <div className="container container-lg">
                    <div id="paralax-text">
                        <AnimatedText id='animate-line-after' as='h2' className="title-anim title title-lg">Архитектура</AnimatedText>
                    </div>

                    <div data-speed='0.3' id='paralax-text' className="container container-md position-relative">
                        <AnimatedText as="p" className='title-anim-one bg-font arc__bg-one'>Apartments</AnimatedText>
                    </div>
                    <div data-speed='0.8' id='paralax-text' className="arc-top">
                        <AnimatedImage className="arc-building arc-building--desktop">
                            <img src={building} alt="Здание" onClick={() => openPlanLayModalFn()} />
                        </AnimatedImage>
                        <div className="arc-right">
                            <div className="arc-right__content">
                                <div className="arc-params">
                                    <div className="arc-params__top">
                                        <AnimatedText as='p' className="text-fade-in arc-params__top-level">13 Этажей + Мансарда</AnimatedText>
                                        <AnimatedText as='p' className="text-fade-in arc-params__top-count">281 квартира</AnimatedText>
                                    </div>
                                    <div className="arc-params__item">
                                        <AnimatedText as='p' className='text-fade-in'>1 - комнатные</AnimatedText>
                                        <AnimatedText as='p' className='text-fade-in'>154</AnimatedText>
                                    </div>
                                    <div className="arc-params__item">
                                        <AnimatedText as='p' className='text-fade-in'>2 - комнатные</AnimatedText>
                                        <AnimatedText as='p' className='text-fade-in'>64</AnimatedText>
                                    </div>
                                    <div className="arc-params__item">
                                        <AnimatedText as='p' className='text-fade-in'>3 - комнатные</AnimatedText>
                                        <AnimatedText as='p' className='text-fade-in'>59</AnimatedText>
                                    </div>
                                    <div className="arc-params__item">
                                        <AnimatedText as='p' className='text-fade-in'>Пентхаусы</AnimatedText>
                                        <AnimatedText as='p' className='text-fade-in'>4</AnimatedText>
                                    </div>
                                    <div className="arc-params__bottom">
                                        <a className="arc-params__link link-brown" onClick={() => openPlanLayModalFn()}>Планировки</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-md">
                    <div className="arc-bottom">
                        <div id='paralax-text' className="arc-bottom__content arc-bottom__content-left">
                            <AnimatedText as='h6' className="text-fade-in arc-title">Прочнейшая монолитно-кирпичная конструкция здания</AnimatedText>
                            <AnimatedText as='p' className="text-fade-in arc-text block-text">Выполнен из высококачественного кирпича, который предоставит
                                высокий уровень безопасности и комфорта как жилых, так и промышленных зданий.</AnimatedText>
                            <AnimatedText as='p' className="text-fade-in arc-text block-text">Панорамные окна, потолки высотой 3 метра, видео домофон и
                                центральные коммуникации</AnimatedText>
                        </div>
                        <div data-speed='0.4' id='paralax-text' className="arc-bottom__content arc-bottom__content-right">
                            <AnimatedText as='h6' className="text-fade-in arc-title">Материалы</AnimatedText>
                            <AnimatedText as='p' className="text-fade-in arc-text block-text">При строительстве дома будут использованы материалы местных и
                                зарубежных производителей, соответствующие всем требованиям и качеству.</AnimatedText>
                            <div className="arc-counter">
                                <div className="arc-counter__item">
                                    <AnimatedText as='p' className="text-fade-in arc-counter__item-amount">281</AnimatedText>
                                    <span className="arc-counter__item-divider" />
                                    <AnimatedText as='p' className="text-fade-in arc-counter__item-text">квартира</AnimatedText>
                                </div>
                                <div className="arc-counter__item arc-counter__item--bright">
                                    <AnimatedText as='p' className="text-fade-in arc-counter__item-amount">13</AnimatedText>
                                    <span className="arc-counter__item-divider" />
                                    <AnimatedText as='p' className="text-fade-in arc-counter__item-text">этажей</AnimatedText>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="eco">
                <div className="container container-md position-relative">
                    <div id="paralax-text">
                        <AnimatedText id='animate-line-before' dataMargin='data-margin3-5' as='h2' className="title-anim eco-title title title-lg">
                            <span>Экологическая</span>
                            инфраструктура
                        </AnimatedText>
                    </div>

                    <div data-speed='0.4' id='paralax-text' className="eco-block eco-block-top">
                        <AnimatedText as='p' className="text-fade-in eco-text block-text">Дом расположен в одном из самых респектабельных и экологически
                            благоприятных районов, рядом с самым большим ботаническим садом нашего города.</AnimatedText>
                        <AnimatedImage className="eco-block-top__image">
                            <img src={ecoImg1} alt="Деревья" className="img-cover" />
                        </AnimatedImage>
                    </div>
                    <div data-speed='0.3' id='paralax-text' className="eco-block eco-block-bottom">
                        <AnimatedImage className="eco-block-bottom__image">
                            <img src={ecoImg2} alt="Растения" className="img-cover" />
                        </AnimatedImage>
                        <AnimatedText as='p' className="text-fade-in eco-text block-text">Между ботаническим садом и жилым комплексом протекает горная река
                            Аламедин. Вдоль реки будет построена аллея для прогулки жильцов ЖК «Prime City».</AnimatedText>
                    </div>
                    <AnimatedText dataSpeed='0.7' id='paralax-text' as="p" className='title-anim-one bg-font arc__bg-one'>Nature</AnimatedText>
                </div>
            </section>
            <section className="quay">
                <div className="container container-lg position-relative">
                    <div id="paralax-text">
                        <AnimatedText id='animate-line-after' as='h2' className="title-anim quay-title title title-lg "><span>Уникальная</span> <br /> набережная</AnimatedText>
                    </div>
                    <div id="paralax-text" data-speed='0.3' className="container container-md">
                        <AnimatedImage className="quay-main-img">
                            <img src={quayImg1} alt="Набережная" className="img-cover" />
                        </AnimatedImage>
                    </div>
                    <div id="paralax-text" data-speed='0.7'>
                        <AnimatedText as='p' className="title-anim quay-desc">
                            первый в своем роде прогулочный мост,
                            к самому большому ботаническому саду. вы захотите гулять по нему снова и снова.
                        </AnimatedText>
                    </div>

                    <div className="container container-md">
                        <div className="quay-block__wrapper">
                            <div id="paralax-text" data-speed='0.4' className="quay-block quay-block-top">
                                <AnimatedText as='h6' className="text-fade-in quay-block__title">
                                    <img src={plusIcon} alt="Плюс" />
                                    пешеходный мост
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in quay-block__text block-text">Это уникальный и первый в своем роде прогулочный мост
                                    через речку Аламедин, который будет вести к прекрасному и самому большому ботаническому
                                    саду. Он непременно вам понравится, и вы захотите гулять по нему снова и снова.</AnimatedText>
                            </div>
                            <div id="paralax-text" data-speed='0.5' className="quay-block quay-block-bottom margin-3-5">
                                <AnimatedText as='h6' className="text-fade-in quay-block__title">
                                    <img src={plusIcon} alt="Плюс" />
                                    Зона отдыха
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in quay-block__text block-text">
                                    САМОЕ ПРИЯТНОЕ, ЧТО ОЖИДАЕТ ЖИТЕЛЕЙ ЖИЛОГО КОМПЛЕКСА "PRIME CITY" - ЭТО ЗОНА ОТДЫХА НАД РЕЧКОЙ И ПРОГУЛОЧНАЯ АЛЛЕЯ. БУДЕТ ГДЕ СОБРАТЬСЯ ДРУЖНОЙ КОМПАНИЕЙ И ПРИЯТНО ПРОВЕСТИ ДОСУГ.
                                </AnimatedText>
                            </div>
                        </div>
                    </div>
                    <div id="paralax-text" data-speed='0.3'>
                        <AnimatedImage className="quay-bottom-img">
                            <img src={quayImg2} alt="Набережная" className="img-cover" />
                        </AnimatedImage>
                    </div>
                    <AnimatedText dataSpeed='0.7' id='paralax-text' as="p" className='title-anim-one bg-font quay__bg-one'>Beautiful View</AnimatedText>
                </div>
            </section>
            <section className="dreams">
                <div className="container container-md position-relative">
                    <div id="paralax-text">
                        <AnimatedText as='h2' id='animate-line-before' dataMargin='data-margin3-5' className="title-anim dreams-title title title-lg">
                            <span>Создаем дома,</span> <br /> где
                            живут мечты
                        </AnimatedText>
                    </div>
                    <div id="paralax-text" data-speed='0.5'>
                        <AnimatedImage className="dreams-main-img">
                            <img src={dreamsImg1} alt="Здание" className="img-cover" />
                        </AnimatedImage>
                    </div>

                    <div id="paralax-text" data-speed='0.7' className="dreams-about">
                        <AnimatedText as='h6' className="text-fade-in dreams-about__title">
                            <img src={plusIcon} alt="Плюс" />
                            О компании
                        </AnimatedText>
                        <AnimatedText as='p' id='animate-line-before' className="title-anim dreams-about__text title">
                            соблюдение необходимых стандартов позволяют нам возводить дома, отличающиеся долговечностью и эстетической привлекательностью.
                        </AnimatedText>
                    </div>
                    <div className="dreams-bottom">
                        <div id="paralax-text" data-speed='0.5'>
                            <AnimatedImage className="dreams-bottom-img">
                                <img src={dreamsImg2} alt="Здание" className="img-cover" />
                            </AnimatedImage>
                        </div>
                        <div id="paralax-text" data-speed='0.3' className="dreams-bottom-block">
                            <AnimatedText as='h6' className="text-fade-in dreams-bottom-block__title">
                                <img src={plusIcon} alt="Плюс" />
                                более 800тыс кв.м
                            </AnimatedText>
                            <AnimatedText as='p' className="text-fade-in dreams-bottom-block__text block-text">
                                на сегодняшний день, строительная компания Prime Holding, как надежный застройщик, возводит более 800тыс кв.м. параллельно, выходя тем самым на лидирующее место среди застройщиков по объемам строительства.
                            </AnimatedText>
                            <Link to='/about' className="dreams-bottom-block__link link-hovered--opacity">
                                Подробнее
                                <img src={iconMoreBright} alt="Подробнее" />
                            </Link>
                        </div>
                    </div>
                    <AnimatedText dataSpeed='0.7' id='paralax-text' as="p" className='title-anim-one bg-font dreams__bg-one'>Create</AnimatedText>
                </div>
            </section>
            <section className="business">
                <div className="container container-lg position-relative">
                    <div id="paralax-text">
                        <AnimatedText as='h2' id='animate-line-after' className="title-anim business-title title title-lg">
                            <span>Помещения</span> <br /> для бизнеса
                        </AnimatedText>
                    </div>

                    <div className="container container-md">
                        <AnimatedImage className="business-main-img">
                            <img src={businessImg} alt="Бизнес" className="img-cover" />
                        </AnimatedImage>
                        <div id="paralax-text" data-speed='0.3' className="business-info">
                            <AnimatedText as='h6' className="text-fade-in business-info__title">
                                <img src={plusIcon} alt="Плюс" />
                                Пространство для вашего бизнеса
                            </AnimatedText>
                            <AnimatedText as='p' className="text-fade-in business-info__text block-text">
                                функциональные и современные помещения, расположенные в удобном месте. Мы создали привлекательную и стильную среду, которая поможет вам впечатлить клиентов.
                            </AnimatedText>
                        </div>
                    </div>
                    <AnimatedText dataSpeed='0.2' id='paralax-text' as="p" className='title-anim-one bg-font business__bg-one'>Business</AnimatedText>
                </div>
            </section>
            <section className="safety">
                <div className="container container-md position-relative">
                    <div id="paralax-text">
                        <AnimatedText as='h2' id='animate-line-before' dataMargin='data-margin3-5' className="title-anim safety-title title title-lg">
                            <span>Забота о вашей </span>БЕзопасности
                        </AnimatedText>
                    </div>

                    <div className="safety-top">
                        <div id="paralax-text" data-speed='0.4' className="safety-top__left">
                            <div className="safety-list">
                                <AnimatedText as='h6' className="text-fade-in safety-list__item">
                                    <img src={plusIcon} alt="Плюс" />
                                    Охраняемая территория
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in safety-list__item">
                                    <img src={plusIcon} alt="Плюс" />
                                    видеонаблюдение 24/7 по всему периметру дома
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in safety-list__item">
                                    <img src={plusIcon} alt="Плюс" />
                                    Двор без машин
                                </AnimatedText>
                            </div>
                            <AnimatedText as='p' className="text-fade-in safety-text block-text">
                                Закрытая охраняемая территория и видеонаблюдение по всему периметру дома 24/7, видео домофон
                            </AnimatedText>
                        </div>
                        <div id="paralax-text" data-speed='0.3'>
                            <AnimatedImage className="safety-top__img">
                                <img src={safetyImg1} alt="Здание" className="img-cover" />
                            </AnimatedImage>
                        </div>

                    </div>
                    <div id="paralax-text" data-speed='0.2' className="safety-bottom">
                        <AnimatedImage className="safety-bottom__img">
                            <img src={safetyImg2} alt="Площадка" className="img-cover" />
                        </AnimatedImage>
                        <AnimatedText as='p' className="text-fade-in safety-text block-text">Безопасная и комфортная детская площадка, которая будет интересна
                            для ваших детей</AnimatedText>
                    </div>
                    <AnimatedText dataSpeed='0.7' id='paralax-text' as="p" className='title-anim-one bg-font safety__bg-one'>Safety</AnimatedText>
                </div>
            </section>
            <section className="place">
                <div className="container container-md">
                    <div id="paralax-text" className='place-title'>
                        <AnimatedText as='h2' id='animate-line-before' className="title-anim title title-lg">
                            <span>Место</span> <br /> для каждого
                        </AnimatedText>
                    </div>

                    <div className="place-top">
                        <div id="paralax-text" data-speed='0.3'>
                            <AnimatedImage className="place-top__img">
                                <img src={placeImg1} alt="Место" className="img-cover" />
                            </AnimatedImage>
                        </div>

                        <div id="paralax-text" data-speed='0.4' className="place-top__right position-relative">
                            <AnimatedText as='p' className="title-anim place-top__desc">Мы подумали о вашем комфорте и не забыли про ваше авто</AnimatedText>
                            <AnimatedText as='p' className="text-fade-in place-top__text block-text">Продуманный подземный и гостевой паркинг без крутых
                                поворотов и спусков для удобства жильцов.</AnimatedText>
                            <AnimatedText id='paralax-text' data-speed='0.3' as="p" className='title-anim-one bg-font place__bg-one'>Parking</AnimatedText>
                        </div>
                    </div>
                    <div id="paralax-text" data-speed='0.5' className="place-bottom margin-3-5">
                        <AnimatedImage className="place-bottom__img">
                            <img src={placeImg2} alt="Место" className="img-cover" />
                        </AnimatedImage>
                        <div className="place-list">
                            <AnimatedText as='h6' className="text-fade-in place-list__item">
                                <img src={plusIcon} alt="Плюс" />37 мест в подземном паркинге
                            </AnimatedText>
                            <AnimatedText as='h6' className="text-fade-in place-list__item">
                                <img src={plusIcon} alt="Плюс" />120 гостевых мест
                            </AnimatedText>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map">
                <div className="container container-lg position-relative">
                    <div id="paralax-text" data-speed='0.4' className='map-title'>
                        <AnimatedText as='h2' id='animate-line-after' className="title-anim title title-lg">
                            <span>Контакты и</span> <br /> расположение
                        </AnimatedText>
                    </div>
                    <div className="map__img">
                    <Suspense fallback={<div>Loading...</div>}><MapComponent /></Suspense>
                        <div className="link-map__button">
                            <a href="https://go.2gis.com/ruz92" target='_blank' rel="noreferrer">Открыть на карте</a>
                        </div>
                    </div>
                    <div id='paralax-text' data-speed='0.3' className="map__bg-one">
                        <AnimatedText as="p" className='title-anim-one bg-font'>The perfect place</AnimatedText>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Home;