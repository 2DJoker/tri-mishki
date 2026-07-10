import { useScrollReveal } from "../hooks";
import { useBooking } from "../booking";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import Contact from "../components/Contact";

const menu = [
  { name: "Щи суточные в чугунке", note: "с томлёной говядиной и сметаной", price: "450 ₽" },
  { name: "Каша из горшочка", note: "гречневая, с лесными грибами и луком", price: "390 ₽" },
  { name: "Томлёное мясо в горшочке", note: "по-купечески, с овощами", price: "690 ₽" },
  { name: "Картошка из печи", note: "со сметаной, укропом и маслом", price: "320 ₽" },
  { name: "Пироги из печи", note: "с капустой, яблоком или ягодой", price: "180 ₽" },
  { name: "Блины со сметаной и мёдом", note: "стопка из шести блинов", price: "350 ₽" },
  { name: "Сбитень горячий", note: "мёд, пряности, травы", price: "220 ₽" },
  { name: "Чай из самовара", note: "иван-чай и травы с хутора", price: "250 ₽" },
];

export default function Banya() {
  useScrollReveal();
  const { open } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="hero hero--sm hero--page">
        <div className="hero__media">
          <Ph src="/photos/banya-inside.jpg" alt="Русская баня внутри" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">Традиция</span>
          <h1>Настоящая<br />русская <em>баня</em></h1>
          <p className="hero__sub">
            Пар на дровах, дубовые и берёзовые веники, купель с травами и
            русская печь. Всё, как было заведено веками — только у реки.
          </p>
          <div className="hero__cta">
            <button className="btn btn--solid" onClick={() => open()}>Забронировать</button>
          </div>
        </div>
      </section>

      <RiverLine />

      {/* ПАРЕНИЕ */}
      <section className="section">
        <div className="container split">
          <Ph src="/photos/veniki.jpg" alt="Банные веники и травы" className="reveal" />
          <div className="split__body reveal">
            <span className="eyebrow ember">Пар и веники</span>
            <h2>Пар, который лечит</h2>
            <p>
              Топим печь берёзовыми дровами и держим мягкий, ровный пар. Веники
              вяжем сами: дуб — для крепкого жара, берёза — для лёгкости,
              пихта и травы — для аромата.
            </p>
            <p>
              После парной — купель с травами и цветами под открытым небом.
              Летом — прохлада реки, зимой — снег и звенящий морозный воздух.
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
      <section className="section section--alt">
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
          <Ph src="/photos/tub-ferns.jpg" alt="Купель с папоротником и цветами" className="reveal" />
        </div>
      </section>

      {/* МЕНЮ ИЗ РУССКОЙ ПЕЧИ */}
      <section className="section" id="menu">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Русская печь</span>
            <h2>Что мы готовим в традиционной русской печи</h2>
            <p>
              Пока вы паритесь, в печи томится обед. Всё готовим сами — в
              чугунках и горшочках, на живом огне, как готовили наши бабушки.
            </p>
          </div>
          <div className="rmenu reveal">
            {menu.map((m) => (
              <div className="rmenu__row" key={m.name}>
                <div className="rmenu__name">
                  <h4>{m.name}</h4>
                  <span>{m.note}</span>
                </div>
                <i className="rmenu__dots" />
                <div className="rmenu__price">{m.price}</div>
              </div>
            ))}
          </div>
          <p className="rmenu__hint reveal">
            Меню сезонное — уточните у менеджера, что томится в печи сегодня.
            Заказ блюд лучше оформить вместе с бронью бани.
          </p>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Контакты"
        heading="Приезжайте париться"
        text="Оставьте заявку или позвоните — забронируем баню и поставим горшочки в печь к вашему приезду."
      />
    </>
  );
}
