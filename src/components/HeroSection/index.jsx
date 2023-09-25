import "./HeroSection.scss";
import Employees from "../../assets/Employees.svg";

const HeroSection = () => {
    return (
        <section>
            <div className='hero-wrapper'>
                <div className='hero-wrapper__start'>
                    <ul className='hero-wrapper__list'>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                О компании
                            </a>
                        </li>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                Sirius
                            </a>
                        </li>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                Тарифы
                            </a>
                        </li>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a className='hero-wrapper__link' href='#'>
                                Контакты
                            </a>
                        </li>
                    </ul>

                    <h2 className='hero-wrapper__text'>
                        Юридический полис ILC — быстрое решение сложных вопросов
                        24/7
                    </h2>
                    <p className='hero-wrapper__text1'>
                        Ваша личная команда профессиональных юристов, которая
                        всегда под рукой. А также доступ к бонусам партнерской
                        программы — доход до $260 с каждого полиса, купленного
                        по вашему приглашению.
                    </p>
                    <button className='hero-wrapper__btn' type='button'>
                        <a href='#'>Попробовать бесплатно</a>
                    </button>
                </div>
                <div className='hero-wrapper__end'>
                    <div className='hero-wrapper__employees'>
                        <img
                            className='hero-wrapper__employees-img'
                            src={Employees}
                            alt='employees'
                        />
                        <div className='hero-wrapper__span'>
                            <span>Доход до $260</span> с каждого полиса
                        </div>
                    </div>
                    <ul className='hero-wrapper__list1'>
                        <li className='hero-wrapper__item'>
                            <h4 className='hero-wrapper__heading'>
                                Юридическая поддержка 24/7
                            </h4>
                        </li>
                        <li className='hero-wrapper__item1'>
                            <h4 className='hero-wrapper__heading'>
                                Множество возможностей в одном полисе
                            </h4>
                        </li>
                        <li className='hero-wrapper__item2'>
                            <h4 className='hero-wrapper__heading'>
                                Бонусы партнерской программы
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
