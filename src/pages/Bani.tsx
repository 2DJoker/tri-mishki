import { useScrollReveal } from "../hooks";
import { baths, RACCOON_PRICE } from "../data/baths";
import { useBooking } from "../booking";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import BathDetail from "../components/BathDetail";
import Raccoon from "../components/Raccoon";
import Contact from "../components/Contact";

export default function Bani() {
  useScrollReveal();
  const { open } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="hero hero--xs hero--page">
        <div className="hero__media">
          <Ph src="/photos/tub-mimosa.jpg" alt="Купель с цветами у бани" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">Наши бани</span>
          <h1>Три бани<br />на дровах</h1>
          <p className="hero__sub">
            Большая, Малая и Нижняя — для компании, для двоих и для большого
            праздника. Каждую вы занимаете целиком.
          </p>
        </div>
      </section>

      <RiverLine />

      {/* ДЕТАЛИ БАНЬ */}
      <section className="section section--tight">
        <div className="container">
          {baths.map((b) => <BathDetail key={b.id} bath={b} />)}
        </div>
      </section>

      {/* ЕНОТ КАК ДОПУСЛУГА */}
      <Raccoon
        eyebrow="Добавьте к визиту"
        title="Встреча с енотом"
        paragraphs={[
          "Покормить, погладить и сфотографироваться с дружелюбным резидентом хутора. Отличное дополнение к бане — особенно если приезжаете с детьми.",
        ]}
        buttonLabel="Добавить"
      />

      {/* ПРАЙС */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Цены</span>
            <h2>Стоимость в час</h2>
            <p>
              Баню занимаете целиком. Точную стоимость и доступные даты подтвердит
              менеджер при бронировании.
            </p>
          </div>
          <div className="pricelist reveal">
            {baths.map((b) => (
              <div className="prow" key={b.id}>
                <h4>{b.name}</h4>
                <div className="pm">{b.area} · {b.capFull} · {b.tag}</div>
                <div className="pp">{b.price}<small>в час</small></div>
                <button className="btn" onClick={() => open(b.name)}>Забронировать</button>
              </div>
            ))}
            <div className="prow">
              <h4>Встреча с енотом</h4>
              <div className="pm">покормить, погладить, фото</div>
              <div className="pp">{RACCOON_PRICE}<small>за визит</small></div>
              <button className="btn" onClick={() => open("Встреча с енотом")}>Записаться</button>
            </div>
          </div>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Контакты"
        heading="Забронировать баню"
        text="Оставьте заявку или позвоните — подберём баню и подскажем свободное время."
      />
    </>
  );
}
