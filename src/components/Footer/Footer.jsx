import { useContext } from 'react';
import { ScrollContext } from '../../ScrollContext';
import './Footer.css'
import './MediaFooter.css'
// image
import scrollIcon from '../../assets/icons/scrollIcon.svg'
import rhombusIconWhite from '../../assets/icons/rhombusIconWhite.svg'
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function Footer({ onOpenSelectBlockModal }) {
    const scrollInstance = useContext(ScrollContext);
    const scrollToTop = () => {
        scrollInstance.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="container container-lg position-relative">
                <div className="footer-top">
                    <button type="button" className="footer-btn-contact link-hovered--opacity" data-bs-toggle="modal" data-bs-target="#callModal">Связаться с нами</button>
                    <button onClick={scrollToTop} type="button" className="footer-btn-scroll link-hovered" data-scroll-to-top>
                        <img src={scrollIcon} alt="Вверх" />
                        <span className="block-text">Вверх</span>
                    </button>
                </div>
                <div className="footer-nav">
                    <div className="footer-nav__item">
                        <img src={rhombusIconWhite} alt="Ромб" />
                        <a className="link-hovered" onClick={onOpenSelectBlockModal}>
                            Апартаменты
                        </a>
                        <span className="footer-nav__item-line" />
                    </div>
                    <div className="footer-nav__item">
                        <img src={rhombusIconWhite} alt="Ромб" />
                        <Link to='/objects' className="link-hovered">
                            Объекты
                        </Link>
                        <span className="footer-nav__item-line" />
                    </div>
                    <div className="footer-nav__item">
                        <img src={rhombusIconWhite} alt="Ромб" />
                        <Link to='/contact' className="link-hovered">
                            Контакты
                        </Link>
                        <span className="footer-nav__item-line" />
                    </div>
                </div>
                <a href="#" className="footer-link link-hovered--opacity">Правовая информация</a>
                <p className="bg-font footer__bg-one">Prime</p>
            </div>
        </footer>
    );
}
export default Footer;