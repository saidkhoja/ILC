import "./SupportSection.scss";
import SSImg from "../../assets/SSImg.svg";
import Telsirius from "../../assets/sirius61.svg";

const SupportSection = () => {
    return (
        <section>
            <div className='support-wrapper'>
                <div className='support-wrapper__start'>
                    <div
                        className="support-wrapper__SS">
                        <img
                            className='support-wrapper__SSImg'
                            src={SSImg}
                            alt=''
                        />
                        <h3 className='support-wrapper__heading'>
                            Ваша личная online команда юристов
                        </h3>
                        <p className='support-wrapper__text'>
                            Мы предоставляем комплексный консалтинговый сервис с
                            полисной системой обслуживания для частных клиентов
                            и для бизнеса, с использованием новейших цифровых
                            технологий.
                        </p>
                    </div>
                    <ul className='support-wrapper__list'>
                        <li className='support-wrapper__list-item'>
                            <span className='support-wrapper__list-span'>
                                100+
                                <b>тыс</b>
                            </span>
                            <p className='support-wrapper__list-desc'>
                                Клиентов <br /> по всему миру
                            </p>
                        </li>
                        <li className='support-wrapper__list-item1'>
                            <span className='support-wrapper__list-span1'>
                                15
                                <b>лет</b>
                            </span>
                            <p className='support-wrapper__list-desc1'>
                                Опытных <br /> юристов в штате
                            </p>
                        </li>
                        <li className='support-wrapper__list-item2'>
                            <span className='support-wrapper__list-span2'>
                                50+
                            </span>
                            <p className='support-wrapper__list-desc2'>
                                Опытных
                                <br />
                                юристов в штате
                            </p>
                        </li>
                        <li className='support-wrapper__list-item3'>
                            <span className='support-wrapper__list-span3'>
                                SIRIUS
                            </span>
                            <p className='support-wrapper__list-desc3'>
                                Система на базе искусственного интеллекта
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='support-wrapper__end'>
                    <h3 className='support-wrapper__heading1'>
                        Даём поддержку
                    </h3>
                    <ul className='support-wrapper__list1'>
                        <li className='support-wrapper__item'>
                            <h5 className='support-wrapper__heading2'>
                                Бизнесу
                            </h5>
                            <p className='support-wrapper__text1'>
                                Услуги профессиональных юристов для вашей
                                компании по фиксированному тарифу — это в
                                несколько раз выгоднее, чем содержать свой штат.
                            </p>
                        </li>
                        <li className='support-wrapper__item'>
                            <h5 className='support-wrapper__heading3'>
                                StartUP проектам
                            </h5>
                            <p className='support-wrapper__text2'>
                                Эксперты ILC помогут выбрать оптимальную
                                правовую форму для ведения бизнеса,
                                оптимизировать налоги и подготовить необходимый
                                пакет документов.
                            </p>
                        </li>
                        <li className='support-wrapper__item'>
                            <h5 className='support-wrapper__heading4'>
                                Частным клиентам
                            </h5>
                            <p className='support-wrapper__text3'>
                                Оперативные решения сложных вопросов в режиме
                                онлайн: ДТП, наследство, страховые споры,
                                земельные и имущественные процессы, защита прав.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='support-wrapper-end'>
                <h3 className='support-wrapper-end__heading5'>
                    Преимущества сервиса
                </h3>
                <ul className='support-wrapper-end__list2'>
                    <li className='support-wrapper-end__item1'>
                        <img
                            className='support-wrapper-end__telsirius'
                            src={Telsirius}
                            alt='Telsirius'
                        />
                        <div className='support-wrapper-end__btn'>
                            <span> Чем могу вам помочь?</span>
                            <button
                                className='support-wrapper-end__btn1'
                                type='button'>
                                <a href='#'>Задайте вопрос</a>
                            </button>
                        </div>
                    </li>
                    <li className='support-wrapper-end__item1'>
                        <h6 className='support-wrapper-end__heading6'>
                            SIRIUS
                        </h6>
                        <div className='support-wrapper-end__desc'>
                            <p>
                                — первый полноценный искусственный интеллект,
                                самостоятельно консультирующий людей по любым
                                юридическим вопросам в режиме реального времени.
                            </p>
                            <p>
                                Sirius анализирует входящий запрос и оперативно
                                генерирует квалифицированный ответ на основании
                                юридической логики.
                            </p>
                            <p>
                                Доступ к системе предоставляется владельцу
                                полиса в личном кабинете на нашем сайте.
                            </p>
                        </div>
                    </li>
                    <li className='support-wrapper-end__item1'>
                        <div className='support-wrapper-end__descreption'>
                            <p className='support-wrapper-end__desc1'>
                                работает 24/7
                            </p>
                            <p className='support-wrapper-end__desc1'>
                                100% точность и корректность ответов
                            </p>
                            <p className='support-wrapper-end__desc1'>
                                при необходимости, подключает живого специалиста
                            </p>
                            <p className='support-wrapper-end__desc1'>
                                не берет больничный и никогда не уволится
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className='position-list'>
                <li className='position-list__item1'>
                    <span className='position-list__span1'></span>
                    <h5 className='position-list__heading1'>Удобный формат </h5>
                    <p className='position-list__desc'>
                        Консультируем 24/7 в любом удобном формате: чат,
                        аудио-звонок, c помощью искусственного интеллекта Sirius
                        в личном кабинете.
                    </p>
                </li>
                <li className='position-list__item2'>
                    <span className='position-list__span2'></span>
                    <h5 className='position-list__heading2'>Доступная цена</h5>
                    <p className='position-list__desc'>
                        Выбирайте комфортный для себя пакет юридической
                        поддержки, оплачивая только то, что действительно нужно.
                    </p>
                </li>
                <li className='position-list__item3'>
                    <span className='position-list__span3'></span>
                    <h5 className='position-list__heading3'>
                        Налоговый калькулятор
                    </h5>
                    <p className='position-list__desc'>
                        Точный расчет налоговой нагрузки за считанные минуты с
                        помощью телеграм-бота ILC_tax — это быстро и удобно!
                    </p>
                </li>
                <li className='position-list__item4'>
                    <span className='position-list__span4'></span>
                    <h5 className='position-list__heading4'>
                        Конструктор документов
                    </h5>
                    <p className='position-list__desc'>
                        Доступ к более чем 9500 готовых и проработанных
                        документов для бизнеса — бесплатно!
                    </p>
                </li>
                <li className='position-list__item5'>
                    <span className='position-list__span5'></span>
                    <h5 className='position-list__heading5'>
                        Бесплатный доступ для всех, кто зарегистрируется
                    </h5>
                    <p className='position-list__desc'>
                        Конструктор с ограниченным количеством документов на
                        базе телеграм-бота
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default SupportSection;
