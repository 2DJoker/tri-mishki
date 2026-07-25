import { useRef } from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../booking";
import Arrow from "./Arrow";

export interface Offer {
  img: string;
  title: string;
  meta: string;
  text: string;
  price: string;
  per?: string;
  book: string; // что подставить в форму брони
  link?: string; // страница с подробностями
}

export default function OfferSlider({
  id,
  eyebrow,
  heading,
  text,
  caption,
  offers,
  alt = false,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  text: string;
  caption: string;
  offers: Offer[];
  alt?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const { open } = useBooking();

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ocard");
    const step = card ? card.offsetWidth + 16 : 400;
    const start = el.scrollLeft;
    const target = Math.max(0, Math.min(start + dir * step, el.scrollWidth - el.clientWidth));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden) {
      el.scrollLeft = target;
      return;
    }
    const dur = 450;
    let t0: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const frame = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / dur);
      el.scrollLeft = start + (target - start) * ease(p);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  return (
    <section className={`section ${alt ? "section--alt" : ""}`.trim()} id={id}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow ember">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="reveal">
          <div className="fslider__track" ref={track}>
            {offers.map((o) => (
              <article className="ocard" key={o.title}>
                {o.link ? (
                  <Link className="ocard__img" to={o.link}>
                    <img src={o.img} alt={o.title} loading="lazy" />
                  </Link>
                ) : (
                  <div className="ocard__img">
                    <img src={o.img} alt={o.title} loading="lazy" />
                  </div>
                )}
                <div className="ocard__body">
                  <h3>{o.link ? <Link to={o.link}>{o.title}</Link> : o.title}</h3>
                  <div className="ocard__meta">{o.meta}</div>
                  <p>{o.text}</p>
                  {o.link && (
                    <p className="ocard__more">
                      <Link className="link-arrow" to={o.link}>Подробнее <Arrow /></Link>
                    </p>
                  )}
                  <div className="ocard__foot">
                    <div className="price">
                      <b>{o.price}</b>{o.per && <span> / {o.per}</span>}
                    </div>
                    <button className="btn" onClick={() => open(o.book)}>Забронировать</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="fslider__bar">
            <span className="fslider__caption">{caption}</span>
            <i className="fslider__line" />
            <div className="fslider__nav">
              <button aria-label="Назад" onClick={() => scroll(-1)}>
                <span className="flip"><Arrow /></span>
              </button>
              <button aria-label="Вперёд" onClick={() => scroll(1)}>
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
