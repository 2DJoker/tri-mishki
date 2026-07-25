import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="brand">
          <b>Хутор Русский лес</b>
          <span>На реке Медвенка · Лапино</span>
        </div>
        <nav className="foot-links">
          <Link to="/">Главная</Link>
          <Link to="/hutor">Хутор</Link>
          <Link to="/#rooms">Номера</Link>
          <Link to="/#events">Беседки</Link>
          <Link to="/bani">Бани</Link>
          <a href="tel:+79936140645">+7 (993) 614-06-45</a>
        </nav>
        <small>© {new Date().getFullYear()} Хутор «Русский лес»</small>
      </div>
    </footer>
  );
}
