import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="brand">
          <b>На реке Медвенка</b>
          <span>Бани на дровах · Лапино</span>
        </div>
        <nav className="foot-links">
          <Link to="/">Главная</Link>
          <Link to="/hutor">Хутор</Link>
          <Link to="/bani">Бани</Link>
          <a href="tel:+79936140645">+7 (993) 614-06-45</a>
        </nav>
        <small>© {new Date().getFullYear()} Бани на реке Медвенка</small>
      </div>
    </footer>
  );
}
