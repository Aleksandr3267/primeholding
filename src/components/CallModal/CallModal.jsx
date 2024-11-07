import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './CallModal.css'
import './MediaCallModal.css'
import modalCloseIcon from '../../assets/icons/modalCloseIcon.svg'
// eslint-disable-next-line react/prop-types
function CallModal() {
    const closeModal = () => {
        const modalElement = document.getElementById('callModal');
        const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
        bootstrapModal.hide();
    };
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsLoadingForm(true);
        // Получите значения полей формы
        const fromName = e.target.from_name.value;
        const fromNumber = e.target.from_number.value;
        // const formComment = e.target.formComment.value;
        const templateParams = {
            from_name: fromName,
            number: fromNumber,
            // formComment: formComment,
        };
        emailjs
            .send('service_wrczsl5', 'template_q5w7veq', templateParams, 'O0nWnzGyyIvlnh2JI')
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
            <div className="modal fade modal-call" id="callModal" tabIndex={-1} aria-labelledby="callModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={sendEmail}>
                                <h4 className="modal-call__title">Вы в шаге от ответа</h4>
                                <label className="form-item">
                                    <input required type="text" className="form-item__input" placeholder="Как мы можем обращаться к вам" name="from_name" />
                                </label>
                                <label className="form-item">
                                    <input required type="tel" pattern="[0-9+\-]+" title="Неверный номер телефона" className="form-item__input" placeholder="Телефон" name="from_number" />
                                </label>
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

export default CallModal;