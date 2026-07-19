import { useState } from "react";

type Item = { name: string; note?: string };
type Group = { title: string; items: Item[] };

const breakfast: Group[] = [
  {
    title: "Хуторской завтрак",
    items: [
      {
        name: "Яишенка «всего по чуть-чуть»",
        note: "яйца, помидорки, ветчина, сыр, зелень — подаётся на сковородочке",
      },
      {
        name: "Яйцо пашот",
        note: "два яичка на белом хлебе с подушкой из шпината, соусом и икрой минтая или паштетом",
      },
      {
        name: "Кашка-овсяночка",
        note: "на молоке, со сливочным маслицем, корицей и вареньем",
      },
      { name: "Горячие бутерброды" },
      { name: "Заварной кофе / чёрный чай" },
    ],
  },
];

const lunch: Group[] = [
  {
    title: "Первые блюда",
    items: [
      { name: "Щи хуторские со сметаной", note: "на курином бульоне, с говядиной" },
      { name: "Уха русская", note: "из свежей речной и морской рыбы, на угле и водочке" },
      { name: "Супчик лёгкий", note: "с лапшой и яичками" },
    ],
  },
  {
    title: "Вторые блюда",
    items: [
      { name: "Рёбрышки свиные запечёные" },
      { name: "Мясо с овощами", note: "томлённое в горшочке" },
      { name: "Мясо на сковороде", note: "индейка, свинина, баранина или говядина с фасолью" },
      { name: "Буженина" },
      { name: "Мясо «по-французски»" },
      { name: "Говядина «по-бургундски»" },
      { name: "Форель", note: "стейки на апельсиновой подушке" },
      { name: "Шашлык" },
    ],
  },
  {
    title: "Гарниры",
    items: [
      { name: "Картошечка жареная с грибочками" },
      { name: "Картошечка отварная", note: "распаренная в сливочном масле с укропчиком" },
      { name: "Кашка гречневая", note: "с морковочкой и лучком" },
      { name: "Драники со сметанкой" },
      { name: "Овощи гриль" },
      { name: "Картофельное пюре" },
    ],
  },
  {
    title: "К столу",
    items: [
      { name: "Салат из свежих овощей", note: "сырные и колбасные нарезки" },
      { name: "Баранки, пряники, печеньки", note: "конфетки, варенье, мёд" },
      { name: "Чай из трав и фруктов", note: "по собственному секретному рецепту" },
    ],
  },
];

const tabs = [
  {
    id: "breakfast",
    label: "Завтрак",
    price: "от 350 ₽ / гость",
    icon: "/photos/n-table.jpg",
    groups: breakfast,
    // фото рыбы — kitchen-fish.jpg (стоит на «Обеде»)
  },
  {
    id: "lunch",
    label: "Обед",
    price: "от 2500 ₽ / гость",
    icon: "/photos/kitchen-fish.jpg",
    groups: lunch,
  },
] as const;

export default function FoodMenu() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("breakfast");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="section section--alt" id="kitchen">
      <div className="container">
        <div className="fmenu reveal">
          <div className="fmenu__intro">
            <span className="eyebrow ember">Кухня</span>
            <h2 className="fmenu__title">
              Традиционная<br /><em>хуторская кухня</em>
            </h2>
            <p className="fmenu__text">
              Готовим сами — в русской печи, на огне и на углях. Завтрак
              к утреннему пару и большой хуторской обед для всей компании.
            </p>
            <div className="fmenu__tabs">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`ftab ${active === t.id ? "ftab--on" : ""}`}
                  onClick={() => setActive(t.id)}
                  aria-pressed={active === t.id}
                >
                  <span className="ftab__circle" aria-hidden="true">
                    <img src={t.icon} alt="" loading="lazy" />
                  </span>
                  <span className="ftab__label">
                    {t.label}
                    <small>{t.price}</small>
                  </span>
                </button>
              ))}
            </div>
            <p className="fmenu__note">Предоплата 50% — не менее чем за сутки.</p>
          </div>

          <div className="fmenu__photo">
            <img src="/photos/kitchen-table.jpg" alt="Хуторской стол с закусками" loading="lazy" />
            <div className="fmenu__caption">
              Меню хуторской кухни<br /><span>заказ вместе с бронью бани</span>
            </div>
          </div>
        </div>

        <div className="fmenu__board" key={current.id}>
          {current.groups.map((g) => (
            <div className="fgroup" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <b>{it.name}</b>
                    {it.note && <span>{it.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
