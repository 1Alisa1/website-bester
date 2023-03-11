import { NavLink } from "react-router-dom";
import IconsGroup from "../iconsGroup/iconsGroup";
import styles from "./navigation.module.scss";

interface NavigationProps {
  setActiveModal?: (value: React.SetStateAction<boolean>) => void;
}

const Navigation: React.FC<NavigationProps> = ({setActiveModal}) => {
  const activeLink = {
    color: "#6C5ECC",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
  };

  const handleClick = () => {
    if (setActiveModal) {
      setActiveModal(false);
    }
  }

  return (
    <nav>
      <ul className={styles.headerList}>
        <li className={styles.listItem}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLink : undefined)}
            onClick={handleClick}
          >
            Главная
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? activeLink : undefined)}
            onClick={handleClick}
          >
            Услуги
          </NavLink>
        </li>
      </ul>
      <IconsGroup iconClass={styles.icon40} />
    </nav>
  );
};

export default Navigation;
