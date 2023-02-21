import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import logo from '../../img/logo.svg';
import IconsGroup from '../iconsGroup/iconsGroup';

const Layout = () => {
  const activeLink = {
    color: '#6C5ECC',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  };

  return (
    <>
      <header>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logo} alt="BESTEP"></img>
          </Link>
        </div>
        <nav>
          <ul className={styles.headerList}>
            <li className={styles.listItem}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Главная
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                to="/services"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Услуги
              </NavLink>
            </li>
          </ul>
          <IconsGroup iconClass={styles.icon40} />
        </nav>
        <button className={styles.navBtn}></button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className={styles.footerLogo}>
          <Link to="/">
            <img src={logo} alt="BESTEP"></img>
          </Link>
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
      </footer>
    </>
  );
};

export { Layout };
