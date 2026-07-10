import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks";
import Ph from "../components/Ph";
import RiverLine from "../components/RiverLine";
import Raccoon from "../components/Raccoon";
import Contact from "../components/Contact";

export default function Hutor() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero hero--sm hero--page">
        <div className="hero__media">
          <Ph src="/photos/veranda.jpg" alt="Веранда хутора с видом на лес" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow">Хутор · Лапино</span>
          <h1>Место у воды,<br />где время <em>замедляется</em></h1>
          <p className="hero__sub">
            Бани на дровах, лес и река Медвенка за окном. Приватный хутор для тех,
            кто приезжает за тишиной, паром и настоящим отдыхом.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--solid" to="/bani">Выбрать баню</Link>
            <a className="btn btn--ghost" href="#raccoon">Познакомиться с енотом</a>
          </div>
        </div>
      </section>

      <RiverLine />

      {/* РЕКА И ПРИРОДА */}
      <section className="section">
        <div className="container split">
          <div className="split__body reveal">
            <span className="eyebrow ember">Река Медвенка</span>
            <h2>Баня и вода — рядом</h2>
            <p>
              Хутор стоит на берегу Медвенки, в стороне от городского шума.
              Контраст жаркой парной и прохлады реки — то, ради чего сюда едут
              летом и зимой.
            </p>
            <p>
              Здесь нет случайных людей и проходного двора: вы занимаете баню
              целиком и весь отдых проводите своей компанией — в парной, у камина
              и на воздухе у воды.
            </p>
          </div>
          <Ph src="/photos/terrace-tub.jpg" alt="Терраса с купелью в цветах" className="reveal" />
        </div>
      </section>

      {/* АТМОСФЕРА */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Атмосфера</span>
            <h2>Дрова, пар и тёплое дерево</h2>
            <p>Несколько кадров с хутора — купели, веники и тёплое дерево.</p>
          </div>
          <div className="gallery reveal">
            <Ph src="/photos/hero.jpg" alt="Баня из сруба" className="g-big" />
            <Ph src="/photos/tub-winter.jpg" alt="Купель с мимозой зимой" />
            <Ph src="/photos/veniki.jpg" alt="Банные веники" />
            <Ph src="/photos/lounge.jpg" alt="Комната отдыха" />
            <Ph src="/photos/tub-ferns.jpg" alt="Купель с папоротником" />
            <Ph src="/photos/tub-mimosa.jpg" alt="Купель с цветами и видом на лес" className="g-wide" />
            <Ph src="/photos/banya-inside.jpg" alt="Внутри бани" />
          </div>
        </div>
      </section>

      {/* ЕНОТ */}
      <div id="raccoon">
        <Raccoon
          eyebrow="Резидент хутора"
          emberEyebrow
          title="Встреча с енотом"
          paragraphs={[
            "У вас будет возможность встретиться с этим очаровательным животным, покормить его вкусняшками и погладить. Енот дружелюбный, любопытный и подарит море позитивных эмоций — и детям, и взрослым.",
            "Встречу можно добавить к посещению бани или приехать ради неё отдельно.",
          ]}
          buttonLabel="Записаться"
          solidButton
        />
      </div>

      {/* КАК ПРОХОДИТ ВИЗИТ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">На хуторе</span>
            <h2>Как проходит визит</h2>
          </div>
          <div className="features reveal">
            <div className="feature"><span className="num">01</span><p>Топим баню к вашему приезду</p></div>
            <div className="feature"><span className="num">02</span><p>Парная, камин и отдых у воды</p></div>
            <div className="feature"><span className="num">03</span><p>Перерыв на реку и свежий воздух</p></div>
            <div className="feature"><span className="num">04</span><p>Встреча с енотом по желанию</p></div>
          </div>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Как нас найти"
        heading="Хутор в Лапино, Московская область"
        text="Оставьте заявку или позвоните — подскажем дорогу и свободные даты."
      />
    </>
  );
}
