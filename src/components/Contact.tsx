import { useBooking } from "../booking";

/** Координаты Лапино, Одинцовский г.о., МО */
const LAT = 55.6645;
const LON = 37.1385;
const BBOX = `${LON - 0.02}%2C${LAT - 0.01}%2C${LON + 0.02}%2C${LAT + 0.01}`;
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT}%2C${LON}`;

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
          <iframe title="Карта — Лапино" src={MAP_SRC} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
