import "./RatesSection.scss";
import Mask from "../../assets/Mask.svg";

const RatesSection = () => {
    return (
        <section>
            <div className='rates-wrapper'>
                <h3 className='rates-wrapper__title'>Тарифы</h3>
                <p className='rates-wrapper__text'>для всех и для каждого</p>
                <div className='rates-wrapper__form'>
                    <button className='rates-wrapper__btn' type='button'>
                        <a href='#'> 1 месяц</a>
                    </button>
                    <p className='rates-wrapper__text1'>Год</p>
                </div>

                <div className='rates-wrapper__list'>
                    <div className='rates-wrapper__item'>
                        <h3 className='rates-wrapper__text2'>Легкий старт</h3>
                        <h4 className='rates-wrapper__heading'>Бесплатно</h4>
                        <p className='rates-wrapper__text3'>
                            Для ознакомления с сервисом и его возможностями
                        </p>
                        <p className='rates-wrapper__heading1'>
                            Для Вас доступно
                        </p>
                        <ul className='rates-wrapper__start-list'>
                            <li>
                                <p className='rates-wrapper__start-text'>
                                    Конструктор документов
                                </p>
                                <p className='rates-wrapper__start-text1'>
                                    Личный кабинет (базовая версия)
                                </p>
                            </li>
                            <li>
                                <p className='rates-wrapper__start-text2'>
                                    Sirius
                                </p>
                                <p className='rates-wrapper__start-text3'>
                                    1 устная первичная консультация по правовому
                                    запросу
                                </p>
                            </li>
                        </ul>
                        <a className='rates-wrapper__link' href='#'>
                            Подробнее в личном кабинете
                        </a>
                        <button className='rates-wrapper__btn2'>
                            <a href='#'>Оставить заявку</a>
                        </button>
                    </div>
                    <div className='rates-wrapper__item1'>
                        <h4 className='rates-wrapper__heading2'>Стандарт</h4>
                        <p className='rates-wrapper__text4'>
                            Для физических лиц
                        </p>
                        <span className='rates-wrapper__span'>$28/месяц</span>
                        <p className='rates-wrapper__text5'>Для Вас доступно</p>
                        <ul className='rates-wrapper__standart-list'>
                            <li className='rates-wrapper__standart-item'>
                                Бесплатная телефонная линия + функция
                                “перезвоните мне”
                            </li>
                            <li className='rates-wrapper__standart-item'>
                                Доступ к первому юридическому интеллекту Sirius
                                24/7
                            </li>
                            <li className='rates-wrapper__standart-item'>
                                Личный кабинет (полная версия)
                            </li>
                            <li className='rates-wrapper__standart-item'>
                                Конструктор документов
                            </li>
                            <li className='rates-wrapper__standart-item'>
                                Устные и письменные консультации юристов 24/7
                            </li>
                        </ul>
                        <a className='rates-wrapper__link1' href='#'>
                            Подробнее в личном кабинете
                        </a>
                        <button className='rates-wrapper__btn3'>
                            <a href='#'>Оставить заявку</a>
                        </button>
                    </div>
                    <div className='rates-wrapper__item2'>
                        <h4 className='rates-wrapper__heading3'>
                            бизнес-консультант
                        </h4>
                        <p className='rates-wrapper__text6'>
                            Для частных лиц и фрилансеров
                        </p>
                        <span className='rates-wrapper__span'>$38/месяц</span>
                        <p className='rates-wrapper__text5'>Для Вас доступно</p>
                        <ul className='rates-wrapper__bizneskons-list'>
                            <li className='rates-wrapper__bizneskons-item'>
                                Бесплатная телефонная линия + функция
                                «перезвоните мне»
                            </li>
                            <li className='rates-wrapper__bizneskons-item'>
                                Доступ к первому юридическому интеллекту Sirius
                                24/7
                            </li>
                            <li className='rates-wrapper__bizneskons-item'>
                                Пакет документов для открытия бизнеса в РФ
                            </li>
                            <li className='rates-wrapper__bizneskons-item'>
                                Сопровождение сделок
                            </li>
                            <li className='rates-wrapper__bizneskons-item'>
                                Устные и письменные консультации юристов 24/7
                            </li>
                        </ul>
                        <a className='rates-wrapper__link1' href='#'>
                            Подробнее в личном кабинете
                        </a>
                        <button className='rates-wrapper__btn3'>
                            <a href='#'>Оставить заявку</a>
                        </button>
                    </div>
                    <div className='rates-wrapper__item3'>
                        <h4 className='rates-wrapper__heading4'>
                            бизнес-премиум
                        </h4>
                        <p className='rates-wrapper__text7'>
                            Для среднего бизнеса
                        </p>
                        <span className='rates-wrapper__span'>$49/месяц</span>
                        <p className='rates-wrapper__text5'>Для Вас доступно</p>
                        <ul className='rates-wrapper__biznesprem-list'>
                            <li className='rates-wrapper__biznesprem-item'>
                                Разработка уникальных договоров любой сложности
                            </li>
                            <li className='rates-wrapper__biznesprem-item'>
                                Доступ к первому юридическому искусственному
                                интеллекту Sirius — 24/7
                            </li>
                            <li className='rates-wrapper__biznesprem-item'>
                                Регистрация компаний и открытия счетов в РФ
                            </li>
                            <li className='rates-wrapper__biznesprem-item'>
                                Сопровождение сделок любой сложности
                            </li>
                            <li className='rates-wrapper__biznesprem-item'>
                                Устные и письменные консультации юристов 24/7
                            </li>
                        </ul>
                        <a className='rates-wrapper__link1' href='#'>
                            Подробнее в личном кабинете
                        </a>
                        <button className='rates-wrapper__btn3'>
                            <a href='#'>Оставить заявку</a>
                        </button>
                    </div>
                    <div className='rates-wrapper__item4'>
                        <h4 className='rates-wrapper__heading5'>
                            международный бизнес
                        </h4>
                        <p className='rates-wrapper__text8'>
                            Для ведения бизнеса за рубежом
                        </p>
                        <span className='rates-wrapper__span'>$98/месяц</span>
                        <p className='rates-wrapper__text5'>Для Вас доступно</p>
                        <ul className='rates-wrapper__interbiznes-list'>
                            <li className='rates-wrapper__interbiznes-item'>
                                Разработка уникальных договоров любой сложности
                            </li>
                            <li className='rates-wrapper__interbiznes-item'>
                                Консультации и сопровождение по регистрации
                                компаний и банковских счетов по всему миру
                            </li>
                            <li className='rates-wrapper__interbiznes-item'>
                                Оказание юридических услуг на английском языке
                            </li>
                            <li className='rates-wrapper__interbiznes-item'>
                                Консультации по международному праву
                            </li>
                            <li className='rates-wrapper__interbiznes-item'>
                                Сопровождение сделок любой сложности
                            </li>
                        </ul>
                        <a className='rates-wrapper__link1' href='#'>
                            Подробнее в личном кабинете
                        </a>
                        <button className='rates-wrapper__btn3'>
                            <a href='#'>Оставить заявку</a>
                        </button>
                    </div>
                </div>

                <img
                    className='rates-wrapper__mask-img'
                    src={Mask}
                    alt='Mask'
                />
                <div className='rates-wrapper__mask-div'>
                    <h3 className='rates-wrapper__mask-title'>
                        Станьте партнером ILC
                    </h3>
                    <p className='rates-wrapper__mask-text'>
                        и зарабатывайте на рекомендациях в любое время, из любой
                        точки мира
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RatesSection;
