/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';


import './InstallmentCalculator.css';
import './MediaInstallmentCalculator.css';
import modalCloseIcon from '../../assets/icons/modalCloseIcon.svg';
import iconDownload from '../../assets/apartment/iconDownload.svg';

function InstallmentCalculator({ selectedOption, costOfApart }) {

    const [currency, setCurrency] = useState('com');

    const [apartmentCost, setApartmentCost] = useState(20000);
    const [downPayment, setDownPayment] = useState(0);
    const [duration, setDuration] = useState(1);

    function handleDownload() {
        const inputElementD = document.querySelector('#targetElement .modal-calculator__top-b .price-apart');
        const inputElementRev = document.querySelector('#targetElement .modal-calculator__top-b .price-apart #priceInput');
        const inputValue = apartmentCost;
        const tempDiv = document.createElement('div');
        tempDiv.textContent = inputValue;
        inputElementD.appendChild(tempDiv);
        tempDiv.style.color = '#9D8962';
        tempDiv.style.fontSize = 'clamp(30px, 5vw, 70px)';
        tempDiv.style.fontFamily = 'var(--second-font)';
        tempDiv.style.marginTop = '16px';
        tempDiv.style.borderBottom = '1px solid #9D8962';
        tempDiv.style.paddingBottom = '10px';
        inputElementRev.style.display = 'none';


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
                    inputElementD.removeChild(tempDiv);
                    inputElementRev.style.display = 'inline-block';
                });
            });
        });
    }

    const calculateMonthlyCost = () => {
        // Здесь вы можете рассчитать стоимость в месяц на основе ваших требований и финансовых условий
        const loanAmount = apartmentCost - (apartmentCost * (downPayment / 100));
        const monthlyCost = loanAmount / duration;
        return monthlyCost.toFixed(0);
    };



    function changeCurrency(cur) {
        setCurrency(cur);
    }





    const getImageForOption = (option) => {
        switch (option) {
            case '':
                return {
                    needFlat: ('flat-1-1'),
                };
            case 'option1-1':
                return {
                    needFlat: ('flat-1-1'),
                };
            case 'option1-2':
                return {
                    needFlat: ('flat-1-4'),
                };
            case 'option1-3':
                return {
                    needFlat: ('flat-1-5'),
                };
            case 'option1-4':
                return {
                    needFlat: ('flat-1-3'),
                };
            case 'option1-5':
                return {

                    needFlat: ('flat-1-2'),
                };

            case 'option2-1':
                return {
                    needFlat: ('flat-2-1'),
                };
            case 'option2-2':
                return {
                    needFlat: ('flat-2-2'),
                };
            case 'option2-3':
                return {
                    needFlat: ('flat-2-3'),
                };
            case 'option2-4':
                return {
                    needFlat: ('flat-2-4'),
                };
            case 'option2-5':
                return {
                    needFlat: ('flat-2-5'),
                };
            case 'option2-6':
                return {
                    needFlat: ('flat-2-6'),
                };

            case 'option2-14-1':
                return {
                    needFlat: ('flat-2-14-1'),
                };
            case 'option2-14-2':
                return {
                    needFlat: ('flat-2-14-2'),
                };

            case 'option3-1':
                return {
                    needFlat: ('flat-3-1'),
                };
            case 'option3-2':
                return {
                    needFlat: ('flat-3-2'),
                };
            case 'option3-3':
                return {
                    needFlat: ('flat-3-3'),
                };
            case 'option3-4':
                return {
                    needFlat: ('flat-3-4'),
                };
            case 'option3-5':
                return {
                    needFlat: ('flat-3-5'),
                };

            case 'option4-1':
                return {
                    needFlat: ('flat-4-1'),
                };
            case 'option4-2':
                return {
                    needFlat: ('flat-4-2'),
                };
            case 'option4-3':
                return {
                    needFlat: ('flat-4-3'),
                };
            case 'option4-4':
                return {
                    needFlat: ('flat-4-4'),
                };
            case 'option4-5':
                return {
                    needFlat: ('flat-4-5'),
                };
            case 'option4-6':
                return {
                    needFlat: ('flat-4-6'),
                };
            case 'option4-7':
                return {
                    needFlat: ('flat-4-7'),
                };


            case 'option4-14-1':
                return {
                    needFlat: ('flat-4-14-1'),
                };
            case 'option4-14-2':
                return {
                    needFlat: ('flat-4-14-2'),
                };
            case 'option4-14-3':
                return {
                    needFlat: ('flat-4-14-3'),
                };
            case 'option4-14-4':
                return {
                    needFlat: ('flat-4-14-4'),
                };
            case 'option4-14-5':
                return {
                    needFlat: ('flat-4-14-5'),
                };

            default:
                return '';
        }
    };
    const { needFlat } = getImageForOption(selectedOption);



    return (
        <div className="modal fade modal-calculator" id="installmentCalculator" tabIndex={-1} aria-labelledby="installmentCalculator" aria-hidden="true">
            <div className="modal-dialog modal-lg" id='targetElement'>
                <div className="modal-content">
                    <div className="modal-body modal-calculator__body">
                        <div>
                            <div className="modal-calculator__top">
                                <div className="currency-selection">
                                    <div className={`currency-b ${currency === 'dollar' ? 'active' : ''}`} data-currency='dollar' onClick={() => changeCurrency('dollar')}>$</div>
                                    <div className={`currency-b ${currency === 'com' ? 'active' : ''}`} data-currency='com' onClick={() => changeCurrency('com')}>C</div>
                                </div>
                                <button className='call-btn' type="button" data-bs-toggle="modal" data-bs-target="#callModalApartments">Оставить заявку</button>
                            </div>
                            <div className="modal-calculator__top-b">
                                <PriceInput
                                    value={apartmentCost}
                                    setApartmentCost={setApartmentCost}
                                    costOfApart={costOfApart}
                                    needFlat={needFlat}
                                    currency={currency}
                                />

                            </div>
                            <div className="modal-calculator__center">
                                <DownPaymentSlider
                                    value={downPayment}
                                    onChange={setDownPayment}
                                    apartmentCost={apartmentCost}
                                />
                                <DurationSlider
                                    value={duration}
                                    onChange={setDuration}
                                />
                            </div>
                            <div className="modal-calculator__bottom">
                                <MonthlyCost cost={calculateMonthlyCost()} currency={currency} />
                                <button className='download-mob' onClick={handleDownload}>
                                    <img src={iconDownload} alt="iconDownload" /> Скачать PDF
                                </button>
                            </div>
                        </div>
                        <button type="button" className="modal-call__btn-close" data-bs-dismiss="modal" aria-label="Закрыть" value="Send" >
                            <img src={modalCloseIcon} alt="Закрыть" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PriceInput({ value, setApartmentCost, costOfApart, needFlat, currency }) {
    const [formattedValue, setFormattedValue] = useState(value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ' '));



    const [foundCurrency, setFoundCurrency] = useState(2193100 / 89.7);
    function changeFoundCurrency(event) {
        const cur = event.target.value;
        setFoundCurrency(cur);
    }
    function handleBlur() {
        if (currency === 'dollar') {
            setFoundCurrency(Math.max(500, foundCurrency));
        } if (currency === 'com') {
            setFoundCurrency(Math.max(44850, foundCurrency));
        }
    }
    useEffect(() => {
        setApartmentCost(foundCurrency);
        setFormattedValue(foundCurrency);
    }, [foundCurrency]);


    // console.log(foundCurrency);
    // let foundObj = costOfApart.find(obj => obj.flat === needFlat);
    useEffect(() => {
        if (currency) {
            // setApartmentCost(currency === 'dollar' ? Math.floor(foundObj.cost / 89.7) : currency === 'com' ? foundObj.cost : '');
            // setFormattedValue(currency === 'dollar' ? Math.floor(foundObj.cost / 89.7) : currency === 'com' ? foundObj.cost / 1 : '');

            if (currency === 'dollar') {
                setFoundCurrency(Math.floor(foundCurrency / 89.7));
            }
            if (currency === 'com') {
                setFoundCurrency(Math.floor(foundCurrency * 89.7));
            }

        } else {
            // setApartmentCost('Не задана цена квартиры');
            // setFormattedValue('Не задана цена квартиры');
            setApartmentCost(currency === 'dollar' ? Math.floor(2193100 / 89.7) : currency === 'com' ? 2193100 : '');
            setFormattedValue(currency === 'dollar' ? Math.floor(2193100 / 89.7) : currency === 'com' ? 2193100 / 1 : '');
        }
    }, [currency]);
    const formattedDownPaymentAmount = formattedValue.toLocaleString();

    return (
        <div className='price-apart'>
            <label className='title-calculator' htmlFor="priceInput">Стоимость квартиры</label>
            <input
                min={1}
                type="number"
                id="priceInput"
                value={formattedValue}
                onChange={changeFoundCurrency}
                onBlur={handleBlur}
            />
        </div>
    );
}



function DownPaymentSlider({ value, onChange, apartmentCost }) {
    const [sliderStyle, setSliderStyle] = useState({});
    const handleSliderChange = (e) => {
        const sliderValue = parseFloat(e.target.value);
        onChange(sliderValue);
    };
    useEffect(() => {
        const sliderFillWidth = `${(value / 100) * 100}%`; // Вычисляем ширину заполненной части полосы
        const sliderFillColor = '#9D8962'; // Цвет заполненной части полосы
        const sliderRemainingColor = 'rgba(255, 255, 255, 0.212)'; // Цвет оставшейся части полосы
        const sliderStyle = {
            background: `linear-gradient(to right, ${sliderFillColor} 0%, ${sliderFillColor} ${sliderFillWidth}, ${sliderRemainingColor} ${sliderFillWidth}, ${sliderRemainingColor} 100%)`,
        };
        setSliderStyle(sliderStyle);
    }, [value]);
    const downPaymentAmount = (apartmentCost * value) / 100;
    const formattedDownPaymentAmount = downPaymentAmount.toLocaleString();

    return (
        <div className='row-calc'>
            <label className="title-calculator" htmlFor="downPaymentSlider">
                Первоначальный взнос %
            </label>
            <p className="param-calc">{formattedDownPaymentAmount}</p>
            <input
                type="range"
                id="downPaymentSlider"
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={handleSliderChange}
                style={sliderStyle}
            />
        </div>
    );
}


function DurationSlider({ value, onChange }) {
    const [sliderStyle, setSliderStyle] = useState({});
    const handleSliderChange = (e) => {
        const sliderValue = parseInt(e.target.value);
        onChange(sliderValue);
    };
    useEffect(() => {
        const sliderFillWidth = `${(value / 12) * 100}%`; // Вычисляем ширину заполненной части полосы
        const sliderFillColor = '#9D8962'; // Цвет заполненной части полосы
        const sliderRemainingColor = 'rgba(255, 255, 255, 0.212)'; // Цвет оставшейся части полосы
        const sliderStyle = {
            background: `linear-gradient(to right, ${sliderFillColor} 0%, ${sliderFillColor} ${sliderFillWidth}, ${sliderRemainingColor} ${sliderFillWidth}, ${sliderRemainingColor} 100%)`,
        };
        setSliderStyle(sliderStyle);
    }, [value]);
    return (
        <div className='row-calc'>
            <label className='title-calculator' htmlFor="durationSlider">Срок мес.</label>
            <p className="param-calc"> {value}</p>
            <input
                type="range"
                id="durationSlider"
                min={1}
                max={12}
                step={1}
                value={value}
                onChange={handleSliderChange}
                style={sliderStyle}
            />
        </div>
    );
}


function MonthlyCost({ cost, currency }) {
    const formattedCost = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return (
        <div>
            <p className='title-calculator'>Ежемесячный платеж </p>
            <p className='price-month'> <strong className='price'>{formattedCost}</strong> <span>{currency === 'dollar' ? '$' : currency === 'com' ? 'c' : ''}/МЕС.</span> </p>
        </div>
    );
}




export default InstallmentCalculator;