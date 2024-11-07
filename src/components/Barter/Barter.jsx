import { useState, useEffect } from 'react';
import './Barter.css'
import './MediaBarter.css'

import rhombusIcon from "../../assets/icons/rhombusIcon.svg";
import imageForBarter1 from "../../assets/image-for-barter1.png";
import imageForBarter2 from "../../assets/image-for-barter2.png";
import imageForBarter3 from "../../assets/image-for-barter3.png";
import imageForBarter4 from "../../assets/image-for-barter4.png";
import callIcon from "../../assets/icons/call-icon.svg";
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';

/* eslint-disable react/no-unescaped-entities */


function Barter() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getTitleClass = () => {
        let titleClass = '';
        if (isMobile) {
            titleClass += 'animate-line-after';
        } else {
            titleClass += 'animate-line-before';
        }
        return titleClass;
    };

    return (
        <>
            <div className="barter">
                <section className="barter-content position-relative">
                    <div data-speed='0.1' id='paralax-text' className="container container-lg">
                        <AnimatedText as='h1' className="title-anim hero-title title title-lg">
                            Бартер
                        </AnimatedText>
                        <AnimatedText as='div' className="text-fade-in block-text barter-content__description">
                            <img src={rhombusIcon} alt="Ромб" />Бартерный обмен - это способ обмена товаров или
                            услуг без использования денег.
                        </AnimatedText>
                    </div>
                </section>
                <section className="car">
                    <div className="container container-lg">
                        <div className="car-content">
                            <AnimatedImage className="car-content__image">
                                <img src={imageForBarter1} alt="Авто" />
                            </AnimatedImage>
                            <div data-speed='0.3' id='paralax-text' className="car-content__left">
                                <AnimatedText id='animate-line-after' as='h2' className="title-anim title title-lg">Авто</AnimatedText>

                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    "Trade-in" - это процесс обмена старого товара на новый, при этом стоимость старого товара
                                    вычитается из стоимости нового. В рамках "trade-in" вы можете получить скидку на покупку
                                    нового товара, путем сдачи своего старого товара в зачет.
                                </AnimatedText>
                                <a href="tel:+996772333344" className="call">Позвонить <img src={callIcon} alt="call" /></a>
                            </div>

                            <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>Car</AnimatedText>


                        </div>
                    </div>
                </section>
                <section className="property">
                    <div className="container container-lg position-relative block-dynamic">
                        <div className="property-content">
                            <AnimatedImage className="image image-dynamic">
                                <img src={imageForBarter2} alt="Недвижимость" />
                            </AnimatedImage>
                            <div data-speed='0.3' id='paralax-text' className="property-content__text">
                                <AnimatedText as='h2' id={getTitleClass()} className={"title-anim title title-lg"}>Недвижимость</AnimatedText>
                                {/* <h2 className="title title-lg title-line-after mob">Недвижимость</h2> */}
                                <div className="block__left">
                                    <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                        "Trade-in" - это процесс обмена старого товара на новый, при этом стоимость старого
                                        товара
                                        вычитается из стоимости нового. В рамках "trade-in" вы можете получить скидку на покупку
                                        нового товара, путем сдачи своего старого товара в зачет.
                                    </AnimatedText>
                                </div>
                                <a href="tel:+996772333344" className="call">Позвонить <img src={callIcon} alt="call" /></a>
                            </div>
                        </div>
                        <div data-speed='0.2' id='paralax-text'>
                            <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>Real Estate</AnimatedText>
                        </div>

                    </div>
                </section>
                <section className="business-property">
                    <div className="container container-lg position-relative block-dynamic">
                        <div className="business-property-content">
                            <AnimatedImage className="image">
                                <img src={imageForBarter3} alt="Бизнес недвижимость" />
                            </AnimatedImage>
                            <div data-speed='0.3' id='paralax-text' className="content__left">
                                <AnimatedText as='h2' id={getTitleClass()} className={"title-anim title title-lg"}>Земельный участок</AnimatedText>
                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    "Trade-in" - это процесс обмена старого товара на новый, при этом стоимость старого товара вычитается из стоимости нового. В рамках "trade-in" вы можете получить скидку на покупку нового товара, путем сдачи своего старого товара в зачет.
                                </AnimatedText>
                                <a href="tel:+996772333344" className="call">Позвонить <img src={callIcon} alt="call" /></a>
                            </div>

                            <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>For Business</AnimatedText>

                        </div>
                    </div>
                </section>
                <section className="private-homes">
                    <div className="container container-lg position-relative block-dynamic">
                        <div className="private-homes-content">
                            <AnimatedImage className="image">
                                <img src={imageForBarter4} alt="Недвижимость" />
                            </AnimatedImage>
                            <div data-speed='0.3' id='paralax-text' className="private-homes-content__text">
                                <AnimatedText as='h2' id={getTitleClass()} className={"title-anim title title-lg"}>Частные дома</AnimatedText>
                                <div className="block__left">
                                    <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                        "Trade-in" - это процесс обмена старого товара на новый, при этом стоимость старого
                                        товара
                                        вычитается из стоимости нового. В рамках "trade-in" вы можете получить скидку на покупку
                                        нового товара, путем сдачи своего старого товара в зачет.
                                    </AnimatedText>
                                </div>
                                <a href="tel:+996772333344" className="call">Позвонить <img src={callIcon} alt="call" /></a>
                            </div>
                        </div>
                        <div data-speed='0.2' id='paralax-text'>
                            <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>Houses</AnimatedText>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Barter;