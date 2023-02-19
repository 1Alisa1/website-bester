import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import logo from '../../img/logo.svg';
import viber from '../../img/viber.svg';
import inst from '../../img/inst.svg';
import telegram from '../../img/telegram.svg';

const Layout = () => {

  const activeLink = {
    color: '#6C5ECC',
    textDecoration: 'underline',
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
              <NavLink to="/" style={({isActive}) => isActive ? activeLink : undefined}>Главная</NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink to="/services" style={({isActive}) => isActive ? activeLink : undefined}>Услуги</NavLink>
            </li>
          </ul>
          <div className={styles.headerIcons}>
            <a href="#!" className={styles.icon}>
              <img src={viber} alt="Viber"></img>
            </a>
            <a href="#!" className={styles.icon}>
              <img src={inst} alt="Instagram"></img>
            </a>
            <a href="#!" className={styles.icon}>
              <img src={telegram} alt="Telegram"></img>
            </a>
          </div>
        </nav>
        <button className={styles.navBtn}></button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export { Layout };
