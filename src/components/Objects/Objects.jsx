import { Link } from 'react-router-dom';

import './Objects.css'
import './MediaObjects.css'

import object1 from '../../assets/object1.png'
import object2 from '../../assets/object2.png'
// import object3 from '../../assets/object3.png'
// import object4 from '../../assets/object4.png'
import rhombusIcon from '../../assets/icons/rhombusIcon.svg'
import AnimatedText from '../UI/AnimatedText/AnimatedText'
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage'
function Objects() {
    return (
        <div className="objects">
            <section className="objects-content position-relative">
                <div className="container container-lg">
                    <AnimatedText as='h1' className="title-anim hero-title title title-lg">
                        Объекты
                    </AnimatedText>
                    <AnimatedText as="p" className='title-anim-one bg-font contact-us__bg-one'>Objects</AnimatedText>
                    <div className="objects-content__blocks">

                        <Link to='/prime' className="objects-block">
                            <div className="objects-block-image">
                                <AnimatedImage>
                                    <img src={object1} alt="object" />
                                </AnimatedImage>

                            </div>
                            <a className="objects-block-text">
                                <AnimatedText as='h2' className="title-anim hero-title  title title-lg">
                                    Prime city
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in office-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    в процессе строительства
                                </AnimatedText>
                            </a>
                        </Link>
                        <Link to='/' className="objects-block">
                            <div className="objects-block-image">
                                <AnimatedImage>
                                    <img src={object2} alt="object" />
                                </AnimatedImage>
                            </div>
                            <a className="objects-block-text">
                                <AnimatedText as='h2' className="title-anim hero-title title title-lg">
                                    Kochmon city
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in office-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    В процессе строительства
                                </AnimatedText>
                            </a>
                        </Link>
                        {/* <div className="objects-block">
                            <div className="objects-block-image">
                                <AnimatedImage>
                                    <img src={object3} alt="object" />
                                </AnimatedImage>
                            </div>
                            <a href="#" className="objects-block-text">
                                <AnimatedText as='h2' className="title-anim hero-title title title-lg">
                                    Baytic Village
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in office-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    ЗАвершен
                                </AnimatedText>
                            </a>
                        </div>
                        <div className="objects-block">
                            <div className="objects-block-image">
                                <AnimatedImage>
                                    <img src={object4} alt="object" />
                                </AnimatedImage>
                            </div>
                            <a href="#" className="objects-block-text">
                                <AnimatedText as='h2' className="title-anim hero-title title title-lg">
                                    Baytic Village
                                </AnimatedText>
                                <AnimatedText as='h6' className="text-fade-in office-info__title">
                                    <img src={rhombusIcon} alt="Ромб" />
                                    ЗАвершен
                                </AnimatedText>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Objects;