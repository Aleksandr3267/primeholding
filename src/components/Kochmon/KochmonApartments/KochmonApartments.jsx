import { useState, useEffect } from 'react';
import './KochmonApartments.css';
import './KochmonMediaApartments.css';
import modalCloseIcon from '../../../assets/icons/modalCloseGallery.svg';
import backIcon from '../../../assets/apartment/backIcon.svg';

import iconDownload from '../../../assets/apartment/iconDownload.svg';
import arrowUp from '../../../assets/apartment/arrowUp.svg';
import arrowDown from '../../../assets/apartment/arrowDown.svg';

import loupeIcon from '../../../assets/apartment/loupe-icon.svg';
import compass from '../../../assets/apartment/compass.svg';
import switchIcon from '../../../assets/apartment/switchIcon.svg';

import calculatorIcon from '../../../assets/apartment/calculator-icon.svg';
import optionsIcon from '../../../assets/apartment/optionsIcon.svg';
import imageOptions from '../../../assets/apartment/KochmonApartment/imageOptions.png';
import AnimatedText from '../../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../../UI/AnimatedImage/AnimatedImage';

import imageFlat0 from '../../../assets/apartment/KochmonSelectFloor/SelectFloor0.svg';

const module1Promise = import('./KochmonFloorAp/getKochmonSec1Option.jsx');
const module5Promise = import('./KochmonFloorAp/getKochmonSec5Option.jsx');
const module6Promise = import('./KochmonFloorAp/getKochmonSec6Option.jsx');
const module7Promise = import('./KochmonFloorAp/getKochmonSec7Option.jsx');
const module8Promise = import('./KochmonFloorAp/getKochmonSec8Option.jsx');
const module9Promise = import('./KochmonFloorAp/getKochmonSec9Option.jsx');
const module10Promise = import('./KochmonFloorAp/getKochmonSec10Option.jsx');

import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from '../../../store/apartmentSlice.js';
import dayjs from "dayjs";
import { checkApartment, selectApartmentLoading, fetchSimilarApartments, selectSimilarApartments } from "../../../store/apartmentSlice.js";
import { selectOrderLoading } from "../../../store/orderSlice.js";
import { selectUser } from "../../../store/userSlice.js";
import jwtService from "../../../jwtService/jwtService.js";

function statusDrawer(status) {
    switch (status) {
        case 'rent':
            return "Бронь"
        case 'purchase':
            return "Продано"
        case 'mortgage':
            return "Рассрочка"
        case 'barter':
            return "Бартер"
        case 'cancel':
            return "Отмена"
        case 'available':
            return "Свободно"
        default:
            return "Свободно"
    }
}

function apartmentStateDrawer(apartment) {
    if (apartment?.status === 'available') {
        return (
            <>
                <p className='occupied-text'><span>Статус:</span>{statusDrawer("available")}</p>
                <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
            </>
        )
    }
    switch (apartment?.currentOrder?.type) {
        case 'rent':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("rent")}</p>
                    <p className='occupied-text'><span>Срок брони:</span>{
                        `${dayjs(apartment?.currentOrder?.rent?.startDate).format("DD.MM.YY")} - ${dayjs(apartment?.currentOrder?.rent?.endDate).format("DD.MM.YY")}`}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        case 'purchase':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("purchase")}</p>
                    <p className='occupied-text'><span>Дата покупки:</span>{dayjs(apartment?.currentOrder?.purchase?.date).format("DD.MM.YY")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        case 'mortgage':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("mortgage")}</p>
                    <p className='occupied-text'><span>Дата покупки:</span>{dayjs(apartment?.currentOrder?.mortgage?.date).format("DD.MM.YY")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        case 'barter':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("barter")}</p>
                    <p className='occupied-text'><span>Дата покупки:</span>{dayjs(apartment?.currentOrder?.barter?.date).format("DD.MM.YY")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        case 'cancel':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("cancel")}</p>
                    <p className='occupied-text'><span>Дата покупки:</span>{dayjs(apartment?.currentOrder?.cancel?.date).format("DD.MM.YY")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        case 'available':
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("available")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
        default:
            return (
                <>
                    <p className='occupied-text'><span>Статус:</span>{statusDrawer("available")}</p>
                    <p className='occupied-text'><span>Менеджер:</span>{apartment?.manager?.name}</p>
                </>
            )
    }
}

// eslint-disable-next-line react/prop-types
function KochmonApartments({ selectedFloor, maxNumFl, selectedBlock, selectedSector, changeSetSelectedFloor, selectedOption, isOpen, onCloseModal, onCloseModalPlannedLayout, onCloseModalHouse, updateStatus }) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const loading = useSelector(selectApartmentLoading);
    const accessToken = jwtService.getAccessToken();
    const isAuth = accessToken && user;
    const [currentApartment, setCurrentApartment] = useState(null);
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [image, setImage] = useState(null);
    const [numRums, setNumRums] = useState(null);
    const [areaApartment, setAreaApartment] = useState(null);
    const [getSector, setGetSector] = useState(null);
    const [getFlat, setGetFlat] = useState(null);

    const [apartment, setApartment] = useState(null);

    // const [selectedApartment, setSelectedApartment] = useState(null);

    // const similarApartments = useSelector(selectSimilarApartments);
    const [similarM, setSimilarM] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            let module1 = await module1Promise;
            let module5 = await module5Promise;
            let module6 = await module6Promise;
            let module7 = await module7Promise;
            let module8 = await module8Promise;
            let module9 = await module9Promise;
            let module10 = await module10Promise;
            let result;
            if (selectedSector === 'sector-1') {
                result = module1.getKochmonSec1Sector(selectedBlock);
            } else if (selectedSector === 'sector-5') {
                result = module5.getKochmonSec5Sector(selectedBlock);
            } else if (selectedSector === 'sector-6') {
                result = module6.getKochmonSec6Sector(selectedBlock);
            } else if (selectedSector === 'sector-7') {
                result = module7.getKochmonSec7Sector(selectedBlock);
            } else if (selectedSector === 'sector-8') {
                result = module8.getKochmonSec8Sector(selectedBlock);
            } else if (selectedSector === 'sector-9') {
                result = module9.getKochmonSec9Sector(selectedBlock);
            } else if (selectedSector === 'sector-10') {
                result = module10.getKochmonSec10Sector(selectedBlock);
            }
            setGetSector(result);
        };
        fetchData();
    }, [selectedSector, selectedBlock]);
    useEffect(() => {
        const fetchData = async () => {
            let module1 = await module1Promise;
            let module5 = await module5Promise;
            let module6 = await module6Promise;
            let module7 = await module7Promise;
            let module8 = await module8Promise;
            let module9 = await module9Promise;
            let module10 = await module10Promise;
            let result;
            switch (selectedSector) {
                case 'sector-1':
                    result = await module1.getKochmonSec1Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-5':
                    result = await module5.getKochmonSec5Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-6':
                    result = await module6.getKochmonSec6Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-7':
                    result = await module7.getKochmonSec7Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-8':
                    result = await module8.getKochmonSec8Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-9':
                    result = await module9.getKochmonSec9Flat(selectedBlock, selectedOption);
                    break;
                case 'sector-10':
                    result = await module10.getKochmonSec10Flat(selectedBlock, selectedOption);
                    break;
                default:
                    result = null;
            }
            setGetFlat(result);
        };
        fetchData();
    }, [selectedSector, selectedBlock, selectedOption]);

    let module1, module5, module6, module7, module8, module9, module10;
    const getImageForOption = async (option, selectedFloor) => {
        let image = null;
        let selectApartment = null;
        switch (selectedSector) {
            case 'sector-1':
                module1 = await module1Promise;
                image = module1.getKochmonSec1Option(option, selectedFloor);
                selectApartment = module1.getKochmonSec1Option(option, selectedFloor);
                break;
            case 'sector-5':
                module5 = await module5Promise;
                image = module5.getKochmonSec5Option(option);
                selectApartment = module5.getKochmonSec5Option(option, selectedFloor);
                break;
            case 'sector-6':
                module6 = await module6Promise;
                image = module6.getKochmonSec6Option(option);
                selectApartment = module6.getKochmonSec6Option(option, selectedFloor);
                break;
            case 'sector-7':
                module7 = await module7Promise;
                image = module7.getKochmonSec7Option(option);
                selectApartment = module7.getKochmonSec7Option(option, selectedFloor);
                break;
            case 'sector-8':
                module8 = await module8Promise;
                image = module8.getKochmonSec8Option(option);
                selectApartment = module8.getKochmonSec8Option(option, selectedFloor);
                break;
            case 'sector-9':
                module9 = await module9Promise;
                image = module9.getKochmonSec9Option(option);
                selectApartment = module9.getKochmonSec9Option(option, selectedFloor);
                break;
            case 'sector-10':
                module10 = await module10Promise;
                image = module10.getKochmonSec10Option(option);
                selectApartment = module10.getKochmonSec10Option(option, selectedFloor);
                break;
            default:
                break;
        }
        return image, selectApartment;
    }

    let imageResult;
    async function someFunction() {
        imageResult = await getImageForOption(selectedOption, selectedFloor);
        // console.log("imageResult", imageResult);
        if (imageResult !== null) {
            setImage(imageResult.image);
            setNumRums(imageResult.numRums);
            setAreaApartment(imageResult.areaApartment);

            // setSelectedApartment(imageResult.selectApartment);


            const apart = {
                complex: 'Kochmon city',
                floor: parseInt(selectedFloor, 10),
                block: selectedBlock,
                section: selectedSector,
                rooms: parseInt(imageResult.numRums, 10),
                area: parseFloat(imageResult.areaApartment),
                number: imageResult.selectApartment,
            };

            setCurrentApartment(apart);

            dispatch(checkApartment(apart)).unwrap().then((res) => {
                if (res?.status === 200) {
                    setApartment(res?.data);
                }
                if (res?.response?.status === 404) {
                    setApartment(null);
                }
            }).catch((err) => {
                console.log(err);
            });

            dispatch(fetchSimilarApartments(apart)).unwrap().then((res) => {
                // if (res?.status === 200) {
                    setSimilarM(res);
                // }
                if (res?.response?.status === 404) {
                    setSimilarM(null);
                }
            }).catch((err) => {
                console.log(err);
            });


        } else {
            // Обработка случая, когда imageResult равен null
        }
    }
    // useEffect(() => {
    //     console.log(selectedApartment);
    // }, [selectedApartment]);


    useEffect(() => {
        someFunction();
    }, [selectedOption, updateStatus, selectedFloor]);

    function openImage() {
        setIsOpenImage(true);
    }
    function backToBlock() {
        onCloseModalPlannedLayout();
        setTimeout(() => {
            onCloseModal()
        }, 200)
    }
    function backToSector() {
        onCloseModalPlannedLayout();
        onCloseModalHouse();
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
    // useEffect(() => {
    //     console.log(similarM, setCurrent);
    // }, [setCurrent]);
    


    return (
        <div className={`kochmon-apartments custom-pop-anim apartments ${isOpen ? 'show' : ''}`} >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className={`modal-body ${isOpenImage ? 'show-img' : ''}`}>
                        <div className="modal-apartments__body-content">
                            {isOpenImage ?
                                <div className="image-full">
                                    <img src={image == undefined || (!image.endsWith('.png') && !image.endsWith('.webp') && !image.endsWith('.jpg') && !image.endsWith('.jpeg')) ? imageFlat0 : image} alt="Apartamets" />
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
                                                    <button type="button" onClick={() => { const newSelectedFloor = selectedFloor + 1; changeSetSelectedFloor(newSelectedFloor >= 16 ? 16 : newSelectedFloor); }}>
                                                        <img src={arrowUp} alt="arrowUp" />
                                                    </button>
                                                    <button type="button" onClick={() => { const newSelectedFloor = selectedFloor - 1; changeSetSelectedFloor(newSelectedFloor <= 1 ? 1 : newSelectedFloor); }}>
                                                        <img src={arrowDown} alt="arrowDown" />
                                                    </button>
                                                </div>
                                                <div className="count">/{maxNumFl}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-row" data-name-row='Площадь'>
                                        <AnimatedText as='h2' className="title-anim title">{areaApartment}<span className="area">м</span></AnimatedText>
                                    </div>
                                    <div className="center-row center-row-city">
                                        <AnimatedText as='div' className="title-anim city">
                                            Kochmon city
                                            <img src={compass} alt="compass" />
                                        </AnimatedText>
                                    </div>
                                    <div className="center-row" data-name-row='Комнаты'>
                                        <AnimatedText as='h2' className="title-anim title">{numRums}</AnimatedText>
                                    </div>
                                </div>
                                <div className={`center-side ${image == undefined ? 'right-side-img' : ''}`}>
                                    <div className="image-side-top">
                                        <AnimatedImage className="image-row">
                                            <button className='loupe-btn' type="button" style={image == undefined || (!image.endsWith('.png') && !image.endsWith('.webp') && !image.endsWith('.jpg') && !image.endsWith('.jpeg')) ? { display: 'none' } : {}} onClick={openImage}><img src={loupeIcon} alt="loupeIcon" className="loupe" /></button>
                                            <img id='targetElement' src={image == undefined || (!image.endsWith('.png') && !image.endsWith('.webp') && !image.endsWith('.jpg') && !image.endsWith('.jpeg')) ? imageFlat0 : image} alt="Apartamets" />
                                            <img src={compass} className='compass-mob' alt="compass" />
                                        </AnimatedImage>

                                        {isAuth && (!apartment || apartment?.status === 'available') && (
                                            <div className="for-admin-buttons">
                                                <button onClick={() => dispatch(setCurrent(currentApartment))} className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#formBuying">Покупка</button>
                                                <button onClick={() => dispatch(setCurrent(currentApartment))} className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#formBooking">Бронь</button>
                                                <button onClick={() => dispatch(setCurrent(currentApartment))} className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#formInstallment">Рассрочка</button>
                                                <button onClick={() => dispatch(setCurrent(currentApartment))} className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#formBarter">Бартер</button>
                                            </div>
                                        )}
                                    </div>
                                    {isAuth ? (

                                        <div className="for-admin-occupied">
                                            {/* <button onClick={someFunction}>обновить</button> */}
                                            {apartment && apartment?.status !== 'cancel' && <button onClick={() => dispatch(setCurrent(currentApartment))} className='occupied-button' type="button" data-bs-toggle="modal" data-bs-target="#formCancellation">Отмена</button>}
                                            {loading ? <p className="occupied-text">Загрузка...</p> : <>
                                                {apartment ? apartmentStateDrawer(apartment) :
                                                    <p className='occupied-text'><span>Статус:</span>Свободна</p>
                                                }
                                                {apartment && apartment?.status === 'cancel' && (
                                                    <p className='occupied-text'>Запрос на отмену отправлен!</p>
                                                )}
                                            </>}
                                            {similarM?.length > 0 && (
                                            <div className="similar" style={{marginTop: '20px'}}>
                                                <h2 style={{fontSize: '1.2rem'}}>Занято: </h2>
                                                    <ul>
                                                    {similarM.map(apartment => (
                                                        <li key={apartment.id}>{apartment.floor} этаж</li> 
                                                    ))}
                                                    </ul>
                                            </div>
                                            )}
                                        </div>
                                    ) : (
                                        <></>
                                        // <p className='occupied-text'>Необходимо войти в систему, чтобы увидеть подробную информацию об этой квартире</p>
                                    )}
                                </div>
                            </div>
                            <div className="apartments__bottom">
                                <div className="bottom-side options">
                                    <img src={imageOptions} alt="imageOptions" className="options-image" />
                                    <div className="bottom-row" onClick={backToSector} >
                                        <a href='#' className="bottom-title">Сектор <img src={switchIcon} alt="switchIcon" /></a>
                                        <AnimatedImage className="image">
                                            <svg width="172" height="138" viewBox="0 0 172 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M60.0892 1L71.5397 23.2686L1.54012 50.8341L1 115.478L113.669 86.8315L150.505 137.53M69.8113 1L84.7187 29.8627H132.789L138.311 82.1381L155.258 80.1293L162.886 113.735L168.055 112.343L171.078 132.654L157.912 133.142L161.2 137.53M145.428 82.9399L147.265 95.4795M147.265 95.4795L132.357 97.7496L124.365 86.6241M147.265 95.4795L145.332 82.1381L127.876 84.2836M127.876 84.2836L124.365 86.6241M127.876 84.2836L137.433 83.1133L135.058 61.6442L109.348 65.6439L124.365 86.6241M2.72839 51.699L14.0709 47.3749L15.7993 58.185L2.72839 60.0227V51.699ZM2.72839 61.3199V76.7782L30.7066 72.5623L28.4381 57.4283L2.72839 61.3199ZM2.72839 81.6427L2.40431 97.3172L33.7313 92.5608L31.4628 77.3187L2.72839 81.6427ZM2.40431 98.5063L2.18826 113.857L11.4783 111.478L9.42588 97.3172L2.40431 98.5063ZM10.6141 97.3172L12.7746 111.046L35.5677 105.317L33.8393 93.9661L10.6141 97.3172ZM35.3517 93.7499L37.08 104.992L67.0027 97.3172L65.8144 89.2097L35.3517 93.7499ZM32.8671 77.1025L35.1356 92.3446L65.5984 87.6963L63.3299 72.6704L32.8671 77.1025ZM32.1109 72.4542L62.5737 67.914L60.3052 52.6719L29.8424 57.2121L32.1109 72.4542ZM15.4752 46.9425L26.2776 42.6185L28.2221 56.023L16.9876 57.7526L15.4752 46.9425ZM27.5739 42.1861L53.2837 32.0247L56.3083 51.807L29.6264 55.8068L27.5739 42.1861ZM54.796 31.4842L71.9718 24.5658L80.1817 40.2403L85.2588 47.483L57.8207 51.699L54.796 31.4842ZM66.8947 87.5882L64.5182 72.3461L92.4964 68.3464L98.8698 67.2654L112.157 85.8586L105.999 87.4801L102.367 82.3331L66.8947 87.5882ZM61.7095 52.4557L63.87 67.6978L89.2557 63.9143L96.3853 62.8333L86.339 48.6721L80.7218 49.4288L61.7095 52.4557ZM67.0027 88.8854L68.191 97.101L80.8298 93.9661L79.8576 86.9396L67.0027 88.8854ZM80.8298 86.7234L81.91 93.6418L104.919 87.8044L102.111 83.5885L80.8298 86.7234ZM133.113 98.6144L157.527 94.939L161.308 111.586L145.212 115.478L133.113 98.6144ZM146.508 82.8318L154.502 81.5346L157.311 93.858L148.453 95.2633L146.508 82.8318ZM85.3668 31.0518H119.586L125.73 40.0087L125.925 41.7609L100.058 45.8615L97.0334 47.6992L91.312 39.6998L85.3668 31.0518ZM134.626 57.2121L106.323 61.5361L97.7896 48.7803L100.49 46.9425L133.005 42.1861L134.626 57.2121ZM120.952 31.0518L126.901 40.0087L127.193 41.6666L132.557 40.9839L131.582 31.0518H120.952ZM149.038 117.246L167.275 113.54L170.103 131.972L159.765 132.167L149.038 117.246Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path fill={selectedSector == 'sector-5' ? '#9D8962' : ''} d="M64.519 72.3463L66.8956 87.5884L102.368 82.3334L106 87.4803L112.158 85.8588L98.8707 67.2656L92.4973 68.3466L64.519 72.3463Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path fill={selectedSector == 'sector-10' ? '#9D8962' : ''} d="M63.8709 67.6975L61.7104 52.4554L80.7227 49.4286L86.3399 48.6719L96.3862 62.833L89.2566 63.914L63.8709 67.6975Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path d="M126.901 40.0096L120.952 31.0527H131.582L132.557 40.9848L127.194 41.6675L126.901 40.0096Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path d="M154.502 81.5361L146.508 82.8333L148.453 95.2648L157.311 93.8595L154.502 81.5361Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path d="M135.058 61.6445L109.349 65.6442L124.365 86.6244L127.876 84.2839L137.433 83.1136L135.058 61.6445Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path d="M145.332 82.1377L127.876 84.2832L124.365 86.6237L132.357 97.7493L147.264 95.4792L145.332 82.1377Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path d="M106.323 61.5364L134.625 57.2124L133.005 42.1865L100.49 46.9429L97.7891 48.7806L106.323 61.5364Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path d="M157.528 94.9395L133.114 98.6149L145.213 115.478L161.309 111.587L157.528 94.9395Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path fill={selectedSector == 'sector-6' ? '#9D8962' : ''} d="M35.1364 92.3451L32.8679 77.103L63.3307 72.6709L65.5992 87.6968L35.1364 92.3451Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path fill={selectedSector == 'sector-7' ? '#9D8962' : ''} d="M2.40552 97.3188L2.72959 81.6443L31.464 77.3203L33.7325 92.5624L2.40552 97.3188Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path fill={selectedSector == 'sector-9' ? '#9D8962' : ''} d="M62.5736 67.914L32.1108 72.4542L29.8423 57.2121L60.3051 52.6719L62.5736 67.914Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path fill={selectedSector == 'sector-8' ? '#9D8962' : ''} d="M2.72827 76.7786V61.3203L28.438 57.4287L30.7065 72.5627L2.72827 76.7786Z" stroke="#9D8962" strokeMiterlimit="22.93" />
                                                <path d="M53.2835 32.0244L27.5737 42.1858L29.6262 55.8064L56.3081 51.8067L53.2835 32.0244Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path d="M26.2773 42.6191L15.4749 46.9431L16.9872 57.7532L28.2217 56.0236L26.2773 42.6191Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path d="M14.0708 47.375L2.72827 51.699V60.0227L15.7992 58.185L14.0708 47.375Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path d="M167.274 113.541L149.038 117.247L159.765 132.168L170.102 131.973L167.274 113.541Z" stroke="#555555" strokeMiterlimit="10" />
                                                <path fill={selectedSector == 'sector-1' ? '#9D8962' : ''} d="M119.587 31.0527H85.3672L91.3123 39.7007L97.0338 47.7002L100.058 45.8625L125.926 41.7618L125.731 40.0096L119.587 31.0527Z" stroke="#9D8962" strokeMiterlimit="10" />

                                                <path d="M107.344 33.8574L109.784 40.1474C109.884 40.4007 109.998 40.5707 110.124 40.6574C110.251 40.7374 110.368 40.7807 110.474 40.7874V40.9874C110.341 40.974 110.178 40.9674 109.984 40.9674C109.791 40.9607 109.598 40.9574 109.404 40.9574C109.144 40.9574 108.901 40.9607 108.674 40.9674C108.448 40.9674 108.264 40.974 108.124 40.9874V40.7874C108.464 40.774 108.681 40.7174 108.774 40.6174C108.868 40.5107 108.848 40.2874 108.714 39.9474L106.854 34.9774L107.014 34.8474L105.274 39.3674C105.168 39.634 105.104 39.8607 105.084 40.0474C105.064 40.2274 105.081 40.3707 105.134 40.4774C105.194 40.584 105.291 40.6607 105.424 40.7074C105.564 40.754 105.738 40.7807 105.944 40.7874V40.9874C105.758 40.974 105.561 40.9674 105.354 40.9674C105.154 40.9607 104.968 40.9574 104.794 40.9574C104.628 40.9574 104.484 40.9607 104.364 40.9674C104.251 40.9674 104.144 40.974 104.044 40.9874V40.7874C104.178 40.754 104.314 40.6774 104.454 40.5574C104.594 40.4307 104.721 40.2174 104.834 39.9174L107.184 33.8574C107.211 33.8574 107.238 33.8574 107.264 33.8574C107.291 33.8574 107.318 33.8574 107.344 33.8574ZM108.564 38.1074V38.3074H105.584L105.684 38.1074H108.564Z" fill="white" />
                                                <path d="M117.622 48.3956C118.022 48.3956 118.372 48.4589 118.672 48.5856C118.972 48.7056 119.206 48.8789 119.372 49.1056C119.539 49.3256 119.619 49.5923 119.612 49.9056C119.612 50.1856 119.549 50.4356 119.422 50.6556C119.296 50.8756 119.129 51.0656 118.922 51.2256C118.722 51.3856 118.502 51.5189 118.262 51.6256C118.029 51.7323 117.802 51.8123 117.582 51.8656C117.869 51.8723 118.156 51.9156 118.442 51.9956C118.729 52.0689 118.989 52.1823 119.222 52.3356C119.456 52.4889 119.642 52.6789 119.782 52.9056C119.922 53.1323 119.992 53.3989 119.992 53.7056C119.992 54.0389 119.916 54.3323 119.762 54.5856C119.616 54.8389 119.412 55.0523 119.152 55.2256C118.892 55.3989 118.599 55.5289 118.272 55.6156C117.946 55.7089 117.602 55.7556 117.242 55.7556C116.876 55.7556 116.572 55.7156 116.332 55.6356C116.092 55.5623 115.902 55.4823 115.762 55.3956C115.629 55.3089 115.516 55.2056 115.422 55.0856C115.336 54.9656 115.292 54.8323 115.292 54.6856C115.292 54.5323 115.342 54.4056 115.442 54.3056C115.542 54.2056 115.669 54.1556 115.822 54.1556C115.976 54.1556 116.106 54.2023 116.212 54.2956C116.319 54.3889 116.372 54.5223 116.372 54.6956C116.372 54.8356 116.332 54.9489 116.252 55.0356C116.179 55.1223 116.079 55.1789 115.952 55.2056C116.026 55.3056 116.192 55.3956 116.452 55.4756C116.712 55.5489 116.986 55.5856 117.272 55.5856C117.866 55.5856 118.302 55.4156 118.582 55.0756C118.862 54.7356 119.002 54.3123 119.002 53.8056C119.002 53.4589 118.942 53.1489 118.822 52.8756C118.702 52.5956 118.522 52.3756 118.282 52.2156C118.049 52.0489 117.762 51.9623 117.422 51.9556C117.356 51.9889 117.286 52.0189 117.212 52.0456C117.146 52.0723 117.072 52.0856 116.992 52.0856C116.939 52.0856 116.889 52.0723 116.842 52.0456C116.802 52.0189 116.782 51.9756 116.782 51.9156C116.782 51.8089 116.852 51.7556 116.992 51.7556C117.072 51.7556 117.149 51.7623 117.222 51.7756C117.296 51.7889 117.366 51.8023 117.432 51.8156C117.739 51.7156 117.976 51.5856 118.142 51.4256C118.316 51.2589 118.436 51.0589 118.502 50.8256C118.576 50.5923 118.612 50.3189 118.612 50.0056C118.612 49.5523 118.529 49.2023 118.362 48.9556C118.196 48.7089 117.909 48.5856 117.502 48.5856C117.162 48.5856 116.879 48.6789 116.652 48.8656C116.426 49.0523 116.249 49.2923 116.122 49.5856C116.002 49.8789 115.932 50.1856 115.912 50.5056H115.682C115.682 50.0856 115.679 49.7489 115.672 49.4956C115.672 49.2356 115.669 49.0289 115.662 48.8756C115.656 48.7156 115.646 48.5789 115.632 48.4656H115.862C115.882 48.6056 115.906 48.7156 115.932 48.7956C115.966 48.8689 116.019 48.9056 116.092 48.9056C116.166 48.9056 116.276 48.8589 116.422 48.7656C116.509 48.7123 116.599 48.6589 116.692 48.6056C116.792 48.5456 116.916 48.4956 117.062 48.4556C117.209 48.4156 117.396 48.3956 117.622 48.3956Z" fill="white" />
                                                <path d="M125.326 69.3819V69.5819C125.1 69.5886 124.926 69.6152 124.806 69.6619C124.693 69.7019 124.616 69.7819 124.576 69.9019C124.536 70.0152 124.516 70.1952 124.516 70.4419V75.4019C124.516 75.6419 124.536 75.8219 124.576 75.9419C124.616 76.0619 124.693 76.1419 124.806 76.1819C124.926 76.2219 125.1 76.2486 125.326 76.2619V76.4619C125.173 76.4486 124.98 76.4419 124.746 76.4419C124.52 76.4352 124.29 76.4319 124.056 76.4319C123.796 76.4319 123.553 76.4352 123.326 76.4419C123.1 76.4419 122.916 76.4486 122.776 76.4619V76.2619C123.003 76.2486 123.173 76.2219 123.286 76.1819C123.406 76.1419 123.486 76.0619 123.526 75.9419C123.566 75.8219 123.586 75.6419 123.586 75.4019V70.4419C123.586 70.1952 123.566 70.0152 123.526 69.9019C123.486 69.7819 123.406 69.7019 123.286 69.6619C123.173 69.6152 123.003 69.5886 122.776 69.5819V69.3819C122.916 69.3886 123.1 69.3952 123.326 69.4019C123.553 69.4086 123.796 69.4119 124.056 69.4119C124.29 69.4119 124.52 69.4086 124.746 69.4019C124.98 69.3952 125.173 69.3886 125.326 69.3819ZM128.136 70.0419C128.136 70.0419 128.133 70.0786 128.126 70.1519C128.12 70.2186 128.113 70.2886 128.106 70.3619C128.106 70.4352 128.106 70.4719 128.106 70.4719L124.106 76.1419L124.136 75.7119L128.136 70.0419ZM129.706 69.3819V69.5819C129.48 69.5886 129.306 69.6152 129.186 69.6619C129.073 69.7019 128.996 69.7819 128.956 69.9019C128.916 70.0152 128.896 70.1952 128.896 70.4419V75.4019C128.896 75.6419 128.916 75.8219 128.956 75.9419C128.996 76.0619 129.073 76.1419 129.186 76.1819C129.306 76.2219 129.48 76.2486 129.706 76.2619V76.4619C129.566 76.4486 129.383 76.4419 129.156 76.4419C128.93 76.4352 128.686 76.4319 128.426 76.4319C128.2 76.4319 127.97 76.4352 127.736 76.4419C127.503 76.4419 127.31 76.4486 127.156 76.4619V76.2619C127.383 76.2486 127.553 76.2219 127.666 76.1819C127.786 76.1419 127.866 76.0619 127.906 75.9419C127.946 75.8219 127.966 75.6419 127.966 75.4019V70.4419C127.966 70.1952 127.946 70.0152 127.906 69.9019C127.866 69.7819 127.786 69.7019 127.666 69.6619C127.553 69.6152 127.383 69.5886 127.156 69.5819V69.3819C127.31 69.3886 127.503 69.3952 127.736 69.4019C127.97 69.4086 128.2 69.4119 128.426 69.4119C128.686 69.4119 128.93 69.4086 129.156 69.4019C129.383 69.3952 129.566 69.3886 129.706 69.3819Z" fill="white" />
                                                <path d="M137.077 86.1798V86.3798C136.851 86.3865 136.677 86.4132 136.557 86.4598C136.444 86.4998 136.367 86.5798 136.327 86.6998C136.287 86.8132 136.267 86.9932 136.267 87.2398V92.1998C136.267 92.4398 136.287 92.6198 136.327 92.7398C136.367 92.8598 136.444 92.9398 136.557 92.9798C136.677 93.0198 136.851 93.0465 137.077 93.0598V93.2598C136.924 93.2465 136.731 93.2398 136.497 93.2398C136.271 93.2332 136.041 93.2298 135.807 93.2298C135.547 93.2298 135.304 93.2332 135.077 93.2398C134.851 93.2398 134.667 93.2465 134.527 93.2598V93.0598C134.754 93.0465 134.924 93.0198 135.037 92.9798C135.157 92.9398 135.237 92.8598 135.277 92.7398C135.317 92.6198 135.337 92.4398 135.337 92.1998V87.2398C135.337 86.9932 135.317 86.8132 135.277 86.6998C135.237 86.5798 135.157 86.4998 135.037 86.4598C134.924 86.4132 134.754 86.3865 134.527 86.3798V86.1798C134.667 86.1865 134.851 86.1932 135.077 86.1998C135.304 86.2065 135.547 86.2098 135.807 86.2098C136.041 86.2098 136.271 86.2065 136.497 86.1998C136.731 86.1932 136.924 86.1865 137.077 86.1798ZM136.967 89.4998C137.321 89.4998 137.651 89.5365 137.957 89.6098C138.271 89.6832 138.537 89.8232 138.757 90.0298C138.977 90.2365 139.134 90.5432 139.227 90.9498L139.517 92.2098C139.591 92.5165 139.657 92.7332 139.717 92.8598C139.777 92.9798 139.881 93.0365 140.027 93.0298C140.141 93.0232 140.234 92.9865 140.307 92.9198C140.387 92.8532 140.471 92.7632 140.557 92.6498L140.707 92.7598C140.581 92.9465 140.441 93.0998 140.287 93.2198C140.134 93.3398 139.917 93.3998 139.637 93.3998C139.404 93.3998 139.191 93.3332 138.997 93.1998C138.811 93.0598 138.667 92.7665 138.567 92.3198L138.287 91.0798C138.227 90.7998 138.157 90.5565 138.077 90.3498C137.997 90.1432 137.871 89.9832 137.697 89.8698C137.524 89.7498 137.267 89.6898 136.927 89.6898H136.077V89.4998H136.967ZM136.267 89.6898V89.4998C136.547 89.4932 136.781 89.4365 136.967 89.3298C137.161 89.2165 137.321 89.0798 137.447 88.9198L138.407 87.6998C138.627 87.4198 138.777 87.1832 138.857 86.9898C138.937 86.7965 138.934 86.6498 138.847 86.5498C138.761 86.4432 138.577 86.3865 138.297 86.3798V86.1798C138.424 86.1865 138.554 86.1932 138.687 86.1998C138.821 86.1998 138.951 86.2032 139.077 86.2098C139.211 86.2098 139.334 86.2098 139.447 86.2098C139.621 86.2098 139.781 86.2065 139.927 86.1998C140.074 86.1932 140.197 86.1865 140.297 86.1798V86.3798C140.091 86.4065 139.891 86.4765 139.697 86.5898C139.504 86.6965 139.311 86.8698 139.117 87.1098L137.087 89.6898H136.267Z" fill="white" />
                                                <path d="M79.1171 55.1677V55.3677C78.8905 55.3743 78.7171 55.401 78.5971 55.4477C78.4838 55.4877 78.4071 55.5677 78.3671 55.6877C78.3271 55.801 78.3071 55.981 78.3071 56.2277V61.1877C78.3071 61.4277 78.3271 61.611 78.3671 61.7377C78.4071 61.8577 78.4838 61.941 78.5971 61.9877C78.7171 62.0277 78.8905 62.0477 79.1171 62.0477H79.4271C79.4005 62.281 79.3805 62.5077 79.3671 62.7277C79.3605 62.9477 79.3571 63.1143 79.3571 63.2277C79.3571 63.3477 79.3605 63.461 79.3671 63.5677C79.3738 63.681 79.3805 63.7743 79.3871 63.8477H79.1571C79.1171 63.4543 79.0605 63.141 78.9871 62.9077C78.9138 62.6743 78.7871 62.5043 78.6071 62.3977C78.4338 62.2977 78.1705 62.2477 77.8171 62.2477H74.9671C74.6138 62.2477 74.3471 62.2977 74.1671 62.3977C73.9938 62.5043 73.8705 62.6743 73.7971 62.9077C73.7305 63.141 73.6738 63.4543 73.6271 63.8477H73.3971C73.4105 63.7743 73.4171 63.681 73.4171 63.5677C73.4238 63.461 73.4271 63.3477 73.4271 63.2277C73.4271 63.1143 73.4205 62.9477 73.4071 62.7277C73.4005 62.5077 73.3838 62.281 73.3571 62.0477H76.5671C76.7938 62.0477 76.9638 62.0277 77.0771 61.9877C77.1971 61.941 77.2771 61.8577 77.3171 61.7377C77.3571 61.611 77.3771 61.4277 77.3771 61.1877V56.2277C77.3771 55.981 77.3571 55.7977 77.3171 55.6777C77.2771 55.5577 77.1971 55.4777 77.0771 55.4377C76.9638 55.391 76.7938 55.3677 76.5671 55.3677H76.4371C76.2038 55.3677 76.0338 55.391 75.9271 55.4377C75.8205 55.4777 75.7505 55.561 75.7171 55.6877C75.6838 55.8077 75.6538 55.9877 75.6271 56.2277C75.5938 56.6077 75.5605 57.0177 75.5271 57.4577C75.5005 57.8977 75.4638 58.3443 75.4171 58.7977C75.3705 59.2443 75.3038 59.6743 75.2171 60.0877C75.1371 60.4943 75.0271 60.861 74.8871 61.1877C74.7471 61.5077 74.5671 61.7643 74.3471 61.9577C74.1271 62.1443 73.8571 62.2377 73.5371 62.2377V62.0477C73.8438 62.0477 74.1005 61.9343 74.3071 61.7077C74.5138 61.4743 74.6805 61.161 74.8071 60.7677C74.9405 60.3743 75.0438 59.9277 75.1171 59.4277C75.1905 58.921 75.2471 58.3943 75.2871 57.8477C75.3271 57.301 75.3638 56.761 75.3971 56.2277C75.4105 55.9943 75.3971 55.8177 75.3571 55.6977C75.3238 55.5777 75.2471 55.4943 75.1271 55.4477C75.0071 55.401 74.8271 55.3743 74.5871 55.3677V55.1677C74.7271 55.1743 74.8938 55.181 75.0871 55.1877C75.2805 55.1943 75.4571 55.1977 75.6171 55.1977C75.7705 55.1977 75.9171 55.1943 76.0571 55.1877C76.2038 55.1743 76.3505 55.1677 76.4971 55.1677C76.7505 55.1677 76.9805 55.1743 77.1871 55.1877C77.3938 55.1943 77.6405 55.1977 77.9271 55.1977C78.0605 55.1977 78.2005 55.1977 78.3471 55.1977C78.4938 55.191 78.6338 55.1877 78.7671 55.1877C78.9071 55.181 79.0238 55.1743 79.1171 55.1677Z" fill="white" />
                                                <path d="M85.4899 74.2807C85.4632 74.514 85.4432 74.7407 85.4299 74.9607C85.4232 75.1807 85.4199 75.3473 85.4199 75.4607C85.4199 75.5807 85.4232 75.6973 85.4299 75.8107C85.4365 75.9173 85.4432 76.0073 85.4499 76.0807H85.2199C85.1799 75.6873 85.1232 75.3773 85.0499 75.1507C84.9765 74.9173 84.8499 74.754 84.6699 74.6607C84.4965 74.5607 84.2332 74.5107 83.8799 74.5107H83.3499C83.1232 74.5107 82.9499 74.5307 82.8299 74.5707C82.7165 74.604 82.6399 74.6807 82.5999 74.8007C82.5599 74.914 82.5399 75.094 82.5399 75.3407V80.3007C82.5399 80.534 82.5532 80.714 82.5799 80.8407C82.6132 80.9673 82.6765 81.054 82.7699 81.1007C82.8699 81.1407 83.0165 81.1607 83.2099 81.1607C83.6699 81.1607 84.0165 81.0773 84.2499 80.9107C84.4899 80.7373 84.6532 80.5073 84.7399 80.2207C84.8265 79.9273 84.8699 79.6073 84.8699 79.2607C84.8699 78.8207 84.8132 78.4607 84.6999 78.1807C84.5932 77.894 84.4099 77.684 84.1499 77.5507C83.8965 77.4107 83.5532 77.3407 83.1199 77.3407C83.0465 77.3407 82.9265 77.344 82.7599 77.3507C82.5999 77.3507 82.4432 77.354 82.2899 77.3607C82.1365 77.3607 82.0299 77.3607 81.9699 77.3607L81.9499 77.1707C82.2632 77.1707 82.5632 77.1673 82.8499 77.1607C83.1365 77.154 83.3399 77.1507 83.4599 77.1507C83.8599 77.1507 84.2099 77.204 84.5099 77.3107C84.8165 77.4107 85.0699 77.554 85.2699 77.7407C85.4699 77.9273 85.6199 78.1507 85.7199 78.4107C85.8199 78.664 85.8699 78.944 85.8699 79.2507C85.8699 79.5107 85.8299 79.7673 85.7499 80.0207C85.6699 80.2673 85.5299 80.494 85.3299 80.7007C85.1365 80.9007 84.8699 81.0607 84.5299 81.1807C84.1899 81.3007 83.7599 81.3607 83.2399 81.3607C83.0665 81.3607 82.8932 81.3573 82.7199 81.3507C82.5532 81.3373 82.3065 81.3307 81.9799 81.3307C81.7932 81.3307 81.5832 81.334 81.3499 81.3407C81.1232 81.3407 80.9399 81.3473 80.7999 81.3607V81.1607C81.0265 81.1473 81.1965 81.1207 81.3099 81.0807C81.4299 81.0407 81.5099 80.9607 81.5499 80.8407C81.5899 80.7207 81.6099 80.5407 81.6099 80.3007V75.3407C81.6099 75.094 81.5899 74.914 81.5499 74.8007C81.5099 74.6807 81.4299 74.6007 81.3099 74.5607C81.1965 74.514 81.0265 74.4873 80.7999 74.4807V74.2807C81.0465 74.2873 81.3065 74.294 81.5799 74.3007C81.8532 74.3007 82.1232 74.304 82.3899 74.3107C82.6565 74.3107 82.9032 74.3107 83.1299 74.3107C83.3632 74.3107 83.5532 74.3107 83.6999 74.3107C83.9599 74.3107 84.2565 74.3107 84.5899 74.3107C84.9232 74.304 85.2232 74.294 85.4899 74.2807Z" fill="white" />
                                                <path d="M48.7977 59.6534C48.771 59.8867 48.751 60.1134 48.7377 60.3334C48.731 60.5534 48.7277 60.7201 48.7277 60.8334C48.7277 60.9534 48.731 61.0701 48.7377 61.1834C48.7444 61.2901 48.751 61.3801 48.7577 61.4534H48.5277C48.4877 61.0601 48.431 60.7501 48.3577 60.5234C48.2844 60.2901 48.1577 60.1267 47.9777 60.0334C47.8044 59.9334 47.541 59.8834 47.1877 59.8834H46.3577C46.131 59.8834 45.9577 59.9034 45.8377 59.9434C45.7244 59.9767 45.6477 60.0534 45.6077 60.1734C45.5677 60.2867 45.5477 60.4667 45.5477 60.7134V65.6734C45.5477 65.9134 45.5677 66.0934 45.6077 66.2134C45.6477 66.3334 45.7244 66.4134 45.8377 66.4534C45.9577 66.4867 46.131 66.5034 46.3577 66.5034H47.0877C47.5077 66.5034 47.8244 66.4467 48.0377 66.3334C48.2577 66.2201 48.4144 66.0367 48.5077 65.7834C48.6077 65.5234 48.681 65.1734 48.7277 64.7334H48.9577C48.9377 64.9134 48.9277 65.1534 48.9277 65.4534C48.9277 65.5801 48.931 65.7634 48.9377 66.0034C48.951 66.2367 48.971 66.4801 48.9977 66.7334C48.6577 66.7201 48.2744 66.7134 47.8477 66.7134C47.421 66.7067 47.041 66.7034 46.7077 66.7034C46.561 66.7034 46.371 66.7034 46.1377 66.7034C45.911 66.7034 45.6644 66.7067 45.3977 66.7134C45.131 66.7134 44.861 66.7167 44.5877 66.7234C44.3144 66.7234 44.0544 66.7267 43.8077 66.7334V66.5334C44.0344 66.5201 44.2044 66.4934 44.3177 66.4534C44.4377 66.4134 44.5177 66.3334 44.5577 66.2134C44.5977 66.0934 44.6177 65.9134 44.6177 65.6734V60.7134C44.6177 60.4667 44.5977 60.2867 44.5577 60.1734C44.5177 60.0534 44.4377 59.9734 44.3177 59.9334C44.2044 59.8867 44.0344 59.8601 43.8077 59.8534V59.6534C44.0544 59.6601 44.3144 59.6667 44.5877 59.6734C44.861 59.6734 45.131 59.6767 45.3977 59.6834C45.6644 59.6834 45.911 59.6834 46.1377 59.6834C46.371 59.6834 46.561 59.6834 46.7077 59.6834C47.0144 59.6834 47.361 59.6834 47.7477 59.6834C48.141 59.6767 48.491 59.6667 48.7977 59.6534ZM47.0777 63.0734C47.0777 63.0734 47.0777 63.1067 47.0777 63.1734C47.0777 63.2401 47.0777 63.2734 47.0777 63.2734H45.2477C45.2477 63.2734 45.2477 63.2401 45.2477 63.1734C45.2477 63.1067 45.2477 63.0734 45.2477 63.0734H47.0777ZM47.3677 61.7534C47.341 62.1334 47.3277 62.4234 47.3277 62.6234C47.3344 62.8234 47.3377 63.0067 47.3377 63.1734C47.3377 63.3401 47.341 63.5234 47.3477 63.7234C47.3544 63.9234 47.371 64.2134 47.3977 64.5934H47.1677C47.141 64.3801 47.1077 64.1734 47.0677 63.9734C47.0344 63.7667 46.9544 63.6001 46.8277 63.4734C46.7077 63.3401 46.501 63.2734 46.2077 63.2734V63.0734C46.4277 63.0734 46.5944 63.0301 46.7077 62.9434C46.8277 62.8501 46.9144 62.7334 46.9677 62.5934C47.021 62.4534 47.0577 62.3101 47.0777 62.1634C47.0977 62.0101 47.1177 61.8734 47.1377 61.7534H47.3677Z" fill="white" />
                                                <path d="M17.621 67.0684C17.9743 67.0684 18.3043 67.105 18.611 67.1784C18.9243 67.2517 19.191 67.3917 19.411 67.5984C19.631 67.805 19.7877 68.1117 19.881 68.5184L20.171 69.7784C20.2443 70.085 20.311 70.3017 20.371 70.4284C20.431 70.5484 20.5343 70.605 20.681 70.5984C20.7943 70.5917 20.8877 70.555 20.961 70.4884C21.041 70.4217 21.1243 70.3317 21.211 70.2184L21.361 70.3284C21.2343 70.515 21.0943 70.6684 20.941 70.7884C20.7877 70.9084 20.571 70.9684 20.291 70.9684C20.0577 70.9684 19.8443 70.9017 19.651 70.7684C19.4643 70.6284 19.321 70.335 19.221 69.8884L18.941 68.6484C18.881 68.3684 18.811 68.125 18.731 67.9184C18.651 67.7117 18.5243 67.5517 18.351 67.4384C18.1777 67.3184 17.921 67.2584 17.581 67.2584H16.731V67.0684H17.621ZM20.951 63.7484V63.9484C20.7443 63.975 20.5443 64.045 20.351 64.1584C20.1577 64.265 19.9643 64.4384 19.771 64.6784L17.741 67.2584H16.921V67.0684C17.1077 67.0617 17.2743 67.035 17.421 66.9884C17.5677 66.935 17.6977 66.865 17.811 66.7784C17.9243 66.6917 18.021 66.595 18.101 66.4884L19.061 65.2684C19.281 64.9884 19.431 64.7517 19.511 64.5584C19.591 64.365 19.5877 64.2184 19.501 64.1184C19.4143 64.0117 19.231 63.955 18.951 63.9484V63.7484C19.0777 63.755 19.2077 63.7617 19.341 63.7684C19.4743 63.7684 19.6043 63.7717 19.731 63.7784C19.8643 63.7784 19.9877 63.7784 20.101 63.7784C20.2743 63.7784 20.4343 63.775 20.581 63.7684C20.7277 63.7617 20.851 63.755 20.951 63.7484ZM17.731 63.7484V63.9484C17.5043 63.955 17.331 63.9817 17.211 64.0284C17.0977 64.0684 17.021 64.1484 16.981 64.2684C16.941 64.3817 16.921 64.5617 16.921 64.8084V69.7684C16.921 70.0084 16.941 70.1884 16.981 70.3084C17.021 70.4284 17.0977 70.5084 17.211 70.5484C17.331 70.5884 17.5043 70.615 17.731 70.6284V70.8284C17.591 70.815 17.4077 70.8084 17.181 70.8084C16.9543 70.8017 16.711 70.7984 16.451 70.7984C16.2243 70.7984 15.9943 70.8017 15.761 70.8084C15.5277 70.8084 15.3343 70.815 15.181 70.8284V70.6284C15.4077 70.615 15.5777 70.5884 15.691 70.5484C15.811 70.5084 15.891 70.4284 15.931 70.3084C15.971 70.1884 15.991 70.0084 15.991 69.7684V64.8084C15.991 64.5617 15.971 64.3817 15.931 64.2684C15.891 64.1484 15.811 64.0684 15.691 64.0284C15.5777 63.9817 15.4077 63.955 15.181 63.9484V63.7484C15.3343 63.755 15.5277 63.7617 15.761 63.7684C15.9943 63.775 16.2243 63.7784 16.451 63.7784C16.711 63.7784 16.9543 63.775 17.181 63.7684C17.4077 63.7617 17.591 63.755 17.731 63.7484ZM13.961 63.7484V63.9484C13.681 63.955 13.4977 64.0117 13.411 64.1184C13.3243 64.2184 13.321 64.365 13.401 64.5584C13.481 64.7517 13.631 64.9884 13.851 65.2684L14.811 66.4884C14.8977 66.595 14.9943 66.6917 15.101 66.7784C15.2143 66.865 15.3443 66.935 15.491 66.9884C15.6377 67.035 15.8043 67.0617 15.991 67.0684V67.2584H15.171L13.141 64.6784C12.9543 64.4384 12.761 64.265 12.561 64.1584C12.3677 64.045 12.1677 63.975 11.961 63.9484V63.7484C12.061 63.755 12.1843 63.7617 12.331 63.7684C12.4843 63.775 12.6443 63.7784 12.811 63.7784C12.931 63.7784 13.0543 63.7784 13.181 63.7784C13.3077 63.7717 13.4377 63.7684 13.571 63.7684C13.7043 63.7617 13.8343 63.755 13.961 63.7484ZM16.181 67.0684V67.2584H15.331C14.991 67.2584 14.7343 67.3184 14.561 67.4384C14.3877 67.5517 14.261 67.7117 14.181 67.9184C14.1077 68.125 14.0377 68.3684 13.971 68.6484L13.691 69.8884C13.591 70.335 13.4443 70.6284 13.251 70.7684C13.0643 70.9017 12.8543 70.9684 12.621 70.9684C12.341 70.9684 12.1243 70.9084 11.971 70.7884C11.8243 70.6684 11.6843 70.515 11.551 70.3284L11.701 70.2184C11.7943 70.3317 11.8777 70.4217 11.951 70.4884C12.0243 70.555 12.1177 70.5917 12.231 70.5984C12.3777 70.605 12.481 70.5484 12.541 70.4284C12.6077 70.3017 12.6743 70.085 12.741 69.7784L13.031 68.5184C13.1243 68.1117 13.281 67.805 13.501 67.5984C13.721 67.3917 13.9843 67.2517 14.291 67.1784C14.6043 67.105 14.9377 67.0684 15.291 67.0684H16.181Z" fill="white" />
                                                <path d="M21.9963 83.8376C21.9697 84.0909 21.9497 84.3376 21.9363 84.5776C21.9297 84.8109 21.9263 84.9909 21.9263 85.1176C21.9263 85.2776 21.9297 85.4276 21.9363 85.5676C21.943 85.7076 21.9497 85.8309 21.9563 85.9376H21.7263C21.6797 85.4709 21.6163 85.1043 21.5363 84.8376C21.4563 84.5643 21.3163 84.3676 21.1163 84.2476C20.9163 84.1276 20.6063 84.0676 20.1863 84.0676H19.9563C19.7297 84.0676 19.5563 84.0876 19.4363 84.1276C19.323 84.1609 19.2463 84.2376 19.2063 84.3576C19.1663 84.4709 19.1463 84.6509 19.1463 84.8976V89.8576C19.1463 90.0976 19.1697 90.2776 19.2163 90.3976C19.2697 90.5176 19.3697 90.5976 19.5163 90.6376C19.663 90.6776 19.8763 90.7043 20.1563 90.7176V90.9176C19.983 90.9043 19.763 90.8976 19.4963 90.8976C19.2297 90.8909 18.9597 90.8876 18.6863 90.8876C18.4263 90.8876 18.183 90.8909 17.9563 90.8976C17.7297 90.8976 17.5463 90.9043 17.4063 90.9176V90.7176C17.633 90.7043 17.803 90.6776 17.9163 90.6376C18.0363 90.5976 18.1163 90.5176 18.1563 90.3976C18.1963 90.2776 18.2163 90.0976 18.2163 89.8576V84.8976C18.2163 84.6509 18.1963 84.4709 18.1563 84.3576C18.1163 84.2376 18.0363 84.1576 17.9163 84.1176C17.803 84.0709 17.633 84.0443 17.4063 84.0376V83.8376C17.653 83.8443 17.913 83.8509 18.1863 83.8576C18.4597 83.8576 18.7297 83.8609 18.9963 83.8676C19.263 83.8676 19.5097 83.8676 19.7363 83.8676C19.9697 83.8676 20.1597 83.8676 20.3063 83.8676C20.553 83.8676 20.833 83.8676 21.1463 83.8676C21.4663 83.8609 21.7497 83.8509 21.9963 83.8376Z" fill="white" />
                                                <path d="M46.2511 79.5477C46.3911 79.5544 46.5744 79.561 46.8011 79.5677C47.0277 79.5744 47.2511 79.5777 47.4711 79.5777C47.7844 79.5777 48.0844 79.5744 48.3711 79.5677C48.6577 79.561 48.8611 79.5577 48.9811 79.5577C49.6811 79.5577 50.2077 79.7044 50.5611 79.9977C50.9144 80.291 51.0911 80.6677 51.0911 81.1277C51.0911 81.361 51.0411 81.591 50.9411 81.8177C50.8477 82.0377 50.6877 82.241 50.4611 82.4277C50.2411 82.6077 49.9444 82.7544 49.5711 82.8677V82.8877C50.0977 82.9544 50.5077 83.081 50.8011 83.2677C51.1011 83.4477 51.3111 83.661 51.4311 83.9077C51.5511 84.1544 51.6111 84.4144 51.6111 84.6877C51.6111 85.0677 51.5144 85.4044 51.3211 85.6977C51.1344 85.9844 50.8611 86.211 50.5011 86.3777C50.1411 86.5444 49.7111 86.6277 49.2111 86.6277C49.0644 86.6277 48.8444 86.6244 48.5511 86.6177C48.2577 86.6044 47.9044 86.5977 47.4911 86.5977C47.2577 86.5977 47.0277 86.601 46.8011 86.6077C46.5744 86.6077 46.3911 86.6144 46.2511 86.6277V86.4277C46.4777 86.4144 46.6477 86.3877 46.7611 86.3477C46.8811 86.3077 46.9611 86.2277 47.0011 86.1077C47.0411 85.9877 47.0611 85.8077 47.0611 85.5677V80.6077C47.0611 80.361 47.0411 80.181 47.0011 80.0677C46.9611 79.9477 46.8811 79.8677 46.7611 79.8277C46.6477 79.781 46.4777 79.7544 46.2511 79.7477V79.5477ZM48.7311 79.7477C48.4244 79.7477 48.2244 79.8044 48.1311 79.9177C48.0377 80.031 47.9911 80.261 47.9911 80.6077V85.5677C47.9911 85.801 48.0111 85.9777 48.0511 86.0977C48.0911 86.2177 48.1644 86.2977 48.2711 86.3377C48.3777 86.3777 48.5344 86.3977 48.7411 86.3977C49.3944 86.3977 49.8677 86.2477 50.1611 85.9477C50.4611 85.641 50.6111 85.2077 50.6111 84.6477C50.6111 84.1344 50.4711 83.7377 50.1911 83.4577C49.9177 83.1777 49.4644 83.0377 48.8311 83.0377H47.8011C47.8011 83.0377 47.8011 83.011 47.8011 82.9577C47.8011 82.8977 47.8011 82.8677 47.8011 82.8677H48.6611C49.0544 82.8677 49.3577 82.7944 49.5711 82.6477C49.7844 82.4944 49.9311 82.2944 50.0111 82.0477C50.0911 81.7944 50.1311 81.5244 50.1311 81.2377C50.1311 80.7444 50.0211 80.3744 49.8011 80.1277C49.5877 79.8744 49.2311 79.7477 48.7311 79.7477Z" fill="white" />


                                            </svg>

                                        </AnimatedImage>
                                    </div>
                                    <div className="bottom-row" onClick={backToBlock} >
                                        <a href='#' className="bottom-title">Блок <img src={switchIcon} alt="switchIcon" /></a>
                                        <AnimatedImage className="image">
                                            {getSector}
                                        </AnimatedImage>
                                    </div>
                                    <div className="bottom-row" onClick={onCloseModal}>
                                        <a href='#' className="bottom-title">Выберите квартиру <img src={switchIcon} alt="switchIcon" /></a>
                                        <AnimatedImage className="image">
                                            {getFlat}
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

export default KochmonApartments;