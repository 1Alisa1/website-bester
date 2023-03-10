import CardTariff from '../../components/cardTariff/cardTariff';
import CardTariffBorder from '../../components/cardTariffBorder/cardTariffBorder';
import CardBorderGradient from '../../components/cardBorderGradient/cardBorderGradient';
import CardTariffContent from '../../components/cardTariffContent/cardTariffContent';
import CardTariffContentWrapperCourses from '../../components/cardTariffContentWrapperCourses/cardTariffContentWrapperCourses';
import CardTariffContentWrapperInst from '../../components/cardTariffContentWrapperInst/cardTariffContentWrapperInst';
import CardTariffContentWrapperWeb from '../../components/cardTariffContentWrapperWeb/cardTariffContentWrapperWeb';
import CoursesSection from '../../components/coursesSection/coursesSection';
import List from '../../components/list/list';
import ListItem from '../../components/listItem/listItem';
import Modal from '../../components/modal/modal';
import TariffsSection from '../../components/tariffsSection/tariffsSection';
import crown from '../../img/Crown.svg';
import circle from '../../img/circle.svg';
import styles from './servicesPage.module.scss';
import CardTariffModalContentWrapper from '../../components/cardTariffModalContentWrapper/cardTariffModalContentWrapper';
import { useState } from 'react';
import CardTariffModal from '../../components/cardTariffModal/cardTariffModal';
import CloseImg from '../../components/closeImg/closeImg';
import ListItemWithToolTip from '../../components/listItemWithToolTip/listItemWithToolTip';

const ServicesPage: React.FC = () => {
  const [modalContentIndex, setModalContentIndex] = useState<number>(0);
  const [modalActive, setModalActive] = useState(false);
  const [modalToolTipActive, setModalToolTipActive] = useState(false);
  const [modalToolTipContent, setModalToolTipContent] = useState<React.ReactNode>(null);

  const toolTipContent = (
    <ul>
      <li>
        <img src={circle} alt="circle"></img>
        <p className={styles.text}>
          13 ответов <br className={styles.medium} /> на возражение “дорого”
        </p>
      </li>
      <li>
        <img src={circle} alt="circle"></img>
        <p className={styles.text}>
          Чек-лист продажника <br className={styles.medium} /> в direct
        </p>
      </li>
      <li>
        <img src={circle} alt="circle"></img>
        <p className={styles.text}>Всё про таргет</p>
      </li>
    </ul>
  );

  const modalContents = [
    (
      <CardTariffModal
        title="Тариф «Старт»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый магазин в Instagram
                    с загруженным основным контентом,
                    что значительно упрощает вход в товарный
                    бизнес
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    База поставщиков (РБ и РФ), которые работают
                    уже не первый месяц, и шанс быть обманутым
                    равен 0! Все поставщики проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Наш любой онлайн курс на выбор!
                    Ты выбираешь один из трёх курсов, который
                    больше заинтересовал и внедряешь эти знания
                    в свою работу
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые уже покупали
                    у кого-то курсы и имеют минимальное
                    понимание в товарном бизнесе
                    (если нет знаний про товарный бизнес, тогда
                    советуем присмотреться к тарифу «Стандарт»
                    или «VIP»)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу (если нет
                    знаний про товарный бизнес, тогда советуем
                    присмотреться к тарифу «Стандарт» или «VIP»)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное
                    (многим понравится такой подарок).
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины
                    и желание попробовать другие ниши,
                    то это идеальный вариант
                  </p>
                }
              />
            </List>
          </>
        }
        price="69"
        onButtonBuy={() => false}
      />
    ),
    (
      <CardTariffModal
        title="Тариф «Стандарт»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый магазин в Instagram
                    с загруженным основным контентом,
                    что значительно упрощает вход
                    в товарный бизнес
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    База поставщиков (РБ и РФ), которые работают
                    уже не первый месяц, и шанс быть обманутым
                    равен 0! Все поставщики проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Онлайн консультация по запуску магазина.
                    Можно задавать любые вопросы, которые
                    интересуют
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Все 3 наших курса в подарок! Изучаешь все 3
                    курса и внедряешь эти знания для
                    значительного упрощения работы
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые уже покупали
                    у кого-то курсы и имеют минимальное
                    понимание в товарном бизнесе или не имеют
                    его вовсе
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу (здесь ты
                    найдёшь всю основную информацию про товарный
                    бизнес)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное.
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины и есть
                    желание попробовать другие ниши,
                    то это идеальный вариант! (Но советуем
                    присмотреться к тарифу «Старт», уверены у
                    тебя уже хватает знаний)
                  </p>
                }
              />
            </List>
          </>
        }
        price="89"
        onButtonBuy={() => false}
      />
    ),
    (
      <CardTariffModal
        title="Тариф «VIP»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый магазин в Instagram под
                    твой товар. От тебя требуется только
                    название товара и фото для примера.
                    Магазин будет выполнен под ключ с твоим
                    дизайном
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Поможем найти поставщиков (РБ и РФ), которые
                    работают уже не первый месяц, и шанс быть
                    обманутым равен 0! Все поставщики будут
                    проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Онлайн консультация и сопровождение по
                    запуску магазина. Можно задавать любые
                    вопросы, которые интересуют
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Все 3 наших курса в подарок! Изучаешь все 3
                    курса и внедряешь эти знания для
                    значительного упрощения работы
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые не имеют
                    никакого понимания в товарном бизнесе или
                    имеют это понимание, но хотят магазин
                    под свой товар, которого у нас нет в прайсе
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу (здесь вы
                    найдёте всю основную информацию про товарный
                    бизнес и получите консультацию по запуску
                    магазина)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное.
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины и есть
                    желание попробовать другие ниши,
                    то это идеальный вариант! (Но советуем
                    присмотреться к тарифу «Старт», уверены
                    у тебя уже хватает знаний)
                  </p>
                }
              />
            </List>
          </>
        }
        price="159"
        onButtonBuy={() => false}
      />
    ),
    (
      <CardTariffModal
        title="Тариф «Старт плюс»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый сайт (landing page)
                    под твой товар
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    База поставщиков (РБ и РФ), которые работают
                    уже не первый месяц, и шанс быть обманутым
                    равен 0! Все поставщики проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Наш любой онлайн курс на выбор!
                    Ты выбираешь один из трёх курсов, который
                    больше заинтересовал и внедряешь эти знания
                    в свою работу
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые уже покупали
                    у кого-то курсы и имеют минимальное
                    понимание в товарном бизнесе
                    (если нет знаний про товарный бизнес,
                    тогда советуем присмотреться к тарифу
                    «Стандарт плюс» или «VIP плюс»)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу
                    (если нет знаний про товарный бизнес,
                    тогда советуем присмотреться к тарифу
                    «Стандарт плюс» или «VIP плюс»)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное
                    (многим понравится такой подарок).
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины
                    и желание попробовать другие ниши,
                    то это идеальный вариант
                  </p>
                }
              />
            </List>
          </>
        }
        price="159"
        onButtonBuy={() => false}
      />
    ),
    (
      <CardTariffModal
        title="Тариф «Стандарт плюс»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый сайт (landing page) под
                    твой товар
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Полностью готовый Instagram под товар
                    с загруженным основным контентом
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    База поставщиков (РБ и РФ), которые работают
                    уже не первый месяц, и шанс быть обманутым
                    равен 0! Все поставщики проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Все 3 наших курса в подарок! Изучаешь все 3
                    курса и внедряешь эти знания для
                    значительного упрощения работы
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Онлайн консультация по запуску магазина.
                    Можно задавать любые вопросы, которые
                    интересуют
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые уже покупали
                    у кого-то курсы и имеют минимальное
                    понимание в товарном бизнесе или не имеют
                    его вовсе
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу (здесь
                    ты найдёшь всю основную информацию
                    про товарный бизнес)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное.
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины и есть
                    желание попробовать другие ниши,
                    то это идеальный вариант! (Но советуем
                    присмотреться к тарифу «Старт плюс», уверены
                    у тебя уже хватает знаний)
                  </p>
                }
              />
            </List>
          </>
        }
        price="199"
        onButtonBuy={() => false}
      />
    ),
    (
      <CardTariffModal
        title="Тариф «VIP плюс»"
        description={
          <>
            <List title="В данный тариф входит:">
              <ListItem
                text={
                  <p>
                    Полностью готовый сайт (landing page)
                    и магазин в Instagram под твой товар. От
                    тебя требуется только название товара и фото
                    для примера. Магазин будет выполнен
                    под ключ с твоим дизайном
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Поможем найти поставщиков (РБ и РФ),
                    которые работают уже не первый месяц,
                    и шанс быть обманутым равен 0!
                    Все поставщики будут проверены
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Онлайн консультация и сопровождение по
                    запуску магазина. Можно задавать любые
                    вопросы, которые интересуют
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Все 3 наших курса в подарок! Изучаешь все 3
                    курса и внедряешь эти знания для
                    значительного упрощения работы
                  </p>
                }
              />
            </List>
            <List title="Подойдёт для:">
              <ListItem
                text={
                  <p>
                    Юных предпринимателей, которые не имеют
                    никакого понимания в товарном бизнесе
                    или имеют это понимание, но хотят магазин
                    под свой товар, которого у нас нет в прайсе
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Студентов, которые не хотят выживать на одну
                    стипендию и их тянет к бизнесу (здесь вы
                    найдете всю основную информацию про товарный
                    бизнес и получите консультацию по запуску
                    магазина)
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Подарка другу или девушке, которые постоянно
                    говорят про бизнес и всё с этим связанное.
                    Однозначно, такой подарок будет выделяться
                    своей оригинальностью
                  </p>
                }
              />
              <ListItem
                text={
                  <p>
                    Расширения. Если уже есть магазины и есть
                    желание попробовать другие ниши,
                    то это идеальный вариант! (Но советуем
                    присмотреться к тарифу «Старт плюс», уверены
                    у тебя уже хватает знаний)
                  </p>
                }
              />
            </List>
          </>
        }
        price="499"
        onButtonBuy={() => false}
      />
    )
  ];

  return (
    <>
      <TariffsSection title="Instagram магазин" id="instagram">
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Любой курс в подарок на выбор
                        </p>
                      </ListItemWithToolTip>
                    </List>
                  }
                  price="69"
                  onButtonBuy={() => false}
                  onButtonMore={() => {
                    setModalContentIndex(0);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardTariffBorder>
        <CardBorderGradient isIcon={true}>
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Все 3 курса в подарок
                        </p>
                      </ListItemWithToolTip>
                      <ListItem text={<p>Онлайн консультация по запуску</p>} />
                    </List>
                  }
                  price="89"
                  onButtonBuy={() => false}
                  onButtonMore={() => {
                    setModalContentIndex(1);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardBorderGradient>
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Все 3 курса в подарок
                        </p>
                      </ListItemWithToolTip>
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
                  onButtonMore={() => {
                    setModalContentIndex(2);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperInst>
            }
          />
        </CardTariffBorder>
      </TariffsSection>
      <TariffsSection title="Сайт (landing page)" id="site">
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Любой курс в подарок на выбор
                        </p>
                      </ListItemWithToolTip>
                    </List>
                  }
                  price="159"
                  onButtonBuy={() => false}
                  onButtonMore={() => {
                    setModalContentIndex(3);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardTariffBorder>
        <CardBorderGradient isIcon={true}>
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Все 3 курса в подарок
                        </p>
                      </ListItemWithToolTip>
                      <ListItem text={<p>База поставщиков</p>} />
                    </List>
                  }
                  price="199"
                  onButtonBuy={() => false}
                  onButtonMore={() => {
                    setModalContentIndex(4);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardBorderGradient>
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
                      <ListItemWithToolTip
                        setToolTipModalActive={setModalToolTipActive}
                        setToolTipModalContent={setModalToolTipContent}
                        toolTipContent={toolTipContent}
                      >
                        <p
                          style={{
                            color: '#6C5ECC',
                            borderBottom: '1px solid #6C5ECC',
                            lineHeight: '0.9',
                          }}
                        >
                          Все 3 курса в подарок
                        </p>
                      </ListItemWithToolTip>
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
                  onButtonMore={() => {
                    setModalContentIndex(5);
                    setModalActive(true);
                  }}
                />
              </CardTariffContentWrapperWeb>
            }
          />
        </CardTariffBorder>
      </TariffsSection>
      <CoursesSection title="Обучающие курсы" id="courses">
        <div className={styles.firstRow}>
          <CardTariffBorder>
            <CardTariff
              title={
                <p>
                  13 ответов <br className={styles.medium} /> <br className={styles.small} /> на возражение
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
                              Ты увидишь свои ошибки, из-за которых <br className={styles.small} /> многие
                              клиенты отпадали после <br className={styles.small} /> названия цены
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Поймёшь, как легко можно обработать{' '}
                              <br className={styles.medium} /> <br className={styles.small} /> возражение
                              “дорого”
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Узнаешь секретные фишки от нас,{' '}
                              <br className={styles.small} /> которые мы
                              используем <br className={styles.large} /> в своих <br className={styles.small} />
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
                  Чек-лист продажника <br className={styles.medium} /> <br className={styles.small} /> в direct
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
                              Узнаешь, как вести переписку, чтобы <br className={styles.small} /> подписчики{' '}
                              <br className={styles.medium} /> не просто
                              задавали вопросы, <br className={styles.small} /> а совершали покупки
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              На реальных примерах увидишь какие <br className={styles.small} /> ошибки
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
                              Подробно разберём какие цели и задачи <br className={styles.small} /> выполняет{' '}
                              <br className={styles.large} /> таргетированная
                              реклама
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              На реальном примере покажем, <br className={styles.medium} /> <br className={styles.small} /> как настроить рекламу
                              через Ads <br className={styles.small} /> Manager <br className={styles.medium} /> и в приложении Instagram
                            </p>
                          }
                        />
                        <ListItem
                          text={
                            <p>
                              Расскажем, как определить <br className={styles.small} /> эффективность рекламы и
                              дадим 5 <br className={styles.small} /> советов, которыми <br className={styles.medium} /> мы пользуемся
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
          <CardBorderGradient isIcon={true}>
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
          </CardBorderGradient>
        </div>
      </CoursesSection>
      <Modal active={modalActive} setActive={setModalActive}>
        <CardBorderGradient isIcon={false}>
          <CardTariffModalContentWrapper>
            <CloseImg setModalActive={setModalActive}/>
            {modalContents[modalContentIndex]}
          </CardTariffModalContentWrapper>
        </CardBorderGradient>
      </Modal>
      <Modal active={modalToolTipActive} setActive={setModalToolTipActive}>
        {modalToolTipContent}
      </Modal>
    </>
  );
};

export { ServicesPage };
