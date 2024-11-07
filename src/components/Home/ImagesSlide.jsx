import { useEffect, useState } from 'react';
import imageSlide1 from '../../assets/imageSlide/imageSlide1.png';
import imageSlide2 from '../../assets/imageSlide/imageSlide2.png';
import imageSlide3 from '../../assets/imageSlide/imageSlide3.png';
import imageSlide31 from '../../assets/imageSlide/imageSlide31.png';
import imageSlide4 from '../../assets/imageSlide/imageSlide4.png';
import imageSlide5 from '../../assets/imageSlide/imageSlide5.png';
import imageSlide6 from '../../assets/imageSlide/imageSlide6.png';
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
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Детская площадка</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide1} alt="Детская площадка" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Безопасная и комфортная детская площадка и помещение для детских колясок и велосипедов.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Охраняемая территория</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide2} alt="Охраняемая территория" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Закрытая охраняемая территория и видеонаблюдение по всему периметру дома 24/7.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Подземный паркинг</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide31} alt="Подземный и гостевой паркинг" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>ПРОДУМАННЫЙ ПОДЗЕМНЫЙ ПАРКИНГ БЕЗ КРУТЫХ ПОВОРОТОВ И СПУСКОВ ДЛЯ УДОБСТВА ЖИЛЬЦОВ.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">гостевой паркинг</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide3} alt="Подземный и гостевой паркинг" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>удобный гостевой паркинг. Вам не придется беспокоиться о поиске парковочного места - мы предлагаем достаточно мест для удобной парковки ваших клиентов и гостей.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Транспортная доступность</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide4} alt="Транспортная доступность" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>20 шагов до остановки общественного транспорта</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Уникальный пешеходный мост</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide5} alt="Уникальный пешеходный мост" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Прогулочный мост через речку Аламедин к Ботаническому саду, аллеи и зона отдыха над речкой.</p>
                        </div>
                        <div className="images-right__item" data-progress-item>
                            <svg className="images-right__item-svg" width={10} height={10} viewBox="0 0 10 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L5 0L0 5L5 10L10 5Z" />
                            </svg>
                            <span className="images-right__item-line">
                                <span className="images-right__item-line__progress" />
                            </span>
                            <AnimatedText as='p' className="text-fade-in images-right__item-title">Центр детского творчества</AnimatedText>
                            <img className="images-right__item-img" src={imageSlide6} alt="Центр детского творчества" data-progress-item-img />
                            <p className="images-right__item-text" data-progress-item-text>Робототехника, танцы, шахматы, программирование, живопись, лепка.</p>
                        </div>
                        <AnimatedText as='div' className='text-fade-in images-right__text-block'>
                            <p className=" images-right__text block-text" data-progress-block-text> Безопасная и комфортная детская площадка и помещение для детских колясок и велосипедов.</p>
                        </AnimatedText>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImagesSlide;
