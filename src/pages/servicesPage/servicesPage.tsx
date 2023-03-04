import CardTariff from '../../components/cardTariff/cardTariff';
import CardTariffBorder from '../../components/cardTariffBorder/cardTariffBorder';
import CardTariffBorderGradient from '../../components/cardTariffBorderGradient/cardTariffBorderGradient';
import CardTariffContent from '../../components/cardTariffContent/cardTariffContent';
import CardTariffContentWrapperInst from '../../components/cardTariffContentWrapperInst/cardTariffContentWrapperInst';
import CardTariffContentWrapperWeb from '../../components/cardTariffContentWrapperWeb/cardTariffContentWrapperWeb';
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
    </>
  );
};

export { ServicesPage };
