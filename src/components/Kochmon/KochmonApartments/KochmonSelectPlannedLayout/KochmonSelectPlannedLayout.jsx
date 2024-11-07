import { useState, useEffect } from 'react';
import './KochmonSelectPlannedLayout.css';

import backIcon from '../../../../assets/apartment/backIcon.svg';

import compassPlannedLayout from '../../../../assets/apartment/SelectPlannedLayout/compassPlannedLayout.svg';
import AnimatedText from '../../../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../../../UI/AnimatedImage/AnimatedImage';

const module1Promise = import('../KochmonLayoutAp/getKochmonSec1Layout.jsx');
const module5Promise = import('../KochmonLayoutAp/getKochmonSec5Layout.jsx');
const module6Promise = import('../KochmonLayoutAp/getKochmonSec6Layout.jsx');
const module7Promise = import('../KochmonLayoutAp/getKochmonSec7Layout.jsx');
const module8Promise = import('../KochmonLayoutAp/getKochmonSec8Layout.jsx');
const module9Promise = import('../KochmonLayoutAp/getKochmonSec9Layout.jsx');
const module10Promise = import('../KochmonLayoutAp/getKochmonSec10Layout.jsx');

// eslint-disable-next-line react/prop-types
function KochmonSelectPlannedLayout({ setSelectedFloor, selectedFloor, setMaxNumFl, selectedBlock, selectedSector, setSelectedOption, isOpen, onCloseModal, onOpenApartmentsModal }) {

    const [svg, setSvg] = useState(null);
    const [textB, setTextB] = useState(null);
    const [disFloor1, setDisFloor1] = useState(null);
    const [disFloor2, setDisFloor2] = useState(null);
    const [disFloor3, setDisFloor3] = useState(null);
    const [disFloor4, setDisFloor4] = useState(null);
    const [disFloor5, setDisFloor5] = useState(null);
    const [disFloor6, setDisFloor6] = useState(null);
    const [disFloor7, setDisFloor7] = useState(null);
    const [disFloor8, setDisFloor8] = useState(null);
    const [disFloor9, setDisFloor9] = useState(null);
    const [disFloor10, setDisFloor10] = useState(null);
    const [disFloor11, setDisFloor11] = useState(null);
    const [disFloor12, setDisFloor12] = useState(null);
    const [disFloor13, setDisFloor13] = useState(null);
    const [disFloor14, setDisFloor14] = useState(null);
    const [disFloor15, setDisFloor15] = useState(null);
    const [disFloor16, setDisFloor16] = useState(null);
    const [disFloor17, setDisFloor17] = useState(null);
    const [disFloor18, setDisFloor18] = useState(null);




    const handlePathClick = (pathId) => {
        setSelectedFloor(pathId);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onOpenApartmentsModal();
    };

    useEffect(() => {
        const updateSelectedFloor = () => {
            switch (selectedBlock) {

                case 'kochmonBlock10-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock10-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock10-3':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock10-4':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock10-5':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock10-6':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock10-7':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock10-8':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;
                case 'kochmonBlock10-9':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;
                case 'kochmonBlock10-10':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;

                case 'kochmonBlock9-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock9-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock9-3':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-4':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-5':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-6':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock9-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock9-8':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-9':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-10':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-11':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock9-12':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;

                case 'kochmonBlock8-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-3':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-4':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-5':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-6':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-8':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-9':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock8-10':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;

                case 'kochmonBlock7-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock7-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock7-3':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock7-4':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock7-5':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock7-6':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock7-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock7-8':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock7-9':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock7-10':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;

                case 'kochmonBlock6-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock6-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock6-3':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-4':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-5':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-6':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-8':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock6-9':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock6-10':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-11':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock6-12':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;

                case 'kochmonBlock5-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock5-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock5-3':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-4':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-5':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-6':
                    if (selectedFloor < 3) {
                        setSelectedFloor(3);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-8':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-9':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-10':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-11':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-12':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock5-13':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;
                case 'kochmonBlock5-14':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;
                case 'kochmonBlock5-15':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 18) {
                        setSelectedFloor(18);
                    }
                    setMaxNumFl(18);
                    break;

                case 'kochmonBlock1-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 12) {
                        setSelectedFloor(12);
                    }
                    setMaxNumFl(12);
                    break;
                case 'kochmonBlock1-2':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-3':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-4':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-5':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-6':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-7':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-8':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-9':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;
                case 'kochmonBlock1-10':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    if (selectedFloor > 16) {
                        setSelectedFloor(16);
                    }
                    setMaxNumFl(16);
                    break;

                default:
                    break;
            }
        };

        updateSelectedFloor();
    }, [selectedBlock, selectedFloor, setSelectedFloor]);



    const getSectorForOption = (option) => {
        switch (option) {
            case 'sector-1':
                return {
                    sector: ('А'),
                };
            case 'sector-2':
                return {
                    sector: ('З'),
                };
            case 'sector-3':
                return {
                    sector: ('И'),
                };
            case 'sector-4':
                return {
                    sector: ('К'),
                };
            case 'sector-5':
                return {
                    sector: ('Б'),
                };
            case 'sector-6':
                return {
                    sector: ('В'),
                };
            case 'sector-7':
                return {
                    sector: ('Г'),
                };
            case 'sector-8':
                return {
                    sector: ('Ж'),
                };
            case 'sector-9':
                return {
                    sector: ('Е'),
                };
            case 'sector-10':
                return {
                    sector: ('Д'),
                };
            default:
                return {
                    sector: '',
                };
        }
    };
    const { sector } = getSectorForOption(selectedSector);


    let module1, module5, module6, module7, module8, module9, module10;
    const getContentForOption = async (option) => {
        module1 = await module1Promise;
        const image1 = module1.getKochmonSec1Layout(option, handleOptionClick);
        if (image1) {
            return image1;
        }
        module5 = await module5Promise;
        const image5 = module5.getKochmonSec5Layout(option, handleOptionClick);
        if (image5) {
            return image5;
        }
        module6 = await module6Promise;
        const image6 = module6.getKochmonSec6Layout(option, handleOptionClick);
        if (image6) {
            return image6;
        }
        module7 = await module7Promise;
        const image7 = module7.getKochmonSec7Layout(option, handleOptionClick);
        if (image7) {
            return image7;
        }
        module8 = await module8Promise;
        const image8 = module8.getKochmonSec8Layout(option, handleOptionClick);
        if (image8) {
            return image8;
        }
        module9 = await module9Promise;
        const image9 = module9.getKochmonSec9Layout(option, handleOptionClick);
        if (image9) {
            return image9;
        }
        module10 = await module10Promise;
        const image10 = module10.getKochmonSec10Layout(option, handleOptionClick);
        if (image10) {
            return image10;
        }
        return null;
    }



    async function someFunction() {
        const optionResult = await getContentForOption(selectedBlock);
        if (optionResult !== null) {
            setSvg(optionResult.svg);
            setTextB(optionResult.textB);
            setDisFloor1(optionResult.disFloor1);
            setDisFloor2(optionResult.disFloor2);
            setDisFloor3(optionResult.disFloor3);
            setDisFloor4(optionResult.disFloor4);
            setDisFloor5(optionResult.disFloor5);
            setDisFloor6(optionResult.disFloor6);
            setDisFloor7(optionResult.disFloor7);
            setDisFloor8(optionResult.disFloor8);
            setDisFloor9(optionResult.disFloor9);
            setDisFloor10(optionResult.disFloor10);
            setDisFloor11(optionResult.disFloor11);
            setDisFloor12(optionResult.disFloor12);
            setDisFloor13(optionResult.disFloor13);
            setDisFloor14(optionResult.disFloor14);
            setDisFloor15(optionResult.disFloor15);
            setDisFloor16(optionResult.disFloor16);
            setDisFloor17(optionResult.disFloor17);
            setDisFloor18(optionResult.disFloor18);
        } else {
            // Обработка случая, когда optionResult равен null
        }
    }
    useEffect(() => {
        someFunction();
    }, [selectedBlock]);


    return (
        <div className={`kochmon-planned custom-pop-anim select-planned-modal ${isOpen ? 'show' : ''}`}  >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-select-planned__body-content">
                            <div className="select-planned__top">
                                <AnimatedText as='h2' className='title-anim title'>Выберите Планировку</AnimatedText>
                                <button type="button" className="modal-apartments__btn-close" onClick={onCloseModal} aria-label="Закрыть">
                                    <span>назад</span>
                                    <img src={backIcon} alt="Закрыть" />
                                </button>
                            </div>
                            <div className="select-planned__center">
                                <div className="floor-selection">
                                    <div className="block-select">
                                        <AnimatedText as='p' className='title-anim'>Сектор <span>{sector}</span></AnimatedText>
                                        <AnimatedText as='p' className='title-anim'>Блок <span>{textB}</span></AnimatedText>
                                    </div>
                                    <div className="block-floor">
                                        <AnimatedText as='h2' className='title-anim title'>Этаж</AnimatedText>
                                        <AnimatedText as='div' className="text-fade-in floor-blocks">
                                            <div className={`floor ${disFloor1 === 'none' ? 'none' : disFloor1 === true ? 'disable' : selectedFloor === 1 ? 'active' : ''} `} onClick={() => handlePathClick(1)}>1</div>
                                            <div className={`floor ${disFloor2 === 'none' ? 'none' : disFloor2 === true ? 'disable' : selectedFloor === 2 ? 'active' : ''} `} onClick={() => handlePathClick(2)}>2</div>
                                            <div className={`floor ${disFloor3 === 'none' ? 'none' : disFloor3 === true ? 'disable' : selectedFloor === 3 ? 'active' : ''}`} onClick={() => handlePathClick(3)}>3</div>
                                            <div className={`floor ${disFloor4 === 'none' ? 'none' : disFloor4 === true ? 'disable' : selectedFloor === 4 ? 'active' : ''}`} onClick={() => handlePathClick(4)}>4</div>
                                            <div className={`floor ${disFloor5 === 'none' ? 'none' : disFloor5 === true ? 'disable' : selectedFloor === 5 ? 'active' : ''}`} onClick={() => handlePathClick(5)}>5</div>
                                            <div className={`floor ${disFloor6 === 'none' ? 'none' : disFloor6 === true ? 'disable' : selectedFloor === 6 ? 'active' : ''}`} onClick={() => handlePathClick(6)}>6</div>
                                            <div className={`floor ${disFloor7 === 'none' ? 'none' : disFloor7 === true ? 'disable' : selectedFloor === 7 ? 'active' : ''}`} onClick={() => handlePathClick(7)}>7</div>
                                            <div className={`floor ${disFloor8 === 'none' ? 'none' : disFloor8 === true ? 'disable' : selectedFloor === 8 ? 'active' : ''}`} onClick={() => handlePathClick(8)}>8</div>
                                            <div className={`floor ${disFloor9 === 'none' ? 'none' : disFloor9 === true ? 'disable' : selectedFloor === 9 ? 'active' : ''}`} onClick={() => handlePathClick(9)}>9</div>
                                            <div className={`floor ${disFloor10 === 'none' ? 'none' : disFloor10 === true ? 'disable' : selectedFloor === 10 ? 'active' : ''}`} onClick={() => handlePathClick(10)}>10</div>
                                            <div className={`floor ${disFloor11 === 'none' ? 'none' : disFloor11 === true ? 'disable' : selectedFloor === 11 ? 'active' : ''}`} onClick={() => handlePathClick(11)}>11</div>
                                            <div className={`floor ${disFloor12 === 'none' ? 'none' : disFloor12 === true ? 'disable' : selectedFloor === 12 ? 'active' : ''}`} onClick={() => handlePathClick(12)}>12</div>
                                            <div className={`floor ${disFloor13 === 'none' ? 'none' : disFloor13 === true ? 'disable' : selectedFloor === 13 ? 'active' : ''}`} onClick={() => handlePathClick(13)}>13</div>
                                            <div className={`floor ${disFloor14 === 'none' ? 'none' : disFloor14 === true ? 'disable' : selectedFloor === 14 ? 'active' : ''}`} onClick={() => handlePathClick(14)}>14</div>
                                            <div className={`floor ${disFloor15 === 'none' ? 'none' : disFloor15 === true ? 'disable' : selectedFloor === 15 ? 'active' : ''}`} onClick={() => handlePathClick(15)}>15</div>
                                            <div className={`floor ${disFloor16 === 'none' ? 'none' : disFloor16 === true ? 'disable' : selectedFloor === 16 ? 'active' : ''}`} onClick={() => handlePathClick(16)}>16</div>
                                            <div className={`floor ${disFloor17 === 'none' ? 'none' : disFloor17 === true ? 'disable' : selectedFloor === 17 ? 'active' : ''}`} onClick={() => handlePathClick(17)}>17</div>
                                            <div className={`floor ${disFloor18 === 'none' ? 'none' : disFloor18 === true ? 'disable' : selectedFloor === 18 ? 'active' : ''}`} onClick={() => handlePathClick(18)}>18</div>

                                        </AnimatedText>
                                    </div>
                                </div>
                                <AnimatedImage className="floor-image">
                                    {svg}
                                </AnimatedImage>
                            </div>
                            <div className="select-planned__bottom">
                                <img src={compassPlannedLayout} alt="Компас" />
                                <AnimatedText as='h2' className='title-anim title'>KOCHMON CITY</AnimatedText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KochmonSelectPlannedLayout;