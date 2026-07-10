import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useBooking } from "../booking";

export default function Nav() {
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link className="brand" to="/">
        <b>На реке Медвенка</b>
        <span>Бани на дровах · Лапино</span>
      </Link>
      <nav>
        <div
          className={`nav-overlay ${menu ? "open" : ""}`}
          onClick={() => setMenu(false)}
          aria-hidden="true"
        />
        <ul className={`nav-links ${menu ? "open" : ""}`} onClick={() => setMenu(false)}>
          <li><NavLink to="/" end>Главная</NavLink></li>
          <li><NavLink to="/hutor">Хутор</NavLink></li>
          <li><NavLink to="/bani">Бани</NavLink></li>
          <li><NavLink to="/banya">Русская баня</NavLink></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <div className="nav-right">
        <a className="nav-phone" href="tel:+79936140645">
          +7 (993) 614-06-45<small>ежедневно 10–23</small>
        </a>
        <button className="btn btn--solid" onClick={() => open()}>Забронировать</button>
        <button
          className={`burger ${menu ? "open" : ""}`}
          aria-label="Меню"
          aria-expanded={menu}
          onClick={() => setMenu((m) => !m)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
