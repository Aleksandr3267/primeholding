import modalCloseIcon from '../../../assets/icons/modalCloseIcon.svg'
import './FormCancellation.css';

import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import {cancelOrder} from "../../../store/orderSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentApartment} from "../../../store/apartmentSlice.js";

const schema = yup.object().shape({
    reason: yup.string().required("Поле обязательно для заполнения"),
});


// eslint-disable-next-line react/prop-types
function FormCancellation({setUpdateStatus}) {
    const dispatch = useDispatch();
    const apartment = useSelector(selectCurrentApartment);
    const {handleSubmit, control, formState, setError, setValue, reset} = useForm();
    const {errors} = formState;

    const onSubmit = async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            const submitData = {
                apartment,

                reason: data.reason,
            };
            dispatch(cancelOrder(submitData)).unwrap().then((res) => {
                if (res && res?.apartment) {
                    reset();
                    closeModal();
                    upStatus();
                }
            });

        } catch (validationErrors) {
            validationErrors.inner.forEach((error) => {
                setError(error.path, {
                    type: "manual", message: error.message,
                });
            });
        }
    };

    const closeModal = () => {
        const closeButton = document.getElementById('close-cancel-form-btn');
        if (closeButton) {
            closeButton.click();
        }
    };

    const upStatus = () => {
        setUpdateStatus('4');
    }

    return (<>
            <div className="modal fade modal-for-admin" id="formCancellation" tabIndex={-1}
                 aria-labelledby="formCancellation" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body modal-call__body">
                            <form className="modal-call__form" onSubmit={handleSubmit(onSubmit)}>
                                <h4 className="modal-call__title">Отмена</h4>

                                <div className="modal-for-admin__forms">

                                    <div className="modal-call__side">
                                        <div className="modal-call__side-panel">
                                            <p className='modal-for-admin__title-side'>Причина отмены*</p>
                                            <div className="form-item">
                                                <Controller
                                                    name="reason"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field}) => <textarea
                                                        placeholder='Причина отмены' {...field} />}
                                                />
                                                {errors.reason && <p>{errors.reason.message}</p>}
                                            </div>
                                            <p className="text-accept-manager">Требуется подтверждение от
                                                руководителя</p>
                                        </div>
                                        <div className="modal-admin__controls">
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
                            <button type="button" id="close-cancel-form-btn" className="modal-call__btn-close"
                                    data-bs-dismiss="modal" aria-label="Закрыть" value="Send">
                                <img src={modalCloseIcon} alt="Закрыть"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default FormCancellation;