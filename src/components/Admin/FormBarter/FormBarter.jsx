import modalCloseIcon from '../../../assets/icons/modalCloseIcon.svg'

import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import Uploader from "../../FileUploader/Uploader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentApartment} from "../../../store/apartmentSlice.js";
import {useState} from "react";
import {createBarter} from "../../../store/orderSlice.js";

const schema = yup.object().shape({
    clientName: yup.string().required("Поле обязательно для заполнения"),
    clientPhone: yup
        .string()
        .required("Поле обязательно для заполнения")
        .matches(/^[\d+]+$/, "Телефон должен содержать только цифры"),
    contractNumber: yup.string().required("Поле обязательно для заполнения"),
    comment: yup.string(),
    barterType: yup.string().required("Поле обязательно для заполнения"),
    clientOffer: yup.string().required("Поле обязательно для заполнения"),
    companyOffer: yup.string().required("Поле обязательно для заполнения"),
    clientPayment: yup.number().required("Поле обязательно для заполнения").typeError('Поле обязательно для заполнения'),
    companyPayment: yup.number().required("Поле обязательно для заполнения").typeError('Поле обязательно для заполнения'),
});


// eslint-disable-next-line react/prop-types
function FormBarter({setUpdateStatus}) {
    const dispatch = useDispatch();
    const apartment = useSelector(selectCurrentApartment);
    const {handleSubmit, control, formState, setError, setValue, reset} = useForm();
    const {errors} = formState;

    const [file, setFile] = useState({});

    const onSubmit = async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            const submitData = {
                apartment,
                clientName: data.clientName,
                clientPhone: data.clientPhone,
                contractNumber: data.contractNumber,
                contractDocument: file,
                barter: {
                    barterType: data.barterType,
                    clientOffer: data.clientOffer,
                    companyOffer: data.companyOffer,
                    clientPayment: data.clientPayment,
                    companyPayment: data.companyPayment,
                },
                comment: data.comment,
            };
            dispatch(createBarter(submitData)).unwrap().then((res) => {
                if (res?.status === 200) {
                    upStatus();
                    setFile({});
                    reset();
                    closeModal();
                }
                console.log(res);
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
        const closeButton = document.getElementById('close-barter-form-btn');
        if (closeButton) {
            closeButton.click();
        }
    };


    const upStatus = () => {
        setUpdateStatus('1');
    }

    return (
        <>
            <div className="modal fade modal-for-admin" id="formBarter" tabIndex={-1} aria-labelledby="formBarter"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={handleSubmit(onSubmit)}>
                                <h4 className="modal-call__title">Бартер</h4>

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

                                        <p className='modal-for-admin__title-side'
                                           style={{marginTop: '40px'}}>Предложение для обмена</p>
                                        <div className="form-item">
                                            <Controller
                                                name="barterType"
                                                control={control}
                                                render={({field}) => (
                                                    <input placeholder='Тип бартера' {...field} />
                                                )}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="clientOffer"
                                                control={control}
                                                render={({field}) => (
                                                    <input placeholder='Описание предложения клиента*' {...field} />
                                                )}
                                            />
                                            {errors.clientOffer && <p>{errors.clientOffer.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="companyOffer"
                                                control={control}
                                                render={({field}) => (
                                                    <input placeholder='Описание предложения компании*' {...field} />
                                                )}
                                            />
                                            {errors.companyOffer && <p>{errors.companyOffer.message}</p>}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="clientPayment"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input
                                                    placeholder='Сумма внесенная клиентом' {...field} type="number"/>}
                                            />
                                            {errors.clientPayment && <p>{errors.clientPayment.message}</p>}
                                        </div>
                                    </div>
                                    <div className="modal-call__side">
                                        <p className='modal-for-admin__title-side'>Параметры</p>
                                        <div className="form-item">
                                            <Controller
                                                name="companyPayment"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input
                                                    placeholder='Сумма внесенная компанией' {...field} type="number"/>}
                                            />
                                            {errors.companyPayment && <p>{errors.companyPayment.message}</p>}
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
                            <button type="button" id="close-barter-form-btn" className="modal-call__btn-close"
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

export default FormBarter;