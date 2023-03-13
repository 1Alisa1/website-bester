import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import logo from "../../img/logo.svg";
import IconsGroup from "../iconsGroup/iconsGroup";
import Navigation from "../navigaton/navigation";
import NavModal from "../navModal/navModal";
import { useState } from "react";
import CloseImg from "../closeImg/closeImg";

const Layout = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  return (
    <>
      <header>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logo} alt="BESTEP"></img>
          </Link>
        </div>
        <div className={styles.icons}>
          <IconsGroup iconClass={styles.icon40} />
        </div>
        <div className={styles.headerNav}>
          <Navigation />
        </div>
        <button
          className={styles.navBtn}
          onClick={() => setIsNavModalOpen(true)}
        ></button>

        <NavModal active={isNavModalOpen} setActive={setIsNavModalOpen}>
          <CloseImg setModalActive={setIsNavModalOpen} />
          <Navigation setActiveModal={setIsNavModalOpen} />
        </NavModal>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className={styles.content}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="BESTEP"></img>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.firstBlock}>
              <div className={styles.individual}>
                Индивидуальный предприниматель <br /> Андреев Е.Л. УНП 691537014
              </div>
              <div className={styles.location}>
                Республика Беларусь, Минская <br /> область, Минский район
              </div>
            </div>
            <div className={styles.secondBlock}>
              <div className={styles.accountNumber}>
                BY25UNBS30131130500010000933
              </div>
              <div className={styles.bank}>в ЗАО “БСБ-Банк”, БИК: UNBSBY2X</div>
            </div>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.mode}>
              Режим работы: <br /> пн-вс: 09.00 — 19.00
            </div>
            <div className={styles.email}>bestep.by@gmail.com</div>
            <div className={styles.phoneNumber}>+ 375 (25) 686 54 60</div>
            <IconsGroup iconClass={styles.icon60} />
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };
