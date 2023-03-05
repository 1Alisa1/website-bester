import CardTariff from '../../components/cardTariff/cardTariff';
import CardTariffBorder from '../../components/cardTariffBorder/cardTariffBorder';
import CardTariffBorderGradient from '../../components/cardTariffBorderGradient/cardTariffBorderGradient';
import CardTariffContent from '../../components/cardTariffContent/cardTariffContent';
import CardTariffContentWrapperCourses from '../../components/cardTariffContentWrapperCourses/cardTariffContentWrapperCourses';
import CardTariffContentWrapperInst from '../../components/cardTariffContentWrapperInst/cardTariffContentWrapperInst';
import CardTariffContentWrapperWeb from '../../components/cardTariffContentWrapperWeb/cardTariffContentWrapperWeb';
import CoursesSection from '../../components/coursesSection/coursesSection';
import List from '../../components/list/list';
import ListItem from '../../components/listItem/listItem';
import TariffsSection from '../../components/tariffsSection/tariffsSection';
import crown from '../../img/Crown.svg';
import prompt from '../../img/prompt.svg';
import styles from './servicesPage.module.scss';

const ServicesPage: React.FC = () => {
  return (
    <>
      <TariffsSection title="Instagram магазин">
        <CardTariffBorder>
          <CardTariff
            title="Тариф «Старт»"
            content={
              <CardTariffContentWrapperInst>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый <br className={styles.medium} />{' '}
                            Instagram магазин
                          </p>
                        }
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Любой курс в подарок на выбор
                          </p>
                        }
                        prompt={prompt}
                      />
                    </List>
                  }
                  price="69"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardTariffBorder>
        <CardTariffBorderGradient>
          <CardTariff
            title="Тариф «Стандарт»"
            content={
              <CardTariffContentWrapperInst>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый <br className={styles.medium} />{' '}
                            Instagram магазин
                          </p>
                        }
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Все 3 курса в подарок
                          </p>
                        }
                        prompt={prompt}
                      />
                      <ListItem text={<p>Онлайн консультация по запуску</p>} />
                    </List>
                  }
                  price="89"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardTariffBorderGradient>
        <CardTariffBorder icon={crown}>
          <CardTariff
            title="Тариф «VIP»"
            content={
              <CardTariffContentWrapperInst>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый Instagram магазин{' '}
                            <br className={styles.small} /> под твой товар
                          </p>
                        }
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Все 3 курса в подарок
                          </p>
                        }
                        prompt={prompt}
                      />
                      <ListItem text={<p>Помощь в поиске поставщика</p>} />
                      <ListItem
                        text={
                          <p>
                            Консультации и сопровождение{' '}
                            <br className={styles.large} />{' '}
                            <br className={styles.small} /> по запуску
                          </p>
                        }
                      />
                    </List>
                  }
                  price="159"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardTariffBorder>
      </TariffsSection>
      <TariffsSection title="Сайт (landing page)">
        <CardTariffBorder>
          <CardTariff
            title="Тариф «Старт плюс»"
            content={
              <CardTariffContentWrapperWeb>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый <br className={styles.medium} />{' '}
                            сайт (landing page)
                          </p>
                        }
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Любой курс в подарок на выбор
                          </p>
                        }
                        prompt={prompt}
                      />
                    </List>
                  }
                  price="159"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardTariffBorder>
        <CardTariffBorderGradient>
          <CardTariff
            title="Тариф «Стандарт плюс»"
            content={
              <CardTariffContentWrapperWeb>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый <br className={styles.medium} />{' '}
                            сайт (landing page)
                          </p>
                        }
                      />
                      <ListItem
                        text={
                          <p>
                            Полностью готовый <br className={styles.medium} />{' '}
                            Instagram магазин
                          </p>
                        }
                      />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Все 3 курса в подарок
                          </p>
                        }
                        prompt={prompt}
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                    </List>
                  }
                  price="199"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardTariffBorderGradient>
        <CardTariffBorder icon={crown}>
          <CardTariff
            title="Тариф «VIP плюс»"
            content={
              <CardTariffContentWrapperWeb>
                <CardTariffContent
                  description={
                    <List>
                      <ListItem
                        text={
                          <p>
                            Полностью готовый сайт{' '}
                            <br className={styles.large} />{' '}
                            <br className={styles.medium} /> (landing page){' '}
                            <br className={styles.small} /> под твой товар
                          </p>
                        }
                      />
                      <ListItem
                        text={
                          <p>
                            Полностью готовый Instagram магазин{' '}
                            <br className={styles.large} />{' '}
                            <br className={styles.small} /> под твой товар
                          </p>
                        }
                      />
                      <ListItem
                        text={
                          <p
                            style={{
                              color: '#6C5ECC',
                              borderBottom: '1px solid #6C5ECC',
                              lineHeight: '0.9',
                            }}
                          >
                            Все 3 курса в подарок
                          </p>
                        }
                        prompt={prompt}
                      />
                      <ListItem text={<p>База поставщиков</p>} />
                      <ListItem text={<p>Помощь в поиске поставщика</p>} />
                      <ListItem
                        text={
                          <p>
                            Консультации и сопровождение{' '}
                            <br className={styles.large} />{' '}
                            <br className={styles.small} /> по запуску
                          </p>
                        }
                      />
                    </List>
                  }
                  price="499"
                  onButtonBuy={() => false}
                  onButtonMore={() => false}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardTariffBorder>
      </TariffsSection>
      <CoursesSection title="Обучающие курсы">
        <div className={styles.firstRow}>
          <CardTariffBorder>
            <CardTariff
              title={
                <p>
                  13 ответов <br className={styles.small} /> на возражение
                  «дорого»
                </p>
              }
              content={
                <CardTariffContentWrapperCourses>
                  <CardTariffContent
                    description={
                      <List>
                        <ListItem
                          text={
                            <p>
                              Ты увидишь свои ошибки, из-за которых многие
                              клиенты отпадали после названия цены
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Поймёшь, как легко можно обработать{' '}
                              <br className={styles.medium} /> возражение
                              “дорого”
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Узнаешь секретные фишки от нас,{' '}
                              <br className={styles.small} /> которые мы
                              используем <br className={styles.large} /> в своих
                              переговорах
                            </p>
                          }
                        />
                      </List>
                    }
                    price="39"
                    onButtonBuy={() => false}
                  />
                </CardTariffContentWrapperCourses>
              }
            />
          </CardTariffBorder>
          <CardTariffBorder>
            <CardTariff
              title={
                <p>
                  Чек-лист продажника <br className={styles.small} /> в direct
                </p>
              }
              content={
                <CardTariffContentWrapperCourses>
                  <CardTariffContent
                    description={
                      <List>
                        <ListItem
                          text={
                            <p>
                              Узнаешь, как вести переписку, чтобы подписчики{' '}
                              <br className={styles.medium} /> не просто
                              задавали вопросы, а совершали покупки
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              На реальных примерах увидишь какие ошибки
                              совершают <br className={styles.large} /> другие
                              магазины
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Пошаговый алгоритм общения{' '}
                              <br className={styles.small} /> с клиентом{' '}
                              <br className={styles.medium} /> для увеличения{' '}
                              <br className={styles.large} /> твоих продаж
                            </p>
                          }
                        />
                      </List>
                    }
                    price="39"
                    onButtonBuy={() => false}
                  />
                </CardTariffContentWrapperCourses>
              }
            />
          </CardTariffBorder>
        </div>
        <div className={styles.secondRow}>
          <CardTariffBorder>
            <CardTariff
              title="Всё про таргет"
              content={
                <CardTariffContentWrapperCourses>
                  <CardTariffContent
                    description={
                      <List>
                        <ListItem
                          text={
                            <p>
                              Подробно разберём какие цели и задачи выполняет{' '}
                              <br className={styles.large} /> таргетированная
                              реклама
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              На реальном примере покажем, как настроить рекламу
                              через Ads Manager и в приложении Instagram
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Расскажем, как определить эффективность рекламы и
                              дадим 5 советов, которыми мы пользуемся
                            </p>
                          }
                        />
                      </List>
                    }
                    price="39"
                    onButtonBuy={() => false}
                  />
                </CardTariffContentWrapperCourses>
              }
            />
          </CardTariffBorder>
          <CardTariffBorderGradient>
            <CardTariff
              title="Комбо"
              content={
                <CardTariffContentWrapperCourses>
                  <CardTariffContent
                    description={
                      <List>
                        <ListItem
                          text={<p>13 ответов на возражение «дорого»</p>}
                        />
                        <ListItem text={<p>Чек-лист продажника в direct</p>} />
                        <ListItem text={<p>Всё про таргет</p>} />
                      </List>
                    }
                    price="79"
                    onButtonBuy={() => false}
                  />
                </CardTariffContentWrapperCourses>
              }
            />
          </CardTariffBorderGradient>
        </div>
      </CoursesSection>
    </>
  );
};

export { ServicesPage };
