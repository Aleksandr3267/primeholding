import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import modalCloseIcon from '../../../assets/icons/modalCloseIcon.svg'
import './FormBooking.css';

import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createRent} from "../../../store/orderSlice.js";
import {selectCurrentApartment} from "../../../store/apartmentSlice.js";
import Uploader from "../../FileUploader/Uploader.jsx";

const schema = yup.object().shape({
    clientName: yup.string().required("Поле обязательно для заполнения"),
    clientPhone: yup
        .string()
        .required("Поле обязательно для заполнения")
        .matches(/^[\d+]+$/, "Телефон должен содержать только цифры"),
    deposit: yup.number().required("Поле обязательно для заполнения").typeError("Поле обязательно для заполнения"),
    contractNumber: yup.string().required("Поле обязательно для заполнения"),
    comment: yup.string(),
});


// eslint-disable-next-line react/prop-types
function FormBooking({setUpdateStatus}) {
    const dispatch = useDispatch();
    const apartment = useSelector(selectCurrentApartment);
    const {handleSubmit, control, formState, setError, setValue, reset} = useForm();
    const {errors} = formState;

    const [file, setFile] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)));
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onSubmit = async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            const submitData = {
                apartment,
                clientName: data.clientName,
                clientPhone: data.clientPhone,
                contractNumber: data.contractNumber,
                contractDocument: file,
                rent: {
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    deposit: parseInt(data.deposit, 10)
                },
                comment: data.comment,
            };
            dispatch(createRent(submitData)).unwrap().then((res) => {
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
        const closeButton = document.getElementById('close-rent-form-btn');
        if (closeButton) {
            closeButton.click();
        }
    };

    const handleDateApply = () => {
        setValue("bookingDates.fromDate", startDate);
        setValue("bookingDates.toDate", endDate);
        setShowDatePicker(false);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString(); // Форматирование даты
    };

    const upStatus = () => {
        setUpdateStatus('2');
    }

    return (
        <>
            <div className="modal fade modal-for-admin" id="formBooking" tabIndex={-1} aria-labelledby="formBooking"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={handleSubmit(onSubmit)}>
                                <h4 className="modal-call__title">Бронь</h4>

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
                                                render={({field}) =>
                                                <input
                                                    pattern="[0-9]*"
                                                    placeholder='Телефон клиента*'
                                                    maxLength="20"
                                                    {...field}
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/[^0-9]/g, '')
                                                    }}
                                                />
                                                }
                                            />
                                            {errors.clientPhone && <p>{errors.clientPhone.message}</p>}
                                        </div>
                                    </div>
                                    <div className="modal-call__side">
                                        <p className='modal-for-admin__title-side'>Параметры</p>
                                        <div className="form-item">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder='Срок брони*'
                                                    value={
                                                        startDate && endDate
                                                            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                                                            : ""
                                                    }
                                                    onClick={() => setShowDatePicker(true)}
                                                    readOnly 
                                                />
                                                {errors.bookingDates && (
                                                    <p>
                                                        {errors.bookingDates.fromDate &&
                                                            errors.bookingDates.fromDate.message}
                                                        <br/>
                                                        {errors.bookingDates.toDate && errors.bookingDates.toDate.message}
                                                    </p>
                                                )}
                                            </div>
                                            {showDatePicker && (
                                                <div className='admin-term-form'>
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
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-item">
                                            <Controller
                                                name="deposit"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => <input
                                                    placeholder='Задаток(До 7 дней без задатка)' {...field}
                                                    type="number"/>}
                                            />
                                            {errors.deposit && <p>{errors.deposit.message}</p>}
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
                            <button type="button" className="modal-call__btn-close" id="close-rent-form-btn"
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

export default FormBooking;