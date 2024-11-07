import './Login.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwtService from "../../jwtService/index.js";
import {selectUser} from "../../store/userSlice.js";
import {useEffect, useState} from "react";
import {showSingleErrorToast} from "../../utils/toastify.js";

function Login() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (Object.keys(user).length > 0 && jwtService.getRefreshToken()) {
            setLoggedIn(true);
            // return navigate('/', { replace: true });
        }
    }, [navigate, user]);

    const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
        defaultValues: {
            // joomart.online@gmail.com
            emailOrLogin: '',
            // zhomart1234
            password: '',
        },
        mode: 'onChange',
    });



    const onSubmit = async ({emailOrLogin, password}) => {

        jwtService
            .signInWithEmailAndPassword(emailOrLogin, password)
            .then(() => {
                navigate('/', { replace: true });
                // No need to do anything, user data will be set at app/auth/AuthContext
            })
            .catch((err) => {
                showSingleErrorToast(err?.response?.data?.message || err?.message)
            });
    };

    const handleLogout = () => {
        jwtService.logout().then(() => {
            setLoggedIn(false);
        });
    }

    return (
        <>
            {loggedIn ? (
              <div className="login" >
                  <div className="login-dialog">
                      <div className="login-content">
                          <div className="login-body login-call__body">
                              <h2>Вы уже авторизованы под именем {user?.name}</h2>
                              <button type="button" className="form__btn-submit link-brown" onClick={handleLogout} >
                                  Выйти
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
            ) : (
              <div className="login" >
                  <div className="login-dialog">
                      <div className="login-content">
                          <div className="login-body login-call__body">
                              <form className="login-call__form" onSubmit={handleSubmit(onSubmit)}>

                                  <label className="form-item">
                                      <input
                                        className='form-item__input'
                                        type="email"

                                        title={errors.email?.message}
                                        {...register('emailOrLogin', { required: 'Укажите почту' })}
                                        placeholder="Email" />
                                  </label>
                                  <label className="form-item">
                                      <input
                                        className='form-item__input'
                                        type="password"

                                        title={errors.password?.message}
                                        {...register('password', { required: 'Укажите пароль' })}
                                        placeholder="Пароль" />
                                  </label>
                                  <button type="submit" className="form__btn-submit link-brown" >
                                      Войти
                                  </button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            )}

        </>
    );
}

export default Login;