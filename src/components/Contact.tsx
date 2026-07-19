import { useBooking } from "../booking";

/** Координаты хутора: Лапино, Одинцовский г.о., МО */
const LAT = 55.682585;
const LON = 37.152883;
const MAP_SRC = `https://yandex.ru/map-widget/v1/?ll=${LON}%2C${LAT}&z=15&pt=${LON}%2C${LAT}%2Cpm2rdm`;

export default function Contact({
  eyebrow,
  heading,
  text,
}: {
  eyebrow: string;
  heading: string;
  text: string;
}) {
  const { open } = useBooking();
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <span className="eyebrow ember">{eyebrow}</span>
          <h2 className="raccoon__title">{heading}</h2>
          <p style={{ color: "var(--text-dim)", marginTop: "1.2rem" }}>{text}</p>
          <div className="contact__rows">
            <div className="crow">
              <span>Телефон</span>
              <b><a href="tel:+79936140645">+7 (993) 614-06-45</a></b>
            </div>
            <div className="crow">
              <span>Адрес</span>
              <b>Московская область, д. Лапино</b>
              <b>на берегу реки Медвенка</b>
            </div>
            <div className="crow">
              <span>Режим работы</span>
              <b>Ежедневно, 10:00 — 23:00</b>
            </div>
          </div>
          <div className="mt-2">
            <button className="btn btn--solid" onClick={() => open()}>Оставить заявку</button>
          </div>
        </div>
        <div className="contact__map">
          <iframe
            title="Яндекс Карты — хутор на реке Медвенка, Лапино"
            src={MAP_SRC}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
