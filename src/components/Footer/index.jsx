import "./Footer.scss";
import Jason from "../../assets/Jason.jpg";
import ILC from "../../assets/ILC.svg";
import Groupilc from "../../assets/Groupilc.svg";

const Footer = () => {
    return (
        <section>
            <div className='footer-wrapper'>
                <div className='footer-wrapper__start'>
                    <div className='footer-wrapper__start-img'>
                        <img
                            className='footer-wrapper__start-jason'
                            src={Jason}
                            alt='Jason'
                        />
                        <span className='footer-wrapper__start-span'>
                            <b
                                style={{
                                    color: "#303030",
                                    fontSize: "24px",
                                    fontStyle: "italic",
                                    lineHeight: "15.915px",
                                }}>
                                “
                            </b>
                            Я лично буду поддерживать вас на всех этапах
                            развития в программе. Обращайтесь ко мне с любым
                            вопросом email.
                        </span>
                    </div>
                    <div className='footer-wrapper__start-title'>
                        <p className='footer-wrapper__start-desc'>
                            Руководитель ООО ILC
                        </p>
                        <h4 className='footer-wrapper__start-heading'>
                            Александр Орлов
                        </h4>
                        <p className='footer-wrapper__start-desc1'>
                            10 лет в управлении и юриспуденции
                        </p>
                        <ul className='footer-wrapper__start-list'>
                            <li>
                                Мы стараемся окружить заботой и создать
                                максимально комфортные условия для развития
                                каждого партнера:
                            </li>
                            <li
                                style={{
                                    listStyle: "outside",
                                    marginLeft: "20px",
                                }}>
                                личный наставник,
                            </li>
                            <li
                                style={{
                                    listStyle: "outside",
                                    marginLeft: "20px",
                                }}>
                                пошаговое обучение,
                            </li>
                            <li
                                style={{
                                    listStyle: "outside",
                                    marginLeft: "20px",
                                }}>
                                готовые инструменты для продвижения
                            </li>
                            <li>и мгновенные выплаты бонусов.</li>
                        </ul>
                        <p className='footer-wrapper__start-desc2'>
                            Больше деталей партнерской программы смотрите в
                            личном кабинете после регистрации.
                        </p>
                        <button
                            className='footer-wrapper__start-btn'
                            type='button'>
                            <a href='#'>Зарегистрироваться</a>
                        </button>
                    </div>
                </div>
                <div className='footer-wrapper__end'>
                    <span className='footer-wrapper__border'></span>
                    <div className='footer-wrapper__ilc'>
                        <div className='footer-wrapper__ilc1'>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <img
                                    className='footer-wrapper__ilc-svg'
                                    src={ILC}
                                    alt='svg'
                                />
                                <p className='footer-wrapper__ilc-desc'>
                                    International Legal Center
                                </p>
                            </div>

                            <span className='footer-wrapper__ilc-span'>
                                Первый цифровой международный юридический центр
                            </span>
                        </div>
                        <img
                            className='footer-wrapper__group-ilc'
                            src={Groupilc}
                            alt='Groupilc'
                        />
                    </div>
                    <div className='footer-wrapper__c'>
                        <h6 className='footer-wrapper__c-title'>
                            ©2021 «International Legal Center» | Разработано:
                            effex-it.com
                        </h6>
                        <ul className='footer-wrapper__c-list'>
                            <li className='footer-wrapper__c-item'>
                                Политика конфиденциальности
                            </li>
                            <li className='footer-wrapper__c-item1'>
                                Пользовательское соглашение
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
