import "./Header.scss";
import ILC from "../../assets/ILC.svg";

const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <div className='header-wrapper__start'>
                    <img className='header-wrapper__svg' src={ILC} alt='svg' />
                    <p className='header-wrapper__text'>
                        International Legal Center
                    </p>

                    <span className='header-wrapper__text1'>
                        Первый цифровой международный юридический центр
                    </span>
                </div>
                <div className='header-wrapper__end'>
                    <a
                        className='header-wrapper__span'
                        href='tel:+998-33-391-19-19'>
                        8 (800) 511-37-68
                    </a>
                    <button className='header-wrapper__btn' type='button'>
                        <a href='#'>Войти</a>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
