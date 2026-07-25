import { Link, Navigate, useParams } from "react-router-dom";
import { useScrollReveal } from "../hooks";
import { useBooking } from "../booking";
import { rooms } from "../data/rooms";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import Contact from "../components/Contact";

export default function Room() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);
  useScrollReveal();
  const { open } = useBooking();

  if (!room) return <Navigate to="/" replace />;

  const other = rooms.find((r) => r.id !== room.id)!;

  return (
    <>
      {/* HERO */}
      <section className="hero hero--sm hero--page" key={room.id}>
        <div className="hero__media">
          <Ph src={room.img} alt={room.name} />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">{room.eyebrow}</span>
          <h1>{room.name}</h1>
          <p className="hero__sub">{room.heroLine}</p>
          <div className="hero__meta">
            <div className="chip"><span className="dot" /><b>{room.capacity}</b></div>
            <div className="chip"><span className="dot" /><b>{room.price}</b> за {room.per}</div>
          </div>
        </div>
      </section>

      <RiverLine />

      {/* О НОМЕРЕ */}
      <section className="section">
        <div className="container split">
          <div className="split__body reveal">
            <span className="eyebrow">О номере</span>
            <h2>{room.heroLine}</h2>
            {room.about.map((p, i) => <p key={i}>{p}</p>)}
            <div className="hero__cta">
              <button className="btn btn--solid" onClick={() => open(room.name)}>
                Забронировать номер
              </button>
              <Link className="btn btn--ghost" to="/#rooms">Все номера</Link>
            </div>
          </div>
          <Ph src={room.gallery[1]} alt={room.name} className="reveal" />
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Галерея</span>
            <h2>Как выглядит номер</h2>
          </div>
          <div className="gallery reveal">
            <Ph src={room.gallery[0]} alt={room.name} className="g-big" />
            <Ph src={room.gallery[1]} alt={room.name} />
            <Ph src={room.gallery[2]} alt={room.name} />
            <Ph src={room.gallery[3]} alt={room.name} className="g-wide" />
          </div>
        </div>
      </section>

      {/* ОСОБЕННОСТИ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Что внутри</span>
            <h2>Всё для спокойной ночёвки</h2>
          </div>
          <div className="features features--2x2 reveal">
            {room.features.map((f, i) => (
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

      {/* ЦЕНА */}
      <section className="section section--alt">
        <div className="container quote reveal">
          <span className="eyebrow ember center">Стоимость</span>
          <blockquote>
            {room.price} <em>за {room.per}</em> — {room.capacity}
          </blockquote>
          <p className="room-note">
            Заезд и выезд — по договорённости с менеджером. Завтрак и баню
            можно добавить при бронировании.
          </p>
          <div className="hero__cta price-cta">
            <button className="btn btn--solid" onClick={() => open(room.name)}>
              Забронировать
            </button>
          </div>
        </div>
      </section>

      {/* ДРУГОЙ НОМЕР */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Посмотрите ещё</span>
            <h2>Другой номер</h2>
          </div>
          <div className="scard reveal">
            <div className="scard__media">
              <img src={other.img} alt={other.name} loading="lazy" />
              <span className="detail__tag">{other.tag}</span>
            </div>
            <div className="scard__body">
              <span className="eyebrow ember">{other.eyebrow}</span>
              <h3>{other.name}</h3>
              <p className="scard__bio">{other.about[0]}</p>
              <div className="ocard__foot">
                <div className="price">
                  <b>{other.price}</b> <span>/ {other.per}</span>
                </div>
                <Link className="btn" to={`/nomera/${other.id}`}>Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Бронирование"
        heading={`Забронировать «${room.name.replace("Номер «", "").replace("»", "").replace(" (семейный)", "")}»`}
        text="Оставьте заявку или позвоните — подтвердим даты и подготовим номер к вашему приезду."
      />
    </>
  );
}
