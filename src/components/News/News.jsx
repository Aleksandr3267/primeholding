/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './News.css'
import './MediaNews.css'

// import rhombusIcon from "../../assets/icons/rhombusIcon.svg";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import callIcon from "../../assets/icons/call-icon.svg";
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';

function News() {

    var elements = document.querySelectorAll('.news .news__content .news-block:nth-child(2n)');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var height = element.offsetHeight;
        console.log('Height of element ' + (i + 1) + ': ' + height + 'px');
    }

    return (
        <div className="news">
            <section className="news-top position-relative">
                <div className="container container-lg">
                    <AnimatedText className="title-anim hero-title title title-lg">
                        новости, интересное
                    </AnimatedText>
                    <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>News</AnimatedText>
                </div>
            </section>
            <section className="news__content">
                <div className="container container-lg">
                    <div className="news-blocks">


                        <div className="news-blocks-side">
                            <div className="news-block">
                                <div className="news-date title-line-after">10.03.2023</div>
                                <AnimatedText as='h3' className="title-anim title title-lg">
                                    Завершение строительства
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    Lorem ipsum dolor sit amet consectetur. Facilisis enim dui feugiat nibh elementum pellentesque massa nulla. Scelerisque vulputate diam eu ultricies cras. Porta ullamcorper in quis lacus a lobortis.
                                </AnimatedText>
                                <div className="image-content">
                                    <AnimatedImage className="image-content__image">
                                        <img src={news1} alt="Авто" />
                                    </AnimatedImage>
                                    <div className="image-content__right">
                                        <Link className="call" to='/newsItem'>Читать <img src={callIcon} alt="call" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-date title-line-after">10.03.2023</div>
                                <AnimatedText as='h3' className="title-anim title title-lg">
                                    Завершение строительства жилого комплекса Prime City
                                </AnimatedText>
                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    Lorem ipsum dolor sit amet consectetur. Facilisis enim dui feugiat nibh elementum pellentesque massa nulla. Scelerisque vulputate diam eu ultricies cras. Porta ullamcorper in quis lacus a lobortis.
                                </AnimatedText>
                                <div className="image-content">
                                    <AnimatedImage className="image-content__image">
                                        <img src={news3} alt="Авто" />
                                    </AnimatedImage>
                                    <div className="image-content__right">
                                        <Link className="call" to='/newsItem'>Читать <img src={callIcon} alt="call" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news-blocks-side">
                            <div className="news-block">
                                <div className="news-date title-line-after">10.03.2023</div>
                                <AnimatedText as='h3' className="title-anim title title-lg">Завершение строительства жилого комплекса Prime City</AnimatedText>
                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    Lorem ipsum dolor sit amet consectetur. Facilisis enim dui feugiat nibh elementum pellentesque massa nulla. Scelerisque vulputate diam eu ultricies cras. Porta ullamcorper in quis lacus a lobortis.
                                </AnimatedText>
                                <div className="image-content">
                                    <AnimatedImage className="image-content__image">
                                        <img src={news2} alt="Авто" />
                                    </AnimatedImage>
                                    <div className="image-content__right">
                                        <Link className="call" to='/newsItem'>Читать <img src={callIcon} alt="call" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-date title-line-after">10.03.2023</div>
                                <AnimatedText as='h3' className="title-anim title title-lg">Завершение строительства жилого комплекса Prime City</AnimatedText>
                                <AnimatedText as='p' className="text-fade-in block-text block-text-m">
                                    Lorem ipsum dolor sit amet consectetur. Facilisis enim dui feugiat nibh elementum pellentesque massa nulla. Scelerisque vulputate diam eu ultricies cras. Porta ullamcorper in quis lacus a lobortis.
                                </AnimatedText>
                                <div className="image-content">
                                    <AnimatedImage className="image-content__image">
                                        <img src={news4} alt="Авто" />
                                    </AnimatedImage>
                                    <div className="image-content__right">
                                        <Link className="call" to='/newsItem'>Читать <img src={callIcon} alt="call" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}

export default News;