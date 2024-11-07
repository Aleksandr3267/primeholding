import { useEffect } from 'react';
import './SelectPlannedLayout.css';

import backIcon from '../../../assets/apartment/backIcon.svg';

import selectPlannedLayout1 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout1.svg';
import selectPlannedLayout2 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout2.svg';
import selectPlannedLayout2f13 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout2-13.webp';
// import selectPlannedLayout2f14 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout2-14.webp';
import selectPlannedLayout3 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout3.svg';
import selectPlannedLayout4 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout4.svg';
import selectPlannedLayout4f13 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout4-13.webp';
// import selectPlannedLayout4f14 from '../../../assets/apartment/SelectPlannedLayout/selectPlannedLayout4-14.webp';

import compassPlannedLayout from '../../../assets/apartment/SelectPlannedLayout/compassPlannedLayout.svg';
import AnimatedText from '../../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../../UI/AnimatedImage/AnimatedImage';

// eslint-disable-next-line react/prop-types
function SelectPlannedLayout({ setSelectedFloor, selectedFloor, selectedBlock, setSelectedOption, isOpen, onCloseModal, onOpenApartmentsModal }) {
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
                case 'block-1':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    break;
                case 'block-2':
                    if (selectedFloor < 4) {
                        setSelectedFloor(4);
                    }
                    break;
                case 'block-3':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    break;
                case 'block-4':
                    if (selectedFloor < 2) {
                        setSelectedFloor(2);
                    }
                    break;
                default:
                    break;
            }
        };

        updateSelectedFloor();
    }, [selectedBlock, selectedFloor, setSelectedFloor]);



    const getContentForOption = (option) => {
        switch (option) {
            case 'block-1':
                return {
                    svg: (
                        <div>
                            <svg width="626" height="402" viewBox="0 0 626 402" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5" onClick={() => handleOptionClick('option1-1')}>
                                    <path d="M468 0H626V198V386.5H542V198H468V0Z" fill="#92753D" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option1-2')}>
                                    <path d="M0 0H158V198.768V388H0V198.768V0Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option1-3')}>
                                    <path d="M158 0H306V80.9418V158H158V80.9418V0Z" fill="#B5A17A" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option1-4')}>
                                    <path d="M158 193H306V292.897V388H158V292.897V193Z" fill="#B5A17A" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option1-5')}>
                                    <path d="M306 195H542V293.872V388H306V293.872V195Z" fill="#AA9F8B" />
                                </g>
                            </svg>
                            <img src={selectPlannedLayout1} alt="Этаж" />
                        </div>
                    ),
                    textB: ('А'),
                    disFloor1: true,
                };
            case 'block-2':
                if (selectedFloor == 14) {
                    return {
                        svg: (
                            <div>
                                <svg width="705" height="571" style={{ marginTop: '-3%' }} viewBox="0 0 485 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6" onClick={() => handleOptionClick('option2-14-1')}>
                                        <path
                                            d="M193.516 3.50391L2.36523 137.309L33.7685 182.594L26.9417 187.372L83.8317 268.611L88.3829 265.426L89.5207 267.018L90.8861 266.336L107.726 290.912L119.559 292.96L128.661 286.589L157.334 327.549H193.288V343.023L207.397 357.36H229.47V358.27H242.327V153.921H156.879L151.417 145.274V123.428H199.205V52.2018L216.954 39.9135V34.2245H215.589L193.516 3.50391Z"
                                            fill="#AA9F8B" />
                                    </g>
                                    <g opacity="0.6" onClick={() => handleOptionClick('option2-14-2')}>
                                        <path
                                            d="M268.838 34.2236L290.911 2.82031L482.289 137.308L450.886 182.593L457.713 187.372L400.823 268.61L396.272 265.425L395.134 267.018L393.769 266.335L376.929 290.911L365.096 292.959L355.994 286.588L327.321 327.548H291.367V343.023L277.258 357.359H255.185V358.269H242.327V153.92H327.776L333.238 145.273V123.427H285.45V52.2008L267.7 39.9126V34.2236H268.838Z"
                                            fill="#92753D" />
                                    </g>
                                </svg>
                                <img src={selectPlannedLayout2f13} alt="Этаж" />
                            </div>
                        ),
                        textB: ('Б'),
                        disFloor1: true,
                        disFloor2: true,
                        disFloor3: true,
                    }
                }
                // if (selectedFloor == 14) {
                //     return {
                //         svg: (
                //             <div>
                //                 <svg width="705" height="571" style={{ marginTop: '-2%' }} viewBox="0 0 463 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                     <g opacity="0.6" onClick={() => handleOptionClick('option2-15-1')}>
                //                         <path
                //                             d="M3.78809 130.847L186.183 3.00147L186.208 2.98379L207.164 32.1872H208.452V32.3401V37.5959L191.577 49.2785V116.995H146.144V137.764L151.336 145.985H232.574L232.79 349.783C215.208 349.783 204.616 346.982 189.197 338.533C175.717 331.148 159.557 312.639 159.557 312.639L151.679 312.639L124.316 273.497L115.629 279.586L104.336 277.628L88.266 254.143L86.963 254.796L85.8771 253.274L81.5338 256.318L27.2421 178.687L33.7571 174.12L3.78809 130.847Z"
                //                             fill="#AA9F8B" />
                //                     </g>
                //                     <g opacity="0.6" onClick={() => handleOptionClick('option2-15-2')}>
                //                         <path
                //                             d="M461.685 130.847L279.29 3.00147L279.265 2.98379L258.309 32.1872H257.021V32.3401V37.5959L273.896 49.2785V116.995H319.329V137.764L314.137 145.985H232.899L232.682 349.783C250.265 349.783 260.857 346.982 276.276 338.533C289.756 331.148 305.916 312.639 305.916 312.639L313.794 312.639L341.157 273.497L349.844 279.586L361.137 277.628L377.207 254.143L378.51 254.796L379.596 253.274L383.939 256.318L438.231 178.687L431.716 174.12L461.685 130.847Z"
                //                             fill="#92753D" />
                //                     </g>
                //                 </svg>
                //                 <img src={selectPlannedLayout2f14} alt="Этаж" />
                //             </div>
                //         ),
                //         textB: ('Б'),
                //         disFloor1: true,
                //         disFloor2: true,
                //         disFloor3: true,
                //     }
                // }
                return {
                    svg: (
                        <div>
                            <svg width="705" height="571" viewBox="0 0 705 571" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-1')}>
                                    <path d="M142.349 100.033L284.938 0.00045518L317.892 50.9852L291.432 70.3466L291.432 172.317L223.668 173.607L203.661 186.515L142.349 100.033Z" fill="#92753D" />
                                </g>
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-2')}>
                                    <path d="M562.76 100.033L420.172 0.00045518L387.217 50.9852L413.678 70.3466L413.678 172.317L481.442 173.607L501.448 186.515L562.76 100.033Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-3')}>
                                    <path d="M9.36657 192.306L145.296 98.3872L188.046 160.26L228.746 219.165L84.2649 319.616L44.2512 262.823L53.9318 256.368L9.36657 192.306Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-4')}>
                                    <path d="M83.6172 319.463L230.851 218.14L290.14 218.14L290.14 209.104L353.387 209.104L353.387 504.688L303.048 504.688L284.332 485.972L284.332 462.739L231.41 462.739L190.751 404.655L176.552 413.69L160.418 410.463L136.539 375.612L133.958 377.548L132.667 375.612L126.214 380.776L83.6172 319.463Z" fill="#AA9F8B" />
                                </g>
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-5')}>
                                    <path d="M622.633 319.296L475.399 217.973L416.11 217.973L416.11 208.937L352.863 208.937L352.863 504.521L403.202 504.521L421.918 485.805L421.918 462.572L474.84 462.572L515.499 404.488L529.698 413.523L545.832 410.296L569.711 375.445L572.292 377.381L573.583 375.445L580.036 380.609L622.633 319.296Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.6" onClick={() => handleOptionClick('option2-6')}>
                                    <path d="M695.036 192.306L559.106 98.3872L516.356 160.26L475.657 219.165L620.137 319.616L660.151 262.823L650.471 256.368L695.036 192.306Z" fill="#AA9F8B" />
                                </g>
                            </svg>
                            <img src={selectPlannedLayout2} alt="Этаж" />
                        </div>
                    ),
                    textB: ('Б'),
                    disFloor1: true,
                    disFloor2: true,
                    disFloor3: true,
                };
            case 'block-3':
                return {
                    svg: (
                        <div>
                            <svg width="626" height="402" viewBox="0 0 626 402" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5" onClick={() => handleOptionClick('option3-1')}>
                                    <path d="M468 0H626V198V386.5H542V198H468V0Z" fill="#92753D" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option3-2')}>
                                    <path d="M0 0H158V198.768V388H0V198.768V0Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option3-3')}>
                                    <path d="M158 0H306V80.9418V158H158V80.9418V0Z" fill="#B5A17A" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option3-4')}>
                                    <path d="M158 193H306V292.897V388H158V292.897V193Z" fill="#B5A17A" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option3-5')}>
                                    <path d="M306 195H542V293.872V388H306V293.872V195Z" fill="#AA9F8B" />
                                </g>
                            </svg>
                            <img src={selectPlannedLayout3} alt="Этаж" />
                        </div>
                    ),
                    textB: ('В'),
                    disFloor1: true,
                };
            case 'block-4':
                if (selectedFloor == 14) {
                    return {
                        svg: (
                            <div>
                                <svg width="586" height="341" viewBox="0 0 586 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6" onClick={() => handleOptionClick('option4-14-1')}>
                                        <path d="M215.717 1.93359L238.2 35.3837L203.379 102.284L230.523 116.541L216.266 146.701L188.068 131.621L169.929 166.442L210.782 188.377L148.269 306.549L135.382 300.243L136.205 298.324L111.802 285.437L107.69 270.357L110.706 265.148L105.496 262.406L102.48 257.745L95.0774 262.68L84.3843 260.487L61.0789 226.214L57.7887 228.407L50.9342 218.537L53.4018 216.892L37.2251 192.49L34.4833 194.135L27.6288 183.99L32.5641 180.974L6.79102 142.863L215.717 1.93359Z" fill="#92753D" />
                                    </g>
                                    <g opacity="0.6" onClick={() => handleOptionClick('option4-14-2')}>
                                        <path d="M346.501 330.403V331.774L357.194 330.403V212.231L257.118 211.957L210.781 188.377L148.268 306.275L160.606 313.404L161.702 312.033L185.83 324.645L200.91 319.984L203.926 314.226L210.233 317.516H214.345V325.742L222.022 333.967H263.424V337.806H278.229V335.886H305.099V337.806H317.163V332.596H324.84V330.403H346.501Z" fill="#FFDC84" />
                                    </g>
                                    <g opacity="0.6" onClick={() => handleOptionClick('option4-14-3')}>
                                        <path d="M458.64 333.829V212.504H357.193V330.402H392.289V331.773H398.595V335.063H417.787V333.829H447.947V335.063L458.64 333.829Z" fill="#DDC699" />
                                    </g>
                                    <g opacity="0.6" onClick={() => handleOptionClick('option4-14-4')}>
                                        <path d="M555.978 331.774V312.582H572.977L583.67 301.888V242.746H580.213V185.782H583.67V126.687L572.977 115.994H555.978V98.9943H539.253V103.655H522.802V98.9943H516.496V94.6074H493.739V95.7041H477.562V94.6074H455.079V98.9943H443.015V101.736H427.113V98.446H411.484V214.425H458.369V331.774V335.339H463.305V331.774H472.627V330.403H500.319V331.774H519.786H555.978Z" fill="#EAD08C" />
                                    </g>
                                    <g opacity="0.6" onClick={() => handleOptionClick('option4-14-5')}>
                                        <path d="M321.827 80.0742H361.035V98.9927H411.484V188.102H283.99L268.361 180.15L321.827 80.0742Z" fill="#92753D" />
                                    </g>

                                </svg>
                                <img src={selectPlannedLayout4f13} alt="Этаж" />
                            </div>
                        ),
                        textB: ('Г'),
                        disFloor1: true,
                    }
                }
                // if (selectedFloor == 14) {
                //     return {
                //         svg: (
                //             <div>
                //                 <svg width="582" height="339" viewBox="0 0 582 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                     <g opacity="0.6" onClick={() => handleOptionClick('option4-15-1')}>
                //                         <path d="M211.749 3.07031L228.649 28.5547L229.454 27.7499L234.819 35.5293L235.624 36.0658L200.482 99.6426L228.381 114.397L193.508 177.705L207.725 185.082L140.393 312.638C124.916 304.443 116.624 297.401 106.861 282.862C100.747 273.756 95.0577 257.377 95.0577 257.377L83.791 255.5L60.9892 222.504L57.7701 224.382L47.3081 208.823L49.9907 206.945L41.6747 194.605L38.9922 196.483L28.5302 180.924L32.8223 177.705L8.6792 140.418L211.749 3.07031Z" fill="#F8E5C0" />
                //                     </g>
                //                     <g opacity="0.6" onClick={() => handleOptionClick('option4-15-2')}>
                //                         <path d="M315.564 78.9863H354.73V105.544L355.535 320.685V324.977H337.561V322.831H322.003V324.977H311.004V330.611H294.909V328.196L278.736 328.188V330.602L260.035 330.611V326.587H218.992L211.213 319.612C211.213 319.612 194.486 323.708 183.582 323.636C166.178 323.522 155.774 320.783 140.393 312.638L207.725 185.082L221.943 192.459L235.088 167.779L231.332 165.901L235.892 157.317L266.205 173.144L315.564 78.9863Z" fill="#92753D" />
                //                     </g>
                //                     <g opacity="0">
                //                         <path d="M543.851 316.931V305.396H552.167L564.775 292.519V246.379H560.751V174.218H564.775V128.347L551.63 114.934H543.851V105.545H498.515V100.984H454.521V105.545H354.73L355.535 316.931H399.797V320.686H446.205V316.931H543.851Z" fill="#5BC85F" />
                //                     </g></svg>
                //                 <img src={selectPlannedLayout4f14} alt="Этаж" />
                //             </div>
                //         ),
                //         textB: ('Г'),
                //         disFloor1: true,
                //     }
                // }
                return {
                    svg: (
                        <div>
                            <svg width="628" height="373" viewBox="0 0 628 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" width="626" height="373" />
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-1')}>
                                    <path d="M227 0L252 37.5L212 109L242.5 125L225 159L168.5 129.5L148.5 143L107 82L227 0Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-2')}>
                                    <path d="M343 86H387V105H442.5V203L303 204L286 194.5L343 86Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-3')}>
                                    <path d="M334 364.5V231H493.5V364.5H334Z" fill="#AA9F8B" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-4')}>
                                    <path d="M442.5 105H600.5V124.5H619.5L628 133V330L618.5 339.5H601V361H499V365H494.5V231.5H442.5V105Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-5')}>
                                    <path d="M107 81.5L169 168.5L55 247.5L22.5 198.5L27.5 195.5L0.5 153.5L107 81.5Z" fill="#AA9F8B" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-6')}>
                                    <path d="M167.5 166.5L173 175L222.5 203.5L155 331.5L114.5 310L109 293L112.5 287.5L106 284L103 280L96 284.5L84 282L57 241.5L167.5 166.5Z" fill="#D7A138" />
                                </g>
                                <g opacity="0.5" onClick={() => handleOptionClick('option4-7')}>
                                    <path d="M222.5 203.5L274 229H335.5V367H281V363H235L226.5 354.5V345.5H221.5L215 342L211.5 348L195 353L155 331.5L222.5 203.5Z" fill="#92753D" />
                                </g>
                            </svg>
                            <img src={selectPlannedLayout4} alt="Этаж" />
                        </div>
                    ),
                    textB: ('Г'),
                    disFloor1: true,
                };

            default:
                return {
                    svg: null,
                    textB: '',
                };
        }
    };

    const { svg, textB,
        disFloor1, disFloor2, disFloor3 } = getContentForOption(selectedBlock);





    return (
        <div className={`custom-pop-anim select-planned-modal ${isOpen ? 'show' : ''}`}  >
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
                                        <AnimatedText as='p' className='title-anim'>Блок <span>{textB}</span></AnimatedText>
                                    </div>
                                    <div className="block-floor">
                                        <AnimatedText as='h2' className='title-anim title'>Этаж</AnimatedText>
                                        <AnimatedText as='div' className="text-fade-in floor-blocks">
                                            <div className={`floor ${disFloor1 === true ? 'disable' : selectedFloor === 1 ? 'active' : ''} `} onClick={() => handlePathClick(1)}>1</div>
                                            <div className={`floor ${disFloor2 === true ? 'disable' : selectedFloor === 2 ? 'active' : ''} `} onClick={() => handlePathClick(2)}>2</div>
                                            <div className={`floor ${disFloor3 === true ? 'disable' : selectedFloor === 3 ? 'active' : ''}`} onClick={() => handlePathClick(3)}>3</div>
                                            <div className={`floor ${selectedFloor === 4 ? 'active' : ''}`} onClick={() => handlePathClick(4)}>4</div>
                                            <div className={`floor ${selectedFloor === 5 ? 'active' : ''}`} onClick={() => handlePathClick(5)}>5</div>
                                            <div className={`floor ${selectedFloor === 6 ? 'active' : ''}`} onClick={() => handlePathClick(6)}>6</div>
                                            <div className={`floor ${selectedFloor === 7 ? 'active' : ''}`} onClick={() => handlePathClick(7)}>7</div>
                                            <div className={`floor ${selectedFloor === 8 ? 'active' : ''}`} onClick={() => handlePathClick(8)}>8</div>
                                            <div className={`floor ${selectedFloor === 9 ? 'active' : ''}`} onClick={() => handlePathClick(9)}>9</div>
                                            <div className={`floor ${selectedFloor === 10 ? 'active' : ''}`} onClick={() => handlePathClick(10)}>10</div>
                                            <div className={`floor ${selectedFloor === 11 ? 'active' : ''}`} onClick={() => handlePathClick(11)}>11</div>
                                            <div className={`floor ${selectedFloor === 12 ? 'active' : ''}`} onClick={() => handlePathClick(12)}>12</div>
                                            <div className={`floor ${selectedFloor === 13 ? 'active' : ''}`} onClick={() => handlePathClick(13)}>13</div>
                                            <div className={`floor ${selectedFloor === 14 ? 'active' : ''}`} onClick={() => handlePathClick(14)}>14</div>
                                            {/* <div className={`floor ${selectedFloor === 15 ? 'active' : ''}`} onClick={() => handlePathClick(15)}>15</div> */}
                                        </AnimatedText>
                                    </div>
                                </div>
                                <AnimatedImage className="floor-image">
                                    {svg}
                                </AnimatedImage>
                            </div>
                            <div className="select-planned__bottom">
                                <img src={compassPlannedLayout} alt="Компас" />
                                <AnimatedText as='h2' className='title-anim title'>Prime city</AnimatedText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectPlannedLayout;