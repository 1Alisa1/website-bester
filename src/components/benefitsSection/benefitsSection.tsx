import CardBenefit from "../cardBenefit/cardBenefit";
import styles from "./benefitsSection.module.scss";
import checkSquare from "../../img/CheckSquare.svg";
import coins from "../../img/Coins.svg";
import star from "../../img/Vector.svg";
import gift from "../../img/Gift.svg";
import article from "../../img/Article.svg";
import shieldCheck from "../../img/ShieldCheck.svg";
import Carousel from "../carousel/carousel";
import { CarouselItem } from "../carouselItem/carouselItem";

const BenefitsSection: React.FC = () => {
  const benefits = [
    <div>
      <CardBenefit
        icon={checkSquare}
        title="Без рисков"
        description={
          <p>
            Мы даём своим клиентам <br className={styles.small} /> готовый
            бизнес, который полностью готов <br className={styles.medium} /> к
            запуску <br className={styles.large} />{" "}
            <br className={styles.small} /> и дальнейшей работе
          </p>
        }
        gradient="linear-gradient(90deg, #FADA75 0%, #E2C79D 100%)"
      />
      <CardBenefit
        icon={gift}
        title="Подарки"
        description={
          <p>
            Каждый наш клиент получает <br className={styles.small} /> в подарок
            курсы по продвижению и возможность консультаций{" "}
            <br className={styles.small} /> по запуску
          </p>
        }
        gradient="linear-gradient(90deg, #FADA75 0%, #E2C79D 100%)"
      />
    </div>,
    <div>
      <CardBenefit
        icon={coins}
        title="Цена"
        description={
          <p>
            Мы стараемся держать демократичную цену на свои тарифы, чтобы каждый{" "}
            <br className={styles.small} /> желающий смог воспользоваться нашими
            услугами
          </p>
        }
        gradient="linear-gradient(90deg, #DFC4A2 0%, #C7B1CA 100%)"
      />
      <CardBenefit
        icon={article}
        title="Информативность"
        description={
          <p>
            Мы публикуем актуальную информацию <br className={styles.large} />{" "}
            из сферы <br className={styles.small} /> товарного бизнеса,{" "}
            <br className={styles.small} /> чтобы каждый наш подписчик{" "}
            <br className={styles.small} /> был в курсе событий
          </p>
        }
        gradient="linear-gradient(90deg, #DFC4A2 0%, #C7B1CA 100%)"
      />
    </div>,
    <div>
      <CardBenefit
        icon={star}
        title="Уникальность"
        description={
          <p>
            Мы первые и единственные, <br className={styles.medium} />{" "}
            <br className={styles.small} /> кто запустил данные услуги в РБ
          </p>
        }
        gradient="linear-gradient(90deg, #C4AFCE 0%, #AB9CF6 100%)"
      />

      <CardBenefit
        icon={shieldCheck}
        title="Официальность"
        description={
          <p>
            Мы работаем официально <br className={styles.medium} />{" "}
            <br className={styles.small} /> и по договору. Оплата производится{" "}
            <br className={styles.small} /> <br className={styles.medium} />{" "}
            после принятия работ
          </p>
        }
        gradient="linear-gradient(90deg, #C4AFCE 0%, #AB9CF6 100%)"
      />
    </div>,
  ];

  return (
    <section className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>Почему мы?</h2>
      <div className={styles.benefitsContainer}>
        {benefits.map((el, index) => ({ ...el, key: index }))}
      </div>
      <div className={styles.benefitsContainerMobile}>
        <Carousel>
          {benefits.map((benefitEl, index) => {
            return <CarouselItem key={index}>{benefitEl}</CarouselItem>;
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default BenefitsSection;
