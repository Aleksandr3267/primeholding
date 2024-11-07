import { useState } from 'react';
import modalCloseIcon from '../../../assets/icons/modalCloseIcon.svg'

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import { createMortgage, createRent } from "../../../store/orderSlice.js";
import { showSingleErrorToast, showSingleSuccessToast } from "../../../utils/toastify.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentApartment } from "../../../store/apartmentSlice.js";
import Uploader from "../../FileUploader/Uploader.jsx";


const schema = yup.object().shape({
    clientName: yup.string().required("Поле обязательно для заполнения"),
    clientPhone: yup
        .string()
        .required("Поле обязательно для заполнения")
        .matches(/^[\d+]+$/, "Телефон должен содержать только цифры"),
    paymentNotificationDate: yup.date().required("Поле обязательно для заполнения").typeError("Поле обязательно для заполнения"),
    contractNumber: yup.string().required("Поле обязательно для заполнения"),
    comment: yup.string(),
    firstPayment: yup.number().typeError("Поле обязательно для заполнения"),
    monthlyPayment: yup.number().typeError("Поле обязательно для заполнения"),
    email: yup.string().email("Некорректный email").required("Поле обязательно для заполнения"),
});


// eslint-disable-next-line react/prop-types
function FormInstallment({ setUpdateStatus }) {
    const dispatch = useDispatch();
    const apartment = useSelector(selectCurrentApartment);
    const { handleSubmit, control, formState, setError, setValue, reset } = useForm();
    const { errors } = formState;

    const [file, setFile] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onSubmit = async (data) => {
        try {
            await schema.validate(data, { abortEarly: false });
            // calculate month from startDate and endDate
            const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
            const totalPayment = totalMonths * data.monthlyPayment + data.firstPayment;
            const submitData = {
                apartment,
                clientName: data.clientName,
                clientPhone: data.clientPhone,
                contractNumber: data.contractNumber,
                contractDocument: file,
                mortgage: {
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    price: totalPayment || 0,
                    firstPayment: data.firstPayment,
                    monthlyPayment: data.monthlyPayment,
                    email: data.email,
                    paymentNotificationDate: new Date(data.paymentNotificationDate),
                },
                comment: data.comment,
            };
            dispatch(createMortgage(submitData)).unwrap().then((res) => {
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

    const handleDateApply = () => {
        setValue("bookingDates.fromDate", startDate);
        setValue("bookingDates.toDate", endDate);
        setShowDatePicker(false);
    };
    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const closeModal = () => {
        const closeButton = document.getElementById('close-mortgage-form-btn');
        if (closeButton) {
            closeButton.click();
        }
    };

    // console.log('file', file)

    const upStatus = () => {
        setUpdateStatus('5');
    }

    return (<>
        <div className="modal fade modal-for-admin" id="formInstallment" tabIndex={-1}
            aria-labelledby="formInstallment" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body modal-call__body">
                        <form className="modal-call__form" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="modal-call__title">Рассрочка</h4>
                            <div className="modal-for-admin__forms">
                                <div className="modal-call__side">
                                    <p className='modal-for-admin__title-side'>Данные клиента</p>
                                    <div className="form-item">
                                        <Controller
                                            name="clientName"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input placeholder='ФИО клиента*' {...field} />}
                                        />
                                        {errors.clientName && <p>{errors.clientName.message}</p>}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="clientPhone"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input
                                                placeholder='Телефон клиента*' {...field} />}
                                        />
                                        {errors.clientPhone && <p>{errors.clientPhone.message}</p>}
                                    </div>
                                    <p className='modal-for-admin__title-side'
                                        style={{ marginTop: '40px' }}>Параметры</p>
                                    <div className="form-item">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='Срок брони*'
                                                value={startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : ""}
                                                onClick={() => setShowDatePicker(true)}
                                                readOnly
                                            />
                                            {errors.bookingDates && (<p>
                                                {errors.bookingDates.fromDate && errors.bookingDates.fromDate.message}
                                                <br />
                                                {errors.bookingDates.toDate && errors.bookingDates.toDate.message}
                                            </p>)}
                                        </div>
                                        {showDatePicker && (<div className='admin-term-form'>
                                            <div className="admin-term-blocks">
                                                <div className="admin-term-block">
                                                    <p>От:</p>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        selectsStart
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        minDate={new Date()}
                                                        dateFormat="dd.MM.yy"
                                                    />
                                                </div>
                                                <div className="admin-term-block">
                                                    <p>До:</p>
                                                    <DatePicker
                                                        selected={endDate}
                                                        onChange={(date) => setEndDate(date)}
                                                        selectsEnd
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        minDate={startDate || new Date()}
                                                        dateFormat="dd.MM.yy"
                                                    />
                                                </div>
                                            </div>
                                            <button className='admin-term-button'
                                                onClick={handleDateApply}>Применить
                                            </button>
                                        </div>)}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="firstPayment"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input
                                                placeholder='Сумма первоначального взноса*' {...field}
                                                type="number" />}
                                        />
                                        {errors.firstPayment && <p>{errors.firstPayment.message}</p>}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="monthlyPayment"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input placeholder='Ежемесячный платеж*' {...field}
                                                type="number" />}
                                        />
                                        {errors.monthlyPayment && <p>{errors.monthlyPayment.message}</p>}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="contractNumber"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input placeholder='Номер договора*' {...field}
                                                type="text" />}
                                        />
                                        {errors.contractNumber && <p>{errors.contractNumber.message}</p>}
                                    </div>

                                </div>
                                <div className="modal-call__side">
                                    <p className='modal-for-admin__title-side'>Уведомление о ежемесячных
                                        платежах</p>
                                    <div className="form-item">
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => <input placeholder='Почта*' {...field} />}
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="additionalEmail"
                                            control={control}
                                            render={({ field }) => <input placeholder='Доп почта' {...field} />}
                                        />
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="paymentNotificationDate"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <input
                                                placeholder='Когда отправлять уведомление*' {...field} type="date"
                                                max="2099-12-31" />}
                                        />
                                        {errors.paymentNotificationDate &&
                                            <p>{errors.paymentNotificationDate.message}</p>}
                                    </div>
                                    <div className="form-item">
                                        <Controller
                                            name="comment"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <textarea placeholder='Комментарий' {...field} />}
                                        />
                                        {errors.comment && <p>{errors.comment.message}</p>}
                                    </div>

                                    <div className="modal-admin__controls">
                                        <Uploader file={file} setFile={setFile} />
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
                        <button type="button" id="close-mortgage-form-btn" className="modal-call__btn-close"
                            data-bs-dismiss="modal" aria-label="Закрыть" value="Send">
                            <img src={modalCloseIcon} alt="Закрыть" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default FormInstallment;