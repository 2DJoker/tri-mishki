import { useBooking } from "../booking";
import { RACCOON_PRICE } from "../data/baths";
import Ph from "./Ph";

export default function Raccoon({
  eyebrow,
  emberEyebrow = false,
  title,
  paragraphs,
  buttonLabel,
  solidButton = false,
}: {
  eyebrow: string;
  emberEyebrow?: boolean;
  title: string;
  paragraphs: string[];
  buttonLabel: string;
  solidButton?: boolean;
}) {
  const { open } = useBooking();
  return (
    <section className="section">
      <div className="container">
        <div className="raccoon reveal">
          <Ph variant="wood" label="фото: енот" />
          <div className="raccoon__body">
            <span className={`eyebrow ${emberEyebrow ? "ember" : ""}`.trim()}>{eyebrow}</span>
            <h2 className="raccoon__title">{title}</h2>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="raccoon__price">
              <div className="price">
                <b>{RACCOON_PRICE}</b> <span>/ за визит</span>
              </div>
              <button
                className={`btn ${solidButton ? "btn--solid" : ""}`.trim()}
                onClick={() => open("Встреча с енотом")}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
