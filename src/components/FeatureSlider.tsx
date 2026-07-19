import { useRef } from "react";
import Arrow from "./Arrow";

const slides = [
  { img: "/photos/hero.jpg", title: "3 бани на дровах у реки" },
  { img: "/photos/b-tub-autumn.jpg", title: "Купели с травами и цветами" },
  { img: "/photos/veniki.jpg", title: "Веники вяжем и запариваем сами" },
  { img: "/photos/h-pech.jpg", title: "Еда из традиционной русской печи" },
  { img: "/photos/b-fire-terrace.jpg", title: "Очаг и подвесные кресла над прудом" },
  { img: "/photos/banya-inside.jpg", title: "Парения от банщика" },
  { img: "/photos/raccoon.jpg", title: "Встреча с енотом" },
];

export default function FeatureSlider() {
  const track = useRef<HTMLDivElement>(null);

  // своя анимация вместо behavior:"smooth" — тот молча отменяется
  // в связке со scroll-snap в части браузеров
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".fslide");
    const step = card ? card.offsetWidth + 16 : 340;
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
    <section className="section section--alt">
      <div className="container">
        <div className="fslider reveal">
          <div className="fslider__track" ref={track}>
            {slides.map((s) => (
              <article className="fslide" key={s.title}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="fslide__shade" />
                <h3>{s.title}</h3>
              </article>
            ))}
          </div>
          <div className="fslider__bar">
            <span className="fslider__caption">Ключевые особенности хутора</span>
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
