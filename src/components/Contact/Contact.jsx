import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import './MediaContact.css'

import rhombusIcon from "../../assets/icons/rhombusIcon.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import contactsImage from "../../assets/contactsImage.png";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import sliderArrowIcon from "../../assets/icons/sliderArrowIcon.svg";
import MapComponent from "../MapComponent/MapComponent";
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';


// eslint-disable-next-line react/prop-types
function Contact({ setIsModalOpen }) {
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsLoadingForm(true);
        const fromName = e.target.from_name.value;
        const fromNumber = e.target.from_number.value;
        const templateParams = {
            from_name: fromName,
            number: fromNumber,
        };
        emailjs
            .send('service_wrczsl5', 'template_q5w7veq', templateParams, 'O0nWnzGyyIvlnh2JI')
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                setIsLoadingForm(false);
                setIsModalOpen(true);
                setTimeout(() => {
                    setIsModalOpen(false);
                }, 2100);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            <section className="contact position-relative">
                <div className="container container-md">
                    <div data-speed='0.1' id='paralax-text'>
                        <AnimatedText id='animate-line-before' dataMargin='data-margin3-5' className='title-anim hero-title title title-lg'>
                            <span>Свяжитесь</span>с нами
                        </AnimatedText>
                    </div>

                    <div className="contact-map position-relative">
                        <div className="contact-map-main position-relative">
                            <MapComponent />
                            {/* <div className="contact-map__number-of-objects">
                                <div className="objects-count">6</div>
                                Объектов
                            </div> */}
                            <div className="contact-map__button">
                                <a href="https://go.2gis.com/ruz92" target='_blank' rel="noreferrer">Открыть на карте</a>
                            </div>
                        </div>
                        <div className="contact-map__numbers">
                            <AnimatedText as='div' className='title-anim'>
                                <a href="tel:+996772333344" className="contact-map__phone link-hovered">
                                    <img src={phoneIcon} alt="Номер" />
                                    +996 772 33 33 44
                                </a>
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info__block">
                            <div className="contact-info__item">
                                <AnimatedText as='h6' className="text-fade-in contact-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    Понедельник - Пятница
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in contact-info__text">09:00 - 19:00</AnimatedText>
                            </div>
                            <div className="contact-info__item">
                                <AnimatedText as='h6' className="text-fade-in contact-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    Суббота
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in contact-info__text">09:00 - 18:00</AnimatedText>
                            </div>
                            <div className="contact-info__item">
                                <AnimatedText as='h6' className="text-fade-in contact-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    Воскресенье
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in contact-info__text">выходной</AnimatedText>
                            </div>
                        </div>
                        <div className="contact-info__block">
                            <div className="contact-info__item">
                                <AnimatedText as='h6' className="text-fade-in contact-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    Адрес офиса
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in contact-info__text">6 микрорайон, ул. Саякбая Каралаева, 13/9</AnimatedText>
                            </div>
                            <div className="contact-info__item">
                                <AnimatedText as='h6' className="text-fade-in contact-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    Связаться
                                </AnimatedText>
                                <AnimatedText as='div' className='text-fade-in'>
                                    <a href="tel:+996772333344" className="contact-info__text contact-info__link">+996 772 33 33 44</a>
                                </AnimatedText>

                            </div>
                        </div>
                    </div>
                </div>
                <div data-speed='0.3' id='paralax-text'>
                    <AnimatedText as="p" className='title-anim-one bg-font contact__bg-one'>Location</AnimatedText>
                </div>

            </section>
            <section className="socials">
                <div className="container container-md block-dynamic">
                    <div className="socials-content">
                        <div data-speed='0.1' id='paralax-text'>
                            <AnimatedText as='h2' id='animate-line-before' className='title-anim title title-lg'>
                                <span>Мы</span> <br /> В соц сетях
                            </AnimatedText>
                        </div>


                        <AnimatedImage className="socials__image image-dynamic">
                            <img src={contactsImage} alt="Здание" />
                        </AnimatedImage>
                        <div className="socials__left">
                            <AnimatedText as='div' className='text-fade-in'>
                                <a href="https://www.instagram.com/primeholding_kg/" target='_blank' className="socials__left-link" rel="noreferrer">
                                    <img src={instagramIcon} alt="Иконка" />
                                    primeholding_kg
                                    <img src={sliderArrowIcon} alt="Иконка" className="socials__left__icon-second" />
                                </a>
                            </AnimatedText>
                            <AnimatedText as='div' className='text-fade-in'>
                                <a href="https://www.facebook.com/Prime-Holding-100990282532582/" target='_blank' className="socials__left-link" rel="noreferrer">
                                    <img src={facebookIcon} alt="Иконка" />
                                    Facebook
                                    <img src={sliderArrowIcon} alt="Иконка" className="socials__left__icon-second" />
                                </a>
                            </AnimatedText>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us">
                <div className="container container-lg position-relative">
                    <div data-speed='0.1' id='paralax-text'>
                        <AnimatedText as='h2' id='animate-line-before' dataMargin='data-margin3-5' className='title-anim title title-lg '>
                            <span>Связаться</span><br /> с нами
                        </AnimatedText>
                    </div>

                    <form className="contact-us__form  margin-3-5" onSubmit={sendEmail}>
                        <label className="form-item">
                            <input required type="name" className="form-item__input" placeholder="Ваше имя" name="from_name" />
                        </label>
                        <label className="form-item">
                            <input required type="tel" pattern="[0-9+\-]+" title="Неверный номер телефона" className="form-item__input" placeholder="Телефон" name="from_number" />
                        </label>
                        {/* <label className="form-checkbox">
                            <input required type="checkbox" />
                            <span className="form-checkbox__checkmark" />
                            <span className="form-checkbox__text">Я даю согласие на обработку моих персональных данных согласно
                                <a href="#" target="_blank">политике конфиденциальности</a></span>
                        </label> */}
                        <button type="submit" className="form__btn-submit link-brown">{isLoadingForm ? 'Обработка...' : 'Заказать звонок'}</button>
                    </form>
                    <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>Contact Us</AnimatedText>
                </div>
            </section>
        </>
    );
}

export default Contact;