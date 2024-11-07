import {useState} from 'react';
import modalCloseIcon from '../../../assets/icons/modalCloseIcon.svg'
import './FormBuying.css';

import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentApartment} from "../../../store/apartmentSlice.js";
import {createPurchase} from "../../../store/orderSlice.js";
import Uploader from "../../FileUploader/Uploader.jsx";

const schema = yup.object().shape({
    clientName: yup.string().required("Поле обязательно для заполнения"),
    clientPhone: yup
        .string()
        .required("Поле обязательно для заполнения")
        .matches(/^[\d+]+$/, "Телефон должен содержать только цифры"),
    date: yup.date().required("Поле обязательно для заполнения").typeError("Поле обязательно для заполнения"),
    price: yup.number().required("Поле обязательно для заполнения").typeError("Поле обязательно для заполнения"),
    contractNumber: yup.string().required("Поле обязательно для заполнения"),
    comment: yup.string(),
});


// eslint-disable-next-line react/prop-types
function FormBuying({setUpdateStatus}) {
    const [file, setFile] = useState({});
    const dispatch = useDispatch();
    const apartment = useSelector(selectCurrentApartment);
    const {handleSubmit, control, formState, setError, reset} = useForm();
    const {errors} = formState;

    const onSubmit = async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            const submitData = {
                apartment,
                clientName: data.clientName,
                clientPhone: data.clientPhone,
                contractNumber: data.contractNumber,
                contractDocument: file,
                purchase: {
                    date: new Date(data.date),
                    price: parseInt(data.price, 10)
                },
                comment: data.comment,
            };
            dispatch(createPurchase(submitData)).unwrap().then((res) => {
                if (res?.status === 200) {
                    upStatus();
                    setFile({});
                    reset();
                    closeModal();
                }
            });

        } catch (validationErrors) {
            validationErrors.inner.forEach((error) => {
                setError(error.path, {
                    type: "manual",
                    message: error.message,
                });
            });
        }
    };

    const closeModal = () => {
        const closeButton = document.getElementById('close-form-btn');
        if (closeButton) {
            closeButton.click();
        }
    };

    const upStatus = () => {
        setUpdateStatus('3');
    }

    return (
        <>
            <div className="modal fade modal-for-admin" id="formBuying" tabIndex={-1} aria-labelledby="formBuying"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={handleSubmit(onSubmit)}>
                                <h4 className="modal-call__title">Покупка</h4>

                                <div className="modal-for-admin__forms">
                                    <div className="modal-call__side">
                                        <p className='modal-for-admin__title-side'>Данные клиента</p>
                                        <div className="form-item">
                                            <Controller
                                                name="clientName"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input placeholder='ФИО клиента*' {...field} />}
                                            />
                                            {errors.clientName && <p>{errors.clientName.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="clientPhone"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input
                                                    placeholder='Телефон клиента*' {...field} />}
                                            />
                                            {errors.clientPhone && <p>{errors.clientPhone.message}</p>}
                                        </div>
                                    </div>
                                    <div className="modal-call__side">
                                        <p className='modal-for-admin__title-side'>Параметры</p>
                                        <div className="form-item">
                                            <Controller
                                                name="date"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input placeholder='Дата покупки*' {...field}
                                                                            type="date" max="2099-12-31"/>}
                                            />
                                            {errors.date && <p>{errors.date.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="price"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input placeholder='Сумма' {...field}
                                                                            type="number"/>}
                                            />
                                            {errors.price && <p>{errors.price.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="contractNumber"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input placeholder='Номер договора*' {...field}
                                                                            type="text"/>}
                                            />
                                            {errors.contractNumber && <p>{errors.contractNumber.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="comment"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <textarea placeholder='Комментарий' {...field} />}
                                            />
                                            {errors.comment && <p>{errors.comment.message}</p>}
                                        </div>

                                        <div className="modal-admin__controls">
                                            <Uploader file={file} setFile={setFile}/>
                                            <button type="submit" className="form__btn-submit link-brown">
                                                Сохранить
                                            </button>
                                            <button type="button" className="form__btn-undoing" data-bs-dismiss="modal"
                                                    aria-label="Закрыть">
                                                Отмена
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button type="button" id="close-form-btn" className="modal-call__btn-close"
                                    data-bs-dismiss="modal" aria-label="Закрыть" value="Send">
                                <img src={modalCloseIcon} alt="Закрыть"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBuying;