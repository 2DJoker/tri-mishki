import { Link, Navigate, useParams } from "react-router-dom";
import { useScrollReveal } from "../hooks";
import { useBooking } from "../booking";
import { baths, TUB_MENU } from "../data/baths";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import BathCard from "../components/BathCard";
import Contact from "../components/Contact";

export default function Bath() {
  const { id } = useParams();
  const bath = baths.find((b) => b.id === id);
  useScrollReveal();
  const { open } = useBooking();

  if (!bath) return <Navigate to="/bani" replace />;

  const others = baths.filter((b) => b.id !== bath.id);

  return (
    <>
      {/* HERO */}
      <section className="hero hero--sm hero--page" key={bath.id}>
        <div className="hero__media">
          <Ph src={bath.img} alt={bath.name} />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">{bath.eyebrow}</span>
          <h1>{bath.name}</h1>
          <p className="hero__sub">{bath.heroLine}</p>
          <div className="hero__meta">
            <div className="chip"><span className="dot" /><b>{bath.area}</b> площадь</div>
            <div className="chip"><span className="dot" /><b>{bath.statCap}</b> человек</div>
            <div className="chip"><span className="dot" /><b>{bath.price}</b> в час</div>
          </div>
        </div>
      </section>

      <RiverLine />

      {/* ОПИСАНИЕ */}
      <section className="section">
        <div className="container split">
          <div className="split__body reveal">
            <span className="eyebrow">О бане</span>
            <h2>{bath.heroLine}</h2>
            {bath.about.map((p, i) => <p key={i}>{p}</p>)}
            <div className="hero__cta">
              <button className="btn btn--solid" onClick={() => open(bath.name)}>
                Забронировать баню
              </button>
              <Link className="btn btn--ghost" to="/bani">Все бани</Link>
            </div>
          </div>
          <Ph src={bath.gallery[1]} alt={bath.name} className="reveal" />
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Галерея</span>
            <h2>Как выглядит {bath.name.toLowerCase()}</h2>
          </div>
          <div className="gallery reveal">
            <Ph src={bath.gallery[0]} alt={bath.name} className="g-big" />
            <Ph src={bath.gallery[1]} alt={bath.name} />
            <Ph src={bath.gallery[2]} alt={bath.name} />
            <Ph src={bath.gallery[3]} alt={bath.name} className="g-wide" />
          </div>
        </div>
      </section>

      {/* ОСОБЕННОСТИ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Особенности</span>
            <h2>Из чего складывается пар</h2>
          </div>
          <div className="features features--2x2 reveal">
            {bath.features.map((f, i) => (
              <div className="feature" key={f.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="feature__title">{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОГРАММА ВИЗИТА */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Как проходит визит</span>
            <h2>От порога до самовара</h2>
          </div>
          <div className="features reveal">
            {bath.program.map((s, i) => (
              <div className="feature" key={s.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="feature__title">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНА */}
      <section className="section">
        <div className="container quote reveal">
          <span className="eyebrow ember center">Стоимость</span>
          <blockquote>
            {bath.price} <em>в час</em> — баня полностью ваша,
            {" "}{bath.capFull}
          </blockquote>
          <div className="hero__cta price-cta">
            <button className="btn btn--solid" onClick={() => open(bath.name)}>
              Забронировать
            </button>
          </div>
        </div>
      </section>

      {/* МЕНЮ КУПЕЛЕЙ */}
      <section className="section section--alt" id="tubs">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Дополнительно</span>
            <h2>Меню купелей</h2>
            <p>
              К любой бане можно добавить купель под открытым небом — наполним
              её к вашему приезду. Состав меняется по сезону.
            </p>
          </div>
          <div className="rmenu reveal">
            {TUB_MENU.map((t) => (
              <div className="rmenu__row" key={t.name}>
                <div className="rmenu__name">
                  <h4>{t.name}</h4>
                  <span>{t.note}</span>
                </div>
                <i className="rmenu__dots" />
                <div className="rmenu__price">{t.price}</div>
              </div>
            ))}
          </div>
          <p className="rmenu__hint reveal">
            Купель бронируется вместе с баней — скажите менеджеру, какую наполнить.
          </p>
        </div>
      </section>

      {/* ДРУГИЕ БАНИ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Другие бани</span>
            <h2>Посмотрите остальные</h2>
          </div>
          <div className="baths baths--pair">
            {others.map((b) => <BathCard key={b.id} bath={b} />)}
          </div>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Бронирование"
        heading={`Забронировать «${bath.name}»`}
        text="Оставьте заявку или позвоните — подтвердим дату и подготовим баню к вашему приезду."
      />
    </>
  );
}
