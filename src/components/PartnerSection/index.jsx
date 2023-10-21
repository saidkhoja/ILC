import "./PartnerSection.scss";

const PartnerSection = () => {
    return (
        <section>
            <div className='partner-wrapper'>
                <div className='partner-wrapper__start'>
                    <div className='partner-wrapper__dating'>
                        <h4 className='partner-wrapper__dating-title'>
                            Высокие бонусы
                        </h4>
                        <p className='partner-wrapper__dating-text'>
                            Вы получаете до 35% от стоимости каждого полиса,
                            который был куплен по вашей рекомендации.
                        </p>
                        <p className='partner-wrapper__dating-text1'>
                            К примеру: юридический полис “Международный бизнес”
                            стоит $750/год, с него вы зарабатываете $260.
                        </p>
                    </div>
                    <div className='partner-wrapper__dating'>
                        <h4 className='partner-wrapper__dating-title'>
                            Полезный продукт
                        </h4>
                        <p className='partner-wrapper__dating-text2'>
                            Сервис ILC — это ваша личная команда юристов,
                            которая работает в формате “здесь и сейчас”, 24/7,
                            без выходных.
                        </p>
                        <p className='partner-wrapper__dating-text3'>
                            Нужна помощь? Всего 1 клик и персональный юрист ILC
                            уже решает ваш вопрос.
                            <b>
                                Это в несколько раз дешевле и быстрее, чем
                                искать частного специалиста.
                            </b>
                        </p>
                    </div>
                    <div className='partner-wrapper__dating'>
                        <h4 className='partner-wrapper__dating-title'>
                            Широкая аудитория
                        </h4>
                        <p className='partner-wrapper__dating-text2'>
                            Качественная юридическая помощь нужна абсолютно
                            всем: бизнесу, семьям, крупным компаниям, экспертам
                            и частным лицам.
                        </p>
                        <p className='partner-wrapper__dating-text3'>
                            Рекомендуя полис ILC,
                            <b>вы помогаете людям</b>
                            оперативно решать жизненные задачи в 1 клик.
                        </p>
                    </div>
                    <div className='partner-wrapper__dating'>
                        <h4 className='partner-wrapper__dating-title'>
                            Высокие бонусы
                        </h4>
                        <p className='partner-wrapper__dating-text4'>
                            Вы получите доступ в личный кабинет с подробной
                            информацией о том, как:
                        </p>
                        <ul className='partner-wrapper__dating-list'>
                            <li
                                style={{
                                    listStyle: "outside",
                                }}>
                                эффективно привлекать клиентов,
                            </li>
                            <li style={{ listStyle: "outside" }}>
                                отслеживать конверсию,
                            </li>
                            <li style={{ listStyle: "outside" }}>
                                повышать свой доход,
                            </li>
                            <li style={{ listStyle: "outside" }}>
                                обналичивать средства и многое другое.
                            </li>
                        </ul>
                        <p
                            style={{
                                color: "#404040",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "20px",
                                margin: "8px 0 0",
                                padding: "0",
                            }}>
                            Мы поддержим вас на всех этапах.
                        </p>
                    </div>
                    <button className='partner-wrapper__btn' type='button'>
                        <a href='#'>Стать партнером</a>
                    </button>
                </div>
                <h4 className='partner-wrapper__heading'>Начать легко</h4>
                <ul className='partner-wrapper__list'>
                    <li className='partner-wrapper__item'>
                        <div className='partner-wrapper__item-div'>
                            <span className='partner-wrapper__item-span'>
                                1
                            </span>
                            <h5 className='partner-wrapper__item-heading'>
                                Регистрация
                            </h5>
                            <p className='partner-wrapper__item-desc'>
                                Заполните простую форму для участия в программе
                                и активируйте клиентский пакет.
                            </p>
                        </div>
                        <div className='partner-wrapper__item-div'>
                            <span className='partner-wrapper__item-span'>
                                2
                            </span>
                            <h5 className='partner-wrapper__item-heading'>
                                Обучение
                            </h5>
                            <p className='partner-wrapper__item-desc'>
                                Вас ждут полезные обучающие материалы, с помощью
                                которых вы легко сможете монетизировать свое
                                время.
                            </p>
                        </div>
                    </li>
                    <li className='partner-wrapper__item1'>
                        <div className='partner-wrapper__item-div1'>
                            <span className='partner-wrapper__item-span1'>
                                3
                            </span>
                            <h5 className='partner-wrapper__item-heading1'>
                                Стратегия
                            </h5>
                            <p className='partner-wrapper__item-desc1'>
                                Воспользуйтесь подробным и понятным алгоритмом
                                действий для достижения классных результатов.
                            </p>
                        </div>
                    </li>
                    <li className='partner-wrapper__item2'>
                        <div className='partner-wrapper__item-div2'>
                            <h5 className='partner-wrapper__item-heading2'>
                                Результат
                            </h5>
                            <p className='partner-wrapper__item-desc2'>
                                Зарабатывайте до 35% с каждой покупки полиса по
                                вашей партнерской ссылке с первых дней после
                                регистрации.
                            </p>
                            <button
                                className='partner-wrapper__item-btn'
                                type='button'>
                                <a href='#'>Начать зарабатывать</a>
                            </button>
                        </div>
                    </li>
                </ul>

                <div className='partner-wrapper__end'>
                    <h3 className='partner-wrapper__end-title'>
                        Прогнозы партнерской программы на 2021 год
                    </h3>
                    <ul className='partner-wrapper__end-list'>
                        <li className='partner-wrapper__end-item'>
                            <h4 className='partner-wrapper__end-heading'>
                                $2 млн.
                            </h4>
                            <p className='partner-wrapper__end-text'>
                                Заработают партнеры ILC
                            </p>
                        </li>
                        <li className='partner-wrapper__end-item'>
                            <h4 className='partner-wrapper__end-heading'>
                                10 000+
                            </h4>
                            <p className='partner-wrapper__end-text'>
                                Полисов будет оформлено по партнерским ссылкам
                            </p>
                        </li>
                        <li className='partner-wrapper__end-item'>
                            <h4 className='partner-wrapper__end-heading1'>
                                800+
                            </h4>
                            <p className='partner-wrapper__end-text'>
                                Партнеров присоединится к нам
                            </p>
                        </li>
                        <li className='partner-wrapper__end-item'>
                            <h4 className='partner-wrapper__end-heading1'>
                                $1500
                            </h4>
                            <p className='partner-wrapper__end-text'>
                                Средний доход партнера в месяц
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
