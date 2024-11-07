import './ApartmentsSelectObject.css';
// import './MediaObjects.css'
import object1 from '../../../assets/object1.png';
import object2 from '../../../assets/object2.png';
// import object3 from '../../assets/object3.png'
// import object4 from '../../assets/object4.png'
import rhombusIcon from '../../../assets/icons/rhombusIcon.svg';
import AnimatedText from '../../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../../UI/AnimatedImage/AnimatedImage';
import modalCloseIcon from '../../../assets/icons/modalCloseGallery.svg';


// eslint-disable-next-line react/prop-types
function ApartmentsSelectObject({ isOpen, onCloseModal, onOpenSelectBlockModal, onOpenKochmonSelectSectorModal }) {
    // function handleOptionClick(option) {
    //     setSelectedBlock(option);
    //     onOpenSelectPlannedLayoutModal();
    // }

    return (
        <div className={`objects objects-select-ap custom-pop-anim select-block-modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-select-block__body-content">
                            <div className="select-block__top">
                                <AnimatedText as='h2' className='title-anim title'>Выберите Объект</AnimatedText>
                                <button type="button" className="modal-apartments__btn-close" onClick={onCloseModal}>
                                    <img src={modalCloseIcon} alt="Закрыть" />
                                </button>
                            </div>
                            <section className="objects-content position-relative">
                                <div className="container container-lg">
                                    <div className="objects-content__blocks">

                                        <div onClick={onOpenSelectBlockModal} className="objects-block" style={{ cursor: 'pointer' }}>
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
                                        </div>
                                        <div onClick={onOpenKochmonSelectSectorModal} className="objects-block" style={{ cursor: 'pointer' }}>
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
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApartmentsSelectObject;