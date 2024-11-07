/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
// import { ScrollContext } from '../../ScrollContext';

import './Header.css'
import './MediaHeader.css'
import headerLogo from '../../assets/icons/logo.svg'
import headerProjectIcon from '../../assets/icons/projectsIcon.svg'
import phoneIcon from '../../assets/icons/phoneIcon.svg'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../../store/userSlice.js";
import JwtService from "../../jwtService/index.js";
import rhombusIcon from "../../assets/icons/rhombusIcon.svg";
// eslint-disable-next-line react/prop-types
function Header({ scrollInstancesD }) {

    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [isAuth, setIsAuth] = useState(false);

    const handleLogout = () => {
        if (isAuth) {
            JwtService.logout().then(() => {
                setIsAuth(false);
                navigate('/', { replace: true })
            });
        }
    }

    useEffect(() => {
        if (Object.keys(user).length > 0 && JwtService.getRefreshToken()) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [user])

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (scrollInstancesD) {
                if (scrollInstancesD.scroll.instance.scroll.y > 150) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        }
        if (scrollInstancesD) {
            scrollInstancesD.on('scroll', onScroll);
        }
        return () => {
            if (scrollInstancesD) {
                scrollInstancesD.off('scroll', onScroll);
            }
        };
    }, [scrollInstancesD]);
    return (
        <>
            <header id='header' className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container container-lg">
                    <nav className="header-menu">
                        <div className="header-menu__left">
                            <Link to='/objects' className="header-link link-hovered header-link--projects">
                                <img src={headerProjectIcon} alt="Объекты" />
                                Объекты
                            </Link>
                        </div>
                        <Link to='/' className="header-logo">
                            <img src={headerLogo} alt="Prime Лого" />
                        </Link>

                        <div className="header-menu__right">
                            {/* {
                                isAuth ?
                                    <div>
                                        <button type="button" onClick={handleLogout} data-bs-dismiss="modal" className="header-link">Logout</button>
                                    </div>
                                    :
                                    <div data-bs-toggle="modal">
                                        <NavLink className="header-link link-hovered" to='/login'>
                                            Login
                                        </NavLink>
                                    </div>
                            } */}
                            <button className="header-link link-hovered header-link--call" data-bs-toggle="modal" data-bs-target="#callModal">
                                <img src={phoneIcon} alt="Телефон" />
                                позвоните мне
                            </button>
                            <a href="tel:+996772333344" className="header-link link-hovered">
                                <img src={phoneIcon} alt="Телефон" />
                                +996 772 33 33 44
                            </a>
                            <button type="button" className="header-burger link-hovered" data-bs-toggle="modal" data-bs-target="#menuModal">
                                <span className="header-burger__lines">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <span className="header-burger__text">Меню</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;