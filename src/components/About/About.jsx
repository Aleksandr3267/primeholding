
import './About.css';

import aboutBuildingImg from '../../assets/aboutBuilding.png';
import aboutBlackImg from '../../assets/aboutBlack.png';
import rhombusIcon from '../../assets/icons/rhombusIcon.svg';
import MapComponent from '../MapComponent/MapComponent';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';

function About() {
    return (
        <>
            <div>
                <section className="hero about-us">
                    <div className="container container-md">
                        <AnimatedText id='animate-line-before' dataMargin='data-margin3-5' className="title-anim hero-title title title-lg about-title">
                            <span>О нас</span> <br /> “Prime holding”
                        </AnimatedText>
                        <AnimatedImage className="hero-video">
                            <img src={aboutBuildingImg} className="hero-video__img about-us-img-main" alt="Здание" />
                        </AnimatedImage>
                    </div>
                </section>
                <section className="quote aboutPage-quote">
                    <div data-speed='0.2' id='paralax-text' className="container container-md position-relative">
                        <div className="quote-content margin-3-5">
                            <AnimatedText as='p' className="title-anim quote-text">
                                <span className="quote-text__quote">“</span>
                                Дом — это место, где живет любовь, где рождаются воспоминания, где всегда есть друзья, где
                                никогда не кончается смех
                                <span className="quote-text__quote--right">”</span>
                            </AnimatedText>
                        </div>
                        <AnimatedText as="p" className='title-anim-one bg-font aboutPage-quote__bg-one'>Prime</AnimatedText>
                    </div>
                </section>
                <section className="builder">
                    <div className="container container-md position-relative">
                        <div data-speed='0.1' id='paralax-text' >
                            <AnimatedText as='h2' id='animate-line-before' dataMargin='data-margin3-5' className="title-anim builder-title title title-lg">
                                <span>Надежный</span> <br />
                                застройщик
                            </AnimatedText>
                        </div>
                        <div className="builder-content">
                            <AnimatedImage className="builder__image">
                                <img src={aboutBlackImg} alt="Здание" className="img-cover" />
                            </AnimatedImage>
                            <div className="builder__right">
                                <div data-speed='0.2' id='paralax-text'>
                                    <AnimatedText as='p' className="text-fade-in builder-text block-text">на сегодняшний день, строительная компания Prime Holding, как
                                        надежный застройщик, возводит более 800тыс кв.м. параллельно, ставя рекорд одновременного
                                        строительства в Республике, выходя тем самым на первое место среди застройщиков по объемам
                                        строительства.</AnimatedText>
                                </div>


                                <AnimatedImage className="builder__right-image">
                                    <img src={aboutBlackImg} alt="Здание" className="img-cover" />
                                </AnimatedImage>
                            </div>
                        </div>
                        <div data-speed='0.1' id='paralax-text'>
                            <AnimatedText as="p" className='title-anim-one bg-font builder__bg-one'>Reliable</AnimatedText>
                        </div>
                    </div>
                </section>
                <section className="principles">
                    <div className="container container-lg position-relative">
                        <div data-speed='0.1' id='paralax-text'>
                            <AnimatedText as='h2' id='animate-line-after' className="title-anim principles-title title title-lg">
                                <span>Принципы</span> <br /> компании
                            </AnimatedText>
                        </div>

                        <div className="principles-content">
                            <div data-speed='0.2' id='paralax-text' className="principles-left">
                                <AnimatedText as='p' className="text-fade-in principles__left-text principles__left-text-first principles__left-text-first--desktop block-text">
                                    принципом компании, является застройка, исключительно, после получения всех разрешительных
                                    документов на строительство, со строгим соблюдением качества и сроков строительства.</AnimatedText>
                                <AnimatedText as='p' className="text-fade-in principles__left-text principles__left-text-second block-text">компания обладает
                                    государственной лицензией на осуществление всех комплексов работ со строительством зданий и
                                    сооружений, в соответствии со всеми нормами и требованиями архитектурно-градостроительного
                                    законодательства.</AnimatedText>
                            </div>
                            <AnimatedImage className="principles-image">
                                <img src={aboutBlackImg} alt="Здание" className="img-cover" />
                            </AnimatedImage>
                            <p className="principles__left-text principles__left-text-first principles__left-text-first--mobile block-text">
                                принципом компании, является застройка, исключительно, после получения всех разрешительных
                                документов на строительство, со строгим соблюдением качества и сроков строительства.</p>
                        </div>
                        <div data-speed='0.3' id='paralax-text'>
                            <AnimatedText as="p" className='title-anim-one bg-font principles__bg-one'>Principles</AnimatedText>
                        </div>

                    </div>
                </section>
                <section className="office">
                    <div className="container container-lg">
                        <div data-speed='0.1' id='paralax-text'>
                            <AnimatedText as='h2' id='animate-line-after' className="title-anim office-title title title-lg">
                                <span>Локация</span> <br /> Офиса
                            </AnimatedText>
                        </div>

                    </div>
                    <div className="container container-md position-relative">
                        <div className="office-content">
                            <div className="office-map">
                                <MapComponent />
                                <div className="link-map__button">
                                    <a href="https://go.2gis.com/ruz92" target='_blank' rel="noreferrer">Открыть на карте</a>
                                </div>
                            </div>
                            <div className="office-info">
                                <div className="office-info__item">
                                    <AnimatedText as='h6' className="text-fade-in office-info__title">
                                        <img src={rhombusIcon} alt="Ромб" />
                                        Понедельник - Пятница
                                    </AnimatedText>
                                    <AnimatedText as='p' className="text-fade-in office-info__text">09:00 - 19:00</AnimatedText>
                                </div>
                                <div className="office-info__item">
                                    <AnimatedText as='h6' className="text-fade-in office-info__title">
                                        <img src={rhombusIcon} alt="Ромб" />
                                        Суббота
                                    </AnimatedText>
                                    <AnimatedText as='p' className="text-fade-in office-info__text">09:00 - 18:00</AnimatedText>
                                </div>
                                <div className="office-info__item">
                                    <AnimatedText as='h6' className="text-fade-in office-info__title">
                                        <img src={rhombusIcon} alt="Ромб" />
                                        Воскресенье
                                    </AnimatedText>
                                    <AnimatedText as='p' className="text-fade-in office-info__text">выходной</AnimatedText>
                                </div>
                                <div className="office-info__item">
                                    <AnimatedText as='h6' className="text-fade-in office-info__title">
                                        <img src={rhombusIcon} alt="Ромб" />
                                        Адрес офиса
                                    </AnimatedText>
                                    <AnimatedText as='p' className="text-fade-in office-info__text">6 микрорайон, ул. Саякбай Каралаева 13/9</AnimatedText>
                                </div>
                                <div className="office-info__item for-link-office">
                                    <AnimatedText as='h6' className="text-fade-in office-info__title">
                                        <img src={rhombusIcon} alt="Ромб" />
                                        Связаться
                                    </AnimatedText>

                                    <AnimatedText as='a' href="tel:+996772333344" className="text-fade-in office-info__text office-info__link">+996 772 333 344</AnimatedText>


                                </div>
                                <button type="button" className="link-brown office-info__btn" data-bs-toggle="modal" data-bs-target="#callModal">Заказать звонок</button>
                            </div>
                        </div>
                        <div data-speed='0.2' id='paralax-text'>
                            <AnimatedText as="p" className='title-anim-one bg-font office__bg-one'>Office</AnimatedText>
                        </div>

                    </div>
                </section>
            </div>

        </>
    );
}

export default About;