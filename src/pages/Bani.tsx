import { useScrollReveal } from "../hooks";
import { baths, RACCOON_PRICE } from "../data/baths";
import { useBooking } from "../booking";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import BathDetail from "../components/BathDetail";
import Raccoon from "../components/Raccoon";
import Contact from "../components/Contact";

const steaming = [
  {
    name: "Парение индивидуальное",
    note: "3–4 захода: знакомство с паром, ароматерапия, парение веником, дождевание и массаж веником проблемных зон · ~1 час",
    price: "3000 ₽",
    per: "за гостя",
  },
  {
    name: "Парение «Сталевар»",
    note: "жёсткое парение при высоких температурах — для любителей экстрима · 1 заход",
    price: "2000 ₽",
    per: "за гостя",
  },
  {
    name: "Коллективное парение",
    note: "3 захода: знакомство с паром, ароматерапия, парение веником · ~45 минут",
    price: "1500 ₽",
    per: "за гостя",
  },
];

const procedures = [
  { name: "Солевое выкатывание", price: "1000 ₽" },
  { name: "Медовый массаж", price: "1500 ₽" },
  { name: "Общий расслабляющий массаж маслом", price: "2000 ₽" },
];

export default function Bani() {
  useScrollReveal();
  const { open } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="hero hero--sm hero--page">
        <div className="hero__media">
          <Ph src="/photos/tub-mimosa.jpg" alt="Купель с цветами у бани" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">Наши бани · Русская традиция</span>
          <h1>Три бани<br />на дровах</h1>
          <p className="hero__sub">
            Большая, Малая и Нижняя — для компании, для двоих и для большого
            праздника. Пар на дровах, веники, купели с травами и русская
            печь — всё, как заведено веками.
          </p>
          <div className="hero__cta">
            <button className="btn btn--solid" onClick={() => open()}>Забронировать</button>
          </div>
        </div>
      </section>

      <RiverLine />

      {/* ДЕТАЛИ БАНЬ */}
      <section className="section section--tight">
        <div className="container">
          {baths.map((b) => <BathDetail key={b.id} bath={b} />)}
        </div>
      </section>

      {/* ПАР И ВЕНИКИ */}
      <section className="section section--alt">
        <div className="container split">
          <Ph src="/photos/veniki.jpg" alt="Банные веники и травы" className="reveal" />
          <div className="split__body reveal">
            <span className="eyebrow ember">Пар и веники</span>
            <h2>Пар, который лечит</h2>
            <p>
              Топим печи берёзовыми дровами и держим мягкий, ровный пар. Веники
              вяжем сами: дуб — для крепкого жара, берёза — для лёгкости,
              пихта и травы — для аромата.
            </p>
            <p>
              После парной — купель с травами под открытым небом. Летом —
              прохлада реки, зимой — снег и звенящий морозный воздух.
            </p>
            <div className="split__stats">
              <div><b>90°</b><span>жар в парной</span></div>
              <div><b>4</b><span>вида веников</span></div>
              <div><b>2</b><span>купели с травами</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* КУПЕЛИ */}
      <section className="section">
        <div className="container split">
          <div className="split__body reveal">
            <span className="eyebrow">Купели</span>
            <h2>Купель с травами под небом</h2>
            <p>
              Наши купели — отдельная гордость. Наполняем их папоротником,
              мимозой, апельсинами и луговыми травами по сезону. Контраст
              жаркой парной и прохладной воды — то, ради чего едут на хутор.
            </p>
          </div>
          <Ph src="/photos/m-tub-flowers.jpg" alt="Купель с полевыми цветами" className="reveal" />
        </div>
      </section>

      {/* БАНЩИКИ */}
      <section className="section section--alt" id="steamer">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Банщики</span>
            <h2>Мастера пара</h2>
            <p>
              Парение — это ремесло. Наш банщик подберёт веники, температуру
              и ритм под вас: от мягкого знакомства с парной до экстремального жара.
            </p>
          </div>

          <div className="scard reveal">
            <div className="scard__media">
              <img src="/photos/banya-inside.jpg" alt="Банщик Василий Пират" loading="lazy" />
              <span className="detail__tag">Главный банщик</span>
            </div>
            <div className="scard__body">
              <span className="eyebrow ember">Знает пар как никто</span>
              <h3>Василий Пират</h3>
              <p className="scard__bio">
                Парит бережно и по делу: сначала прогрев и ароматерапия, потом
                веники, дождевание и работа с проблемными зонами. Подача пара —
                под гостя, а не наоборот.
              </p>

              <div className="scard__list">
                {steaming.map((s) => (
                  <div className="srow" key={s.name}>
                    <div>
                      <h4>{s.name}</h4>
                      <span>{s.note}</span>
                    </div>
                    <div className="srow__price">{s.price}<small> / {s.per}</small></div>
                  </div>
                ))}
              </div>

              <div className="scard__sub">Процедуры</div>
              <div className="scard__list">
                {procedures.map((p) => (
                  <div className="srow" key={p.name}>
                    <div><h4>{p.name}</h4></div>
                    <div className="srow__price">{p.price}</div>
                  </div>
                ))}
              </div>

              <p className="scard__hint">Веники оговариваются и оплачиваются отдельно.</p>
              <div className="scard__cta">
                <button className="btn btn--solid" onClick={() => open("Парение у банщика")}>
                  Записаться на парение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРАЙС */}
      <section className="section">
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

      {/* ГАЛЕРЕЯ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Атмосфера</span>
            <h2>Как это выглядит</h2>
          </div>
          <div className="gallery reveal">
            <Ph src="/photos/b-tub-autumn.jpg" alt="Купель с апельсинами золотой осенью" className="g-wide" />
            <Ph src="/photos/n-wash.jpg" alt="Помывочная с вёдрами и ковшом" />
            <Ph src="/photos/b-parnaya2.jpg" alt="Полки в парной" />
          </div>
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

      <RiverLine />

      <Contact
        eyebrow="Контакты"
        heading="Забронировать баню"
        text="Оставьте заявку или позвоните — подберём баню, купель и поставим горшочки в печь к вашему приезду."
      />
    </>
  );
}
