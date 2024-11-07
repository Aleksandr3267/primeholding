


import { NavLink } from "react-router-dom";
import './MenuModal.css'
import './MediaMenuModal.css'

// image
import modalCloseIcon from '../../assets/icons/modalCloseIcon.svg'
import instagramIcon from '../../assets/icons/instagramIcon.svg'
import facebookIcon from '../../assets/icons/facebookIcon.svg'
import rhombusIcon from '../../assets/icons/rhombusIcon.svg'

// eslint-disable-next-line react/prop-types
function MenuModal({ onOpenSelectObjectModal }) {

    return (
        <div className="modal fade modal-menu" id="menuModal" tabIndex={-1} aria-labelledby="menuModal" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body modal-menu__body">
                        <div className="modal-menu__body-content">
                            <button type="button" className="modal-menu__btn-close" data-bs-dismiss="modal" aria-label="Закрыть">
                                <img src={modalCloseIcon} alt="Закрыть" />
                            </button>
                            <div className="modal-menu__left">
                                <a href="#" className="link-hovered">Правовая информация</a>
                            </div>
                            <div className="modal-menu__list">
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Главная
                                    </NavLink>
                                </div>
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/objects'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Объекты
                                    </NavLink>
                                </div>
                                <div className="modal-menu__list-item">
                                    {/* test */}
                                    <a href="#" className="modal-menu__list-item__link link-hovered" data-bs-dismiss="modal" onClick={onOpenSelectObjectModal}>Апартаменты</a>
                                    <div className="modal-menu__list-item__links">
                                        <a href="#" className="modal-menu__list-item__links-link link-hovered--opacity" data-bs-toggle="modal" data-bs-target="#installmentCalculator">Калькулятор
                                            рассрочки</a>
                                    </div>
                                </div>
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/location'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Локация
                                    </NavLink>
                                    <div className="modal-menu__list-item__links">
                                        <a href="https://go.2gis.com/ruz92" target='_blank' className="modal-menu__list-item__links-link link-hovered--opacity" rel="noreferrer">Построить
                                            маршрут в 2Gis</a>
                                    </div>
                                </div>
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/contact'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Контакты
                                    </NavLink>
                                    <div className="modal-menu__list-item__links">
                                        <a href="tel:+996772333344" className="modal-menu__list-item__links-link link-hovered--opacity">Позвонить</a>
                                        <button type="button" className="modal-menu__list-item__links-link link-hovered--opacity" data-bs-toggle="modal" data-bs-target="#callModal">Заказать звонок</button>
                                    </div>
                                </div>
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/barter'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Бартер
                                    </NavLink>
                                </div>
                                <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/about'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        О компании
                                    </NavLink>
                                </div>
                                <div className="modal-menu__list-item">
                                    <a href="#" className="modal-menu__list-item__link link-hovered" data-bs-toggle="modal" data-bs-target="#galleryModal">Галерея</a>
                                </div>
                                {/* <div className="modal-menu__list-item" data-bs-dismiss="modal">
                                    <NavLink className="modal-menu__list-item__link link-hovered" to='/news'>
                                        <img src={rhombusIcon} alt="Ромб" className="modal-menu__list-item__link--active__rhombus" />
                                        Новости
                                    </NavLink>
                                </div> */}
                            </div>
                            <div className="modal-menu__socials">
                                <a href="https://www.instagram.com/primeholding_kg/" target="_blank" className="modal-menu__socials-link" rel="noreferrer">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                                <a href="https://www.facebook.com/Prime-Holding-100990282532582/" target="_blank" className="modal-menu__socials-link" rel="noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                            </div>
                        </div>
                        <p className="bg-font modal-menu__bg-one">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MenuModal;