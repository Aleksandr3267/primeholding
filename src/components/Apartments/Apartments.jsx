import { useState, useEffect } from 'react';
import './Apartments.css';
import './MediaApartments.css';
import modalCloseIcon from '../../assets/icons/modalCloseGallery.svg';
import backIcon from '../../assets/apartment/backIcon.svg';

import iconDownload from '../../assets/apartment/iconDownload.svg';
import arrowUp from '../../assets/apartment/arrowUp.svg';
import arrowDown from '../../assets/apartment/arrowDown.svg';
import imageFlat1i1 from '../../assets/apartment/SelectFloor/SelectFloor1-1.png';
import imageFlat1i2 from '../../assets/apartment/SelectFloor/SelectFloor1-2.png';
import imageFlat1i3 from '../../assets/apartment/SelectFloor/SelectFloor1-3.png';
import imageFlat1i4 from '../../assets/apartment/SelectFloor/SelectFloor1-4.png';
import imageFlat1i5 from '../../assets/apartment/SelectFloor/SelectFloor1-5.png';

import imageFlat2i1 from '../../assets/apartment/SelectFloor/SelectFloor2-1.png';
import imageFlat2i2 from '../../assets/apartment/SelectFloor/SelectFloor2-2.png';
import imageFlat2i3 from '../../assets/apartment/SelectFloor/SelectFloor2-3.png';
import imageFlat2i4 from '../../assets/apartment/SelectFloor/SelectFloor2-4.png';
import imageFlat2i5 from '../../assets/apartment/SelectFloor/SelectFloor2-5.png';
import imageFlat2i6 from '../../assets/apartment/SelectFloor/SelectFloor2-6.png';

import imageFlat2f14i1 from '../../assets/apartment/SelectFloor/SelectFloor2-14-1.png';
import imageFlat2f14i2 from '../../assets/apartment/SelectFloor/SelectFloor2-14-2.png';

// import imageFlat2f15i1 from '../../assets/apartment/SelectFloor/SelectFloor2-15-1.png';
// import imageFlat2f15i2 from '../../assets/apartment/SelectFloor/SelectFloor2-15-2.png';

import imageFlat3i1 from '../../assets/apartment/SelectFloor/SelectFloor3-1.png';
import imageFlat3i2 from '../../assets/apartment/SelectFloor/SelectFloor3-2.png';
import imageFlat3i3 from '../../assets/apartment/SelectFloor/SelectFloor3-3.png';
import imageFlat3i4 from '../../assets/apartment/SelectFloor/SelectFloor3-4.png';
import imageFlat3i5 from '../../assets/apartment/SelectFloor/SelectFloor3-5.png';

import imageFlat4i1 from '../../assets/apartment/SelectFloor/SelectFloor4-1.png';
import imageFlat4i2 from '../../assets/apartment/SelectFloor/SelectFloor4-2.png';
import imageFlat4i3 from '../../assets/apartment/SelectFloor/SelectFloor4-3.png';
import imageFlat4i4 from '../../assets/apartment/SelectFloor/SelectFloor4-4.png';
import imageFlat4i5 from '../../assets/apartment/SelectFloor/SelectFloor4-5.png';
import imageFlat4i6 from '../../assets/apartment/SelectFloor/SelectFloor4-6.png';
import imageFlat4i7 from '../../assets/apartment/SelectFloor/SelectFloor4-7.png';

import imageFlat4f14i1 from '../../assets/apartment/SelectFloor/SelectFloor4-14-1.png';
import imageFlat4f14i2 from '../../assets/apartment/SelectFloor/SelectFloor4-14-2.png';
import imageFlat4f14i4 from '../../assets/apartment/SelectFloor/SelectFloor4-14-4.png';
import imageFlat4f14i5 from '../../assets/apartment/SelectFloor/SelectFloor4-14-5.png';

// import imageFlat4f15i1 from '../../assets/apartment/SelectFloor/SelectFloor4-15-1.png';
// import imageFlat4f15i2 from '../../assets/apartment/SelectFloor/SelectFloor4-15-2.png';




import loupeIcon from '../../assets/apartment/loupe-icon.svg';
import compass from '../../assets/apartment/compass.svg';
import switchIcon from '../../assets/apartment/switchIcon.svg';
// import flat from '../../assets/apartment/flat.svg';

import calculatorIcon from '../../assets/apartment/calculator-icon.svg';
import optionsIcon from '../../assets/apartment/optionsIcon.svg';
import imageOptions from '../../assets/apartment/imageOptions.png';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// eslint-disable-next-line react/prop-types
function Apartments({ selectedFloor, selectedBlock, changeSetSelectedFloor, selectedOption, setSelectedOption, isOpen, onCloseModal, onCloseModalPlannedLayout, setSelectedArrFloor, setSelectedFlRooms }) {
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [previousOption, setPreviousOption] = useState(selectedOption);

    const [previousOption14, setPreviousOption14] = useState(selectedOption);
    // const [previousOption15, setPreviousOption15] = useState(selectedOption);

    useEffect(() => {
        if (selectedFloor < 14) {
            setPreviousOption(selectedOption);
        }
        if (selectedFloor == 14) {
            setPreviousOption14(selectedOption);
        }
        // if (selectedFloor == 14) {
        //     setPreviousOption15(selectedOption);
        // }
    }, [selectedOption]);


    const getImageForOption = (option) => {
        switch (option) {
            case 'option1-1':
                return {
                    image: (imageFlat1i1),
                    numRums: (2),
                    areaApartment: ('68.68'),
                    selectBlockActive: ('1-1'),
                };
            case 'option1-2':
                return {
                    image: (imageFlat1i2),
                    numRums: (3),
                    areaApartment: ('93.31'),
                    selectBlockActive: ('1-2'),
                };
            case 'option1-3':
                return {
                    image: (imageFlat1i3),
                    numRums: (1),
                    areaApartment: ('32.07'),
                    selectBlockActive: ('1-3'),
                };
            case 'option1-4':
                return {
                    image: (imageFlat1i4),
                    numRums: (1),
                    areaApartment: ('44.94'),
                    selectBlockActive: ('1-4'),
                };
            case 'option1-5':
                return {
                    image: (imageFlat1i5),
                    numRums: (2),
                    areaApartment: ('73.60'),
                    selectBlockActive: ('1-5'),
                };

            case 'option2-1':
                return {
                    image: (imageFlat2i1),
                    numRums: (1),
                    areaApartment: ('32.24'),
                    selectBlockActive: ('2-1'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-2':
                return {
                    image: (imageFlat2i2),
                    numRums: (1),
                    areaApartment: ('32.24'),
                    selectBlockActive: ('2-2'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-3':
                return {
                    image: (imageFlat2i3),
                    numRums: (1),
                    areaApartment: ('49.64'),
                    selectBlockActive: ('2-3'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-4':
                return {
                    image: (imageFlat2i4),
                    numRums: (3),
                    areaApartment: ('112.36'),
                    selectBlockActive: ('2-4'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-5':
                return {
                    image: (imageFlat2i5),
                    numRums: (3),
                    areaApartment: ('112.36'),
                    selectBlockActive: ('2-5'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-6':
                return {
                    image: (imageFlat2i6),
                    numRums: (1),
                    areaApartment: ('49.64'),
                    selectBlockActive: ('2-6'),
                    selectOptionNumX: ('2X'),
                };

            case 'option2-14-1':
                return {
                    image: (imageFlat2f14i1),
                    numRums: (8),
                    areaApartment: ('199.69'),
                    selectBlockActive: ('2-14-1'),
                    selectOptionNumX: ('2X'),
                };
            case 'option2-14-2':
                return {
                    image: (imageFlat2f14i2),
                    numRums: (8),
                    areaApartment: ('199.69'),
                    selectBlockActive: ('2-14-2'),
                    selectOptionNumX: ('2X'),
                };

            // case 'option2-15-1':
            //     return {
            //         image: (imageFlat2f15i1),
            //         numRums: (11),
            //         areaApartment: ('198.22'),
            //         selectBlockActive: ('2-15-1'),
            //         selectOptionNumX: ('2X'),
            //     };
            // case 'option2-15-2':
            //     return {
            //         image: (imageFlat2f15i2),
            //         numRums: (11),
            //         areaApartment: ('198.22'),
            //         selectBlockActive: ('2-15-2'),
            //         selectOptionNumX: ('2X'),
            //     };



            case 'option3-1':
                return {
                    image: (imageFlat3i1),
                    numRums: (2),
                    areaApartment: ('68.78'),
                    selectBlockActive: ('3-1'),
                };
            case 'option3-2':
                return {
                    image: (imageFlat3i2),
                    numRums: (3),
                    areaApartment: ('93.31'),
                    selectBlockActive: ('3-2'),
                };
            case 'option3-3':
                return {
                    image: (imageFlat3i3),
                    numRums: (1),
                    areaApartment: ('32.48'),
                    selectBlockActive: ('3-3'),
                };
            case 'option3-4':
                return {
                    image: (imageFlat3i4),
                    numRums: (1),
                    areaApartment: ('44.94'),
                    selectBlockActive: ('3-4'),
                };
            case 'option3-5':
                return {
                    image: (imageFlat3i5),
                    numRums: (2),
                    areaApartment: ('73.68'),
                    selectBlockActive: ('3-5'),
                };

            case 'option4-1':
                return {
                    image: (imageFlat4i1),
                    numRums: (1),
                    areaApartment: ('39.94'),
                    selectBlockActive: ('4-1'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-2':
                return {
                    image: (imageFlat4i2),
                    numRums: (1),
                    areaApartment: ('46.97'),
                    selectBlockActive: ('4-2'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-3':
                return {
                    image: (imageFlat4i3),
                    numRums: (2),
                    areaApartment: ('72.79'),
                    selectBlockActive: ('4-3'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-4':
                return {
                    image: (imageFlat4i4),
                    numRums: (3),
                    areaApartment: ('145.38'),
                    selectBlockActive: ('4-4'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-5':
                return {
                    image: (imageFlat4i5),
                    numRums: (1),
                    areaApartment: ('46.68'),
                    selectBlockActive: ('4-5'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-6':
                return {
                    image: (imageFlat4i6),
                    numRums: (1),
                    areaApartment: ('48.38'),
                    selectBlockActive: ('4-6'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-7':
                return {
                    image: (imageFlat4i7),
                    numRums: (2),
                    areaApartment: ('73.46'),
                    selectBlockActive: ('4-7'),
                    selectOptionNumX: ('4X'),
                };


            case 'option4-14-1':
                return {
                    image: (imageFlat4f14i1),
                    numRums: (3),
                    areaApartment: ('144.48'),
                    selectBlockActive: ('4-14-1'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-14-2':
                return {
                    image: (imageFlat4f14i2),
                    numRums: (2),
                    areaApartment: ('97.76'),
                    selectBlockActive: ('4-14-2'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-14-3':
                return {
                    image: (imageFlat4f14i2),
                    numRums: (1),
                    areaApartment: ('51.02'),
                    selectBlockActive: ('4-14-3'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-14-4':
                return {
                    image: (imageFlat4f14i4),
                    numRums: (3),
                    areaApartment: ('145.38'),
                    selectBlockActive: ('4-14-4'),
                    selectOptionNumX: ('4X'),
                };
            case 'option4-14-5':
                return {
                    image: (imageFlat4f14i5),
                    numRums: (1),
                    areaApartment: ('46.97'),
                    selectBlockActive: ('4-14-5'),
                    selectOptionNumX: ('4X'),
                };

            // case 'option4-15-1':
            //     return {
            //         image: (imageFlat4f15i1),
            //         numRums: (11),
            //         areaApartment: ('151.82'),
            //         selectBlockActive: ('4-15-1'),
            //         selectOptionNumX: ('4X'),
            //     };
            // case 'option4-15-2':
            //     return {
            //         image: (imageFlat4f15i2),
            //         numRums: (10),
            //         areaApartment: ('145.03'),
            //         selectBlockActive: ('4-15-2'),
            //         selectOptionNumX: ('4X'),
            //     };


            // Добавьте остальные варианты
            default:
                return '';
        }
    };
    const { image, numRums, areaApartment, selectBlockActive, selectOptionNumX } = getImageForOption(selectedOption);
    useEffect(() => {
        if (areaApartment) {
            setSelectedArrFloor(areaApartment);
        }
        if (numRums) {
            setSelectedFlRooms(numRums);
        }
    }, [areaApartment, numRums, setSelectedArrFloor, setSelectedFlRooms]);



    useEffect(() => {
        if (selectOptionNumX == '2X') {
            if (selectedFloor < 14) {
                if (previousOption == '' ||
                    previousOption != 'option2-1' &&
                    previousOption != 'option2-2' &&
                    previousOption != 'option2-3' &&
                    previousOption != 'option2-4' &&
                    previousOption != 'option2-5' &&
                    previousOption != 'option2-6') {
                    setSelectedOption('option2-1');
                } else {
                    setSelectedOption(previousOption);
                }
            }
            if (selectedFloor === 14) {
                if (previousOption14 != 'option2-14-1' || previousOption14 != 'option2-14-2') {
                    setSelectedOption('option2-14-1');
                }
                if (previousOption14 == 'option2-14-1' || previousOption14 == 'option2-14-2') {
                    setSelectedOption(previousOption14);
                }
            }
            // if (selectedFloor === 14) {
            //     if (previousOption15 != 'option2-15-1' || previousOption15 != 'option2-15-2') {
            //         setSelectedOption('option2-15-1');
            //     }
            //     if (previousOption15 == 'option2-15-1' || previousOption15 == 'option2-15-2') {
            //         setSelectedOption(previousOption15);
            //     }
            // }
        }

        if (selectOptionNumX == '4X') {
            if (selectedFloor < 14) {
                if (previousOption == '' ||
                    previousOption != 'option4-1' &&
                    previousOption != 'option4-2' &&
                    previousOption != 'option4-3' &&
                    previousOption != 'option4-4' &&
                    previousOption != 'option4-5' &&
                    previousOption != 'option4-6' &&
                    previousOption != 'option4-7') {
                    setSelectedOption('option4-1');
                } else {
                    setSelectedOption(previousOption);
                }
            }
            if (selectedFloor === 14) {
                if (previousOption14 != 'option4-14-1' || previousOption14 != 'option4-14-2' || previousOption14 != 'option4-14-3' || previousOption14 != 'option4-14-4' || previousOption14 != 'option4-14-5') {
                    setSelectedOption('option4-14-1');
                }
                if (previousOption14 == 'option4-14-1' || previousOption14 == 'option4-14-2' || previousOption14 == 'option4-14-3' || previousOption14 == 'option4-14-4' || previousOption14 == 'option4-14-5') {
                    setSelectedOption(previousOption14);
                }
            }
            // if (selectedFloor === 14) {
            //     if (previousOption15 != 'option4-15-1' || previousOption15 != 'option4-15-2') {
            //         setSelectedOption('option4-15-1');
            //     }
            //     if (previousOption15 == 'option4-15-1' || previousOption15 == 'option4-15-2') {
            //         setSelectedOption(previousOption15);
            //     }
            // }
        }
    }, [selectedFloor]);



    function openImage() {
        setIsOpenImage(true);
    }
    function backToBlock() {
        onCloseModalPlannedLayout();
        setTimeout(() => {
            onCloseModal()
        }, 200)
    }
    function handleDownload() {
        const inputElement = document.getElementById('targetElement');
        import('html2canvas').then(({ default: html2canvas }) => {
            import('jspdf').then(({ default: jsPDF }) => {
                const pdf = new jsPDF('p', 'px', 'a4'); // Используем формат 'a4' для PDF-файла
                html2canvas(inputElement).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    pdf.save('apartments.pdf');
                });
            });
        });
    }


    return (
        <div className={`custom-pop-anim apartments ${isOpen ? 'show' : ''}`} >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className={`modal-body ${isOpenImage ? 'show-img' : ''}`}>
                        <div className="modal-apartments__body-content">
                            {isOpenImage ?
                                <div className="image-full">
                                    <img src={image} alt="Apartamets" />
                                    <button type="button" className='image-full-close' onClick={() => setIsOpenImage(false)}>
                                        <img src={modalCloseIcon} alt="Закрыть" />
                                    </button>
                                </div>
                                : ""}
                            <div className="apartments__top">
                                <AnimatedText as='div' className='text-fade-in'>
                                    <button className='download' onClick={handleDownload}>
                                        <img src={iconDownload} alt="iconDownload" /> Скачать PDF
                                    </button>
                                </AnimatedText>
                                <button type="button" className="modal-apartments__btn-close" onClick={onCloseModal}>
                                    <span>назад</span>
                                    <img src={backIcon} alt="Закрыть" />
                                </button>
                            </div>
                            <div className="apartments__center">
                                <div className="center-side left-side">
                                    <div className="center-row" data-name-row='этаж'>
                                        <div className="center-row-bottom">
                                            <AnimatedText as='h2' className="title-anim title title-num-floor">{selectedFloor}</AnimatedText>
                                            <div className="floor-controls">
                                                <div className="buttons">
                                                    <button type="button" onClick={() => { const newSelectedFloor = selectedFloor + 1; changeSetSelectedFloor(newSelectedFloor >= 14 ? 14 : newSelectedFloor); }}>
                                                        <img src={arrowUp} alt="arrowUp" />
                                                    </button>
                                                    <button type="button" onClick={() => { const newSelectedFloor = selectedFloor - 1; changeSetSelectedFloor(newSelectedFloor <= 1 ? 1 : newSelectedFloor); }}>
                                                        <img src={arrowDown} alt="arrowDown" />
                                                    </button>
                                                </div>
                                                <div className="count">/14</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-row" data-name-row='Площадь'>
                                        <AnimatedText as='h2' className="title-anim title">{areaApartment}<span className="area">м</span></AnimatedText>
                                    </div>
                                    <div className="center-row center-row-city">
                                        <AnimatedText as='div' className="title-anim city">
                                            Prime City
                                            <img src={compass} alt="compass" />
                                        </AnimatedText>
                                    </div>
                                    <div className="center-row" data-name-row='Комнаты'>
                                        <AnimatedText as='h2' className="title-anim title">{numRums}</AnimatedText>
                                    </div>
                                </div>
                                <div className="center-side">
                                    <AnimatedImage className="image-row">
                                        <button className='loupe-btn' type="button" onClick={openImage}><img src={loupeIcon} alt="loupeIcon" className="loupe" /></button>
                                        <img id='targetElement' src={image} alt="Apartamets" />
                                        <img src={compass} className='compass-mob' alt="compass" />
                                    </AnimatedImage>
                                </div>
                            </div>
                            <div className="apartments__bottom">
                                <div className="bottom-side options">
                                    <img src={imageOptions} alt="imageOptions" className="options-image" />
                                    <div className="bottom-row" onClick={backToBlock} >
                                        <a href='#' className="bottom-title">Блок <img src={switchIcon} alt="switchIcon" /></a>
                                        <AnimatedImage className="image">
                                            {selectedFloor === 14 && selectOptionNumX == '4X' || selectedFloor === 14 && selectOptionNumX == '2X' ?
                                                <svg width="145" height="128" viewBox="0 0 142 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M121.059 46.7802L114.928 49.1287M115.802 50.982L119.632 49.4645M121.53 44.4429L115.25 46.7917M122.683 41.9775L112.993 45.8965M107.824 47.8963L111.8 46.2968M122.996 39.9155L105.567 46.9723M122.675 38.0133L102.913 46.0489M122.354 35.9526L119.026 37.0691M122.033 34.0504L118.864 35.1666M121.871 32.1479L118.702 33.2642M121.55 30.2458L118.381 31.362M121.388 28.3433L118.219 29.4595M121.067 26.4411L117.898 27.5573M120.904 24.5386L117.735 25.6549M120.742 22.6362L117.573 23.7524M115.896 38.4631L103.173 43.5285M112.976 37.2752L104.229 40.741M110.321 36.2192L105.02 38.4845M107.401 35.1893L106.076 35.697" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-14-2' ? '#9D8962' : ''} d="M136.366 31.9553L135.593 32.0571L134.964 27.2825L121.497 29.0562L123.055 40.8889L120.751 46.5758L135.233 52.0983L137.031 47.4445L136.299 45.7682L135.492 45.3165L135.761 44.5333L136.761 44.5711L137.864 43.3305L136.366 31.9553Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-14-4' ? '#9D8962' : ''} d="M128.007 0.793346L121.481 1.6527L121.552 2.18689L114.457 3.12133L114.362 2.45543L107.582 3.34831L106.511 4.79876L106.768 6.74913L104.782 7.01072L105.405 11.7396L104.878 11.809L105.807 18.8647L106.327 18.7962L107.004 23.9374L120.556 22.1526L119.82 16.5668L133.351 14.6207L131.924 3.78619L129.655 4.08508L129.351 1.77977L128.007 0.793346Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M102.314 45.8047L106.329 34.8845L106.324 34.8487" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-14-5' ? '#9D8962' : ''} d="M106.348 34.7894L118.511 39.2933L119.113 37.7405L117.489 22.6462L106.999 24.0278L107.807 30.162L105.774 30.4298L106.348 34.7894Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-14-3' ? '#9D8962' : ''} d="M133.862 14.6114L119.856 16.58L121.499 29.0547L134.937 27.1208L134.215 21.6408L134.778 21.5667L133.862 14.6114Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M126.726 63.6274L126.958 63.8925L127.702 63.2472L126.726 63.6274Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-14-1' ? '#9D8962' : ''} d="M123.145 67.7027L122.651 67.1915L118.374 70.8914L99.1727 48.7706L102.325 45.8168L110.771 48.9866L112.084 45.5237L115.723 46.9301L114.35 50.4426L118.575 52.1199L120.75 46.5749L135.232 52.0974L133.938 55.4611L133.53 56.5144L131.99 57.2058L131.009 57.0105L130.82 57.7101L130.342 57.9591L131.157 59.019L131.12 59.6292L131.084 60.2395L126.959 63.8429L127.169 64.1928L123.145 67.7027Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M29.903 77.4555L16.1912 82.4933L18.6633 89.2218L45.6891 79.2922L40.814 66.0234L27.5001 70.9151L29.903 77.4555Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M16.1927 82.4945L14.1177 76.847L9.67631 64.7586L23.3882 59.7207L29.9045 77.4566L16.1927 82.4945Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M21.5781 46.2804L25.9687 58.2306L36.5267 54.3515M21.5781 46.2804L21.3191 45.5756L31.8771 41.6964M21.5781 46.2804L5.1103 52.3309M21.5781 46.2804L18.8222 47.293L19.85 50.0905M21.5781 46.2804L19.85 50.0905M36.5267 54.3515L31.8771 41.6964M36.5267 54.3515L40.8148 66.0225M5.1103 52.3309L1.001 41.1464L28.0268 31.2168L31.8771 41.6964M5.1103 52.3309L9.67564 64.7566M16.192 82.4924L14.117 76.8449L9.67564 64.7566M16.192 82.4924L29.9039 77.4546L27.5009 70.9142M16.192 82.4924L18.6641 89.2209L45.6899 79.2913L40.8148 66.0225M23.3875 59.7187L9.67564 64.7566M23.3875 59.7187L27.5009 70.9142M23.3875 59.7187L19.85 50.0905M40.8148 66.0225L27.5009 70.9142M22.8413 49.7186L21.1132 53.5286M24.095 53.1308L22.3669 56.9408M25.3461 56.536L23.618 60.3461M27.6472 57.6139L24.8666 63.7445M31.0042 56.3806L26.1186 67.1521M34.166 55.2189L27.2978 70.3616M36.8611 55.2615L30.2136 69.9175M38.13 58.715L33.6159 68.6675M39.4343 62.2649L37.1131 67.3826" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M21.5782 46.2804L21.3192 45.5755L31.8772 41.6964L28.0269 31.2168L1.00107 41.1464L5.11037 52.3308L21.5782 46.2804ZM21.5782 46.2804L18.8222 47.293" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M1.00106 41.1464L28.0269 31.2168L45.6899 79.2913L18.6642 89.2209L1.00106 41.1464Z" stroke="#9D8962" />
                                                    <path d="M75.9082 83.4741L75.3397 83.9647L67.9905 75.4495L59.5386 82.7441L78.3506 104.541L87.3711 96.7556L75.9082 83.4741ZM75.9082 83.4741L77.8265 85.6967" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M75.9083 83.4741L85.5463 75.1558L78.1971 66.6406M75.9083 83.4741L75.3398 83.9648L67.9906 75.4496M75.9083 83.4741L87.3711 96.7556M75.9083 83.4741L77.8266 85.6968L80.0828 83.7495M75.9083 83.4741L80.0828 83.7495M78.1971 66.6406L67.9906 75.4496M78.1971 66.6406L87.6099 58.5167M87.3711 96.7556L78.3507 104.541L59.5386 82.7442L67.9906 75.4496M87.3711 96.7556L97.3926 88.1064M111.697 75.7608L107.142 79.6919L97.3926 88.1064M111.697 75.7608L102.152 64.702L96.8775 69.2546M111.697 75.7608L117.123 71.0773L98.3114 49.2806L87.6099 58.5167M87.8481 77.0475L97.3926 88.1064M87.8481 77.0475L96.8775 69.2546M87.8481 77.0475L80.0828 83.7495M87.6099 58.5167L96.8775 69.2546M78.6812 81.0809L82.8557 81.3563M81.4332 78.7058L85.6077 78.9812M84.1796 76.3354L88.3541 76.6108M84.3779 73.8021L91.095 74.2453M82.0412 71.0947L93.8432 71.8733M79.8403 68.5446L96.4318 69.6393M78.931 66.0073L94.9892 67.0667M81.7163 63.6032L92.6209 64.3227M84.5793 61.1322L90.1866 61.5022" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M85.6939 75.1628L75.9303 83.5894L75.3544 84.0864L67.937 75.4922L78.2764 66.5686L85.6939 75.1628Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M102.149 64.7029L111.694 75.7617L117.12 71.0782L98.3084 49.2815L87.6069 58.5176L96.8744 69.2554L102.149 64.7029Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M111.696 75.7582L107.141 79.6893L97.3917 88.1038L87.8472 77.0449L102.151 64.6994L111.696 75.7582Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M97.3701 88.0795L87.3486 96.7288L77.8278 85.6972L87.8493 77.0479L97.3701 88.0795Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M78.3506 104.541L59.5386 82.7441L98.3114 49.2806L117.123 71.0773L78.3506 104.541Z" stroke="#9D8962" />
                                                    <path d="M102.287 45.596L106.319 34.6961L106.314 34.6603M114.399 2.31011L107.618 3.18954L106.543 4.64028L106.796 6.59613L104.808 6.85397L105.423 11.5931L104.9 11.6609L105.817 18.7319L106.336 18.6645L107.803 29.9767L105.762 30.2415L106.329 34.6189L102.281 45.5609L99.1256 48.498L118.29 70.7003L122.595 66.9913L123.088 67.5065L127.154 63.9743L126.899 63.6431L131.007 60.069L131.081 58.8428L130.266 57.7794L130.747 57.5276L130.936 56.8256L131.92 57.0258L133.465 56.3336L136.973 47.3192L136.241 45.6331L135.431 45.1771L135.999 44.5005L136.499 44.5005L137.499 43.0005L136.341 31.8302L135.56 31.9315L134.21 21.522L134.773 21.449L133.863 14.4389L133.362 14.5039L131.959 3.68246L129.691 3.97653L129.391 1.6661L128.046 0.674974L121.52 1.52141L121.589 2.05872L114.493 2.97903L114.399 2.31011Z" stroke="#9D8962" />
                                                    <path d="M49.8459 84.3081L49.7307 84.7383L48.1658 84.3189L48.1646 84.3231M49.8459 84.3081L50.942 83.6842L52.6036 84.1294L53.2366 85.2166L53.1214 85.6468L55.0985 86.1766L55.0974 86.1808M49.8459 84.3081L55.4317 93.9023M55.0974 86.1808L56.9223 88.3394L54.4749 97.473L60.0657 98.9711M55.0974 86.1808L58.9735 82.9892L77.8949 105.646L72.429 110.144L73.1083 110.957L63.6604 118.739L63.2061 118.196L59.8849 120.932L58.3939 120.792L57.4076 119.61L52.4537 123.694L48.1249 122.535L47.5799 124.568L45.4134 125.805L41.0762 124.643L36.739 123.481L35.4812 121.327L36.0262 119.293L31.6974 118.133L29.4493 112.119L28.0042 112.649L26.643 112.025L25.1347 107.995L24.47 108.238L20.1786 96.7745L21.1736 96.41L18.6887 89.7819L46.4036 79.6211L48.1646 84.3231M60.0657 98.9711L61.1292 100.218L58.5203 102.366M60.0657 98.9711L61.1334 100.219L58.5203 102.366M58.5203 102.366L37.1077 96.6287L35.9272 93.479M58.5203 102.366L37.1035 96.6275L35.9272 93.479M35.9272 93.479L37.4669 92.9157M37.4669 92.9157L43.0577 94.4138L45.505 85.2801L48.1646 84.3231M37.4669 92.9157L40.0945 97.429M41.4418 93.9808L44.0694 98.4941M43.7474 91.8396L48.2782 99.6218M44.8249 87.8183L52.3289 100.707M46.8348 84.8016L56.7912 101.903M59.8023 101.409L58.0717 98.4368M53.8267 85.8358L56.406 90.266M58.3002 102.312L47.8001 99.4983L41.0634 124.64L45.3838 125.797L47.5503 124.561L48.0953 122.527L52.424 123.687L57.3769 119.607L58.3643 120.784L59.8554 120.924L63.1765 118.188L63.6308 118.731L68.4275 114.779M68.3804 94.2703L77.828 105.576L72.3947 110.051L73.071 110.859L68.8418 114.341M37.3438 96.7353L47.8836 99.5594L41.1221 124.793L36.7839 123.631L35.5222 121.47L36.0696 119.427L31.7232 118.262L29.4666 112.231L28.0219 112.762L26.6497 112.132L25.1368 108.089L24.4722 108.333L22.2859 102.493M35.9509 93.4822L37.4995 92.9387L43.0904 94.4368L45.5385 85.3005L48.1984 84.3371L46.4371 79.6395L32.6408 84.6963M32.5846 84.7249L18.6977 89.815L21.1756 96.4278L20.1822 96.7907L22.1098 101.944" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M48.1658 84.3189L49.7307 84.7383L49.8459 84.3081L50.942 83.6842L52.6036 84.1294L53.2366 85.2166L53.1214 85.6468L55.0985 86.1766L58.9735 82.9892L77.8949 105.646L72.429 110.144L73.1083 110.957L63.6604 118.739L63.2061 118.196L59.8849 120.932L58.3939 120.792L57.4076 119.61L52.4537 123.694L48.1249 122.535L47.5799 124.568L45.4134 125.805L41.0762 124.643L36.739 123.481L35.4812 121.327L36.0262 119.293L31.6974 118.133L29.4493 112.119L28.0042 112.649L26.643 112.025L25.1347 107.995L24.47 108.238L20.1786 96.7745L21.1736 96.41L18.6887 89.7819L46.4036 79.6211L48.1658 84.3189ZM48.1658 84.3189L46.4371 79.6395L32.6408 84.6963M68.4275 114.779L63.6308 118.731L63.1765 118.188L59.8554 120.924L58.3643 120.784L57.3769 119.607L52.424 123.687L48.0953 122.527L47.5503 124.561L45.3838 125.797L41.0634 124.64M68.3804 94.2703L77.828 105.576L72.3947 110.051L73.071 110.859L68.8418 114.341M22.2859 102.493L24.4722 108.333L25.1368 108.089L26.6497 112.132L28.0219 112.762L29.4666 112.231L31.7232 118.262L36.0696 119.427L35.5222 121.47L36.7839 123.631L41.1221 124.793M32.5846 84.7249L18.6977 89.815L21.1756 96.4278L20.1822 96.7907L22.1098 101.944" stroke="#9D8962" />
                                                    <path fill={selectBlockActive == '2-14-1' ? '#9D8962' : ''} d="M36.0267 119.293L31.698 118.133L29.4672 112.232L28.0225 112.763L26.6502 112.132L25.1373 108.089L24.4728 108.333L20.2599 96.7085L21.1735 96.41L18.6887 89.7819L32.6418 84.6942L46.4289 79.6279L48.19 84.3299L45.5303 85.2869L43.0286 94.3934L37.4922 92.9225L35.9475 93.471L37.0825 96.5605L47.8006 99.4986L41.064 124.64L36.7396 123.481L35.4818 121.327L36.0267 119.293Z" stroke="#9D8962" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-14-2' ? '#9D8962' : ''} d="M48.1206 122.551L52.4494 123.711L57.332 119.716L58.3177 120.898L59.8214 121.038L63.1532 118.293L63.6066 118.837L73.0674 110.876L72.4254 110.16L77.8913 105.663L68.3515 94.2801L58.9446 82.999L55.0685 86.1906L56.8933 88.3492L54.5067 97.4865L60.0367 98.9809L61.1002 100.228L58.5725 102.336L47.8213 99.5217L41.0847 124.663L45.4091 125.822L47.5756 124.585L48.1206 122.551Z" stroke="#9D8962" strokeMiterlimit="10" />
                                                    <path d="M43.5522 97.8876H50.127C50.3016 97.899 50.4767 97.899 50.6513 97.8876C50.7876 97.8876 50.9239 97.8876 51.0498 97.8876C51.0944 97.8992 51.1414 97.8992 51.1861 97.8876H51.4902C51.5562 97.8966 51.6233 97.8966 51.6894 97.8876C51.7627 97.8838 51.8363 97.8838 51.9096 97.8876H52.1613V100.602H51.5426C51.428 100.091 51.149 99.6282 50.7457 99.2805C50.4074 99.0497 50.0265 98.884 49.6237 98.7925C49.4266 98.7538 49.2268 98.73 49.026 98.7213H46.2367V102.971H48.7323C49.7885 102.902 50.8425 103.135 51.7628 103.642C52.3401 104.002 52.8045 104.508 53.105 105.106C53.1889 105.35 53.2623 105.595 53.3252 105.818C53.388 106.226 53.388 106.641 53.3252 107.049C53.2926 107.253 53.24 107.454 53.1679 107.648C52.9331 108.336 52.5132 108.95 51.9515 109.428C51.2368 110.004 50.3206 110.292 49.393 110.231H43.5942V109.641C43.762 109.633 43.926 109.59 44.0759 109.517C44.2258 109.443 44.3581 109.34 44.4645 109.214C44.6349 108.902 44.7112 108.55 44.6848 108.197V99.9211C44.7074 99.5691 44.6313 99.2177 44.4645 98.9043C44.3576 98.7797 44.2249 98.6782 44.075 98.6064C43.9251 98.5346 43.7613 98.4941 43.5942 98.4875L43.5522 97.8876ZM46.1842 109.509H48.1032H48.7743C49.0435 109.488 49.3101 109.444 49.5712 109.377C50.0905 109.221 50.5552 108.929 50.9134 108.533C51.2857 107.961 51.492 107.302 51.5104 106.625C51.5289 105.949 51.3589 105.28 51.0183 104.69C50.7338 104.327 50.3533 104.046 49.9173 103.876C49.6726 103.778 49.415 103.713 49.1518 103.683H48.5541H46.1842V109.509Z" fill="white" />
                                                    <path d="M84.0967 71.2754H88.9471H89.8244C90.2244 71.2959 90.6198 71.3682 91.0008 71.4905C91.5895 71.6538 92.1331 71.9481 92.5901 72.351C92.8431 72.6138 93.0374 72.9268 93.1601 73.2692C93.2828 73.6117 93.3313 73.976 93.3023 74.3383C93.3167 74.5088 93.3167 74.6801 93.3023 74.8505C93.264 75.0518 93.2016 75.2478 93.1165 75.4344C92.9429 75.8233 92.6899 76.1721 92.3735 76.4588C91.9643 76.8169 91.471 77.067 90.9389 77.1862V77.2886H91.2795C91.389 77.3084 91.4963 77.3393 91.5995 77.3808C92.2077 77.5494 92.762 77.8704 93.2093 78.313C93.6669 78.8718 93.9167 79.57 93.9167 80.2901C93.9167 81.0102 93.6669 81.7084 93.2093 82.2672C92.8044 82.718 92.2991 83.0687 91.7336 83.2916C91.3958 83.4026 91.0511 83.4916 90.7016 83.5579C90.4285 83.6013 90.1525 83.6253 89.8759 83.6296H84.0967V83.0252C84.2679 83.0375 84.4393 83.0029 84.5922 82.9252C84.745 82.8475 84.8734 82.7298 84.9635 82.5848C85.1094 82.2634 85.1767 81.9124 85.1597 81.5604V73.3139C85.182 72.9581 85.1034 72.6032 84.9327 72.2895C84.8375 72.1601 84.7111 72.0566 84.5649 71.9886C84.4188 71.9206 84.2578 71.8901 84.0967 71.9003V71.2754ZM86.6974 77.0325H88.7614C89.168 77.0838 89.5809 77.037 89.9654 76.8961C90.3498 76.7552 90.6945 76.5244 90.9699 76.2232C91.3545 75.6959 91.5605 75.061 91.5581 74.41C91.5853 74.1166 91.5516 73.8207 91.4594 73.5406C91.3671 73.2605 91.218 73.0021 91.0215 72.7813C90.6948 72.4609 90.2891 72.2312 89.8449 72.1154C89.6134 72.0464 89.3744 72.0051 89.1329 71.9925C88.8956 71.9925 88.6892 71.9925 88.5241 71.9925H86.7387L86.6974 77.0325ZM86.6974 82.9842H89.0916H89.7006C90.4293 82.9044 91.1059 82.5704 91.6098 82.0418C91.9985 81.481 92.1669 80.7983 92.0832 80.1227C91.9996 79.4471 91.6696 78.8252 91.1556 78.3744C90.4974 77.9563 89.7285 77.7423 88.9471 77.7598H86.6974V82.9842Z" fill="white" />
                                                    <path d="M117.04 29.781H123.711C123.841 29.793 123.973 29.793 124.104 29.781H124.373C124.438 29.7872 124.504 29.7872 124.569 29.781C124.641 29.7894 124.714 29.7894 124.786 29.781C124.845 29.7761 124.904 29.7761 124.962 29.781H125.138H125.355H125.593V32.7894H124.983C124.983 32.7075 124.983 32.6154 124.91 32.5233C124.887 32.4389 124.856 32.3567 124.817 32.2778C124.745 32.114 124.673 31.9606 124.59 31.7969C124.495 31.6546 124.388 31.5211 124.269 31.3978C123.965 31.0417 123.557 30.7879 123.1 30.6713C122.648 30.576 122.187 30.5279 121.725 30.528H119.657V40.0851C119.62 40.4771 119.726 40.8691 119.956 41.1902C120.053 41.2931 120.17 41.3752 120.3 41.4315C120.429 41.4878 120.57 41.5172 120.712 41.5176V42.1316H117.04V41.5278C117.2 41.5188 117.356 41.4769 117.499 41.4047C117.641 41.3324 117.767 41.2315 117.867 41.1083C118.044 40.7969 118.123 40.4409 118.095 40.0851V31.7764C118.105 31.4231 118.031 31.0725 117.878 30.7531C117.795 30.6094 117.672 30.4928 117.523 30.4182C117.374 30.3436 117.206 30.3141 117.04 30.3336V29.781Z" fill="white" />
                                                    <path d="M22.7968 54.8027L27.6308 65.2796C27.7792 65.613 27.9786 65.9227 28.2222 66.1981C28.3142 66.3088 28.4292 66.3993 28.5597 66.4637C28.6903 66.528 28.8333 66.5648 28.9795 66.5715V67.157H25.4628V66.5715C25.774 66.511 25.9711 66.4403 26.023 66.3192C26.0832 66.1822 26.1116 66.034 26.106 65.8852C26.1117 65.8214 26.1117 65.7572 26.106 65.6934L26.0333 65.542C26.0333 65.542 26.0333 65.4714 26.0333 65.4512C26.0333 65.431 26.0333 65.4512 26.0333 65.3805L25.3176 63.806H19.0934L18.3984 65.2897C18.3239 65.4256 18.2614 65.5674 18.2117 65.7136C18.2117 65.7944 18.2117 65.865 18.2117 65.9054C18.2005 65.9347 18.2005 65.9669 18.2117 65.9963V66.0972C18.255 66.2044 18.3223 66.3009 18.4088 66.3797C18.5461 66.486 18.7115 66.5525 18.8859 66.5715V67.157H15.9917V66.5715C16.2162 66.5607 16.431 66.4792 16.6038 66.3394C16.7635 66.2124 16.9063 66.0666 17.0291 65.9054L17.2676 65.5521L17.3921 65.3099L21.4275 56.8315C21.4275 56.6902 21.5312 56.5792 21.5519 56.5287C21.5599 56.4819 21.5599 56.4342 21.5519 56.3874C21.5565 56.3438 21.5457 56.3 21.5212 56.2633C21.4966 56.2266 21.4599 56.1991 21.4171 56.1855C21.3226 56.1441 21.2199 56.1234 21.1163 56.125V55.5395C21.2077 55.5138 21.2977 55.4835 21.386 55.4487C21.48 55.4096 21.5703 55.3623 21.6557 55.3074C21.7674 55.2509 21.8748 55.1868 21.9773 55.1156L22.2677 54.8936L22.3196 54.833L22.7968 54.8027ZM24.8715 63.1297L22.2159 57.3967H22.0188L19.2697 63.1398L24.8715 63.1297Z" fill="white" />
                                                </svg>
                                                :
                                                // selectedFloor === 14 ?
                                                //     <svg width="145" height="128" viewBox="0 0 142 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                //         <path d="M120.671 46.9426L118.07 48.025M121.562 44.4993L115.271 46.8719M118.928 43.5143L113.006 45.9804M107.828 48L111.81 46.385M117.991 41.9921L105.562 47.0796M118.936 39.4843L102.897 46.1609M115.897 38.5182L103.151 43.6328M112.965 37.335L104.202 40.8345M110.3 36.2833L104.99 38.5695M107.368 35.2585L106.041 35.7713" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M123.245 67.8203L122.749 67.309L118.471 71.031L99.1544 48.9009L102.308 45.9302L110.785 49.0856L112.093 45.6095L116.041 47.1479L119.99 48.6862L120.787 46.6398L135.324 52.1381L134.035 55.5147L133.629 56.5721L132.087 57.2697L131.103 57.0765L130.915 57.7786L130.437 58.0296L131.256 59.0902L131.221 59.7023L131.187 60.3143L127.06 63.9391L127.271 64.2895L123.245 67.8203Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M135.324 52.1366L120.786 46.6384L121.583 44.592L117.634 43.0536L119.052 39.5262L106.312 34.858L105.724 30.4878L134.881 26.5665L135.63 32.0383L136.405 31.9341L137.938 43.3371L136.836 44.5841L135.833 44.549L135.565 45.3351L136.376 45.7859L137.114 47.4649L135.324 52.1366Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M102.294 45.9169L106.29 34.9551L106.285 34.9192M114.249 2.40369L107.446 3.31865L106.372 4.78019L106.636 6.74251L104.642 7.01077L105.281 11.7656L104.756 11.8361L105.71 18.9306L106.232 18.8605L107.758 30.2102L105.709 30.4857L106.3 34.8775L102.288 45.8817L99.1336 48.8452L118.478 71.0441L122.783 67.3002L123.28 67.8151L127.345 64.2498L127.088 63.9184L131.195 60.3109L131.264 59.0796L130.44 58.0158L130.921 57.7608L131.108 57.0551L132.097 57.2514L133.645 56.5492L137.124 47.4828L136.381 45.7935L135.566 45.3396L135.837 44.5531L136.836 44.5847L137.95 43.3361L137.157 37.4419L136.417 31.936L135.633 32.0413L134.228 21.5973L134.793 21.5214L133.847 14.488L133.344 14.5557L131.884 3.69836L129.609 4.00431L129.297 1.68623L127.942 0.697577L121.394 1.57822L121.466 2.1173L114.346 3.07479L114.249 2.40369Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M121.396 1.58997L127.937 0.710298L129.288 1.69579L129.599 4.00673L131.874 3.70078L133.334 14.5572L133.847 14.4882L134.793 21.5216L134.28 21.5906L134.943 26.5259L107.773 30.1799L106.246 18.8231L105.725 18.8932L104.773 11.8203L105.302 11.7492L104.664 7.00883L106.655 6.74106L106.392 4.78593L107.462 3.32847L114.258 2.41448L114.356 3.08199L121.468 2.12546L121.396 1.58997Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M102.296 45.916L106.292 34.9542L106.287 34.9183" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path fill={selectBlockActive == '4-15-1' ? '#9D8962' : ''} d="M123.245 67.8203L122.749 67.309L118.471 71.031L99.1544 48.9009L102.308 45.9302L110.785 49.0856L112.093 45.6095L116.041 47.1479L119.99 48.6862L120.787 46.6398L135.324 52.1381L134.035 55.5147L133.629 56.5721L132.087 57.2697L131.103 57.0765L130.915 57.7786L130.437 58.0296L131.256 59.0902L131.221 59.7023L131.187 60.3143L127.06 63.9391L127.271 64.2895L123.245 67.8203Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path fill={selectBlockActive == '4-15-2' ? '#9D8962' : ''} d="M135.324 52.1386L120.786 46.6404L121.583 44.594L117.634 43.0556L119.052 39.5282L106.312 34.86L105.724 30.4897L134.881 26.5685L135.63 32.0402L136.405 31.936L137.938 43.339L136.836 44.5861L135.833 44.551L135.565 45.337L136.376 45.7878L137.114 47.4668L135.324 52.1386Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M29.903 77.6644L16.1912 82.7023L18.6633 89.4308L45.6891 79.5012L40.814 66.2324L27.5001 71.1241L29.903 77.6644Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M16.1927 82.7035L14.1177 77.056L9.67631 64.9676L23.3882 59.9297L29.9045 77.6656L16.1927 82.7035Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M21.5781 46.4894L25.9687 58.4396L36.5267 54.5605M21.5781 46.4894L21.3191 45.7845L31.8771 41.9054M21.5781 46.4894L5.1103 52.5399M21.5781 46.4894L18.8222 47.502L19.85 50.2994M21.5781 46.4894L19.85 50.2994M36.5267 54.5605L31.8771 41.9054M36.5267 54.5605L40.8148 66.2315M5.1103 52.5399L1.001 41.3554L28.0268 31.4258L31.8771 41.9054M5.1103 52.5399L9.67564 64.9656M16.192 82.7014L14.117 77.0539L9.67564 64.9656M16.192 82.7014L29.9039 77.6635L27.5009 71.1232M16.192 82.7014L18.6641 89.4299L45.6899 79.5003L40.8148 66.2315M23.3875 59.9277L9.67564 64.9656M23.3875 59.9277L27.5009 71.1232M23.3875 59.9277L19.85 50.2994M40.8148 66.2315L27.5009 71.1232M22.8413 49.9276L21.1132 53.7376M24.095 53.3397L22.3669 57.1498M25.3461 56.745L23.618 60.555M27.6472 57.8229L24.8666 63.9534M31.0042 56.5895L26.1186 67.361M34.166 55.4278L27.2978 70.5706M36.8611 55.4704L30.2136 70.1265M38.13 58.924L33.6159 68.8765M39.4343 62.4739L37.1131 67.5916" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M21.5782 46.4894L21.3192 45.7845L31.8772 41.9054L28.0269 31.4258L1.00107 41.3553L5.11037 52.5398L21.5782 46.4894ZM21.5782 46.4894L18.8222 47.5019" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M1.00106 41.3554L28.0269 31.4258L45.6899 79.5003L18.6642 89.4298L1.00106 41.3554Z" stroke="#9D8962" />
                                                //         <path d="M75.9082 83.683L75.3397 84.1737L67.9905 75.6585L59.5386 82.9531L78.3506 104.75L87.3711 96.9646L75.9082 83.683ZM75.9082 83.683L77.8265 85.9057" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M75.9083 83.6831L85.5463 75.3648L78.1971 66.8496M75.9083 83.6831L75.3398 84.1737L67.9906 75.6585M75.9083 83.6831L87.3711 96.9646M75.9083 83.6831L77.8266 85.9058L80.0828 83.9585M75.9083 83.6831L80.0828 83.9585M78.1971 66.8496L67.9906 75.6585M78.1971 66.8496L87.6099 58.7257M87.3711 96.9646L78.3507 104.75L59.5386 82.9532L67.9906 75.6585M87.3711 96.9646L97.3926 88.3154M111.697 75.9698L107.142 79.9009L97.3926 88.3154M111.697 75.9698L102.152 64.911L96.8775 69.4636M111.697 75.9698L117.123 71.2863L98.3114 49.4896L87.6099 58.7257M87.8481 77.2565L97.3926 88.3154M87.8481 77.2565L96.8775 69.4636M87.8481 77.2565L80.0828 83.9585M87.6099 58.7257L96.8775 69.4636M78.6812 81.2899L82.8557 81.5653M81.4332 78.9147L85.6077 79.1902M84.1796 76.5444L88.3541 76.8198M84.3779 74.0111L91.095 74.4543M82.0412 71.3037L93.8432 72.0823M79.8403 68.7536L96.4318 69.8482M78.931 66.2162L94.9892 67.2757M81.7163 63.8122L92.6209 64.5317M84.5793 61.3412L90.1866 61.7112" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M85.6939 75.3718L75.9303 83.7984L75.3544 84.2954L67.937 75.7012L78.2764 66.7775L85.6939 75.3718Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M102.149 64.9118L111.694 75.9707L117.12 71.2872L98.3084 49.4905L87.6069 58.7266L96.8744 69.4644L102.149 64.9118Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M111.696 75.9672L107.141 79.8983L97.3917 88.3127L87.8472 77.2539L102.151 64.9084L111.696 75.9672Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M97.3701 88.2885L87.3486 96.9377L77.8278 85.9062L87.8493 77.2569L97.3701 88.2885Z" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path d="M78.3506 104.75L59.5386 82.9531L98.3114 49.4895L117.123 71.2863L78.3506 104.75Z" stroke="#9D8962" />
                                                //         <path d="M102.288 45.805L106.319 34.9051L106.315 34.8693M114.4 2.5191L107.619 3.39852L106.543 4.84927L106.797 6.80512L104.809 7.06295L105.423 11.802L104.9 11.8699L105.817 18.9409L106.337 18.8735L107.804 30.1857L105.762 30.4505L106.33 34.8278L102.282 45.7699L99.1261 48.707L118.29 70.9092L122.595 67.2003L123.088 67.7155L127.154 64.1833L126.9 63.852L131.007 60.278L131.082 59.0518L130.266 57.9884L130.747 57.7366L130.936 57.0346L131.92 57.2348L133.466 56.5426L136.974 47.5282L136.241 45.8421L135.432 45.3861L136 44.7095L136.5 44.7095L137.5 43.2095L136.342 32.0392L135.561 32.1405L134.211 21.731L134.773 21.658L133.864 14.6479L133.362 14.7129L131.959 3.89145L129.692 4.18551L129.392 1.87508L128.047 0.883958L121.52 1.7304L121.59 2.26771L114.494 3.18801L114.4 2.5191Z" stroke="#9D8962" />
                                                //         <path d="M49.2626 83.9073L49.147 84.3387L47.5892 83.9213L47.5881 83.9255L44.9374 84.8898L42.4828 94.0503L36.9174 92.559M49.2626 83.9073L50.3554 83.2798L52.0095 83.723L52.638 84.8117L52.5224 85.2431L54.4906 85.7705L54.4894 85.7747M49.2626 83.9073L54.8079 93.5144M54.4894 85.7747L56.3029 87.9352L53.8483 97.0957L59.4138 98.5869M54.4894 85.7747L58.3559 82.5682L77.1587 105.245L71.7064 109.764L72.3815 110.578L62.9571 118.396L62.5056 117.853L59.1928 120.602L57.6786 120.457L56.6973 119.278L52.1788 122.931L50.5205 122.465C47.7891 124.654 44.1543 125.408 40.4529 124.357M59.4138 98.5869L60.4707 99.8353L57.8682 101.993M59.4138 98.5869L60.4749 99.8363L57.8682 101.993M57.8682 101.993L36.5528 96.2818L35.3829 93.1266M57.8682 101.993L36.5486 96.2805L35.3829 93.1266M35.3829 93.1266L36.9174 92.559M36.9174 92.559L39.526 97.0784M40.8743 93.6193L43.4829 98.1387M43.1746 91.4686L47.6727 99.2613M44.2553 87.4354L51.705 100.342M46.2627 84.4077L56.1471 101.532M59.1469 101.032L57.4288 98.0551M53.2245 85.4313L55.7851 89.8675M40.4529 124.357L43.8184 111.746L47.1966 99.1383L57.6492 101.939M40.4529 124.357C36.7565 123.307 34.0774 120.796 32.9003 117.513L31.2452 117.048L28.8963 111.824L27.456 112.358L26.1014 111.735L24.6087 107.792L23.9463 108.038L21.6053 101.638L19.6952 96.4757L20.6852 96.1101L18.2296 89.4858L32.0701 84.3574L45.8763 79.2337L47.6216 83.9395L44.9707 84.9102L42.5154 94.0734L36.9498 92.5821L35.4064 93.1298M47.2797 99.1995L36.7876 96.3882" stroke="#555555" strokeMiterlimit="10" />
                                                //         <path fill={selectBlockActive == '2-15-2' ? '#9D8962' : ''} d="M56.3031 87.9355L54.4908 85.7708L58.3561 82.5685L77.1589 105.245L71.7066 109.764L72.3817 110.578L62.9573 118.396L62.5058 117.853L59.193 120.602L57.6788 120.457L56.6975 119.278L52.179 122.931L50.5207 122.465C47.7893 124.654 44.1545 125.409 40.4531 124.357L43.8186 111.746L47.1968 99.1386L57.8685 101.994L60.4709 99.8356L59.414 98.5873L53.8485 97.096L56.3031 87.9355Z" stroke="#9D8962" strokeMiterlimit="10" />
                                                //         <path fill={selectBlockActive == '2-15-1' ? '#9D8962' : ''} d="M47.1965 99.1374L43.8183 111.745L40.4528 124.356C36.7564 123.306 34.0773 120.795 32.9002 117.512L31.2451 117.047L28.8962 111.823L27.4559 112.357L26.1013 111.734L24.6086 107.791L23.9462 108.037L19.6951 96.4748L20.6851 96.1092L18.2295 89.4848L45.8762 79.2327L47.6215 83.9385L44.9373 84.8889L42.4828 94.0494L36.9497 92.5811L35.3828 93.1256L36.5527 96.2808L47.2796 99.1986" stroke="#9D8962" strokeMiterlimit="10" />
                                                //         <path d="M43.5522 98.0966H50.127C50.3016 98.108 50.4767 98.108 50.6513 98.0966C50.7876 98.0966 50.9239 98.0966 51.0498 98.0966C51.0944 98.1082 51.1414 98.1082 51.1861 98.0966H51.4902C51.5562 98.1056 51.6233 98.1056 51.6894 98.0966C51.7627 98.0928 51.8363 98.0928 51.9096 98.0966H52.1613V100.811H51.5426C51.428 100.3 51.149 99.8372 50.7457 99.4895C50.4074 99.2586 50.0265 99.093 49.6237 99.0015C49.4266 98.9628 49.2268 98.939 49.026 98.9303H46.2367V103.18H48.7323C49.7885 103.111 50.8425 103.344 51.7628 103.851C52.3401 104.211 52.8045 104.717 53.105 105.315C53.1889 105.559 53.2623 105.804 53.3252 106.027C53.388 106.435 53.388 106.85 53.3252 107.257C53.2926 107.462 53.24 107.663 53.1679 107.857C52.9331 108.545 52.5132 109.159 51.9515 109.637C51.2368 110.213 50.3206 110.501 49.393 110.44H43.5942V109.85C43.762 109.842 43.926 109.799 44.0759 109.726C44.2258 109.652 44.3581 109.549 44.4645 109.423C44.6349 109.111 44.7112 108.759 44.6848 108.406V100.13C44.7074 99.7781 44.6313 99.4267 44.4645 99.1133C44.3576 98.9887 44.2249 98.8872 44.075 98.8154C43.9251 98.7436 43.7613 98.7031 43.5942 98.6965L43.5522 98.0966ZM46.1842 109.718H48.1032H48.7743C49.0435 109.697 49.3101 109.653 49.5712 109.586C50.0905 109.43 50.5552 109.138 50.9134 108.742C51.2857 108.17 51.492 107.511 51.5104 106.834C51.5289 106.158 51.3589 105.489 51.0183 104.899C50.7338 104.536 50.3533 104.255 49.9173 104.085C49.6726 103.987 49.415 103.922 49.1518 103.892H48.5541H46.1842V109.718Z" fill="white" />
                                                //         <path d="M117.041 29.99H123.711C123.842 30.002 123.973 30.002 124.104 29.99H124.373C124.438 29.9962 124.504 29.9962 124.57 29.99C124.642 29.9984 124.715 29.9984 124.787 29.99C124.845 29.9851 124.904 29.9851 124.963 29.99H125.138H125.356H125.593V32.9984H124.983C124.983 32.9165 124.983 32.8244 124.911 32.7323C124.887 32.6479 124.856 32.5657 124.818 32.4867C124.745 32.323 124.673 32.1696 124.59 32.0058C124.496 31.8636 124.388 31.7301 124.27 31.6068C123.966 31.2507 123.557 30.9969 123.101 30.8802C122.649 30.7849 122.188 30.7369 121.726 30.737H119.657V40.2941C119.62 40.6861 119.727 41.0781 119.957 41.3992C120.053 41.5021 120.17 41.5842 120.3 41.6405C120.43 41.6968 120.57 41.7262 120.712 41.7266V42.3405H117.041V41.7368C117.2 41.7278 117.357 41.6859 117.499 41.6136C117.642 41.5414 117.767 41.4405 117.868 41.3173C118.044 41.0059 118.123 40.6499 118.095 40.2941V31.9854C118.106 31.6321 118.031 31.2815 117.878 30.9621C117.796 30.8183 117.672 30.7018 117.523 30.6272C117.374 30.5525 117.206 30.5231 117.041 30.5426V29.99Z" fill="white" />
                                                //         <path d="M84.0972 71.4844H88.9476H89.8249C90.2248 71.5049 90.6203 71.5772 91.0013 71.6995C91.59 71.8628 92.1336 72.1571 92.5906 72.56C92.8436 72.8228 93.0378 73.1357 93.1606 73.4782C93.2833 73.8207 93.3317 74.185 93.3028 74.5473C93.3171 74.7177 93.3171 74.8891 93.3028 75.0595C93.2645 75.2608 93.2021 75.4568 93.117 75.6434C92.9434 76.0322 92.6904 76.3811 92.374 76.6678C91.9648 77.0259 91.4715 77.276 90.9394 77.3952V77.4976H91.28C91.3895 77.5174 91.4967 77.5483 91.5999 77.5898C92.2082 77.7584 92.7625 78.0794 93.2098 78.522C93.6674 79.0808 93.9172 79.7789 93.9172 80.499C93.9172 81.2192 93.6674 81.9174 93.2098 82.4762C92.8049 82.9269 92.2996 83.2777 91.7341 83.5006C91.3963 83.6116 91.0516 83.7005 90.7021 83.7669C90.429 83.8103 90.153 83.8343 89.8764 83.8386H84.0972V83.2342C84.2684 83.2465 84.4398 83.2119 84.5926 83.1342C84.7455 83.0565 84.8739 82.9388 84.964 82.7938C85.1099 82.4724 85.1772 82.1214 85.1602 81.7694V73.5229C85.1825 73.1671 85.1039 72.8122 84.9332 72.4985C84.838 72.3691 84.7115 72.2656 84.5654 72.1976C84.4193 72.1295 84.2582 72.0991 84.0972 72.1092V71.4844ZM86.6979 77.2415H88.7619C89.1684 77.2927 89.5814 77.246 89.9659 77.1051C90.3503 76.9642 90.695 76.7334 90.9704 76.4322C91.355 75.9049 91.561 75.27 91.5586 74.619C91.5858 74.3256 91.5521 74.0297 91.4599 73.7496C91.3676 73.4695 91.2185 73.2111 91.022 72.9903C90.6953 72.6699 90.2896 72.4402 89.8454 72.3244C89.6139 72.2554 89.3749 72.2141 89.1334 72.2015C88.896 72.2015 88.6897 72.2015 88.5246 72.2015H86.7392L86.6979 77.2415ZM86.6979 83.1932H89.0921H89.7011C90.4298 83.1134 91.1064 82.7794 91.6103 82.2508C91.999 81.69 92.1674 81.0073 92.0837 80.3317C92 79.656 91.67 79.0341 91.1561 78.5834C90.4978 78.1652 89.7289 77.9513 88.9476 77.9688H86.6979V83.1932Z" fill="white" />
                                                //         <path d="M22.7968 55.0117L27.6308 65.4886C27.7792 65.822 27.9786 66.1317 28.2222 66.4071C28.3142 66.5178 28.4292 66.6083 28.5597 66.6726C28.6903 66.737 28.8333 66.7737 28.9795 66.7805V67.3659H25.4628V66.7805C25.774 66.7199 25.9711 66.6493 26.023 66.5282C26.0832 66.3912 26.1116 66.243 26.106 66.0942C26.1117 66.0304 26.1117 65.9662 26.106 65.9024L26.0333 65.751C26.0333 65.751 26.0333 65.6803 26.0333 65.6602C26.0333 65.64 26.0333 65.6602 26.0333 65.5895L25.3176 64.0149H19.0934L18.3984 65.4987C18.3239 65.6346 18.2614 65.7764 18.2117 65.9226C18.2117 66.0033 18.2117 66.074 18.2117 66.1144C18.2005 66.1437 18.2005 66.1759 18.2117 66.2052V66.3062C18.255 66.4134 18.3223 66.5099 18.4088 66.5887C18.5461 66.695 18.7115 66.7615 18.8859 66.7805V67.3659H15.9917V66.7805C16.2162 66.7697 16.431 66.6882 16.6038 66.5484C16.7635 66.4214 16.9063 66.2756 17.0291 66.1144L17.2676 65.7611L17.3921 65.5188L21.4275 57.0405C21.4275 56.8992 21.5312 56.7882 21.5519 56.7377C21.5599 56.6909 21.5599 56.6432 21.5519 56.5964C21.5565 56.5528 21.5457 56.509 21.5212 56.4723C21.4966 56.4356 21.4599 56.4081 21.4171 56.3945C21.3226 56.3531 21.2199 56.3324 21.1163 56.3339V55.7485C21.2077 55.7228 21.2977 55.6925 21.386 55.6577C21.48 55.6185 21.5703 55.5712 21.6557 55.5164C21.7674 55.4599 21.8748 55.3958 21.9773 55.3246L22.2677 55.1026L22.3196 55.042L22.7968 55.0117ZM24.8715 63.3387L22.2159 57.6057H22.0188L19.2697 63.3488L24.8715 63.3387Z" fill="white" />
                                                //     </svg>

                                                //     :
                                                <svg width="145" height="128" viewBox="0 0 145 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill={selectBlockActive == '4-1' ? '#9D8962' : ''} d="M105.294 45.6358L102.151 48.5531L112.302 60.2979L118.015 55.2809L116.267 53.2603L118.686 46.7474L115.053 45.3354L113.735 48.7917L105.305 45.6089L105.294 45.6358Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-2' ? '#9D8962' : ''} d="M109.345 34.5998L121.486 39.1226L122.089 37.5728L120.498 22.4923L110.017 23.8516L110.812 29.9806L108.781 30.244L109.345 34.5998Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-3' ? '#9D8962' : ''} d="M136.868 14.4999L122.874 16.4386L125.125 33.7974L139.335 31.8415L139.329 31.7914L138.551 31.8922L137.206 21.5221L137.769 21.4491L136.868 14.4999Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-4' ? '#9D8962' : ''} d="M131.046 0.687252L124.527 1.53276L124.596 2.06649L117.507 2.98587L117.414 2.32053L110.64 3.19903L109.567 4.64573L109.82 6.5944L107.835 6.85177L108.448 11.5765L107.922 11.6448L108.836 18.6944L109.355 18.627L110.021 23.7637L123.562 22.0076L122.838 16.4268L136.357 14.5095L134.953 3.68444L132.686 3.97851L132.387 1.67521L131.046 0.687252Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-5' ? '#9D8962' : ''} d="M125.565 66.9987L126.058 67.5103L130.084 64.0124L120.655 53.0917L112.373 60.3688L121.287 70.686L125.565 66.9987Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-6' ? '#9D8962' : ''} d="M138.162 51.9471L123.708 46.4023L121.524 51.9367L120.464 53.1293L129.876 63.6632M129.876 63.6629L134.003 60.0718L134.041 59.4623L134.078 58.8528L133.267 57.7925L133.745 57.5447L133.934 56.8463L134.914 57.0434L136.453 56.3557L136.863 55.3044L138.142 52.0209" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '4-7' ? '#9D8962' : ''} d="M139.345 31.8993L125.136 33.8878L126.023 40.726L123.71 46.402L138.164 51.9468L139.97 47.3019L139.242 45.626L138.437 45.1732L138.707 44.3915L137.83 37.6321L140.051 37.344L139.345 31.8993Z" stroke="#555555" strokeMiterlimit="10" />

                                                    <path fill={selectBlockActive == '3-1' ? '#9D8962' : ''} d="M105.154 64.7024L114.698 75.7612L120.125 71.0777L101.313 49.281L90.6115 58.5171L99.879 69.255L105.154 64.7024Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '3-2' ? '#9D8962' : ''} d="M78.9127 83.4736L78.3442 83.9642L70.9951 75.449L62.5431 82.7437L81.3551 104.54L90.3756 96.7551L78.9127 83.4736ZM78.9127 83.4736L80.8311 85.6963" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '3-3' ? '#9D8962' : ''} d="M88.6984 75.1618L78.9348 83.5884L78.359 84.0855L70.9415 75.4912L81.2809 66.5676L88.6984 75.1618Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '3-4' ? '#9D8962' : ''} d="M100.375 88.078L90.3531 96.7273L80.8323 85.6957L90.8538 77.0465L100.375 88.078Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '3-5' ? '#9D8962' : ''} d="M114.7 75.7577L110.146 79.6888L100.396 88.1033L90.8517 77.0444L105.156 64.6989L114.7 75.7577Z" stroke="#555555" strokeMiterlimit="10" />

                                                    <path fill={selectBlockActive == '2-5' ? '#9D8962' : ''} d="M44.0001 125.325L48.3373 126.487L50.5071 125.238L51.056 123.189L55.3848 124.349L60.3486 120.228L61.3333 121.416L62.8248 121.554L66.1525 118.794L66.606 119.339L71.8071 115.03L61.5161 102.9L50.7986 100.003L44.0128 125.328" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-6' ? '#9D8962' : ''} d="M61.5436 102.453L64.106 100.334M61.5436 102.453L71.7924 114.538L76.03 111.024L75.389 110.305L80.8658 105.767L71.3674 94.3313L61.5436 102.453Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-3' ? '#9D8962' : ''} d="M40.0515 96.6931L38.8921 93.5765M40.0515 96.6931L25.1335 102.034L23.2204 96.8727L24.1351 96.5705L21.6611 89.9019L35.6049 84.7473L40.0515 96.6931Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-2' ? '#9D8962' : ''} d="M58.0958 86.2067L58.0947 86.2109M58.0947 86.2109L59.9165 88.3808L57.4513 97.5811L63.0421 99.0791M58.0947 86.2109L61.9785 82.9906L71.3694 94.3312L64.108 100.334L63.0421 99.0791M63.0421 99.0791L64.1038 100.333" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-1' ? '#9D8962' : ''} d="M51.1876 84.3551L51.1865 84.3593M51.1865 84.3593L48.5238 85.3277L46.0586 94.5279L40.4678 93.0298M51.1865 84.3593L49.4331 79.6286L35.63 84.7544L38.9172 93.5836L40.4678 93.0298M40.4678 93.0298L38.9214 93.5849" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '2-4' ? '#9D8962' : ''} d="M43.9949 124.96L39.6577 123.798L38.4032 121.631L38.9521 119.582L34.6233 118.422L32.3851 112.372L30.9383 112.908L29.5776 112.282L28.0759 108.228L27.4105 108.473L25.0605 102.141L40.0381 96.7812L50.7678 99.6318L43.9821 124.957" stroke="#555555" strokeMiterlimit="10" />

                                                    <path fill={selectBlockActive == '1-1' ? '#9D8962' : ''} d="M32.9074 77.4555L19.1956 82.4933L21.6677 89.2218L48.6935 79.2922L43.8184 66.0234L30.5044 70.9151L32.9074 77.4555Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-2' ? '#9D8962' : ''} d="M24.5824 46.2794L24.3234 45.5746L34.8815 41.6954L31.0311 31.2158L4.00534 41.1454L8.11464 52.3299L24.5824 46.2794ZM24.5824 46.2794L21.8265 47.292" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-3' ? '#9D8962' : ''} d="M24 45.3636L35.2 41L40 55.1818L28.8 59L24 45.3636Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-4' ? '#9D8962' : ''} d="M21.5 47L8.5 52L13 64.5L26 59.5L21.5 47Z" stroke="#555555" />
                                                    <path fill={selectBlockActive == '1-5' ? '#9D8962' : ''} d="M19.1969 82.494L17.122 76.8465L12.6806 64.7581L26.3925 59.7202L32.9088 77.4561L19.1969 82.494Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M124.016 46.6079L117.887 48.9416M116.937 54.1887L121.26 52.2012M116.937 51.4758L122.585 49.2864M124.491 44.2742L118.213 46.6079M125.648 41.8138L115.961 45.7093M110.793 47.6966L114.768 46.1068M125.964 39.7548L108.541 46.7692M125.648 37.8541L105.891 45.8416M125.331 35.7951L122.005 36.9038M125.014 33.8944L121.846 35.0032M124.856 31.9938L121.688 33.1025M124.539 30.0931L121.371 31.2019M124.38 28.1925L121.213 29.3012M124.064 26.2918L120.896 27.4006M123.905 24.3912L120.738 25.4999M123.747 22.4905L120.579 23.5993M118.875 38.29L106.156 43.3246M115.961 37.0977L107.216 40.5423M113.311 36.0376L108.011 38.29M110.396 35.0032L109.071 35.5077" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M105.292 45.596L109.324 34.6961L109.319 34.6603M117.404 2.31011L110.623 3.18954L109.548 4.64029L109.801 6.59613L107.813 6.85397L108.428 11.5931L107.905 11.6609L108.822 18.7319L109.341 18.6645L110.808 29.9767L108.767 30.2415L109.334 34.6189L105.286 45.5609L102.13 48.498L121.295 70.7003L125.6 66.9913L126.093 67.5065L130.158 63.9743L129.904 63.6431L134.012 60.069L134.086 58.8428L133.271 57.7794L133.751 57.5276L133.941 56.8256L134.925 57.0258L136.47 56.3336L139.978 47.3192L139.246 45.6331L138.436 45.1771L138.71 44.395L137.83 37.6069L140.058 37.318L139.346 31.8302L138.565 31.9315L137.215 21.522L137.778 21.449L136.868 14.4389L136.367 14.5039L134.963 3.68246L132.696 3.97653L132.396 1.6661L131.051 0.674976L124.525 1.52141L124.594 2.05873L117.498 2.97903L117.404 2.31011Z" stroke="#9D8962" />
                                                    <path d="M78.9127 83.4736L88.5507 75.1554L81.2015 66.6402M78.9127 83.4736L78.3442 83.9643L70.995 75.4491M78.9127 83.4736L90.3755 96.7551M78.9127 83.4736L80.831 85.6963L83.0872 83.749M78.9127 83.4736L83.0872 83.749M81.2015 66.6402L70.995 75.4491M81.2015 66.6402L90.6143 58.5162M90.3755 96.7551L81.3551 104.54L62.543 82.7437L70.995 75.4491M90.3755 96.7551L100.397 88.1059M114.701 75.7603L110.146 79.6914L100.397 88.1059M114.701 75.7603L105.157 64.7015L99.8819 69.2541M114.701 75.7603L120.128 71.0768L101.316 49.2801L90.6143 58.5162M90.8525 77.0471L100.397 88.1059M90.8525 77.0471L99.8819 69.2541M90.8525 77.0471L83.0872 83.749M90.6143 58.5162L99.8819 69.2541M81.6856 81.0804L85.8601 81.3558M84.4375 78.7053L88.6121 78.9807M87.184 76.3349L91.3585 76.6104M87.3823 73.8016L94.0994 74.2448M85.0456 71.0942L96.8476 71.8728M82.8447 68.5441L99.4362 69.6388M81.9354 66.0068L97.9936 67.0662M84.7207 63.6028L95.6253 64.3222M87.5837 61.1318L93.191 61.5017" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M81.355 104.54L62.543 82.7437L101.316 49.2801L120.128 71.0768L81.355 104.54Z" stroke="#9D8962" />
                                                    <path d="M52.8432 84.3342L52.7271 84.7675L51.1622 84.3482L51.1611 84.3524M52.8432 84.3342L53.9409 83.704L55.6026 84.1493L56.2339 85.2427L56.1178 85.676L58.095 86.2058L58.0939 86.21M52.8432 84.3342L58.4142 93.9834M58.0939 86.21L59.9157 88.38L57.4505 97.5802L63.0412 99.0782M58.0939 86.21L61.9777 82.9897L80.867 105.766L75.3902 110.304L76.0684 111.122L66.6017 118.974L66.1481 118.428L62.8204 121.189L61.3289 121.051L60.3442 119.862L55.3805 123.984L51.0517 122.824L50.5027 124.872L48.3329 126.122L43.9957 124.959L39.6586 123.797L38.404 121.631L38.953 119.582L34.6242 118.422L32.386 112.371L30.9391 112.908L29.5784 112.282L28.0768 108.227L27.4113 108.473L23.1387 96.9395L24.1348 96.5706L21.6608 89.902L49.4078 79.6216L51.1611 84.3524M63.0412 99.0782L64.103 100.332L61.4889 102.499M63.0412 99.0782L64.1072 100.333L61.4889 102.499M61.4889 102.499L40.0763 96.7618L38.901 93.5928M61.4889 102.499L40.0722 96.7605L38.901 93.5928M38.901 93.5928L40.4424 93.0229M40.4424 93.0229L46.0332 94.521L48.4984 85.3207L51.1611 84.3524M40.4424 93.0229L43.0631 97.5621M44.4173 94.088L47.038 98.6272M46.728 91.928L51.2469 99.7549M47.8134 87.8774L55.2975 100.84M49.8298 84.8366L59.7598 102.036M62.7733 101.534L61.0472 98.5439M56.8231 85.865L59.3956 90.3207M50.7687 99.6314L61.2689 102.445L71.3783 114.978L66.5721 118.966L66.1185 118.421L62.7908 121.181L61.2993 121.043L60.3135 119.859L55.3508 123.976L51.0221 122.816L50.4731 124.865L48.3033 126.114L43.9829 124.956L50.7687 99.6314ZM71.3686 94.3304L80.8002 105.695L75.3561 110.211L76.0312 111.024L71.7936 114.537L61.5449 102.452L71.3686 94.3304ZM50.8521 99.6928L40.3123 96.8687L25.2366 102.693L27.4133 108.569L28.0787 108.321L29.5849 112.389L30.9567 113.022L32.4031 112.484L34.6498 118.552L38.9962 119.717L38.4448 121.775L39.7032 123.948L44.0414 125.111L50.8521 99.6928ZM49.4413 79.64L51.1948 84.3664L48.5319 85.3412L46.066 94.5441L40.475 93.046L38.9247 93.596L35.629 84.7564L49.4413 79.64ZM35.5727 84.7853L21.6697 89.9353L24.1368 96.5886L23.1423 96.9557L25.0614 102.141L40.0389 96.7808L35.5727 84.7853Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M51.1623 84.3482L52.7273 84.7675L52.8434 84.3342L53.941 83.704L55.6027 84.1493L56.234 85.2427L56.1179 85.676L58.0951 86.2058L61.9778 82.9897L80.8672 105.766L75.3903 110.304L76.0685 111.122L66.6018 118.974L66.1482 118.428L62.8205 121.189L61.329 121.051L60.3444 119.862L55.3806 123.984L51.0518 122.824L50.5028 124.872L48.3331 126.122L43.9958 124.959L39.6587 123.797L38.4041 121.631L38.9531 119.582L34.6243 118.422L32.3861 112.371L30.9393 112.908L29.5785 112.282L28.0769 108.227L27.4114 108.473L23.1388 96.9395L24.1349 96.5706L21.6609 89.902L49.4079 79.6216L51.1623 84.3482ZM51.1623 84.3482L49.4414 79.64L35.6291 84.7564M71.3784 114.978L66.5722 118.966L66.1186 118.421L62.7909 121.181L61.2994 121.043L60.3136 119.859L55.3509 123.976L51.0222 122.816L50.4733 124.865L48.3034 126.114L43.983 124.956M71.3688 94.3304L80.8003 105.695L75.3562 110.211L76.0314 111.024L71.7938 114.537M25.2368 102.693L27.4134 108.569L28.0788 108.321L29.5851 112.389L30.9568 113.022L32.4032 112.484L34.6499 118.552L38.9963 119.717L38.4449 121.775L39.7033 123.948L44.0415 125.111M35.5729 84.7853L21.6698 89.9353L24.1369 96.5886L23.1424 96.9557L25.0615 102.141" stroke="#9D8962" />
                                                    <path d="M24.5825 46.2799L28.9731 58.2301L39.5311 54.351M24.5825 46.2799L24.3235 45.5751L34.8815 41.6959M24.5825 46.2799L8.1147 52.3304M24.5825 46.2799L21.8266 47.2925L22.8544 50.09M24.5825 46.2799L22.8544 50.09M39.5311 54.351L34.8815 41.6959M39.5311 54.351L43.8192 66.022M8.1147 52.3304L4.0054 41.1459L31.0312 31.2163L34.8815 41.6959M8.1147 52.3304L12.68 64.7561M19.1964 82.492L17.1214 76.8445L12.68 64.7561M19.1964 82.492L32.9083 77.4541L30.5053 70.9137M19.1964 82.492L21.6685 89.2204L48.6943 79.2908L43.8192 66.022M26.3919 59.7182L12.68 64.7561M26.3919 59.7182L30.5053 70.9137M26.3919 59.7182L22.8544 50.09M43.8192 66.022L30.5053 70.9137M25.8457 49.7181L24.1176 53.5281M27.0994 53.1303L25.3713 56.9403M28.3505 56.5355L26.6224 60.3456M30.6516 57.6135L27.871 63.744M34.0086 56.3801L29.123 67.1516M37.1704 55.2184L30.3022 70.3611M39.8655 55.261L33.218 69.917M41.1344 58.7145L36.6203 68.667M42.4387 62.2644L40.1175 67.3821" stroke="#555555" strokeMiterlimit="10" />
                                                    <path d="M4.00546 41.1454L31.0312 31.2158L48.6943 79.2903L21.6686 89.2199L4.00546 41.1454Z" stroke="#9D8962" />
                                                    <path d="M46.5566 97.8866H53.1314C53.3059 97.8981 53.4811 97.8981 53.6557 97.8866C53.792 97.8866 53.9283 97.8866 54.0542 97.8866C54.0988 97.8982 54.1458 97.8982 54.1905 97.8866H54.4945C54.5606 97.8956 54.6277 97.8956 54.6938 97.8866C54.7671 97.8829 54.8407 97.8829 54.914 97.8866H55.1657V100.601H54.547C54.4324 100.09 54.1534 99.6272 53.7501 99.2795C53.4118 99.0487 53.0309 98.883 52.6281 98.7915C52.431 98.7528 52.2312 98.729 52.0304 98.7203H49.2411V102.97H51.7367C52.7929 102.901 53.8469 103.134 54.7672 103.641C55.3445 104.001 55.8089 104.507 56.1094 105.105C56.1933 105.35 56.2667 105.594 56.3296 105.817C56.3923 106.225 56.3923 106.64 56.3296 107.048C56.297 107.252 56.2444 107.453 56.1723 107.647C55.9375 108.335 55.5176 108.949 54.9559 109.427C54.2412 110.003 53.325 110.291 52.3973 110.23H46.5986V109.64C46.7664 109.632 46.9304 109.589 47.0803 109.516C47.2302 109.442 47.3625 109.339 47.4689 109.213C47.6393 108.901 47.7156 108.549 47.6891 108.196V99.9201C47.7118 99.5681 47.6357 99.2168 47.4689 98.9033C47.362 98.7787 47.2293 98.6772 47.0794 98.6054C46.9295 98.5336 46.7657 98.4931 46.5986 98.4865L46.5566 97.8866ZM49.1886 109.508H51.1076H51.7787C52.0479 109.487 52.3145 109.443 52.5756 109.376C53.0949 109.22 53.5596 108.928 53.9178 108.532C54.2901 107.96 54.4964 107.301 54.5148 106.624C54.5333 105.948 54.3633 105.279 54.0227 104.689C53.7382 104.326 53.3577 104.045 52.9216 103.875C52.677 103.777 52.4194 103.712 52.1562 103.682H51.5585H49.1886V109.508Z" fill="white" />
                                                    <path d="M87.1016 71.2744H91.952H92.8293C93.2292 71.2949 93.6246 71.3672 94.0057 71.4896C94.5944 71.6529 95.138 71.9471 95.595 72.35C95.848 72.6128 96.0422 72.9258 96.165 73.2682C96.2877 73.6107 96.3361 73.975 96.3072 74.3373C96.3215 74.5078 96.3215 74.6791 96.3072 74.8495C96.2689 75.0508 96.2065 75.2469 96.1214 75.4335C95.9478 75.8223 95.6948 76.1711 95.3783 76.4579C94.9692 76.8159 94.4759 77.0661 93.9438 77.1852V77.2876H94.2843C94.3939 77.3074 94.5011 77.3383 94.6043 77.3798C95.2126 77.5485 95.7669 77.8694 96.2142 78.312C96.6718 78.8708 96.9216 79.569 96.9216 80.2891C96.9216 81.0092 96.6718 81.7074 96.2142 82.2662C95.8093 82.717 95.304 83.0677 94.7385 83.2906C94.4007 83.4017 94.056 83.4906 93.7065 83.5569C93.4334 83.6003 93.1574 83.6243 92.8808 83.6286H87.1016V83.0243C87.2728 83.0365 87.4442 83.0019 87.597 82.9242C87.7499 82.8466 87.8783 82.7289 87.9684 82.5838C88.1143 82.2625 88.1816 81.9114 88.1646 81.5594V73.313C88.1869 72.9571 88.1083 72.6022 87.9376 72.2886C87.8424 72.1591 87.7159 72.0557 87.5698 71.9876C87.4237 71.9196 87.2626 71.8892 87.1016 71.8993V71.2744ZM89.7023 77.0315H91.7663C92.1728 77.0828 92.5858 77.036 92.9703 76.8952C93.3547 76.7543 93.6993 76.5234 93.9748 76.2223C94.3594 75.695 94.5653 75.06 94.563 74.4091C94.5901 74.1156 94.5565 73.8198 94.4642 73.5397C94.372 73.2596 94.2229 73.0011 94.0263 72.7803C93.6997 72.4599 93.294 72.2303 92.8498 72.1144C92.6183 72.0454 92.3793 72.0042 92.1378 71.9915C91.9004 71.9915 91.6941 71.9915 91.5289 71.9915H89.7436L89.7023 77.0315ZM89.7023 82.9833H92.0965H92.7055C93.4342 82.9034 94.1108 82.5695 94.6147 82.0408C95.0033 81.48 95.1717 80.7973 95.0881 80.1217C95.0044 79.4461 94.6744 78.8242 94.1605 78.3735C93.5022 77.9553 92.7333 77.7413 91.952 77.7589H89.7023V82.9833Z" fill="white" />
                                                    <path d="M120.045 29.7806H126.715C126.846 29.7925 126.978 29.7925 127.108 29.7806H127.377C127.443 29.7867 127.509 29.7867 127.574 29.7806C127.646 29.7889 127.719 29.7889 127.791 29.7806C127.85 29.7756 127.908 29.7756 127.967 29.7806H128.143H128.36H128.598V32.7889H127.988C127.988 32.707 127.988 32.6149 127.915 32.5228C127.892 32.4384 127.86 32.3562 127.822 32.2773C127.75 32.1135 127.677 31.9601 127.595 31.7964C127.5 31.6542 127.393 31.5206 127.274 31.3973C126.97 31.0413 126.561 30.7874 126.105 30.6708C125.653 30.5755 125.192 30.5274 124.73 30.5275H122.661V40.0846C122.625 40.4766 122.731 40.8686 122.961 41.1897C123.058 41.2926 123.174 41.3747 123.304 41.431C123.434 41.4874 123.574 41.5167 123.716 41.5172V42.1311H120.045V41.5273C120.205 41.5184 120.361 41.4764 120.503 41.4042C120.646 41.3319 120.772 41.231 120.872 41.1078C121.048 40.7964 121.127 40.4404 121.1 40.0846V31.7759C121.11 31.4226 121.035 31.072 120.883 30.7526C120.8 30.6089 120.677 30.4923 120.528 30.4177C120.379 30.3431 120.211 30.3136 120.045 30.3331V29.7806Z" fill="white" />
                                                    <path d="M25.8012 54.8022L30.6352 65.2791C30.7836 65.6125 30.983 65.9222 31.2265 66.1976C31.3186 66.3083 31.4336 66.3988 31.5641 66.4632C31.6947 66.5275 31.8377 66.5643 31.9839 66.571V67.1565H28.4672V66.571C28.7784 66.5105 28.9755 66.4398 29.0273 66.3187C29.0876 66.1818 29.1159 66.0336 29.1104 65.8847C29.1161 65.8209 29.1161 65.7567 29.1104 65.6929L29.0377 65.5416C29.0377 65.5416 29.0377 65.4709 29.0377 65.4507C29.0377 65.4305 29.0377 65.4507 29.0377 65.38L28.3219 63.8055H22.0978L21.4028 65.2892C21.3283 65.4251 21.2658 65.5669 21.2161 65.7131C21.2161 65.7939 21.2161 65.8645 21.2161 65.9049C21.2049 65.9342 21.2049 65.9665 21.2161 65.9958V66.0967C21.2594 66.2039 21.3267 66.3004 21.4132 66.3793C21.5505 66.4856 21.7159 66.552 21.8903 66.571V67.1565H18.9961V66.571C19.2206 66.5602 19.4354 66.4788 19.6082 66.3389C19.7679 66.2119 19.9107 66.0662 20.0335 65.9049L20.272 65.5517L20.3965 65.3094L24.4318 56.831C24.4318 56.6897 24.5356 56.5787 24.5563 56.5282C24.5643 56.4814 24.5643 56.4337 24.5563 56.3869C24.5609 56.3433 24.5501 56.2996 24.5256 56.2628C24.501 56.2261 24.4643 56.1986 24.4215 56.185C24.327 56.1436 24.2243 56.1229 24.1207 56.1245V55.539C24.2121 55.5133 24.3021 55.483 24.3904 55.4482C24.4844 55.4091 24.5747 55.3618 24.6601 55.3069C24.7718 55.2504 24.8792 55.1863 24.9817 55.1151L25.2721 54.8931L25.324 54.8326L25.8012 54.8022ZM27.8759 63.1292L25.2203 57.3962H25.0232L22.2741 63.1393L27.8759 63.1292Z" fill="white" />
                                                </svg>
                                            }
                                        </AnimatedImage>
                                    </div>
                                    <div className="bottom-row" onClick={onCloseModal}>
                                        <a href='#' className="bottom-title">Выберите квартиру <img src={switchIcon} alt="switchIcon" /></a>
                                        <AnimatedImage className="image">
                                            {selectedBlock == 'block-1' ?
                                                <svg width="187" height="128" viewBox="0 0 187 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M44.1065 106.732H1V1.00024H41.3899L41.3895 42.6309H44.1065V53.0878M44.1065 106.732V109.084H91.9969M44.1065 106.732V53.4976M160.353 106.732H138.587V109.084H91.9969M160.353 106.732V53.0878H91.9969M160.353 106.732H186.286V1.00024H135.536M91.9969 109.084V53.0878M135.536 53.0878V35.7393M135.536 35.7393V22.6059M135.536 35.7393L118.187 53.0878M135.536 22.6059V10.236M135.536 22.6059L104.644 53.4976M135.536 10.236V1.00024M135.536 10.236L92.6839 53.0878M135.536 1.00024H132.029M90.5539 1.00024H105.036M105.036 1.00024H118.718M105.036 1.00024L90.5539 15.4823M118.718 1.00024H132.029M118.718 1.00024L90.5539 29.1641M132.029 1.00024L80.097 53.0878M78.2024 42.6309L67.7827 53.4976M65.9084 42.6309L55.0416 53.4976M54.9732 42.6309L44.1065 53.4976M44.1065 53.4976V53.0878M44.1065 53.0878H91.9969" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-1' ? '#9D8962' : ''} d="M159.818 53.0877V106.732H185.75V1H135V53.0877H159.818Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-2' ? '#9D8962' : ''} d="M44.1065 106.732H1V1H41.3899L41.3895 42.6307H44.1065V53.0877V53.4975V106.732ZM44.1065 106.732V109.084" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-3' ? '#9D8962' : ''} d="M90.5543 42.6893H43.8968H41.1448V1H90.5543V42.6893Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-4' ? '#9D8962' : ''} d="M44.1074 108.996V106.645V53.4098V53H91.9978V108.996H44.1074Z" stroke="#555555" strokeMiterlimit="10" />
                                                    <path fill={selectBlockActive == '1-5' ? '#9D8962' : ''} d="M138.59 106.645V108.996H92V53H160.356V106.645H138.59Z" stroke="#555555" strokeMiterlimit="10" />
                                                </svg>
                                                : selectedBlock == 'block-2' ?
                                                    selectedFloor === 14 ?
                                                        <svg width="148" height="128" viewBox="0 0 148 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.2892 9.75286V10.8248L65.4292 10.8248V10.8352L59.8984 14.7172V37.4779L46.1078 37.4779M69.2892 9.75286L71.4269 7.61938L75.5256 7.61938L77.6529 9.75286V10.8248H82.5299V10.8352M69.2892 9.75286L88.0607 28.5798M82.5299 10.8352L88.0607 14.7172V37.4779L101.851 37.4779M82.5299 10.8352L89.4823 1L147 41.8903L137.194 55.7528L139.259 57.2202L122.412 81.2975M101.851 37.4779L105.068 39.7154L100.388 46.3345M101.851 37.4779L105.078 39.7152L100.388 46.3345M100.388 46.3345L74.0942 46.3345M42.9118 39.7467L47.571 46.3345L74.0942 46.3345M42.9118 39.7467L46.1078 37.4779M42.9118 39.7467L47.5606 46.3342M46.1078 37.4779L54.9383 46.3345M55.9125 37.4779L64.743 46.3345M59.8984 31.0632L75.1247 46.3345M59.8984 21.0421L85.1163 46.3345M62.6638 12.7762L96.1232 46.3345M102.749 43.3112L96.9327 37.4779M79.3927 10.8248L88.0607 19.5184M42.9683 39.7395L46.1971 37.5111L59.988 37.5111V14.7437L65.5154 10.8467L58.5652 1.02177L1 41.9616L10.7805 55.793L8.71822 57.2555L25.7911 81.3317L27.1712 80.3563L33.1274 88.7614L36.6451 89.3633L39.6439 87.236L48.5264 99.7814H59.3867V105.017M59.3867 105.017L63.4273 109.048H74.1256H84.7515M59.3867 105.017V105.141M84.7515 109.048H84.824L89.0473 104.835M84.7515 109.048L88.9744 104.835L89.0473 99.7814H99.6522M84.7515 109.048L74.0942 109.048V46.3345M99.6522 99.7814H99.7249L108.578 87.2775M99.6522 99.7814L108.534 87.2468L108.578 87.2775M108.578 87.2775L108.607 87.236L111.593 89.3536M108.578 87.2775L111.533 89.3637L111.593 89.3536M111.593 89.3536L111.606 89.3633L115.124 88.7614L121.056 80.3909M111.593 89.3536L115.051 88.7619L121.007 80.3568L121.056 80.3909M121.056 80.3909L121.08 80.3563L122.412 81.2975M121.056 80.3909L122.387 81.3321L122.412 81.2975M122.412 81.2975L122.46 81.3317" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-14-2' ? '#9D8962' : ''} d="M88.0608 14.7172L82.5299 10.8352L89.4824 1L147 41.8903L137.194 55.7528L139.259 57.2202L122.412 81.2975L122.387 81.3321L121.056 80.3909L115.124 88.7614L111.606 89.3633L111.593 89.3536L111.533 89.3637L108.578 87.2775L99.725 99.7814H99.6523H89.0474L88.9745 104.835L84.7515 109.048L74.0942 109.048V46.3345L100.388 46.3345L105.068 39.7154L101.851 37.4779L88.0608 37.4779V14.7172Z" />
                                                            <path d="M82.5299 10.8248V10.8352M82.5299 10.8352L88.0608 14.7172V37.4779L101.851 37.4779M82.5299 10.8352L89.4824 1L147 41.8903L137.194 55.7528L139.259 57.2202L122.412 81.2975M101.851 37.4779L105.068 39.7154L100.388 46.3345M101.851 37.4779L105.078 39.7152L100.388 46.3345M100.388 46.3345L74.0942 46.3345V109.048L84.7515 109.048M74.1257 109.048H84.7515M84.7515 109.048H84.8241L89.0474 104.835M84.7515 109.048L88.9745 104.835L89.0474 99.7814H99.6523M99.6523 99.7814H99.725L108.578 87.2775M99.6523 99.7814L108.535 87.2468L108.578 87.2775M108.578 87.2775L108.607 87.236L111.593 89.3536M108.578 87.2775L111.533 89.3637L111.593 89.3536M111.593 89.3536L111.606 89.3633L115.124 88.7614L121.056 80.3909M111.593 89.3536L115.051 88.7619L121.007 80.3568L121.056 80.3909M121.056 80.3909L121.08 80.3563L122.412 81.2975M121.056 80.3909L122.387 81.3321L122.412 81.2975M122.412 81.2975L122.46 81.3317" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-14-1' ? '#9D8962' : ''} d="M46.1078 37.4776L42.9118 39.7464L47.5606 46.3339L74.0942 46.3342V109.048H63.4273L59.3867 105.017V99.7811H48.5264L39.6439 87.2357L36.6451 89.363L33.1274 88.7611L27.1712 80.356L25.7911 81.3314L8.71822 57.2552L10.7805 55.7927L1 41.9613L58.5652 1.02148L65.4292 10.8349L59.8984 14.7169V37.4776L46.1078 37.4776Z" />
                                                            <path d="M65.4292 10.8245V10.8349M65.4292 10.8349L59.8984 14.7169V37.4776L46.1078 37.4776L42.9118 39.7464L47.5606 46.3339L74.0942 46.3342V109.048M65.4292 10.8349L58.5652 1.02148L1 41.9613L10.7805 55.7927L8.71822 57.2552L25.7911 81.3314L27.1712 80.356L33.1274 88.7611L36.6451 89.363L39.6439 87.2357L48.5264 99.7811H59.3867V105.017M59.3867 105.017L63.4273 109.048H74.1256M59.3867 105.017V105.141" stroke="#555555" strokeMiterlimit="10" />
                                                        </svg>
                                                        :
                                                        // selectedFloor === 14 ?
                                                        //     <svg width="148" height="128" viewBox="0 0 148 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        //         <path d="M69.2892 9.75286V10.8248L65.4292 10.8248V10.8352L59.8984 14.7172V37.4779L46.1078 37.4779M69.2892 9.75286L71.4269 7.61938L75.5256 7.61938L77.6529 9.75286V10.8248H82.5299V10.8352M69.2892 9.75286L88.0607 28.5798M82.5299 10.8352L88.0607 14.7172V37.4779L101.851 37.4779M82.5299 10.8352L89.4823 1L147 41.8903L137.194 55.7528L139.259 57.2202L122.314 81.1986L120.934 80.2204L114.978 88.6503L111.387 89.2544L108.388 87.1312L100.205 98.4065L96.0823 98.3562C91.1236 105.127 83.1881 109.135 73.9795 108.997M101.851 37.4779L105.068 39.7154L100.388 46.3345M101.851 37.4779L105.078 39.7152L100.388 46.3345M100.388 46.3345L47.571 46.3345L42.9118 39.7467M100.388 46.3345L47.5606 46.3342L42.9118 39.7467M42.9118 39.7467L46.1078 37.4779M46.1078 37.4779L54.9383 46.3345M55.9125 37.4779L64.743 46.3345M59.8984 31.0632L75.1247 46.3345M59.8984 21.0421L85.1163 46.3345M62.6638 12.7762L96.1232 46.3345M102.749 43.3112L96.9327 37.4779M79.3927 10.8248L88.0607 19.5184M73.9795 108.997L73.9481 77.671V46.345L99.8483 46.345M73.9795 108.997C64.7833 108.859 57.0342 104.702 52.279 97.8221L48.1646 97.7719L39.4979 87.1204L36.4991 89.2539L32.9813 88.6503L27.0877 80.4368L25.7089 81.4188L16.3322 68.0364L8.71822 57.2555L10.7805 55.793L1 41.9616L29.8208 21.4756L58.5652 1.02177L65.5154 10.8467L59.988 14.7437V37.5111L46.1971 37.5111L42.9683 39.7395M74.1779 46.4353L48.1799 46.4353" stroke="#555555" strokeMiterlimit="10" />
                                                        //         <path fill={selectBlockActive == '2-15-2' ? '#9D8962' : ''} d="M88.0609 14.7172L82.5301 10.8248L89.4825 1L147 41.8903L137.194 55.7528L139.259 57.2202L122.314 81.1986L120.934 80.2204L114.978 88.6503L111.387 89.2544L108.388 87.1312L100.205 98.4065L96.0825 98.3562C91.1238 105.127 83.1883 109.135 73.9797 108.997L73.9482 77.671V46.345L100.388 46.3345L105.068 39.7154L101.851 37.4779L88.0609 37.4779V14.7172Z" stroke="#555555" strokeMiterlimit="10" />
                                                        //         <path fill={selectBlockActive == '2-15-1' ? '#9D8962' : ''} d="M42.9118 39.7464L47.571 46.3342L73.9481 46.4342V77.6707L73.9795 108.996C64.7833 108.858 57.0342 104.702 52.279 97.8218L48.1646 97.7716L39.4979 87.1201L36.4991 89.2536L32.9813 88.65L27.0877 80.4365L25.7089 81.4186L8.71822 57.2552L10.7805 55.7927L1 41.9613L58.5652 1.02148L65.5154 10.8464L59.8984 14.7169V37.4776L46.1971 37.5108L42.9118 39.7464Z" />
                                                        //         <path d="M73.9481 46.3447V77.6707L73.9795 108.996C64.7833 108.858 57.0342 104.702 52.279 97.8218L48.1646 97.7716L39.4979 87.1201L36.4991 89.2536L32.9813 88.65L27.0877 80.4365L25.7089 81.4186L8.71822 57.2552L10.7805 55.7927L1 41.9613L58.5652 1.02148L65.5154 10.8464L59.8984 14.7169V37.4776L46.1971 37.5108L42.9118 39.7464L47.571 46.3342L74.1779 46.435" stroke="#555555" strokeMiterlimit="10" />
                                                        //     </svg>
                                                        //     :
                                                        <svg width="148" height="128" viewBox="0 0 148 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.3304 9.72809V10.7969H65.4703V10.8072M69.3304 9.72809L71.4681 7.60088H75.5668L77.6941 9.72809V10.7969H82.571V10.8072M69.3304 9.72809L88.1019 28.4996M82.571 10.8072L88.1019 14.6778V37.3716H101.892M82.571 10.8072L89.5235 1.00098L147.041 41.771L137.235 55.5927L139.3 57.0558L122.355 80.9636L120.975 79.9883L115.019 88.3934L111.501 88.9953L108.502 86.868L99.62 99.4134H88.9423V104.467L84.7191 108.68H74.0207H63.3224L59.099 104.467V99.4134H48.4214L39.539 86.868L36.5401 88.9953L33.0224 88.3934L27.0662 79.9883L25.6862 80.9636L8.74102 57.0558L10.806 55.5927L1 41.771L58.5179 1.00098L65.4703 10.8072M101.892 37.3716L105.109 39.6025L100.429 46.2021M101.892 37.3716L105.12 39.6022L100.429 46.2021M100.429 46.2021H47.6121L42.9529 39.6337M100.429 46.2021L47.6017 46.2018L42.9529 39.6337M42.9529 39.6337L46.1489 37.3716M46.1489 37.3716H59.9395V14.6778L65.4703 10.8072M46.1489 37.3716L54.9794 46.2021M55.9537 37.3716L64.7841 46.2021M59.9395 30.9757L75.1659 46.2021M59.9395 20.9841L85.1575 46.2021M62.7049 12.7425L96.1645 46.2021M102.79 43.1876L96.9739 37.3716M79.4338 10.7969L88.1019 19.4649M73.9892 46.2126H99.8895L130.885 68.8234L122.282 80.9641L120.902 79.9887L114.946 88.3938L111.428 88.9957L108.429 86.8788L99.547 99.4138H88.8695V104.467L84.6461 108.68H73.9892V46.2126ZM118.129 21.3095L146.844 41.6493L137.099 55.3993L139.154 56.8522L131.568 67.5513L100.529 46.0597L118.129 21.3095ZM74.2191 46.3026H48.221L17.1173 69.0035L25.7499 81.1832L27.1288 80.2041L33.1038 88.637L36.6508 89.2464L39.6483 87.1182L48.5607 99.6976H59.2817V104.773L63.5181 109H74.2191V46.3026ZM58.6063 1.02269L65.5565 10.8187L60.0292 14.7042V37.4047H46.2382L43.0093 39.6265L29.9736 21.3152L58.6063 1.02269ZM29.8619 21.4164L1.04098 41.8421L10.8216 55.6327L8.75922 57.0909L16.3733 67.8402L47.5377 46.2688L29.8619 21.4164Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-1' ? '#9D8962' : ''} d="M65.5371 10.7959V10.8063M65.5371 10.8063L60.0063 14.6768V37.3706H46.2157M65.5371 10.8063L58.5847 1L29.9787 21.3086L42.9886 39.6012L46.2157 37.3706M46.2157 37.3706L42.999 39.6015" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-2' ? '#9D8962' : ''} d="M82.5723 10.7978V10.8082M82.5723 10.8082L88.1031 14.6788V37.3725H101.894M82.5723 10.8082L89.5247 1.00195L118.131 21.3105L105.121 39.6032L101.894 37.3725M101.894 37.3725L105.11 39.6035" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-3' ? '#9D8962' : ''} d="M47.5137 46.0587L42.9235 39.6013M47.5137 46.0587L16.4748 67.5504L8.88894 56.8513L10.8076 55.5918L1.00167 41.77L29.9136 21.3086L47.5137 46.0587Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-4' ? '#9D8962' : ''} d="M39.3814 86.8702L48.2638 99.4156L59.0143 99.4161V104.47L63.1647 108.682L73.8945 108.682V46.2148H47.9943L16.9991 68.8257L25.6014 80.9663L26.9815 79.991L32.9377 88.3961L36.4554 88.9979L39.4543 86.881" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-5' ? '#9D8962' : ''} d="M108.499 86.8702L99.6171 99.4156L88.8666 99.4161V104.47L84.7162 108.682L73.9863 108.682V46.2148H99.8866L130.882 68.8257L122.279 80.9663L120.899 79.991L114.943 88.3961L111.425 88.9979L108.427 86.881" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '2-6' ? '#9D8962' : ''} d="M100.531 46.0607L105.121 39.6032M100.531 46.0607L131.57 67.5523L139.156 56.8532L137.237 55.5937L147.043 41.772L118.131 21.3105L100.531 46.0607Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path d="M65.4703 10.7968H69.3304V9.72809L71.4681 7.60088H75.5668L77.6941 9.72809V10.7968H82.571L89.5235 1.00098L147.041 41.771L137.235 55.5927L139.3 57.0558L122.355 80.9636L120.975 79.9883L115.019 88.3934L111.501 88.9952L108.502 86.868L99.62 99.4134H88.9423V104.467L84.7191 108.68H74.0207H63.3224L59.099 104.467V99.4134H48.4214L39.539 86.868L36.5401 88.9952L33.0224 88.3934L27.0662 79.9883L25.6862 80.9636L8.74102 57.0558L10.806 55.5927L1 41.771L58.5179 1.00098L65.4703 10.7968ZM65.4703 10.7968L58.6063 1.02269L29.9736 21.3152M130.885 68.8234L122.282 80.9641L120.902 79.9887L114.946 88.3938L111.428 88.9957L108.429 86.8788L99.547 99.4138H88.8695V104.467L84.6461 108.68H73.9892M118.129 21.3095L146.844 41.6493L137.099 55.3993L139.154 56.8522L131.568 67.5513M17.1173 69.0035L25.7499 81.1832L27.1288 80.2041L33.1038 88.637L36.6508 89.2464L39.6483 87.1182L48.5607 99.6976H59.2817V104.773L63.5181 109H74.2191M29.8619 21.4164L1.04098 41.8421L10.8216 55.6327L8.75922 57.0909L16.3733 67.8402" stroke="#555555" strokeMiterlimit="10" />
                                                        </svg>
                                                    : selectedBlock == 'block-3' ?
                                                        <svg width="187" height="128" viewBox="0 0 187 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M44.1065 106.732H1V1.00024H41.3899L41.3895 42.6309H44.1065V53.0878M44.1065 106.732V109.084H91.9969M44.1065 106.732V53.4976M160.353 106.732H138.587V109.084H91.9969M160.353 106.732V53.0878H91.9969M160.353 106.732H186.286V1.00024H135.536M91.9969 109.084V53.0878M135.536 53.0878V35.7393M135.536 35.7393V22.6059M135.536 35.7393L118.187 53.0878M135.536 22.6059V10.236M135.536 22.6059L104.644 53.4976M135.536 10.236V1.00024M135.536 10.236L92.6839 53.0878M135.536 1.00024H132.029M90.5539 1.00024H105.036M105.036 1.00024H118.718M105.036 1.00024L90.5539 15.4823M118.718 1.00024H132.029M118.718 1.00024L90.5539 29.1641M132.029 1.00024L80.097 53.0878M78.2024 42.6309L67.7827 53.4976M65.9084 42.6309L55.0416 53.4976M54.9732 42.6309L44.1065 53.4976M44.1065 53.4976V53.0878M44.1065 53.0878H91.9969" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '3-1' ? '#9D8962' : ''} d="M159.818 53.0877V106.732H185.75V1H135V53.0877H159.818Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '3-2' ? '#9D8962' : ''} d="M44.1065 106.732H1V1H41.3899L41.3895 42.6307H44.1065V53.0877V53.4975V106.732ZM44.1065 106.732V109.084" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '3-3' ? '#9D8962' : ''} d="M90.5543 42.6893H43.8968H41.1448V1H90.5543V42.6893Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '3-4' ? '#9D8962' : ''} d="M44.1074 108.996V106.645V53.4098V53H91.9978V108.996H44.1074Z" stroke="#555555" strokeMiterlimit="10" />
                                                            <path fill={selectBlockActive == '3-5' ? '#9D8962' : ''} d="M138.59 106.645V108.996H92V53H160.356V106.645H138.59Z" stroke="#555555" strokeMiterlimit="10" />
                                                        </svg>
                                                        : selectedBlock == 'block-4' ?
                                                            selectedFloor === 14 ?
                                                                <svg width="191" height="128" viewBox="0 0 191 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill={selectBlockActive == '4-14-2' ? '#9D8962' : ''} d="M101.196 108.967V106.813H116.856V69.2873H81.5294L66.7844 60.9258L46.4351 98.5975L58.5328 105.201L63.3878 103.802L64.9163 101.754L66.9642 102.773L66.5 105.5L69.5 108.967H101.196Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M75.5458 10.7034L104.007 25.6382H104.107M189.958 59.3206V40.4099L186.361 36.9434H180.907V31.399H167.69V29.9405H147.97V31.389H116.423V25.6948H104.215L75.644 10.7001L68.7111 1L1 45.6645L9.64122 58.7911L8.05282 59.96L16.2944 72.3673L17.2934 71.7879L25.6349 84.3251L28.9715 84.9645L32.1783 83.1064L32.6977 84.5149L34.5559 85.2842L33.6567 87.9115L35.0053 92.3969L58.4814 105.224L63.3665 103.815L64.905 101.757L66.9529 102.786L66.5 105.5L69.5 109L85.8836 109H101.188V106.822H130.218V108.391H149.769V106.992H179.948V100.669H186.391L189.588 97.3319V79.1305H188.09V59.3406L189.958 59.3206Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-14-4' ? '#9D8962' : ''} d="M189.555 97.3136V79.1321H188.067V59.3622L189.925 59.3423V40.4515L186.339 36.995H180.904V31.4607H167.728V29.9922H148.068V31.4407H133.742V69.2023H149.306L149.756 106.964H179.945V100.64H186.369L189.555 97.3136Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M75.5464 10.707L104.007 25.6418H104.107" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-14-5' ? '#9D8962' : ''} d="M104.723 26L88 57.6877L92.0359 59.8955L133.963 60.8945V31.6642H116.871V26H104.723Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-14-3' ? '#9D8962' : ''} d="M149.599 108.365L149.26 69.2949H116.871V106.797H130.219V108.365H149.599Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M17.9244 71.1445L17.1152 71.684L18.6137 73.9517L17.9244 71.1445Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M66.1117 61.6978L61.8911 44.058M56.5 45.7819L59.2744 56.8207M72.3437 63.8296L68.1759 45.7819M78.6801 67.8779L71.4417 39.924M67.829 25.0451L70.7757 36.5121M84.2148 69.4791L71.1738 19.1975M89.5404 69.2863L74.6604 12.2598M95.3004 69.1499L93.4426 59.633M100.626 68.9572L98.7119 59.8746M105.895 69.1989L103.981 60.1163M111.221 69.0061L109.307 59.9235M116.49 69.2478L114.576 60.1652M121.816 69.055L119.902 59.9725M127.085 69.2967L125.171 60.2141M132.354 69.5383L130.44 60.4558M90.7538 50.5575L81.4695 13.8818M95.0607 42.9872L88.7235 17.7786M98.9107 36.0965L94.6183 20.76M102.785 28.4701L101.872 24.6568" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-14-1' ? '#9D8962' : ''} d="M8.05389 59.8625L9.6323 58.6937L1.04102 45.647L68.554 1.03516L75.5069 10.7353L63.7789 32.7229L72.7896 37.568L67.6249 47.0284L58.5 42L52.3819 52.9665L66.7843 60.9262L46.435 98.5978L37.6892 93.8392L34.9515 92.3419L33.6129 87.8764L34.5019 85.2591L32.6538 84.4899L32.1443 83.0913L28.9476 84.9394L27.2893 84.6198L25.631 84.3001L17.2495 71.7029L16.2156 72.15L8.05389 59.8625Z" stroke="#555555" strokeMiterlimit="10" />
                                                                </svg>
                                                                :
                                                                // selectedFloor === 14 ?
                                                                //     <svg width="191" height="128" viewBox="0 0 191 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                //         <path fill={selectBlockActive == '4-15-2' ? '#9D8962' : ''} d="M46.4351 98.5983L66.7844 60.9266L72.079 63.8527L77.729 53.6369L86.8392 58.8031L104.263 25.7324H116.41V106.778L101.196 106.814V108.968H69.5L66.5 105.5L66.9642 102.774L64.9163 101.755L63.3878 103.803L58.5328 105.202L46.4351 98.5983Z" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path d="M75.5458 10.7034L104.007 25.6382H104.107M189.958 59.3206V40.4099L186.361 36.9434H180.907V31.399H167.69V29.9405H147.97V31.389H116.423V25.6948H104.215L75.644 10.7001L68.7111 1L1 45.6645L9.64122 58.7911L8.05282 59.96L16.2944 72.3673L17.2934 71.7879L25.6349 84.3251L28.9715 84.9645L32.1783 83.1064L32.6977 84.5149L34.5559 85.2842L33.6567 87.9115L35.0053 92.3969L58.4814 105.224L63.3665 103.815L64.905 101.757L66.9529 102.786L66.5 105.5L69.5 109L85.8836 109H101.188V106.822H130.218V108.391H149.769V106.992H179.948V100.669H186.391L189.588 97.3319V79.1305H188.09V59.3406L189.958 59.3206Z" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path d="M189.555 79.1321V97.3136L186.369 100.64H179.945V106.964H149.768V108.391H130.218V106.964H116.5V31.4407H148.068V29.9922H167.728V31.4607H180.904V36.995H186.339L189.925 40.4515V59.3423L188.067 59.3622V79.1321H189.555Z" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path d="M75.5464 10.707L104.007 25.6418H104.107" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path d="M17.9244 71.1445L17.1152 71.684L18.6137 73.9517L17.9244 71.1445Z" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path d="M66 60.5L64 53M72.3437 63.8296L68.1759 45.7819M76 57L71.4417 39.924M67.829 25.0451L70.7757 36.5121M80.5 55L71.1738 19.1975M87 58.5L74.6604 12.2598M90.7538 50.5575L81.4695 13.8818M95.0607 42.9872L88.7235 17.7786M98.9107 36.0965L94.6183 20.76M102.785 28.4701L101.872 24.6568" stroke="#555555" strokeMiterlimit="10" />
                                                                //         <path fill={selectBlockActive == '4-15-1' ? '#9D8962' : ''} d="M8.05389 59.8625L9.6323 58.6937L1.04102 45.647L68.554 1.03516L75.5069 10.7353L63.7789 32.7229L72.7896 37.568L67.1396 47.784L61.4896 58L66.7843 60.9262L46.435 98.5978L37.6892 93.8392L34.9515 92.3419L33.6129 87.8764L34.5019 85.2591L32.6538 84.4899L32.1443 83.0913L28.9476 84.9394L27.2893 84.6198L25.631 84.3001L17.2495 71.7029L16.2156 72.15L8.05389 59.8625Z" stroke="#555555" strokeMiterlimit="10" />
                                                                //     </svg>
                                                                //     :
                                                                <svg width="191" height="128" viewBox="0 0 191 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M75.5458 10.7034L104.007 25.6382H104.107M189.958 59.3206V40.4099L186.361 36.9434H180.907V31.399H167.69V29.9405H147.97V31.389H116.422V25.6948H104.215L75.644 10.7001L68.7111 1L1 45.6645L9.64122 58.7911L8.05282 59.96L16.2944 72.3673L17.2934 71.7879L25.6349 84.3251L28.9715 84.9645L32.1783 83.1064L32.6977 84.5149L34.5559 85.2842L33.6567 87.9115L35.0053 92.3969L58.4814 105.224L63.3665 103.815L64.905 101.757L66.9529 102.786H85.8836V109H101.188V106.822H130.218V108.391H149.769V106.992H179.948V100.669H186.391L189.588 97.3319V79.1305H188.09V59.3406L189.958 59.3206Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-1' ? '#9D8962' : ''} d="M75.437 10.6954L68.554 1.03516L32.7305 24.7011L44.4586 42.1533L50.6223 38.0774L67.625 47.0284L72.7897 37.568L63.7789 32.7229L75.507 10.7353L75.437 10.6954Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-2' ? '#9D8962' : ''} d="M104.263 25.7314L87.5398 57.4191L91.5756 59.6269L133.503 60.6259V31.3957H116.41V25.7314H104.263Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-3' ? '#9D8962' : ''} d="M149.599 108.366L149.26 69.2959H100.849L101.159 108.966H101.298V106.798H130.219V108.366H149.599Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-4' ? '#9D8962' : ''} d="M189.555 97.3136V79.1321H188.067V59.3622L189.925 59.3423V40.4515L186.339 36.995H180.904V31.4607H167.728V29.9922H148.068V31.4407H133.742V69.2023H149.306L149.756 106.964H179.945V100.64H186.369L189.555 97.3136Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-5' ? '#9D8962' : ''} d="M9.63247 58.6937L8.05406 59.8625L16.2157 72.15L49.5218 50.1723L32.5091 24.8682L1.04118 45.647L9.63247 58.6937Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-6' ? '#9D8962' : ''} d="M46.4349 98.5973L66.7842 60.9257L52.3818 52.966L49.488 49.6348L17.2494 71.7024L25.6309 84.2997L27.2892 84.6193L28.9474 84.9389L32.1442 83.0909L32.6537 84.4895L34.5018 85.2586L33.6127 87.876L34.9513 92.3414L37.6891 93.8387L46.4349 98.5973Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path fill={selectBlockActive == '4-7' ? '#9D8962' : ''} d="M100.999 108.967L100.6 69.2873H81.5292L66.7842 60.9258L46.4349 98.5975L58.5326 105.201L63.3877 103.802L64.9161 101.754L66.9641 102.773H85.8149V108.967H100.999Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M104.008 25.6401L75.5469 10.7053L68.644 1.03516L32.7305 24.7311L44.4886 42.2033L50.6723 38.1174L67.5001 47L87.265 57.3678L104.108 25.6401H104.008Z" stroke="#555555" strokeMiterlimit="10" />
                                                                    <path d="M66.1117 61.6978L61.891 44.058M47.8379 39.5848L51.7512 52.1501M55.2787 40.5498L59.2744 56.8207M72.3437 63.8296L68.1759 45.7819M78.6801 67.8779L71.4417 39.924M67.8289 25.0451L70.7757 36.5121M84.2148 69.4791L71.1738 19.1975M89.5404 69.2863L74.6604 12.2598M95.3003 69.1499L93.4426 59.633M100.626 68.9572L98.7119 59.8746M105.895 69.1988L103.981 60.1163M111.221 69.0061L109.307 59.9235M116.49 69.2478L114.576 60.1652M121.816 69.055L119.902 59.9725M127.085 69.2967L125.171 60.2141M132.354 69.5383L130.44 60.4558M90.7538 50.5575L81.4695 13.8818M95.0606 42.9872L88.7235 17.7786M98.9107 36.0965L94.6183 20.76M102.785 28.4701L101.872 24.6568" stroke="#555555" strokeMiterlimit="10" />
                                                                </svg>
                                                            : ""}
                                        </AnimatedImage>
                                    </div>
                                </div>
                                <div className="bottom-side">
                                    <div className="bottom-row" >
                                        <AnimatedText as='div' className="title-anim option-link">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#installmentCalculator"><img src={calculatorIcon} alt="calculatorIcon" /> Калькулятор рассрочки</a>
                                        </AnimatedText>
                                    </div>
                                    <div className="bottom-row" style={{ display: 'none' }} >
                                        <AnimatedText as='div' className="title-anim option-link">
                                            <a href="#"><img src={optionsIcon} alt="calculatorIcon" />Этаж</a>
                                        </AnimatedText>
                                        <AnimatedText as='div' className="title-anim option-link">
                                            <a href="#"><img src={optionsIcon} alt="calculatorIcon" />Квартира</a>
                                        </AnimatedText>
                                    </div>
                                </div>
                                <div className="bottom-side">
                                    <div className="bottom-row" >
                                        <button className='download-mob' onClick={handleDownload}>
                                            <img src={iconDownload} alt="iconDownload" /> Скачать PDF
                                        </button>
                                        <button className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#callModalApartments">связаться со мной</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Apartments;