import { Link } from "react-router-dom";
import { useBooking } from "../booking";
import { useScrollReveal } from "../hooks";
import { baths } from "../data/baths";
import Ph from "../components/Ph";
import Arrow from "../components/Arrow";
import RiverLine from "../components/RiverLine";
import BathCard from "../components/BathCard";
import Raccoon from "../components/Raccoon";
import Contact from "../components/Contact";

export default function Home() {
  const { open } = useBooking();
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <Ph src="/photos/hero.jpg" alt="Баня из сруба на хуторе" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">Хутор на воде · Московская область</span>
          <h1>Баня на дровах<br />у реки <em>Медвенка</em></h1>
          <p className="hero__sub">
            Три бани, живой огонь, тёплая древесина и тишина у воды. Место, куда
            приезжают всей компанией или семьёй, чтобы выдохнуть и забыть про город.
          </p>
          <div className="hero__cta">
            <button className="btn btn--solid" onClick={() => open()}>Забронировать баню</button>
            <Link className="btn btn--ghost" to="/bani">Смотреть бани</Link>
          </div>
          <div className="hero__meta">
            <div className="chip"><span className="dot" /><b>4,8</b> рейтинг в Яндексе</div>
            <div className="chip"><span className="dot" /><b>4,8</b> рейтинг в 2ГИС</div>
            <div className="chip">Ежедневно с 10:00 до 23:00</div>
          </div>
        </div>
        <div className="scrollcue">листайте вниз</div>
      </section>

      <RiverLine />

      {/* О ХУТОРЕ */}
      <section className="section">
        <div className="container split">
          <Ph src="/photos/hutor.jpg" alt="Хутор у реки Медвенка" className="reveal" />
          <div className="split__body reveal">
            <span className="eyebrow">О месте</span>
            <h2>Свой хутор на берегу, а не банный конвейер</h2>
            <p>
              Мы топим бани дровами и встречаем гостей по-домашнему. Никакой суеты
              и соседей за стенкой — вы занимаете баню целиком, с камином, парной
              и местом для отдыха у самой воды.
            </p>
            <p>
              Летом — река и природа за окном, зимой — снег и жар печи. А ещё на
              хуторе живёт енот, к которому многие приезжают отдельно.
            </p>
            <div className="split__stats">
              <div><b>3</b><span>бани на выбор</span></div>
              <div><b>10–23</b><span>каждый день</span></div>
              <div><b>1</b><span>дружелюбный енот</span></div>
            </div>
            <p className="mt-link">
              <Link className="link-arrow" to="/hutor">Подробнее о хуторе <Arrow /></Link>
            </p>
          </div>
        </div>
      </section>

      {/* БАНИ ПРЕВЬЮ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Наши бани</span>
            <h2>Три бани под разный формат отдыха</h2>
            <p>
              От уединённого вечера вдвоём до большой компании с камином.
              Выбирайте по размеру и настроению — программа и атмосфера у каждой своя.
            </p>
          </div>
          <div className="baths">
            {baths.map((b) => <BathCard key={b.id} bath={b} />)}
          </div>
          <div className="mt-2 reveal">
            <Link className="link-arrow" to="/bani">Все бани и цены <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* ЕНОТ */}
      <Raccoon
        eyebrow="Резидент хутора"
        title="Знакомьтесь — наш енот"
        paragraphs={[
          "Дружелюбный, любопытный и очень обаятельный. Его можно покормить вкусняшками, погладить и сделать пару кадров. Море позитива и детям, и взрослым.",
        ]}
        buttonLabel="Записаться на встречу"
      />

      {/* ОСОБЕННОСТИ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Почему к нам</span>
            <h2>Всё для спокойного отдыха</h2>
          </div>
          <div className="features reveal">
            <div className="feature"><span className="num">01</span><p>Бани на дровах с живым камином</p></div>
            <div className="feature"><span className="num">02</span><p>Река и природа прямо за окном</p></div>
            <div className="feature"><span className="num">03</span><p>Баню занимаете целиком — никаких соседей</p></div>
            <div className="feature"><span className="num">04</span><p>Встреча с енотом для всей семьи</p></div>
          </div>
        </div>
      </section>

      {/* ЦИТАТА */}
      <section className="section">
        <div className="container quote reveal">
          <span className="eyebrow ember center">Прямая речь</span>
          <blockquote>
            Хорошая баня — это не про квадратные метры, а про{" "}
            <em>тепло, тишину и воду рядом</em>. Мы сделали место, куда хочется возвращаться.
          </blockquote>
          <cite>Хозяева хутора на Медвенке</cite>
        </div>
      </section>

      <RiverLine />

      <Contact
        eyebrow="Контакты"
        heading="Ждём к нам в гости"
        text="Оставьте заявку или позвоните — подскажем свободные даты и поможем выбрать баню."
      />
    </>
  );
}
