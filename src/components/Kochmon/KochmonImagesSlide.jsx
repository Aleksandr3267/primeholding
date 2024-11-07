import { useEffect, useState } from 'react';
import imageSlide1 from '../../assets/Kochmon/imageSlide/imageSlide1.webp';
import imageSlide2 from '../../assets/Kochmon/imageSlide/imageSlide2.webp';
import imageSlide3 from '../../assets/Kochmon/imageSlide/imageSlide3.webp';
import imageSlide4 from '../../assets/Kochmon/imageSlide/imageSlide4.webp';
import imageSlide5 from '../../assets/Kochmon/imageSlide/imageSlide5.webp';
import imageSlide6 from '../../assets/Kochmon/imageSlide/imageSlide6.webp';
import imageSlide7 from '../../assets/Kochmon/imageSlide/imageSlide7.webp';
import imageSlide8 from '../../assets/Kochmon/imageSlide/imageSlide8.webp';
import imageSlide9 from '../../assets/Kochmon/imageSlide/imageSlide9.webp';
import imageSlide10 from '../../assets/Kochmon/imageSlide/imageSlide10.webp';
import imageSlide11 from '../../assets/Kochmon/imageSlide/imageSlide11.webp';
import imageSlide12 from '../../assets/Kochmon/imageSlide/imageSlide12.webp';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';
import AnimatedText from '../UI/AnimatedText/AnimatedText';



// eslint-disable-next-line react/prop-types
function ImagesSlide({ id, dataSpeed }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const progressItems = document.querySelectorAll('[data-progress-item]');
        const progressBlockImg = document.querySelector('[data-progress-block-img]');
        const progressBlockText = document.querySelector('[data-progress-block-text]');
        if (progressItems.length > 0) {
            progressItems[currentIndex].classList.add('images-right__item--animated');
            progressItems[currentIndex].classList.add('images-right__item--active');

            let nextIndex = currentIndex + 1;
            let timerSlide = setTimeout(() => {
                progressItems[currentIndex].classList.remove('images-right__item--animated');
                progressItems[currentIndex].classList.remove('images-right__item--active');
                if (nextIndex === progressItems.length) {
                    nextIndex = 0;
                }
                progressItems[nextIndex].classList.add('images-right__item--animated');
                progressItems[nextIndex].classList.add('images-right__item--active');
                const itemImg = progressItems[nextIndex].querySelector('[data-progress-item-img]');
                const itemText = progressItems[nextIndex].querySelector('[data-progress-item-text]');
                changeProgressImg(progressBlockImg, itemImg, progressBlockText, itemText);
                setCurrentIndex(nextIndex);
            }, 5000);
            let textClick = document.querySelectorAll('.images-right__item-title');
            for (let i = 0; i < textClick.length; i++) {
                textClick[i].addEventListener('click', function () {
                    clearTimeout(timerSlide);
                    progressItems[currentIndex].classList.remove('images-right__item--animated');
                    progressItems[currentIndex].classList.remove('images-right__item--active');
                    nextIndex = i;
                    progressItems[nextIndex].classList.add('images-right__item--animated');
                    progressItems[nextIndex].classList.add('images-right__item--active');
                    const itemImg = progressItems[nextIndex].querySelector('[data-progress-item-img]');
                    const itemText = progressItems[nextIndex].querySelector('[data-progress-item-text]');
                    changeProgressImg(progressBlockImg, itemImg, progressBlockText, itemText);
                    setCurrentIndex(nextIndex);
                })
            }

        }
    }, [currentIndex]);
    const changeProgressImg = (progressBlockImg, itemImg, progressBlockText, itemText) => {
        progressBlockImg.classList.add('images-img__img--animated');
        progressBlockText.classList.add('images-text__text--animated');
        setTimeout(() => {
            progressBlockImg.src = itemImg.src;
            progressBlockImg.classList.remove('images-img__img--animated');

            progressBlockText.textContent = itemText.textContent;
            progressBlockText.classList.remove('images-text__text--animated');
        }, 300);
    };

    return (
        <section id={id} className="images" data-speed={dataSpeed}>
            <div className="container container-lg">
                <div className="images__content" data-progress-block>
                    <AnimatedImage className="images-img">
                        <img src={imageSlide1} alt="Детская площадка" className="images-img__img img-cover" data-progress-block-img />
                    </AnimatedImage>
                    <div className="images-right">
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Многоквартирные жилые дома</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide1} alt="Детская площадка" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Современные, комфортабельные квартиры, обеспечивающие уют и безопасность для вашей семьи.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Медицинские центры</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide2} alt="Охраняемая территория" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Медицинский центр в шаговой доступности, поддерживающий ваше благополучие.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">мечеть</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide3} alt="Подземный и гостевой паркинг" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Духовный центр, где вы сможете находить покой и вдохновение.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">БИЗНЕС И ТОРГОВЫЙ ЦЕНТРЫ</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide4} alt="Подземный и гостевой паркинг" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Бизнес и торговые центры с инновационной атмосферой, предоставляющий новые возможности для предпринимателей и увлекательный опыт шопинга.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">отель международного класса</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide5} alt="Транспортная доступность" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Роскошное проживание для гостей и туристов, создающее идеальное место для отдыха и работы.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Кафе и рестораны</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide6} alt="Уникальный пешеходный мост" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Кафе и рестораны с разнообразным меню для ваших гастрономических радостей.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Офисные помещения</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide7} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Офисные помещения, способствующие эффективной работе и вдохновению.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Аптеки</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide8} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Аптеки с широким ассортиментом медикаментов и товаров.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Детские сады</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide9} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Детские сады, наполненные радостью, играми и учебой.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">школы</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide10} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Школы, где каждый ученик открывает перед собой мир знаний.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Многоуровневые паркинги</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide11} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Многоуровневые паркинги, предоставляющие удобное место для парковки и сохранности вашего транспорта.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">ЗАРЯДКА ЭЛЕКТРОМОБИЛЕЙ</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide12} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Инфраструктура для удобной зарядки электромобилей, способствующая заботе о окружающей среде и инновационной мобильности.</p>
                        </div>
                        <AnimatedText as='div' className='text-fade-in images-right__text-block'>
                            <p className=" images-right__text block-text" data-progress-block-text></p>
                        </AnimatedText>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImagesSlide;
