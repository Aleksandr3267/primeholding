/* eslint-disable react-hooks/rules-of-hooks */
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './CallModalApartments.css'
import './MediaCallModalApartments.css'
import modalCloseIcon from '../../assets/icons/modalCloseIcon.svg'
// eslint-disable-next-line react/prop-types
function callModalApartments({ selectedBlock, selectedFloor, selectedArrFloor, selectedFlRooms }) {
    const closeModal = () => {
        const modalElement = document.getElementById('callModalApartments');
        const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
        bootstrapModal.hide();
    };
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsLoadingForm(true);
        // Получите значения полей формы
        // const fromName = e.target.from_name.value;
        const fromNumber = e.target.from_number.value;
        // const formComment = e.target.formComment.value;
        const templateParams = {
            // from_name: fromName,
            number: fromNumber,
            // formComment: formComment,
            selectedBlock: selectedBlock == 'block-1' ? 'А' : selectedBlock == 'block-2' ? 'Б' : selectedBlock == 'block-3' ? 'В' : selectedBlock == 'block-4' ? 'Г' : 'Не выбрано.',
            selectedFloor: selectedFloor == '' ? 'Не выбрано.' : selectedFloor,
            selectedArrFloor: selectedArrFloor == '' ? 'Не выбрано.' : selectedArrFloor,
            selectedFlRooms: selectedFlRooms == '' ? 'Не выбрано.' : selectedFlRooms,
        };
        emailjs
            .send('service_wrczsl5', 'template_xukrbhn', templateParams, 'O0nWnzGyyIvlnh2JI')
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                closeModal();
                setIsLoadingForm(false);
                setIsModalOpen(true);
                setTimeout(() => {
                    setIsModalOpen(false);
                }, 2100);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            <div className="modal fade modal-call" id="callModalApartments" tabIndex={-1} aria-labelledby="callModalApartments" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={sendEmail}>
                                <h4 className="modal-call__title">Нужна помощь в выборе?</h4>
                                {/* <label className="form-item">
                                    <input required type="text" className="form-item__input" placeholder="Ваше имя" name="from_name" />
                                </label> */}
                                <label className="form-item">
                                    <input required type="tel" pattern="[0-9+\-]+" title="Неверный номер телефона" className="form-item__input" placeholder="Телефон" name="from_number" />
                                </label>
                                {/* <label className="form-item">
                                    <textarea required name="formComment" rows={2} className="form-item__input form-item__textarea" placeholder="Комментарий" />
                                </label> */}
                                {/* <label className="form-checkbox">
                                    <input required type="checkbox" />
                                    <span className="form-checkbox__checkmark" />
                                    <span className="form-checkbox__text">Я даю согласие на обработку моих персональных данных
                                        согласно <a href="#" >политике конфиденциальности</a></span>
                                </label> */}
                                <button type="submit" className="form__btn-submit link-brown" >
                                    {isLoadingForm ? 'Обработка...' : 'Заказать звонок'}
                                </button>
                            </form>
                            <p className="bg-font modal-call__bg-one">Contact</p>
                            <button type="button" className="modal-call__btn-close" data-bs-dismiss="modal" aria-label="Закрыть" value="Send" >
                                <img src={modalCloseIcon} alt="Закрыть" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen ? <div className="loading-form"> <div className="loading-form-content">Спасибо за заявку!</div></div> : ''}
        </>
    );
}

export default callModalApartments;