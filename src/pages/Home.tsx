import { Link } from "react-router-dom";
import { useBooking } from "../booking";
import { useScrollReveal } from "../hooks";
import { baths } from "../data/baths";
import Ph from "../components/Ph";
import Arrow from "../components/Arrow";
import RiverLine from "../components/RiverLine";
import BathCard from "../components/BathCard";
import FeatureSlider from "../components/FeatureSlider";
import OfferSlider, { type Offer } from "../components/OfferSlider";
import FoodMenu from "../components/FoodMenu";
import Raccoon from "../components/Raccoon";
import Contact from "../components/Contact";

const rooms: Offer[] = [
  {
    img: "/photos/h-bedroom1.jpg",
    title: "Резиденция «Стандарт»",
    meta: "для двоих · санузел · завтрак по запросу",
    text: "Уютная резиденция в гостевом доме: тёплое дерево, мягкая кровать и тишина хутора за окном.",
    price: "5500 ₽",
    per: "ночь",
    book: "Резиденция «Стандарт»",
    link: "/nomera/standart",
  },
  {
    img: "/photos/h-bedroom2.jpg",
    title: "Резиденция «Большая» (семейная)",
    meta: "для семьи · до 4 гостей",
    text: "Просторная семейная резиденция — места хватит и взрослым, и детям. Утром — самовар и завтрак.",
    price: "7000 ₽",
    per: "ночь",
    book: "Резиденция «Большая» (семейная)",
    link: "/nomera/semeyny",
  },
];

const events: Offer[] = [
  {
    img: "/photos/h-veranda.jpg",
    title: "Беседка для шашлыка",
    meta: "до 10 человек · с 11:00 до 22:00",
    text: "Крытая беседка с мангальной зоной и большим столом. Жарьте шашлык, а мы подскажем с дровами и углём.",
    price: "9000 ₽",
    per: "день",
    book: "Беседка для шашлыка",
  },
  {
    img: "/photos/h-pech.jpg",
    title: "Веранда и горница с печкой",
    meta: "праздники · юбилеи · корпоративы",
    text: "Веранда с длинным столом и горница с настоящей русской печкой — для мероприятий на весь день. Кухня хутора накроет стол.",
    price: "от 15 000 ₽",
    per: "аренда",
    book: "Веранда и горница",
  },
];

export default function Home() {
  const { open } = useBooking();
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <Ph src="/photos/h-house.jpg" alt="Гостевой дом хутора в летних цветах" />
        </div>
        <div className="hero__inner">
          <span className="eyebrow ember">На реке Медвенка · Московская область</span>
          <h1>Хутор<br /><em>Русский лес</em></h1>
          <p className="hero__sub">
            Крестьянско-фермерское хозяйство здоровья, спокойствия и радости.
            Площадки для праздников, банный комплекс на дровах и гостевые
            резиденции — у воды, вдали от суеты.
          </p>
          <div className="hero__cta">
            <button className="btn btn--solid" onClick={() => open()}>Забронировать</button>
            <Link className="btn btn--ghost" to="/#events">Эвент-локации</Link>
            <Link className="btn btn--ghost" to="/#bani">Бани</Link>
            <Link className="btn btn--ghost" to="/#rooms">Резиденции</Link>
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
          <Ph src="/photos/hutor.jpg" alt="Дом хутора с подвесной кроватью" className="reveal" />
          <div className="split__body reveal">
            <span className="eyebrow">О месте</span>
            <h2>Свой хутор на берегу, а не банный конвейер</h2>
            <p>
              У нас отмечают праздники на веранде и в горнице с русской печкой,
              парятся в банях на дровах, жарят шашлык в беседках и остаются на
              ночь в гостевых резиденциях. Всё по-домашнему — без суеты и
              соседей за стенкой.
            </p>
            <p>
              Летом — река и природа за окном, зимой — снег и жар печи. А ещё на
              хуторе живёт енот, к которому многие приезжают отдельно.
            </p>
            <div className="split__stats">
              <div><b>3</b><span>бани на дровах</span></div>
              <div><b>2</b><span>гостевые резиденции</span></div>
              <div><b>1</b><span>дружелюбный енот</span></div>
            </div>
            <p className="mt-link">
              <Link className="link-arrow" to="/hutor">Подробнее о хуторе <Arrow /></Link>
            </p>
          </div>
        </div>
      </section>

      {/* ЭВЕНТ-ЛОКАЦИИ — главный продукт */}
      <OfferSlider
        id="events"
        alt
        eyebrow="Праздники и события"
        heading="Пространства для мероприятий"
        text="Юбилей, корпоратив, семейный сбор или шашлык с друзьями — на хуторе есть площадка под любой формат."
        caption="Эвент-локации хутора"
        offers={events}
      />

      {/* БАНИ ПРЕВЬЮ */}
      <section className="section" id="bani">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow ember">Банный комплекс</span>
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

      {/* ГОСТЕВЫЕ РЕЗИДЕНЦИИ */}
      <OfferSlider
        id="rooms"
        alt
        eyebrow="Остаться на ночь"
        heading="Гостевые резиденции"
        text="Попарились или отгуляли праздник — и никуда не едете: ночуете на хуторе, а утром вас ждёт самовар."
        caption="Резиденции хутора"
        offers={rooms}
      />

      {/* ПЛАШКИ-СЛАЙДЕР */}
      <FeatureSlider />

      {/* КУХНЯ — МЕНЮ */}
      <FoodMenu />

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

      {/* ГАЛЕРЕЯ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Атмосфера</span>
            <h2>Как это выглядит вживую</h2>
          </div>
          <div className="gallery reveal">
            <Ph src="/photos/b-tub-autumn.jpg" alt="Купель с апельсинами золотой осенью" className="g-wide" />
            <Ph src="/photos/veniki.jpg" alt="Банные веники и травы" />
            <Ph src="/photos/m-tub-flowers.jpg" alt="Купель с полевыми цветами" />
            <Ph src="/photos/b-fire-terrace.jpg" alt="Очаг на террасе над прудом" />
            <Ph src="/photos/h-samovar.jpg" alt="Самовар на дровах" />
            <Ph src="/photos/b-winter.jpg" alt="Баня зимним вечером с гирляндами" className="g-wide" />
          </div>
        </div>
      </section>

      {/* ЦИТАТА */}
      <section className="section section--alt">
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
